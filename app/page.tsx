import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full bg-[#F5F1E8] py-space-xl px-gutter md:px-margin">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-space-xl">
          <section className="w-full bg-[#FFFFFF] border border-[#D8D2C3] p-space-lg md:p-space-xl relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#D8D2C3]"></div>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
              <div className="flex flex-col max-w-2xl">
                <div className="flex items-center gap-space-xs mb-space-sm">
                  <span className="w-2 h-2 rounded-full bg-[#B23A2E] inline-block"></span>
                  <span className="font-label-sm text-label-sm text-[#706C61] uppercase tracking-wider">HỌC TIẾNG NHẬT TƯƠNG TÁC • 日本語ノート</span>
                </div>
                <h1 className="font-headline-lg text-headline-lg text-[#1C1C1E] tracking-tight">
                  Khoatoba — Hôm nay bạn muốn luyện tập gì?
                </h1>
                <p className="font-body-md text-body-md text-[#706C61] mt-space-xs max-w-xl">
                  Thực hành phản xạ từ vựng, cấu trúc ngữ pháp và ghép câu tiếng Nhật trên nền giấy Washi mỗi ngày.
                </p>
              </div>
              <div className="flex flex-col w-full lg:w-80 bg-[#F5F1E8] border border-[#D8D2C3] p-space-md">
                <div className="flex items-center justify-between mb-space-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="font-furigana text-furigana text-[#706C61] uppercase tracking-widest">Mục tiêu ngày</span>
                    <span className="font-stamp text-stamp text-[#B23A2E] [transform:rotate(-2deg)]">済</span>
                  </div>
                  <span className="font-label-md text-label-md text-[#1C1C1E] font-medium">15 / 20 câu</span>
                </div>
                <div className="w-full h-2 bg-[#FFFFFF] border border-[#D8D2C3] relative">
                  <div className="h-full bg-[#B23A2E] w-[75%] transition-all duration-300"></div>
                  <span className="absolute top-0 bottom-0 left-1/4 w-[1px] bg-[#D8D2C3]"></span>
                  <span className="absolute top-0 bottom-0 left-2/4 w-[1px] bg-[#D8D2C3]"></span>
                  <span className="absolute top-0 bottom-0 left-3/4 w-[1px] bg-[#D8D2C3]"></span>
                </div>
                <div className="flex justify-between items-center mt-space-xs">
                  <span className="font-furigana text-furigana text-[#706C61]">75% hoàn thành</span>
                  <span className="font-furigana text-furigana text-[#706C61]">Còn 5 câu để đạt chuỗi 6 ngày</span>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full bg-[#B23A2E] text-[#FFFFFF] p-space-lg md:p-space-xl relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-32 h-32 border-b-2 border-l-2 border-[#FFFFFF]/20 [transform:rotate(45deg)] pointer-events-none"></div>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg relative z-10">
              <div className="flex flex-col max-w-2xl">
                <div className="flex items-center gap-space-xs mb-space-xs">
                  <span className="px-2 py-0.5 border border-[#FFFFFF]/60 text-white font-label-sm text-label-sm tracking-wider">
                    ĐỀ XUẤT HÔM NAY • 総合練習
                  </span>
                  <span className="font-stamp text-stamp text-white/90">【速習】</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-white tracking-tight">
                  Luyện tập tổng hợp (Mixed Practice)
                </h2>
                <p className="font-body-md text-body-md text-[#FFFFFF]/90 mt-space-xs">
                  Kết hợp ngẫu nhiên xếp câu, trắc nghiệm, dịch từ và phản xạ thẻ nhớ theo thuật toán ngắt quãng (Spaced Repetition) trên bản viết tay.
                </p>
                <div className="flex items-center gap-space-md mt-space-md text-[#FFFFFF]/80 font-label-sm text-label-sm">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">schedule</span> 10 phút
                  </span>
                  <span>・</span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">shuffle</span> 20 câu hỏi đa dạng
                  </span>
                  <span>・</span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span> Tự động chấm theo Akapen
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-space-md">
                <Link href="/practice?mode=mixed" className="px-space-lg py-space-sm bg-[#FFFFFF] text-[#B23A2E] font-label-md text-label-md font-medium tracking-wide flex items-center gap-space-xs border border-transparent hover:bg-[#F5F1E8] transition-colors">
                  <span>Bắt đầu ngay</span>
                  <span className="font-mono">→</span>
                </Link>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-space-md">
            <div className="flex items-center justify-between border-b border-[#D8D2C3] pb-space-xs">
              <div className="flex items-center gap-space-xs">
                <span className="w-1.5 h-1.5 bg-[#1C1C1E] inline-block"></span>
                <h3 className="font-headline-sm text-headline-sm text-[#1C1C1E]">Hạng mục luyện tập chuyên sâu</h3>
              </div>
              <span className="font-furigana text-furigana text-[#706C61]">Chọn nội dung bài học theo kỹ năng</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
              <Link href="/practice?mode=vocabulary" className="bg-[#FFFFFF] border border-[#D8D2C3] p-space-lg flex flex-col justify-between hover:border-[#1C1C1E] transition-colors group relative">
                <div>
                  <div className="flex items-start justify-between">
                    <span className="font-furigana text-furigana text-[#706C61] tracking-widest uppercase">Phần 01</span>
                    <div className="w-8 h-8 border border-[#D8D2C3] flex items-center justify-center font-kanji-display text-[18px] text-[#1C1C1E] relative">
                      語
                      <div className="absolute inset-0 border-t border-b border-dashed border-[#D8D2C3]/60 top-1/2 -translate-y-1/2 h-0"></div>
                      <div className="absolute inset-0 border-l border-r border-dashed border-[#D8D2C3]/60 left-1/2 -translate-x-1/2 w-0"></div>
                    </div>
                  </div>
                  <div className="mt-space-md">
                    <div className="flex items-baseline gap-space-xs">
                      <h4 className="font-headline-md text-headline-md text-[#1C1C1E]">Từ vựng & Kanji</h4>
                      <span className="font-furigana text-furigana text-[#706C61]">単語・漢字</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-[#706C61] mt-space-xs">
                      Nhớ mặt chữ Hán, âm On/Kun và ngữ nghĩa kết hợp ví dụ cụ thể.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm border-t border-[#D8D2C3] flex items-center gap-space-xs">
                    <span className="px-2 py-0.5 bg-[#F5F1E8] border border-[#D8D2C3] font-stamp text-stamp text-[#1C1C1E]">桜</span>
                    <span className="px-2 py-0.5 bg-[#F5F1E8] border border-[#D8D2C3] font-stamp text-stamp text-[#1C1C1E]">学</span>
                    <span className="px-2 py-0.5 bg-[#F5F1E8] border border-[#D8D2C3] font-stamp text-stamp text-[#1C1C1E]">道</span>
                  </div>
                </div>
                <div className="mt-space-lg flex items-center justify-between pt-space-xs">
                  <span className="font-label-sm text-label-sm text-[#706C61] group-hover:text-[#1C1C1E]">Luyện ngay</span>
                  <span className="text-[#1C1C1E] font-mono group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>

              <Link href="/practice?mode=sentence_ordering" className="bg-[#FFFFFF] border border-[#D8D2C3] p-space-lg flex flex-col justify-between hover:border-[#1C1C1E] transition-colors group relative">
                <div>
                  <div className="flex items-start justify-between">
                    <span className="font-furigana text-furigana text-[#706C61] tracking-widest uppercase">Phần 02</span>
                    <div className="flex items-center gap-1">
                      <span className="w-1 h-3 bg-[#D8D2C3]"></span>
                      <span className="w-1 h-3 bg-[#D8D2C3]"></span>
                      <span className="w-1 h-3 bg-[#B23A2E]"></span>
                    </div>
                  </div>
                  <div className="mt-space-md">
                    <div className="flex items-baseline gap-space-xs">
                      <h4 className="font-headline-md text-headline-md text-[#1C1C1E]">Xếp câu</h4>
                      <span className="font-furigana text-furigana text-[#706C61]">文の並べ替え</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-[#706C61] mt-space-xs">
                      Kéo thả cụm từ để xây dựng cú pháp chuẩn xác. Rèn luyện vị trí trợ từ.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm border-t border-[#D8D2C3] flex flex-wrap gap-1">
                    <span className="px-1.5 py-0.5 border border-[#D8D2C3] text-[11px] font-furigana text-[#706C61]">私は</span>
                    <span className="px-1.5 py-0.5 border border-[#D8D2C3] text-[11px] font-furigana text-[#706C61]">日本語を</span>
                    <span className="px-1.5 py-0.5 border border-[#B23A2E] text-[11px] font-furigana text-[#B23A2E]">勉強する</span>
                  </div>
                </div>
                <div className="mt-space-lg flex items-center justify-between pt-space-xs">
                  <span className="font-label-sm text-label-sm text-[#706C61] group-hover:text-[#1C1C1E]">Luyện ngay</span>
                  <span className="text-[#1C1C1E] font-mono group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>

              <Link href="/practice?mode=translation" className="bg-[#FFFFFF] border border-[#D8D2C3] p-space-lg flex flex-col justify-between hover:border-[#1C1C1E] transition-colors group relative">
                <div>
                  <div className="flex items-start justify-between">
                    <span className="font-furigana text-furigana text-[#706C61] tracking-widest uppercase">Phần 03</span>
                    <span className="font-stamp text-stamp text-[#B23A2E] border border-[#B23A2E] px-1 [transform:rotate(1deg)]">正解</span>
                  </div>
                  <div className="mt-space-md">
                    <div className="flex items-baseline gap-space-xs">
                      <h4 className="font-headline-md text-headline-md text-[#1C1C1E]">Dịch câu</h4>
                      <span className="font-furigana text-furigana text-[#706C61]">翻訳演習</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-[#706C61] mt-space-xs">
                      Chuyển ngữ tương hỗ Nhật - Việt với gợi ý cấu trúc ngữ cảnh văn hóa.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm border-t border-[#D8D2C3]">
                    <p className="font-furigana text-furigana text-[#706C61] italic line-clamp-1">「雨が降っても出かけます。」</p>
                  </div>
                </div>
                <div className="mt-space-lg flex items-center justify-between pt-space-xs">
                  <span className="font-label-sm text-label-sm text-[#706C61] group-hover:text-[#1C1C1E]">Luyện ngay</span>
                  <span className="text-[#1C1C1E] font-mono group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>

              <Link href="/practice?mode=grammar" className="bg-[#FFFFFF] border border-[#D8D2C3] p-space-lg flex flex-col justify-between hover:border-[#1C1C1E] transition-colors group relative">
                <div>
                  <div className="flex items-start justify-between">
                    <span className="font-furigana text-furigana text-[#706C61] tracking-widest uppercase">Phần 04</span>
                    <span className="font-furigana text-furigana text-[#706C61]">JLPT N5 - N2</span>
                  </div>
                  <div className="mt-space-md">
                    <div className="flex items-baseline gap-space-xs">
                      <h4 className="font-headline-md text-headline-md text-[#1C1C1E]">Ngữ pháp</h4>
                      <span className="font-furigana text-furigana text-[#706C61]">文法ノート</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-[#706C61] mt-space-xs">
                      Luyện mẫu câu theo từng cấp độ kèm bảng so sánh cấu trúc.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm border-t border-[#D8D2C3] flex items-center gap-space-xs">
                    <span className="font-label-sm text-label-sm text-[#1C1C1E] font-medium">〜わけではない</span>
                    <span className="text-[#706C61] text-xs">/</span>
                    <span className="font-label-sm text-label-sm text-[#706C61]">〜とは限らない</span>
                  </div>
                </div>
                <div className="mt-space-lg flex items-center justify-between pt-space-xs">
                  <span className="font-label-sm text-label-sm text-[#706C61] group-hover:text-[#1C1C1E]">Luyện ngay</span>
                  <span className="text-[#1C1C1E] font-mono group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>

              <Link href="/practice?mode=matching" className="bg-[#FFFFFF] border border-[#D8D2C3] p-space-lg flex flex-col justify-between hover:border-[#1C1C1E] transition-colors group relative">
                <div>
                  <div className="flex items-start justify-between">
                    <span className="font-furigana text-furigana text-[#706C61] tracking-widest uppercase">Phần 05</span>
                    <span className="w-2 h-2 rounded-full border border-[#1C1C1E] inline-block"></span>
                  </div>
                  <div className="mt-space-md">
                    <div className="flex items-baseline gap-space-xs">
                      <h4 className="font-headline-md text-headline-md text-[#1C1C1E]">Nối từ</h4>
                      <span className="font-furigana text-furigana text-[#706C61]">単語マッチ</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-[#706C61] mt-space-xs">
                      Trò chơi ghép cặp từ vựng - ý nghĩa theo thời gian thực.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm border-t border-[#D8D2C3] flex justify-between items-center text-xs text-[#706C61]">
                    <span>Phản xạ cực nhanh</span>
                  </div>
                </div>
                <div className="mt-space-lg flex items-center justify-between pt-space-xs">
                  <span className="font-label-sm text-label-sm text-[#706C61] group-hover:text-[#1C1C1E]">Luyện ngay</span>
                  <span className="text-[#1C1C1E] font-mono group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
              
              <Link href="/practice?mode=fill_blank" className="bg-[#FFFFFF] border border-[#D8D2C3] p-space-lg flex flex-col justify-between hover:border-[#1C1C1E] transition-colors group relative">
                <div>
                  <div className="flex items-start justify-between">
                    <span className="font-furigana text-furigana text-[#706C61] tracking-widest uppercase">Phần 06</span>
                    <span className="w-2 h-2 rounded-full bg-[#1C1C1E] inline-block"></span>
                  </div>
                  <div className="mt-space-md">
                    <div className="flex items-baseline gap-space-xs">
                      <h4 className="font-headline-md text-headline-md text-[#1C1C1E]">Điền vào chỗ trống</h4>
                      <span className="font-furigana text-furigana text-[#706C61]">穴埋め</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-[#706C61] mt-space-xs">
                      Chọn từ thích hợp điền vào câu để hoàn chỉnh ý nghĩa.
                    </p>
                  </div>
                </div>
                <div className="mt-space-lg flex items-center justify-between pt-space-xs">
                  <span className="font-label-sm text-label-sm text-[#706C61] group-hover:text-[#1C1C1E]">Luyện ngay</span>
                  <span className="text-[#1C1C1E] font-mono group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
