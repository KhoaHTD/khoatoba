import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khoatoba",
  description: "Japanese Practice Web App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100..900&family=Noto+Serif:wght@100..900&display=swap" rel="stylesheet"/>
      </head>
      <body className="bg-surface font-body-md text-on-surface antialiased">
        <header className="fixed top-0 left-0 w-full z-50 bg-surface border-b border-outline-variant">
          <div className="h-16 max-w-[1280px] mx-auto px-gutter flex items-center justify-between">
            <div className="flex items-center gap-space-sm">
              <img alt="Khoatoba Akapen Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1Vc10MEYxE3rDn47KvOqPkyKmeaO4Cy12dA0XsLuQd24SPlMAhFu7OIvYhQR49Mx5gAE7X37mkLHT6J0fFcxc9v22LMRpM6SXjMj0VvPX5-bTOj8RmcVbs3VmrqzV3Sc9_DS2R_7zLYgCcEI_IU6fS5iunzCztMPbnMi9NrNNyKgEGEs_wGxaZVaKnRG8AYDOLZmob7OSA5I3cQWjlgnAhC01ODp81mC7BAF1m35L_005poEMWrud5Xw6SY"/>
              <div className="flex flex-col justify-center">
                <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface leading-none">Khoatoba</span>
                <span className="font-furigana text-furigana text-on-surface-variant tracking-wider leading-none mt-0.5">日本語ノート・原稿用紙</span>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-space-lg h-full">
              <a className="text-on-surface-variant hover:text-on-surface h-full flex items-center px-space-xs transition-colors border-b-2 border-transparent font-label-md text-label-md" href="#">Luyện tập</a>
              <a className="text-on-surface-variant hover:text-on-surface h-full flex items-center px-space-xs transition-colors border-b-2 border-transparent font-label-md text-label-md" href="#">Từ vựng</a>
              <a className="text-on-surface-variant hover:text-on-surface h-full flex items-center px-space-xs transition-colors border-b-2 border-transparent font-label-md text-label-md" href="#">Ngữ pháp</a>
              <a className="text-on-surface-variant hover:text-on-surface h-full flex items-center px-space-xs transition-colors border-b-2 border-transparent font-label-md text-label-md" href="#">Sổ tay</a>
            </nav>
            <div className="flex items-center gap-space-md">
              <div className="flex items-center gap-1.5 px-space-sm py-1 bg-surface-container-lowest border border-outline-variant rounded">
                <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                <span className="font-label-sm text-label-sm text-on-surface">5 ngày</span>
              </div>
              <div className="px-space-sm py-1 bg-surface-container-lowest border border-outline-variant rounded">
                <span className="font-stamp text-stamp text-on-surface-variant">420 XP</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
              </div>
            </div>
          </div>
        </header>
        <main className="w-full pt-16 bg-surface min-h-[calc(100vh-80px)]">
          {children}
        </main>
        <footer className="w-full bg-surface border-t border-outline-variant py-space-lg">
          <div className="max-w-[1280px] mx-auto px-gutter flex flex-col md:flex-row items-center justify-between gap-space-sm">
            <div className="text-center md:text-left">
              <p className="font-body-sm text-body-sm text-on-surface-variant">© 2024 Khoatoba. Sổ tay luyện tập tiếng Nhật tương tác (原稿用紙ノート)</p>
            </div>
            <div className="flex items-center gap-space-md">
              <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary-container transition-colors" href="#">Hướng dẫn viết</a>
              <span className="text-outline-variant">・</span>
              <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary-container transition-colors" href="#">Bảng chữ cái</a>
              <span className="text-outline-variant">・</span>
              <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary-container transition-colors" href="#">Trợ giúp</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
