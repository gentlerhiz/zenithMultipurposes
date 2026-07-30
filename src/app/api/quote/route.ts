import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// ── Startup environment check ────────────────────────────────────────────────
const apiKey = process.env.RESEND_API_KEY;
const caCerts = process.env.NODE_EXTRA_CA_CERTS;

console.log("[quote/route] ENV CHECK ────────────────────────────────");
console.log(
  "[quote/route] RESEND_API_KEY:",
  apiKey ? `loaded (re_...${apiKey.slice(-4)})` : "MISSING ⚠️"
);
console.log(
  "[quote/route] NODE_EXTRA_CA_CERTS:",
  caCerts ? `set → ${caCerts}` : "not set (may cause TLS errors on some machines)"
);
console.log("[quote/route] Node version:", process.version);
console.log("[quote/route] ───────────────────────────────────────────");

const resend = new Resend(apiKey);

export async function POST(request: NextRequest) {
  console.log("[quote/route] POST received");

  try {
    const formData = await request.formData();

    const full_name      = formData.get("full_name")      as string | null;
    const business_name  = formData.get("business_name")  as string | null;
    const email          = formData.get("email")          as string | null;
    const phone          = formData.get("phone")          as string | null;
    const service_needed = formData.get("service_needed") as string | null;
    const project_details= formData.get("project_details")as string | null;
    const timeline       = formData.get("timeline")       as string | null;
    const budget_range   = formData.get("budget_range")   as string | null;

    console.log(
      "[quote/route] Fields → name:", full_name,
      "| email:", email,
      "| service:", service_needed || "(none)"
    );

    if (!full_name || !email || !project_details) {
      console.warn("[quote/route] Validation failed — missing required fields");
      return NextResponse.json(
        { error: "Please fill in your name, email, and project details." },
        { status: 400 }
      );
    }

    console.log("[quote/route] Sending via Resend to Dzmultipurposes@gmail.com …");

    const { data, error: resendError } = await resend.emails.send({
      from: "Zenith Multipurposes <onboarding@resend.dev>",
      to: ["dzmultipurposes@gmail.com"],
      replyTo: email,
      subject: `Quote request from ${full_name}${service_needed ? ` — ${service_needed}` : ""}`,
      html: buildEmailHtml({
        full_name,
        business_name,
        email,
        phone,
        service_needed,
        project_details,
        timeline,
        budget_range,
      }),
    });

    if (resendError) {
      console.error("[quote/route] Resend error →", JSON.stringify(resendError, null, 2));
      return NextResponse.json(
        { error: "Failed to send your quote request. Please try again." },
        { status: 500 }
      );
    }

    console.log("[quote/route] ✅ Email sent successfully — ID:", data?.id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[quote/route] Unexpected error →", err);
    return NextResponse.json(
      { error: "Unable to send your request right now. Please try again later." },
      { status: 500 }
    );
  }
}

// ── Email template ────────────────────────────────────────────────────────────
function buildEmailHtml(fields: {
  full_name: string;
  business_name: string | null;
  email: string;
  phone: string | null;
  service_needed: string | null;
  project_details: string;
  timeline: string | null;
  budget_range: string | null;
}): string {
  const {
    full_name, business_name, email, phone,
    service_needed, project_details, timeline, budget_range,
  } = fields;

  const neonGreen   = "#CDFF00";
  const darkGreen   = "#0F2419";
  const forestGreen = "#1A3A2E";
  const offWhite    = "#FAFAFA";
  const lightGray   = "#F5F5F5";
  const textMuted   = "#6B7280";
  const none        = `<span style="color:#9CA3AF;font-style:italic;">Not provided</span>`;

  const field = (label: string, value: string, accent = false) => `
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:14px;">
  <tr>
    <td style="padding:14px 16px;background-color:${lightGray};border-left:3px solid ${accent ? neonGreen : "#D1D5DB"};">
      <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:${textMuted};font-family:Arial,sans-serif;">${label}</p>
      <p style="margin:0;font-size:14px;font-weight:${accent ? "600" : "400"};color:${darkGreen};font-family:Arial,sans-serif;">${value}</p>
    </td>
  </tr>
</table>`;

  const halfField = (label: string, value: string) => `
<td width="48%" style="padding:14px 16px;background-color:${lightGray};border-left:3px solid #D1D5DB;vertical-align:top;">
  <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:${textMuted};font-family:Arial,sans-serif;">${label}</p>
  <p style="margin:0;font-size:14px;color:${darkGreen};font-family:Arial,sans-serif;">${value}</p>
</td>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Quote Request — Zenith Multipurposes</title>
</head>
<body style="margin:0;padding:0;background-color:#EFEFEF;font-family:Arial,Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#EFEFEF;padding:40px 16px;">
  <tr><td align="center">
  <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

    <!-- HEADER -->
    <tr><td style="background-color:${darkGreen};padding:36px 40px 28px;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td>
            <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:${neonGreen};font-family:Arial,sans-serif;">Zenith Multipurposes</p>
            <h1 style="margin:0;font-size:22px;font-weight:700;color:#FFFFFF;line-height:1.35;font-family:Arial,sans-serif;">New Quote Request</h1>
          </td>
          <td align="right" valign="middle">
            <div style="width:42px;height:42px;background-color:${neonGreen};"></div>
          </td>
        </tr>
        <tr><td colspan="2" style="padding-top:20px;">
          <div style="width:40px;height:3px;background-color:${neonGreen};"></div>
        </td></tr>
      </table>
    </td></tr>

    <!-- SUB-HEADER -->
    <tr><td style="background-color:${forestGreen};padding:16px 40px;">
      <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.65);font-family:Arial,sans-serif;line-height:1.6;">
        A quote request has been submitted through the Zenith Multipurposes website.
      </p>
    </td></tr>

    <!-- BODY -->
    <tr><td style="background-color:${offWhite};padding:36px 40px;">

      ${field("Full Name", full_name, true)}
      ${field("Email Address", `<a href="mailto:${email}" style="color:${darkGreen};text-decoration:none;">${email}</a>`, true)}

      <!-- Business + Phone row -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:14px;">
        <tr>
          ${halfField("Company / Business", business_name || none)}
          <td width="4%"></td>
          ${halfField("Phone Number", phone || none)}
        </tr>
      </table>

      ${field("Service Needed", service_needed || none, true)}

      <!-- Project Details -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:14px;">
        <tr>
          <td style="padding:18px 16px;background-color:${lightGray};border-left:3px solid ${neonGreen};">
            <p style="margin:0 0 8px;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:${textMuted};font-family:Arial,sans-serif;">Project Details</p>
            <p style="margin:0;font-size:14px;color:${darkGreen};line-height:1.75;white-space:pre-wrap;font-family:Arial,sans-serif;">${project_details.replace(/\n/g, "<br />")}</p>
          </td>
        </tr>
      </table>

      <!-- Timeline + Budget row -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;">
        <tr>
          ${halfField("Preferred Timeline", timeline || none)}
          <td width="4%"></td>
          ${halfField("Budget Range", budget_range || none)}
        </tr>
      </table>

      <!-- CTA -->
      <table cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="background-color:${darkGreen};">
            <a href="mailto:${email}" style="display:inline-block;padding:13px 30px;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:${neonGreen};text-decoration:none;font-family:Arial,sans-serif;">
              Reply to ${full_name} →
            </a>
          </td>
        </tr>
      </table>

    </td></tr>

    <!-- GRADIENT DIVIDER -->
    <tr><td style="height:4px;background-image:linear-gradient(to right,${neonGreen},${forestGreen});"></td></tr>

    <!-- FOOTER -->
    <tr><td style="background-color:${darkGreen};padding:24px 40px;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td>
            <p style="margin:0 0 3px;font-size:12px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#FFFFFF;font-family:Arial,sans-serif;">Zenith Multipurposes</p>
            <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.45);font-family:Arial,sans-serif;">Your Brand + Our Creativity = Success</p>
          </td>
          <td align="right" valign="middle">
            <p style="margin:0;font-size:10px;color:rgba(255,255,255,0.35);font-family:Arial,sans-serif;">Dzmultipurposes@gmail.com</p>
          </td>
        </tr>
        <tr><td colspan="2" style="padding-top:16px;">
          <div style="height:1px;background-color:rgba(255,255,255,0.08);"></div>
        </td></tr>
        <tr><td colspan="2" style="padding-top:12px;">
          <p style="margin:0;font-size:10px;color:rgba(255,255,255,0.3);font-family:Arial,sans-serif;">
            Submitted via the Zenith Multipurposes website quote form. Reply to this email to respond to the sender.
          </p>
        </td></tr>
      </table>
    </td></tr>

  </table>
  </td></tr>
</table>
</body>
</html>`;
}
