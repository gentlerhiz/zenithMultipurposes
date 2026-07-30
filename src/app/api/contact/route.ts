import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// ── Startup environment check ────────────────────────────────────────────────
const apiKey = process.env.RESEND_API_KEY;
const caCerts = process.env.NODE_EXTRA_CA_CERTS;

console.log("[contact/route] ENV CHECK ─────────────────────────────");
console.log(
  "[contact/route] RESEND_API_KEY:",
  apiKey ? `loaded (re_...${apiKey.slice(-4)})` : "MISSING ⚠️"
);
console.log(
  "[contact/route] NODE_EXTRA_CA_CERTS:",
  caCerts ? `set → ${caCerts}` : "not set (may cause TLS errors on some machines)"
);
console.log("[contact/route] Node version:", process.version);
console.log("[contact/route] ────────────────────────────────────────");

const resend = new Resend(apiKey);

export async function POST(request: NextRequest) {
  console.log("[contact/route] POST received");
  try {
    const body = await request.json();
    const { name, email, service, summary } = body as {
      name?: string;
      email?: string;
      service?: string;
      summary?: string;
    };

    console.log("[contact/route] Fields → name:", name, "| email:", email, "| service:", service || "(none)");

    if (!name || !email || !summary) {
      console.warn("[contact/route] Validation failed — missing required fields");
      return NextResponse.json(
        { error: "Please fill in your name, email, and project summary." },
        { status: 400 }
      );
    }

    console.log("[contact/route] Sending via Resend to Dzmultipurposes@gmail.com …");
    const { data, error: resendError } = await resend.emails.send({
      from: "Zenith Multipurposes <onboarding@resend.dev>",
      to: ["dzmultipurposes@gmail.com"],
      replyTo: email,
      subject: `New project brief from ${name}`,
      html: buildEmailHtml({ name, email, service, summary }),
    });

    if (resendError) {
      console.error("[contact/route] Resend error →", JSON.stringify(resendError, null, 2));
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    console.log("[contact/route] ✅ Email sent successfully — ID:", data?.id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact/route] Unexpected error →", err);
    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again later." },
      { status: 500 }
    );
  }
}

function buildEmailHtml(fields: {
  name: string;
  email: string;
  service?: string;
  summary: string;
}): string {
  const { name, email, service, summary } = fields;

  const neonGreen = "#CDFF00";
  const darkGreen = "#0F2419";
  const forestGreen = "#1A3A2E";
  const offWhite = "#FAFAFA";
  const lightGray = "#F5F5F5";
  const textMuted = "#6B7280";

  const field = (label: string, value: string, accent = false) => `
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:14px;">
      <tr>
        <td style="
          padding: 14px 16px;
          background-color: ${lightGray};
          border-left: 3px solid ${accent ? neonGreen : "#D1D5DB"};
        ">
          <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:${textMuted};font-family:Arial,sans-serif;">${label}</p>
          <p style="margin:0;font-size:14px;font-weight:${accent ? "600" : "400"};color:${darkGreen};font-family:Arial,sans-serif;">${value}</p>
        </td>
      </tr>
    </table>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Project Brief — Zenith Multipurposes</title>
</head>
<body style="margin:0;padding:0;background-color:#EFEFEF;font-family:Arial,Helvetica,sans-serif;-webkit-font-smoothing:antialiased;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#EFEFEF;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

          <!-- HEADER -->
          <tr>
            <td style="background-color:${darkGreen};padding:36px 40px 28px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:${neonGreen};font-family:Arial,sans-serif;">Zenith Multipurposes</p>
                    <h1 style="margin:0;font-size:22px;font-weight:700;color:#FFFFFF;letter-spacing:0.01em;line-height:1.35;font-family:Arial,sans-serif;">New Project Brief</h1>
                  </td>
                  <td align="right" valign="middle">
                    <!-- Neon green accent square -->
                    <div style="width:42px;height:42px;background-color:${neonGreen};"></div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-top:20px;">
                    <div style="width:40px;height:3px;background-color:${neonGreen};"></div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- SUB-HEADER -->
          <tr>
            <td style="background-color:${forestGreen};padding:16px 40px;">
              <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.65);font-family:Arial,sans-serif;line-height:1.6;">
                A new project brief has been submitted through the Zenith Multipurposes website contact form.
              </p>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="background-color:${offWhite};padding:36px 40px;">

              ${field("Full Name", name, true)}
              ${field("Email Address", `<a href="mailto:${email}" style="color:${darkGreen};text-decoration:none;">${email}</a>`, true)}
              ${field("Service Interest", service || '<span style="color:#9CA3AF;font-style:italic;">Not specified</span>')}

              <!-- Message / Summary -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;">
                <tr>
                  <td style="
                    padding: 18px 16px;
                    background-color: ${lightGray};
                    border-left: 3px solid ${neonGreen};
                  ">
                    <p style="margin:0 0 8px;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:${textMuted};font-family:Arial,sans-serif;">Project Summary</p>
                    <p style="margin:0;font-size:14px;color:${darkGreen};line-height:1.75;white-space:pre-wrap;font-family:Arial,sans-serif;">${summary.replace(/\n/g, "<br />")}</p>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background-color:${darkGreen};">
                    <a href="mailto:${email}"
                       style="display:inline-block;padding:13px 30px;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:${neonGreen};text-decoration:none;font-family:Arial,sans-serif;">
                      Reply to ${name} →
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- DIVIDER -->
          <tr>
            <td style="background-color:${darkGreen};height:4px;background-image:linear-gradient(to right, ${neonGreen} 0%, ${forestGreen} 100%);"></td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background-color:${darkGreen};padding:24px 40px;">
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
                <tr>
                  <td colspan="2" style="padding-top:16px;">
                    <div style="height:1px;background-color:rgba(255,255,255,0.08);"></div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-top:12px;">
                    <p style="margin:0;font-size:10px;color:rgba(255,255,255,0.3);font-family:Arial,sans-serif;">
                      This message was submitted via the Zenith Multipurposes website contact form. Reply directly to this email to respond to the sender.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
