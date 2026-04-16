"use client";
import { useForm, ValidationError } from '@formspree/react';

export default function InitiatePage() {
  const PRI_EMAIL = process.env.NEXT_PUBLIC_PRI_EMAIL_ADDR;
  const SEC_EMAIL = process.env.NEXT_PUBLIC_SEC_EMAIL_ADDR;
  const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  if (!PRI_EMAIL || !SEC_EMAIL || !FORMSPREE_ENDPOINT) {
    return (
      <div className="max-w-2xl mx-auto py-40 px-4 text-center">
        <div className="border border-red-500 bg-gray-900 p-12 clip-file" style={{ clipPath: 'polygon(0 0, 90% 0, 100% 35%, 100% 100%, 0 100%)' }}>
          <h2 className="text-3xl font-black uppercase text-red-500 mb-4">Configuration_Error</h2>
          <p className="text-sm font-mono text-gray-400">
            Required environment variables are missing. Please check the server configuration.
          </p>
        </div>
      </div>
    );
  }

  const [state, handleSubmit] = useForm(FORMSPREE_ENDPOINT);

  if (state.succeeded) {
    return (
      <div className="max-w-2xl mx-auto py-40 px-4 text-center">
        <div className="border border-system-green bg-system-green-5 p-12 clip-file" style={{ clipPath: 'polygon(0 0, 90% 0, 100% 35%, 100% 100%, 0 100%)' }}>
          <h2 className="text-3xl font-black uppercase text-system-green mb-4">Transmission_Complete</h2>
          <p className="text-sm font-mono text-gray-400">
            Handshake protocol initiated. Data has been routed to Saint's secure endpoint.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-8 text-[10px] font-mono text-system-green hover:text-white uppercase"
          >
            [ REBOOT_TERMINAL ]
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <div className="mb-16 border-l-2 border-system-green pl-6">
        <h1 className="text-5xl font-black uppercase tracking-tighter">Initiate_Handshake</h1>
        <p className="text-xs font-mono text-gray-500 mt-2 uppercase tracking-widest">
          Direct Line: Saint // Secure Transmission Layer
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-12">
          <section>
            <h4 className="text-[10px] font-mono text-system-green uppercase mb-4">// System_Endpoints</h4>
            <div className="space-y-4 font-mono">
              <div className="group">
                <span className="text-[10px] text-gray-600 block uppercase">Primary</span>
                <a href={`mailto:${PRI_EMAIL}`} className="text-lg font-bold hover:text-system-green transition-colors">{PRI_EMAIL}</a>
              </div>
              <div className="group">
                <span className="text-[10px] text-gray-600 block uppercase">Secondary</span>
                <a href={`mailto:${SEC_EMAIL}`} className="text-lg font-bold hover:text-system-green transition-colors">{SEC_EMAIL}</a>
              </div>
            </div>
          </section>

          <section className="p-6 border border-system-border bg-system-gray-20">
            <h4 className="text-[10px] font-mono text-gray-500 uppercase mb-2 tracking-widest">Protocol_Log</h4>
            <p className="text-[11px] text-gray-500 leading-relaxed font-mono italic">
              - Validating input packets... <br/>
              - Establishing SSL bridge... <br/>
              - Awaiting payload transmission...
            </p>
          </section>
        </div>

        {/* The Formspree Terminal */}
        <form onSubmit={handleSubmit} className="border border-system-border p-8 bg-system-gray-10 relative">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-system-green/40 to-transparent" />
          
          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-[10px] font-mono text-gray-600 uppercase">Input_Identity</label>
              <input 
                id="name" name="name" type="text" required
                className="w-full bg-background border border-system-border p-3 text-sm focus:border-system-green focus:outline-none transition-all font-mono"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-[10px] font-mono text-gray-600 uppercase">Input_Return_Address</label>
              <input 
                id="email" name="email" type="email" required
                className="w-full bg-background border border-system-border p-3 text-sm focus:border-system-green focus:outline-none transition-all font-mono"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-[10px] text-red-500 mt-1" />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-[10px] font-mono text-gray-600 uppercase">Input_Message_Payload</label>
              <textarea 
                id="message" name="message" rows={4} required
                className="w-full bg-background border border-system-border p-3 text-sm focus:border-system-green focus:outline-none transition-all font-mono resize-none"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-[10px] text-red-500 mt-1" />
            </div>

            <button 
              type="submit" 
              disabled={state.submitting}
              className="terminal-button w-full tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="inner-content">
                {state.submitting ? "TRANSMITTING..." : "TRANSMIT_DATA"}
              </span>
            </button>
          </div>
        </form>
      </div>

      <div className="pt-6">
        <a 
          href="/saint-cv.pdf" 
          target="_blank"
          className="terminal-button"
        >
          <span className="inner-content">
            <span className="w-2 h-2 bg-system-green rounded-full animate-pulse" />
            Download_System_Manifest.pdf
          </span>
        </a>
      </div>
    </div>
  );
}