import { Exercise } from '../types/exercise';

export const mixedExercises: Exercise[] = [
  // 1. Multiple Choice
  {
    id: 'mc1',
    type: 'multiple_choice',
    question: '快適 có nghĩa là gì?',
    word: '快適',
    reading: 'かいてき',
    choices: ['Thoải mái, dễ chịu', 'Nhanh chóng', 'Khó khăn', 'Tiện lợi'],
    answer: 'Thoải mái, dễ chịu',
    explanation: '快適 (かいてき) mang nghĩa thoải mái, dễ chịu. Ví dụ: 快適な部屋 (căn phòng thoải mái).'
  },
  {
    id: 'mc2',
    type: 'multiple_choice',
    question: '梅雨 có nghĩa là gì?',
    word: '梅雨',
    reading: 'つゆ',
    choices: ['Mùa hè', 'Mùa mưa', 'Mùa đông', 'Trời nắng'],
    answer: 'Mùa mưa',
    explanation: '梅雨 (つゆ) là mùa mưa ở Nhật Bản, thường vào tháng 6.'
  },
  {
    id: 'mc3',
    type: 'multiple_choice',
    question: '太陽 có nghĩa là gì?',
    word: '太陽',
    reading: 'たいよう',
    choices: ['Mặt trăng', 'Ngôi sao', 'Mặt trời', 'Trái đất'],
    answer: 'Mặt trời',
    explanation: '太陽 (たいよう) là mặt trời. Ví dụ: 太陽が昇る (Mặt trời mọc).'
  },
  {
    id: 'mc4',
    type: 'multiple_choice',
    question: '普及 có nghĩa là gì?',
    word: '普及',
    reading: 'ふきゅう',
    choices: ['Sự cấp cứu', 'Sự phổ biến', 'Khó khăn', 'Giàu có'],
    answer: 'Sự phổ biến',
    explanation: '普及 (ふきゅう) là sự phổ biến, phổ cập. Ví dụ: スマートフォンが普及した。'
  },
  {
    id: 'mc5',
    type: 'multiple_choice',
    question: '光景 có nghĩa là gì?',
    word: '光景',
    reading: 'こうけい',
    choices: ['Phong cảnh', 'Quang cảnh', 'Bóng tối', 'Kỳ quan'],
    answer: 'Quang cảnh',
    explanation: '光景 (こうけい) là quang cảnh, cảnh tượng trước mắt.'
  },

  // 2. Sentence Ordering
  {
    id: 'so1',
    type: 'sentence_ordering',
    question: 'Sắp xếp thành câu đúng',
    prompt: 'Tôi tránh nóng dưới gốc cây.',
    words: [
      { id: 'w1', text: '木の下で', reading: 'きのしたで' },
      { id: 'w2', text: 'しのぎます', reading: 'しのぎます' },
      { id: 'w3', text: '暑さを', reading: 'あつさを' }
    ],
    answer: ['w1', 'w3', 'w2'],
    sentence: '木の下で暑さをしのぎます。',
    explanation: 'しのぐ mang nghĩa chịu đựng, vượt qua (nóng, lạnh, khó khăn).'
  },
  {
    id: 'so2',
    type: 'sentence_ordering',
    question: 'Sắp xếp thành câu đúng',
    prompt: 'Bây giờ thì tiện lợi, nhưng trước kia rất bất tiện.',
    words: [
      { id: 'w1', text: '今でこそ', reading: 'いまでこそ' },
      { id: 'w2', text: '不便でした', reading: 'ふべんでした' },
      { id: 'w3', text: '便利ですが、', reading: 'べんりですが、' },
      { id: 'w4', text: '昔は', reading: 'むかしは' }
    ],
    answer: ['w1', 'w3', 'w4', 'w2'],
    sentence: '今でこそ便利ですが、昔は不便でした。',
    explanation: '今でこそ (bây giờ thì mới/đúng là… nhưng trước đây…)'
  },
  {
    id: 'so3',
    type: 'sentence_ordering',
    question: 'Sắp xếp thành câu đúng',
    prompt: 'Tôi treo chuông gió ở cửa sổ.',
    words: [
      { id: 'w1', text: '窓に', reading: 'まどに' },
      { id: 'w2', text: 'つるします', reading: 'つるします' },
      { id: 'w3', text: '風鈴を', reading: 'ふうりんを' }
    ],
    answer: ['w1', 'w3', 'w2'],
    sentence: '窓に風鈴をつるします。',
    explanation: 'つるす (treo, mắc lên). 窓に風鈴をつるす。'
  },
  {
    id: 'so4',
    type: 'sentence_ordering',
    question: 'Sắp xếp thành câu đúng',
    prompt: 'Tên trộm cướp túi của anh ấy.',
    words: [
      { id: 'w1', text: '泥棒が', reading: 'どろぼうが' },
      { id: 'w2', text: '奪いました', reading: 'うばいました' },
      { id: 'w3', text: '彼から', reading: 'かれから' },
      { id: 'w4', text: 'かばんを', reading: 'かばんを' }
    ],
    answer: ['w1', 'w3', 'w4', 'w2'],
    sentence: '泥棒が彼からかばんを奪いました。',
    explanation: '奪う (うばう) là cướp, lấy mất.'
  },
  {
    id: 'so5',
    type: 'sentence_ordering',
    question: 'Sắp xếp thành câu đúng',
    prompt: 'Tháng sáu bắt đầu vào mùa mưa.',
    words: [
      { id: 'w1', text: '六月に', reading: 'ろくがつに' },
      { id: 'w2', text: '入ります', reading: 'はいります' },
      { id: 'w3', text: '梅雨に', reading: 'つゆに' }
    ],
    answer: ['w1', 'w3', 'w2'],
    sentence: '六月に梅雨に入ります。',
    explanation: '梅雨に入る: bước vào mùa mưa.'
  },

  // 3. Translation
  {
    id: 'tr1',
    type: 'translation',
    question: 'Dịch sang tiếng Nhật',
    prompt: 'Bánh mì đã nướng chín.',
    acceptedAnswers: ['パンが焼けました。', 'パンが焼けました', 'パンがやけました。'],
    explanation: '焼ける (やける): được nướng chín; bị cháy; bị rám nắng.'
  },
  {
    id: 'tr2',
    type: 'translation',
    question: 'Dịch sang tiếng Nhật',
    prompt: 'Mặt trời mọc từ phía đông.',
    acceptedAnswers: ['東から太陽が昇ります。', '東から太陽が昇ります'],
    explanation: '太陽が昇る: mặt trời mọc.'
  },
  {
    id: 'tr3',
    type: 'translation',
    question: 'Dịch sang tiếng Nhật',
    prompt: 'Xin đừng ngồi xuống đất.',
    acceptedAnswers: ['地面に座らないでください。', '地面に座らないでください', 'じめんにすわらないでください。'],
    explanation: '地面に座る: ngồi xuống mặt đất.'
  },
  {
    id: 'tr4',
    type: 'translation',
    question: 'Dịch sang tiếng Nhật',
    prompt: 'Tôi tưới nước ở sân.',
    acceptedAnswers: ['庭に水をまきます。', '庭に水をまきます'],
    explanation: '水をまく: rắc, tưới (nước).'
  },
  {
    id: 'tr5',
    type: 'translation',
    question: 'Dịch sang tiếng Nhật',
    prompt: 'Đây là bùa trừ tà.',
    acceptedAnswers: ['これは魔除けのお守りです。', 'これは魔除けのお守りです'],
    explanation: '魔除け (まよけ): vật/phép xua đuổi điều xấu, trừ tà.'
  },

  // 4. Fill Blank
  {
    id: 'fb1',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống',
    sentencePrefix: 'ここでは',
    sentenceSuffix: 'に暮らせます。',
    choices: ['快適', '梅雨', '太陽', '地面'],
    answer: '快適',
    fullSentence: 'ここでは快適に暮らせます。',
    explanation: '快適に暮らせます (có thể sống thoải mái).'
  },
  {
    id: 'fb2',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống',
    sentencePrefix: '海で日に',
    sentenceSuffix: '。',
    choices: ['焼けました', 'まきました', 'しのぎました', '奪いました'],
    answer: '焼けました',
    fullSentence: '海で日に焼けました。',
    explanation: '日に焼ける: bị rám nắng.'
  },
  {
    id: 'fb3',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống',
    sentencePrefix: 'スマートフォンが',
    sentenceSuffix: 'しました。',
    choices: ['普及', '蒸発', '光景', '魔除け'],
    answer: '普及',
    fullSentence: 'スマートフォンが普及しました。',
    explanation: '普及する: trở nên phổ biến, được phổ cập.'
  },
  {
    id: 'fb4',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống',
    sentencePrefix: '夕方、庭に',
    sentenceSuffix: 'をします。',
    choices: ['打ち水', '太陽', '梅雨', '地面'],
    answer: '打ち水',
    fullSentence: '夕方、庭に打ち水をします。',
    explanation: '打ち水をする: rảy nước xuống đất cho mát.'
  },
  {
    id: 'fb5',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống',
    sentencePrefix: '暑いので、水がすぐ',
    sentenceSuffix: 'します。',
    choices: ['蒸発', '普及', '快適', '光景'],
    answer: '蒸発',
    fullSentence: '暑いので、水がすぐ蒸発します。',
    explanation: '蒸発する (じょうはつする): bay hơi.'
  },

  // 5. Matching
  {
    id: 'ma1',
    type: 'matching',
    question: 'Ghép từ tiếng Nhật với nghĩa tiếng Việt',
    pairs: [
      { id: 'p1', left: '太陽', right: 'Mặt trời' },
      { id: 'p2', left: '梅雨', right: 'Mùa mưa' },
      { id: 'p3', left: '地面', right: 'Mặt đất' },
      { id: 'p4', left: '光景', right: 'Quang cảnh' }
    ],
    explanation: '太陽 (Mặt trời), 梅雨 (Mùa mưa), 地面 (Mặt đất), 光景 (Quang cảnh).'
  },
  {
    id: 'ma2',
    type: 'matching',
    question: 'Ghép động từ tiếng Nhật với nghĩa tiếng Việt',
    pairs: [
      { id: 'p1', left: '焼ける', right: 'Chín, rám nắng' },
      { id: 'p2', left: 'しのぐ', right: 'Vượt qua, chịu đựng' },
      { id: 'p3', left: 'つるす', right: 'Treo, mắc' },
      { id: 'p4', left: 'まく', right: 'Rắc, tưới' }
    ],
    explanation: '焼ける (Chín, cháy, rám nắng), しのぐ (Chịu đựng), つるす (Treo), まく (Rắc, tưới).'
  },
  {
    id: 'ma3',
    type: 'matching',
    question: 'Ghép từ tiếng Nhật với nghĩa tiếng Việt',
    pairs: [
      { id: 'p1', left: '快適', right: 'Thoải mái' },
      { id: 'p2', left: '普及', right: 'Phổ biến' },
      { id: 'p3', left: '蒸発', right: 'Bay hơi' },
      { id: 'p4', left: '奪う', right: 'Cướp, lấy mất' }
    ],
    explanation: '快適 (Thoải mái), 普及 (Phổ biến), 蒸発 (Bay hơi), 奪う (Cướp).'
  },
  {
    id: 'ma4',
    type: 'matching',
    question: 'Ghép từ tiếng Nhật với nghĩa tiếng Việt',
    pairs: [
      { id: 'p1', left: '打ち水', right: 'Rảy nước' },
      { id: 'p2', left: '魔除け', right: 'Trừ tà' },
      { id: 'p3', left: 'チリンチリン', right: 'Leng keng' },
      { id: 'p4', left: '今でこそ', right: 'Bây giờ thì mới' }
    ],
    explanation: 'Các từ vựng về văn hóa Nhật Bản và trạng từ thường dùng.'
  },
  {
    id: 'ma5',
    type: 'matching',
    question: 'Ghép các cụm từ đi cùng nhau',
    pairs: [
      { id: 'p1', left: '暑さを', right: 'しのぐ' },
      { id: 'p2', left: '風鈴を', right: 'つるす' },
      { id: 'p3', left: '水を', right: 'まく' },
      { id: 'p4', left: '熱を', right: '奪う' }
    ],
    explanation: '暑さをしのぐ (tránh nóng), 風鈴をつるす (treo chuông gió), 水をまく (tưới nước), 熱を奪う (lấy đi nhiệt lượng).'
  },

  // 6. Grammar Choice
  {
    id: 'gc1',
    type: 'grammar_choice',
    question: 'Chọn ngữ pháp đúng',
    sentencePrefix: '日本へ行く',
    sentenceSuffix: '、日本語を勉強しています。',
    choices: ['ために', 'ので', 'ながら', 'しか'],
    answer: 'ために',
    fullSentence: '日本へ行くために、日本語を勉強しています。',
    translation: 'Tôi học tiếng Nhật để đi Nhật Bản.',
    explanation: 'ために (tame ni) diễn tả mục đích chủ động ("để làm gì").'
  },
  {
    id: 'gc2',
    type: 'grammar_choice',
    question: 'Chọn ngữ pháp đúng',
    sentencePrefix: '今でこそ便利ですが、昔',
    sentenceSuffix: '不便でした。',
    choices: ['は', 'が', 'を', 'に'],
    answer: 'は',
    fullSentence: '今でこそ便利ですが、昔は不便でした。',
    translation: 'Bây giờ thì tiện lợi, nhưng trước kia rất bất tiện.',
    explanation: '昔は nhấn mạnh sự tương phản với hiện tại (今).'
  },
  {
    id: 'gc3',
    type: 'grammar_choice',
    question: 'Chọn ngữ pháp đúng',
    sentencePrefix: '風鈴がチリンチリン',
    sentenceSuffix: '鳴っています。',
    choices: ['と', 'に', 'を', 'で'],
    answer: 'と',
    fullSentence: '風鈴がチリンチリンと鳴っています。',
    translation: 'Chuông gió đang kêu leng keng.',
    explanation: 'Trạng từ tượng thanh/tượng hình thường đi kèm với trợ từ と.'
  },
  {
    id: 'gc4',
    type: 'grammar_choice',
    question: 'Chọn ngữ pháp đúng',
    sentencePrefix: '暑い',
    sentenceSuffix: '、水がすぐ蒸発します。',
    choices: ['ので', 'のに', 'でも', 'ながら'],
    answer: 'ので',
    fullSentence: '暑いので、水がすぐ蒸発します。',
    translation: 'Vì nóng nên nước bay hơi ngay.',
    explanation: 'ので chỉ nguyên nhân, lý do khách quan.'
  },
  {
    id: 'gc5',
    type: 'grammar_choice',
    question: 'Chọn ngữ pháp đúng',
    sentencePrefix: '六月に梅雨',
    sentenceSuffix: '入ります。',
    choices: ['に', 'を', 'で', 'から'],
    answer: 'に',
    fullSentence: '六月に梅雨に入ります。',
    translation: 'Tháng sáu bắt đầu vào mùa mưa.',
    explanation: '〜に入る (bước vào mùa/thời kỳ) dùng trợ từ に.'
  }
];
