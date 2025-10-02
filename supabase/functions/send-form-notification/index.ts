import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface FormNotificationRequest {
  type: "consultation" | "contact" | "newsletter";
  data: any;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, data }: FormNotificationRequest = await req.json();
    console.log(`Processing ${type} form submission:`, data);

    let emailHtml = "";
    let subject = "";

    switch (type) {
      case "consultation":
        subject = "New Consultation Request";
        emailHtml = `
          <h1>New Consultation Request</h1>
          <p><strong>Name:</strong> ${data.first_name} ${data.last_name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Company:</strong> ${data.company || "N/A"}</p>
          <p><strong>Service Interest:</strong> ${data.service}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
          <hr>
          <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
        `;
        break;

      case "contact":
        subject = "New Contact Form Submission";
        emailHtml = `
          <h1>New Contact Message</h1>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
          <hr>
          <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
        `;
        break;

      case "newsletter":
        subject = "New Newsletter Subscription";
        emailHtml = `
          <h1>New Newsletter Subscriber</h1>
          <p><strong>Email:</strong> ${data.email}</p>
          <hr>
          <p><small>Subscribed at: ${new Date().toLocaleString()}</small></p>
        `;
        break;

      default:
        throw new Error("Invalid form type");
    }

    const emailResponse = await resend.emails.send({
      from: "Radiance Sphere <onboarding@resend.dev>",
      to: ["radiancesphere3@gmail.com"],
      subject: subject,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending notification:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
