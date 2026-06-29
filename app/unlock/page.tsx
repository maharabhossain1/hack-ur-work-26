import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

async function unlock(formData: FormData) {
  'use server';
  const key = formData.get('key') as string;
  if (key === process.env.SITE_KEY) {
    const jar = await cookies();
    jar.set('site-access', key, {
      httpOnly: true,
      sameSite: 'strict',
      path: '/',
      // No maxAge = session cookie; add maxAge: 60 * 60 * 24 for 24h persistence
    });
    redirect('/');
  }
}

export default function UnlockPage() {
  return (
    <div className="min-h-screen bg-[#f5f0eb] flex items-center justify-center">
      <div className="bg-white rounded-2xl border border-[#e3ddd6] shadow-lg px-10 py-10 w-full max-w-sm flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-[#1e6b62]/10 flex items-center justify-center mb-1">
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="#1e6b62"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <h1 className="text-[1.1rem] font-black text-[#1a1a1a] tracking-tight">
            Access Required
          </h1>
          <p className="text-[12px] text-[#888] text-center">
            Enter your access key to view this presentation.
          </p>
        </div>

        <form action={unlock} className="w-full flex flex-col gap-3">
          <input
            type="password"
            name="key"
            placeholder="Enter access key"
            required
            autoFocus
            className="w-full rounded-xl border border-[#e3ddd6] bg-[#faf8f5] px-4 py-3 text-[14px] text-[#1a1a1a] placeholder:text-[#bbb] outline-none focus:border-[#1e6b62] focus:ring-2 focus:ring-[#1e6b62]/15 transition-all"
          />
          <button
            type="submit"
            className="w-full rounded-xl bg-[#1e6b62] text-white font-bold text-[14px] py-3 hover:bg-[#185c54] transition-colors"
          >
            Unlock
          </button>
        </form>
      </div>
    </div>
  );
}
