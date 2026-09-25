// @ts-nocheck
import { Exercise } from '../types/exercise';

export const mixedExercises = [
  {
    "id": "mc_1",
    "type": "multiple_choice",
    "question": "快適 có nghĩa là gì?",
    "word": "快適",
    "reading": "かいてき",
    "choices": [
      "một mạch, một hơi, trong một lần",
      "thoải mái, dễ chịu",
      "khu phố…",
      "giọng nói, âm thanh lời nói"
    ],
    "answer": "thoải mái, dễ chịu",
    "explanation": "快適 (かいてき): thoải mái, dễ chịu"
  },
  {
    "id": "fb_2",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "な部屋で休みます。",
    "choices": [
      "なお",
      "快適",
      "～金",
      "梅雨"
    ],
    "answer": "快適",
    "fullSentence": "快適な部屋で休みます。",
    "explanation": "快適な部屋で休みます。\nTôi nghỉ trong căn phòng thoải mái.\n快適: thoải mái, dễ chịu"
  },
  {
    "id": "tr_3",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi nghỉ trong căn phòng thoải mái.",
    "acceptedAnswers": [
      "快適な部屋で休みます。",
      "快適な部屋で休みます"
    ],
    "explanation": "快適な部屋で休みます。\n(かいてきなへやでやすみます。)\n快適: thoải mái, dễ chịu"
  },
  {
    "id": "fb_4",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "ここでは",
    "sentenceSuffix": "に暮らせます。",
    "choices": [
      "月日",
      "頂上",
      "渋滞",
      "快適"
    ],
    "answer": "快適",
    "fullSentence": "ここでは快適に暮らせます。",
    "explanation": "ここでは快適に暮らせます。\nỞ đây có thể sống thoải mái.\n快適: thoải mái, dễ chịu"
  },
  {
    "id": "tr_5",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Ở đây có thể sống thoải mái.",
    "acceptedAnswers": [
      "ここでは快適に暮らせます。",
      "ここでは快適に暮らせます"
    ],
    "explanation": "ここでは快適に暮らせます。\n(ここではかいてきにくらせます。)\n快適: thoải mái, dễ chịu"
  },
  {
    "id": "mc_6",
    "type": "multiple_choice",
    "question": "梅雨 có nghĩa là gì?",
    "word": "梅雨",
    "reading": "つゆ",
    "choices": [
      "hiểu, chấp thuận",
      "mùa mưa ở Nhật",
      "phát triển, tạo sản phẩm/công nghệ mới",
      "xúc động, cảm động"
    ],
    "answer": "mùa mưa ở Nhật",
    "explanation": "梅雨 (つゆ): mùa mưa ở Nhật"
  },
  {
    "id": "fb_7",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "六月に",
    "sentenceSuffix": "に入ります。",
    "choices": [
      "海岸",
      "梅雨",
      "音声",
      "顔から火が出る"
    ],
    "answer": "梅雨",
    "fullSentence": "六月に梅雨に入ります。",
    "explanation": "六月に梅雨に入ります。\nTháng sáu bắt đầu vào mùa mưa.\n梅雨: mùa mưa ở Nhật"
  },
  {
    "id": "tr_8",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tháng sáu bắt đầu vào mùa mưa.",
    "acceptedAnswers": [
      "六月に梅雨に入ります。",
      "六月に梅雨に入ります"
    ],
    "explanation": "六月に梅雨に入ります。\n(ろくがつにつゆにはいります。)\n梅雨: mùa mưa ở Nhật"
  },
  {
    "id": "mc_9",
    "type": "multiple_choice",
    "question": "焼ける có nghĩa là gì?",
    "word": "焼ける",
    "reading": "やける",
    "choices": [
      "đập tay chúc mừng",
      "được nướng chín; bị cháy; bị rám nắng",
      "quãng đường đi bộ",
      "lời thoại"
    ],
    "answer": "được nướng chín; bị cháy; bị rám nắng",
    "explanation": "焼ける (やける): được nướng chín; bị cháy; bị rám nắng"
  },
  {
    "id": "tr_10",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Bánh mì đã nướng chín.",
    "acceptedAnswers": [
      "パンが焼けました。",
      "パンが焼けました"
    ],
    "explanation": "パンが焼けました。\n(パンがやけました。)\n焼ける: được nướng chín; bị cháy; bị rám nắng"
  },
  {
    "id": "tr_11",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi bị rám nắng ở biển.",
    "acceptedAnswers": [
      "海で日に焼けました。",
      "海で日に焼けました"
    ],
    "explanation": "海で日に焼けました。\n(うみでひにやけました。)\n焼ける: được nướng chín; bị cháy; bị rám nắng"
  },
  {
    "id": "mc_12",
    "type": "multiple_choice",
    "question": "太陽 có nghĩa là gì?",
    "word": "太陽",
    "reading": "たいよう",
    "choices": [
      "nằm ở, tọa lạc",
      "mặt trời",
      "chịu đựng, vượt qua (nóng, lạnh, khó khăn)",
      "hiện tại, hiện nay"
    ],
    "answer": "mặt trời",
    "explanation": "太陽 (たいよう): mặt trời"
  },
  {
    "id": "fb_13",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "東から",
    "sentenceSuffix": "が昇ります。",
    "choices": [
      "手書き",
      "太陽",
      "笑い出す",
      "ペンション"
    ],
    "answer": "太陽",
    "fullSentence": "東から太陽が昇ります。",
    "explanation": "東から太陽が昇ります。\nMặt trời mọc từ phía đông.\n太陽: mặt trời"
  },
  {
    "id": "tr_14",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Mặt trời mọc từ phía đông.",
    "acceptedAnswers": [
      "東から太陽が昇ります。",
      "東から太陽が昇ります"
    ],
    "explanation": "東から太陽が昇ります。\n(ひがしからたいようがのぼります。)\n太陽: mặt trời"
  },
  {
    "id": "mc_15",
    "type": "multiple_choice",
    "question": "今でこそ có nghĩa là gì?",
    "word": "今でこそ",
    "reading": "いまでこそ",
    "choices": [
      "bây giờ thì mới/đúng là… nhưng trước đây…",
      "giao phó, để ai lo",
      "nước máy",
      "nhau, cả hai bên"
    ],
    "answer": "bây giờ thì mới/đúng là… nhưng trước đây…",
    "explanation": "今でこそ (いまでこそ): bây giờ thì mới/đúng là… nhưng trước đây…"
  },
  {
    "id": "fb_16",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "便利ですが、昔は不便でした。",
    "choices": [
      "すると",
      "わいわい",
      "和尚",
      "今でこそ"
    ],
    "answer": "今でこそ",
    "fullSentence": "今でこそ便利ですが、昔は不便でした。",
    "explanation": "今でこそ便利ですが、昔は不便でした。\nBây giờ thì tiện lợi, nhưng trước kia rất bất tiện.\n今でこそ: bây giờ thì mới/đúng là… nhưng trước đây…"
  },
  {
    "id": "tr_17",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Bây giờ thì tiện lợi, nhưng trước kia rất bất tiện.",
    "acceptedAnswers": [
      "今でこそ便利ですが、昔は不便でした。",
      "今でこそ便利ですが、昔は不便でした"
    ],
    "explanation": "今でこそ便利ですが、昔は不便でした。\n(いまでこそべんりですが、むかしはふべんでした。)\n今でこそ: bây giờ thì mới/đúng là… nhưng trước đây…"
  },
  {
    "id": "mc_18",
    "type": "multiple_choice",
    "question": "普及 có nghĩa là gì?",
    "word": "普及",
    "reading": "ふきゅう",
    "choices": [
      "chịu đựng, nhịn",
      "cả đời, suốt đời",
      "trở nên phổ biến, được phổ cập",
      "chọn dùng khác nhau tùy tình huống"
    ],
    "answer": "trở nên phổ biến, được phổ cập",
    "explanation": "普及 (ふきゅう): trở nên phổ biến, được phổ cập"
  },
  {
    "id": "fb_19",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "スマートフォンが",
    "sentenceSuffix": "しました。",
    "choices": [
      "顔が広い",
      "～代",
      "今では",
      "普及"
    ],
    "answer": "普及",
    "fullSentence": "スマートフォンが普及しました。",
    "explanation": "スマートフォンが普及しました。\nĐiện thoại thông minh đã trở nên phổ biến.\n普及: trở nên phổ biến, được phổ cập"
  },
  {
    "id": "tr_20",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Điện thoại thông minh đã trở nên phổ biến.",
    "acceptedAnswers": [
      "スマートフォンが普及しました。",
      "スマートフォンが普及しました"
    ],
    "explanation": "スマートフォンが普及しました。\n(スマートフォンがふきゅうしました。)\n普及: trở nên phổ biến, được phổ cập"
  },
  {
    "id": "fb_21",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この機械は農村にも",
    "sentenceSuffix": "しています。",
    "choices": [
      "気に入る",
      "滝",
      "着払い",
      "普及"
    ],
    "answer": "普及",
    "fullSentence": "この機械は農村にも普及しています。",
    "explanation": "この機械は農村にも普及しています。\nMáy này cũng đã phổ biến ở nông thôn.\n普及: trở nên phổ biến, được phổ cập"
  },
  {
    "id": "tr_22",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Máy này cũng đã phổ biến ở nông thôn.",
    "acceptedAnswers": [
      "この機械は農村にも普及しています。",
      "この機械は農村にも普及しています"
    ],
    "explanation": "この機械は農村にも普及しています。\n(このきかいはのうそんにもふきゅうしています。)\n普及: trở nên phổ biến, được phổ cập"
  },
  {
    "id": "mc_23",
    "type": "multiple_choice",
    "question": "しのぐ có nghĩa là gì?",
    "word": "しのぐ",
    "reading": "しのぐ",
    "choices": [
      "chịu đựng, vượt qua (nóng, lạnh, khó khăn)",
      "đi lại hai chiều",
      "sau…",
      "đường sắt"
    ],
    "answer": "chịu đựng, vượt qua (nóng, lạnh, khó khăn)",
    "explanation": "しのぐ (しのぐ): chịu đựng, vượt qua (nóng, lạnh, khó khăn)"
  },
  {
    "id": "tr_24",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi tránh nóng dưới gốc cây.",
    "acceptedAnswers": [
      "木の下で暑さをしのぎます。",
      "木の下で暑さをしのぎます"
    ],
    "explanation": "木の下で暑さをしのぎます。\n(きのしたであつさをしのぎます。)\nしのぐ: chịu đựng, vượt qua (nóng, lạnh, khó khăn)"
  },
  {
    "id": "mc_25",
    "type": "multiple_choice",
    "question": "つるす có nghĩa là gì?",
    "word": "つるす",
    "reading": "つるす",
    "choices": [
      "làm đổ, đánh ngã; đánh bại",
      "cứng, chắc; cứng nhắc, trang trọng quá",
      "biểu hiện, dấu hiệu thể hiện",
      "treo, mắc lên"
    ],
    "answer": "treo, mắc lên",
    "explanation": "つるす (つるす): treo, mắc lên"
  },
  {
    "id": "tr_26",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi treo chuông gió ở cửa sổ.",
    "acceptedAnswers": [
      "窓に風鈴をつるします。",
      "窓に風鈴をつるします"
    ],
    "explanation": "窓に風鈴をつるします。\n(まどにふうりんをつるします。)\nつるす: treo, mắc lên"
  },
  {
    "id": "mc_27",
    "type": "multiple_choice",
    "question": "チリンチリン có nghĩa là gì?",
    "word": "チリンチリン",
    "reading": "チリンチリン",
    "choices": [
      "leng keng, tiếng chuông nhỏ",
      "quạt điện",
      "sống, tồn tại",
      "câu/chuỗi đọc xuôi và ngược giống nhau"
    ],
    "answer": "leng keng, tiếng chuông nhỏ",
    "explanation": "チリンチリン (チリンチリン): leng keng, tiếng chuông nhỏ"
  },
  {
    "id": "fb_28",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "風鈴が",
    "sentenceSuffix": "と鳴っています。",
    "choices": [
      "チリンチリン",
      "生ビール",
      "～街",
      "名産品"
    ],
    "answer": "チリンチリン",
    "fullSentence": "風鈴がチリンチリンと鳴っています。",
    "explanation": "風鈴がチリンチリンと鳴っています。\nChuông gió đang kêu leng keng.\nチリンチリン: leng keng, tiếng chuông nhỏ"
  },
  {
    "id": "tr_29",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Chuông gió đang kêu leng keng.",
    "acceptedAnswers": [
      "風鈴がチリンチリンと鳴っています。",
      "風鈴がチリンチリンと鳴っています"
    ],
    "explanation": "風鈴がチリンチリンと鳴っています。\n(ふうりんがチリンチリンとなっています。)\nチリンチリン: leng keng, tiếng chuông nhỏ"
  },
  {
    "id": "mc_30",
    "type": "multiple_choice",
    "question": "魔除け có nghĩa là gì?",
    "word": "魔除け",
    "reading": "まよけ",
    "choices": [
      "nói chuyện điện thoại",
      "vật/phép xua đuổi điều xấu, trừ tà",
      "nếm, thưởng thức; trải nghiệm cảm giác",
      "đi bộ đường núi"
    ],
    "answer": "vật/phép xua đuổi điều xấu, trừ tà",
    "explanation": "魔除け (まよけ): vật/phép xua đuổi điều xấu, trừ tà"
  },
  {
    "id": "fb_31",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "これは",
    "sentenceSuffix": "のお守りです。",
    "choices": [
      "魔除け",
      "掛け声",
      "フローリング",
      "思い浮かべる"
    ],
    "answer": "魔除け",
    "fullSentence": "これは魔除けのお守りです。",
    "explanation": "これは魔除けのお守りです。\nĐây là bùa trừ tà.\n魔除け: vật/phép xua đuổi điều xấu, trừ tà"
  },
  {
    "id": "tr_32",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Đây là bùa trừ tà.",
    "acceptedAnswers": [
      "これは魔除けのお守りです。",
      "これは魔除けのお守りです"
    ],
    "explanation": "これは魔除けのお守りです。\n(これはまよけのおまもりです。)\n魔除け: vật/phép xua đuổi điều xấu, trừ tà"
  },
  {
    "id": "mc_33",
    "type": "multiple_choice",
    "question": "打ち水 có nghĩa là gì?",
    "word": "打ち水",
    "reading": "うちみず",
    "choices": [
      "không… chút nào (khẩu ngữ)",
      "tường rào",
      "rảy nước xuống đất cho mát",
      "sau…"
    ],
    "answer": "rảy nước xuống đất cho mát",
    "explanation": "打ち水 (うちみず): rảy nước xuống đất cho mát"
  },
  {
    "id": "fb_34",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "夕方、庭に",
    "sentenceSuffix": "をします。",
    "choices": [
      "遠足",
      "フットサル",
      "打ち水",
      "倒す"
    ],
    "answer": "打ち水",
    "fullSentence": "夕方、庭に打ち水をします。",
    "explanation": "夕方、庭に打ち水をします。\nBuổi chiều tôi rảy nước ở sân.\n打ち水: rảy nước xuống đất cho mát"
  },
  {
    "id": "tr_35",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Buổi chiều tôi rảy nước ở sân.",
    "acceptedAnswers": [
      "夕方、庭に打ち水をします。",
      "夕方、庭に打ち水をします"
    ],
    "explanation": "夕方、庭に打ち水をします。\n(ゆうがた、にわにうちみずをします。)\n打ち水: rảy nước xuống đất cho mát"
  },
  {
    "id": "mc_36",
    "type": "multiple_choice",
    "question": "地面 có nghĩa là gì?",
    "word": "地面",
    "reading": "じめん",
    "choices": [
      "bờ biển, bãi biển",
      "cốt thép",
      "mặt đất",
      "phán đoán, quyết định dựa trên thông tin"
    ],
    "answer": "mặt đất",
    "explanation": "地面 (じめん): mặt đất"
  },
  {
    "id": "fb_37",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "に座らないでください。",
    "choices": [
      "若々しい",
      "地面",
      "掛け声",
      "～末"
    ],
    "answer": "地面",
    "fullSentence": "地面に座らないでください。",
    "explanation": "地面に座らないでください。\nXin đừng ngồi xuống đất.\n地面: mặt đất"
  },
  {
    "id": "tr_38",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Xin đừng ngồi xuống đất.",
    "acceptedAnswers": [
      "地面に座らないでください。",
      "地面に座らないでください"
    ],
    "explanation": "地面に座らないでください。\n(じめんにすわらないでください。)\n地面: mặt đất"
  },
  {
    "id": "mc_39",
    "type": "multiple_choice",
    "question": "まく có nghĩa là gì?",
    "word": "まく",
    "reading": "まく",
    "choices": [
      "được làm bằng…; sản xuất tại…",
      "toa Green, hạng ghế cao cấp hơn toa thường ở Nhật",
      "sai, nhầm",
      "rải, rắc; tưới/rảy (nước)"
    ],
    "answer": "rải, rắc; tưới/rảy (nước)",
    "explanation": "まく (まく): rải, rắc; tưới/rảy (nước)"
  },
  {
    "id": "tr_40",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi tưới nước ở sân.",
    "acceptedAnswers": [
      "庭に水をまきます。",
      "庭に水をまきます"
    ],
    "explanation": "庭に水をまきます。\n(にわにみずをまきます。)\nまく: rải, rắc; tưới/rảy (nước)"
  },
  {
    "id": "tr_41",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi gieo hạt ngoài ruộng.",
    "acceptedAnswers": [
      "畑に種をまきます。",
      "畑に種をまきます"
    ],
    "explanation": "畑に種をまきます。\n(はたけにたねをまきます。)\nまく: rải, rắc; tưới/rảy (nước)"
  },
  {
    "id": "mc_42",
    "type": "multiple_choice",
    "question": "光景 có nghĩa là gì?",
    "word": "光景",
    "reading": "こうけい",
    "choices": [
      "cảnh tượng trước mắt",
      "thời đại, thời kỳ",
      "kỳ vọng, mong đợi",
      "họp"
    ],
    "answer": "cảnh tượng trước mắt",
    "explanation": "光景 (こうけい): cảnh tượng trước mắt"
  },
  {
    "id": "fb_43",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "美しい",
    "sentenceSuffix": "が目の前に広がっています。",
    "choices": [
      "光景",
      "フローリング",
      "対等",
      "魔除け"
    ],
    "answer": "光景",
    "fullSentence": "美しい光景が目の前に広がっています。",
    "explanation": "美しい光景が目の前に広がっています。\nCảnh đẹp trải ra trước mắt.\n光景: cảnh tượng trước mắt"
  },
  {
    "id": "tr_44",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Cảnh đẹp trải ra trước mắt.",
    "acceptedAnswers": [
      "美しい光景が目の前に広がっています。",
      "美しい光景が目の前に広がっています"
    ],
    "explanation": "美しい光景が目の前に広がっています。\n(うつくしいこうけいがめのまえにひろがっています。)\n光景: cảnh tượng trước mắt"
  },
  {
    "id": "mc_45",
    "type": "multiple_choice",
    "question": "蒸発 có nghĩa là gì?",
    "word": "蒸発",
    "reading": "じょうはつ",
    "choices": [
      "sống, sinh sống",
      "mọi năm; năm bình thường làm mốc so sánh",
      "có điểm chung",
      "bay hơi"
    ],
    "answer": "bay hơi",
    "explanation": "蒸発 (じょうはつ): bay hơi"
  },
  {
    "id": "fb_46",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "暑いので、水がすぐ",
    "sentenceSuffix": "します。",
    "choices": [
      "蒸発",
      "サプライズパーティー",
      "平野",
      "全て"
    ],
    "answer": "蒸発",
    "fullSentence": "暑いので、水がすぐ蒸発します。",
    "explanation": "暑いので、水がすぐ蒸発します。\nVì nóng nên nước bay hơi ngay.\n蒸発: bay hơi"
  },
  {
    "id": "tr_47",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Vì nóng nên nước bay hơi ngay.",
    "acceptedAnswers": [
      "暑いので、水がすぐ蒸発します。",
      "暑いので、水がすぐ蒸発します"
    ],
    "explanation": "暑いので、水がすぐ蒸発します。\n(あついので、みずがすぐじょうはつします。)\n蒸発: bay hơi"
  },
  {
    "id": "mc_48",
    "type": "multiple_choice",
    "question": "奪う có nghĩa là gì?",
    "word": "奪う",
    "reading": "うばう",
    "choices": [
      "mùa mưa ở Nhật",
      "cướp, lấy mất",
      "cá tính, nét riêng",
      "họp"
    ],
    "answer": "cướp, lấy mất",
    "explanation": "奪う (うばう): cướp, lấy mất"
  },
  {
    "id": "tr_49",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tên trộm cướp túi của anh ấy.",
    "acceptedAnswers": [
      "泥棒が彼からかばんを奪いました。",
      "泥棒が彼からかばんを奪いました"
    ],
    "explanation": "泥棒が彼からかばんを奪いました。\n(どろぼうがかれからかばんをうばいました。)\n奪う: cướp, lấy mất"
  },
  {
    "id": "tr_50",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Khi nước bay hơi, nó lấy đi nhiệt của mặt đất.",
    "acceptedAnswers": [
      "水が蒸発するとき、地面の熱を奪います。",
      "水が蒸発するとき、地面の熱を奪います"
    ],
    "explanation": "水が蒸発するとき、地面の熱を奪います。\n(みずがじょうはつするとき、じめんのねつをうばいます。)\n奪う: cướp, lấy mất"
  },
  {
    "id": "mc_51",
    "type": "multiple_choice",
    "question": "近年 có nghĩa là gì?",
    "word": "近年",
    "reading": "きんねん",
    "choices": [
      "thương mại",
      "giờ, thời điểm chính xác",
      "rải, rắc; tưới/rảy (nước)",
      "những năm gần đây"
    ],
    "answer": "những năm gần đây",
    "explanation": "近年 (きんねん): những năm gần đây"
  },
  {
    "id": "fb_52",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "、暑い日が増えています。",
    "choices": [
      "親孝行",
      "タメ口",
      "渓谷",
      "近年"
    ],
    "answer": "近年",
    "fullSentence": "近年、暑い日が増えています。",
    "explanation": "近年、暑い日が増えています。\nNhững năm gần đây, số ngày nóng đang tăng.\n近年: những năm gần đây"
  },
  {
    "id": "tr_53",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Những năm gần đây, số ngày nóng đang tăng.",
    "acceptedAnswers": [
      "近年、暑い日が増えています。",
      "近年、暑い日が増えています"
    ],
    "explanation": "近年、暑い日が増えています。\n(きんねん、あついひがふえています。)\n近年: những năm gần đây"
  },
  {
    "id": "mc_54",
    "type": "multiple_choice",
    "question": "作戦 có nghĩa là gì?",
    "word": "作戦",
    "reading": "さくせん",
    "choices": [
      "dân làng",
      "kế hoạch hành động, chiến thuật",
      "bồn/bệ rửa mặt",
      "rốt cuộc, không biết là… (nhấn câu hỏi)"
    ],
    "answer": "kế hoạch hành động, chiến thuật",
    "explanation": "作戦 (さくせん): kế hoạch hành động, chiến thuật"
  },
  {
    "id": "fb_55",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "試合の前に",
    "sentenceSuffix": "を立てます。",
    "choices": [
      "作戦",
      "ハイタッチ",
      "タメ口",
      "往復"
    ],
    "answer": "作戦",
    "fullSentence": "試合の前に作戦を立てます。",
    "explanation": "試合の前に作戦を立てます。\nChúng tôi bàn chiến thuật trước trận đấu.\n作戦: kế hoạch hành động, chiến thuật"
  },
  {
    "id": "tr_56",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Chúng tôi bàn chiến thuật trước trận đấu.",
    "acceptedAnswers": [
      "試合の前に作戦を立てます。",
      "試合の前に作戦を立てます"
    ],
    "explanation": "試合の前に作戦を立てます。\n(しあいのまえにさくせんをたてます。)\n作戦: kế hoạch hành động, chiến thuật"
  },
  {
    "id": "mc_57",
    "type": "multiple_choice",
    "question": "開催 có nghĩa là gì?",
    "word": "開催",
    "reading": "かいさい",
    "choices": [
      "sinh vật",
      "tổ chức (sự kiện)",
      "để lộ, phơi ra; ngâm/phơi để tẩy trắng",
      "bờ biển"
    ],
    "answer": "tổ chức (sự kiện)",
    "explanation": "開催 (かいさい): tổ chức (sự kiện)"
  },
  {
    "id": "fb_58",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "来月、祭りを",
    "sentenceSuffix": "します。",
    "choices": [
      "開催",
      "優勝",
      "男女",
      "鉄道"
    ],
    "answer": "開催",
    "fullSentence": "来月、祭りを開催します。",
    "explanation": "来月、祭りを開催します。\nTháng sau sẽ tổ chức lễ hội.\n開催: tổ chức (sự kiện)"
  },
  {
    "id": "tr_59",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tháng sau sẽ tổ chức lễ hội.",
    "acceptedAnswers": [
      "来月、祭りを開催します。",
      "来月、祭りを開催します"
    ],
    "explanation": "来月、祭りを開催します。\n(らいげつ、まつりをかいさいします。)\n開催: tổ chức (sự kiện)"
  },
  {
    "id": "fb_60",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "会議は東京で",
    "sentenceSuffix": "されます。",
    "choices": [
      "回答",
      "感動",
      "開催",
      "和菓子"
    ],
    "answer": "開催",
    "fullSentence": "会議は東京で開催されます。",
    "explanation": "会議は東京で開催されます。\nHội nghị được tổ chức ở Tokyo.\n開催: tổ chức (sự kiện)"
  },
  {
    "id": "tr_61",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Hội nghị được tổ chức ở Tokyo.",
    "acceptedAnswers": [
      "会議は東京で開催されます。",
      "会議は東京で開催されます"
    ],
    "explanation": "会議は東京で開催されます。\n(かいぎはとうきょうでかいさいされます。)\n開催: tổ chức (sự kiện)"
  },
  {
    "id": "mc_62",
    "type": "multiple_choice",
    "question": "水道水 có nghĩa là gì?",
    "word": "水道水",
    "reading": "すいどうすい",
    "choices": [
      "gói, bao bọc",
      "chịu, nhận tác động (cú sốc)",
      "nước máy",
      "cảnh tượng trước mắt"
    ],
    "answer": "nước máy",
    "explanation": "水道水 (すいどうすい): nước máy"
  },
  {
    "id": "fb_63",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "ここの",
    "sentenceSuffix": "は飲めます。",
    "choices": [
      "堅い",
      "訪れる",
      "水道水",
      "快適"
    ],
    "answer": "水道水",
    "fullSentence": "ここの水道水は飲めます。",
    "explanation": "ここの水道水は飲めます。\nNước máy ở đây uống được.\n水道水: nước máy"
  },
  {
    "id": "tr_64",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Nước máy ở đây uống được.",
    "acceptedAnswers": [
      "ここの水道水は飲めます。",
      "ここの水道水は飲めます"
    ],
    "explanation": "ここの水道水は飲めます。\n(ここのすいどうすいはのめます。)\n水道水: nước máy"
  },
  {
    "id": "mc_65",
    "type": "multiple_choice",
    "question": "残り湯 có nghĩa là gì?",
    "word": "残り湯",
    "reading": "のこりゆ",
    "choices": [
      "bây giờ thì mới/đúng là… nhưng trước đây…",
      "ngành sản xuất, ngành kinh tế",
      "nước tắm còn lại trong bồn",
      "mẫu, hình mẫu; người mẫu"
    ],
    "answer": "nước tắm còn lại trong bồn",
    "explanation": "残り湯 (のこりゆ): nước tắm còn lại trong bồn"
  },
  {
    "id": "fb_66",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "洗濯に",
    "sentenceSuffix": "を使います。",
    "choices": [
      "破る",
      "残り湯",
      "割る",
      "女子高生"
    ],
    "answer": "残り湯",
    "fullSentence": "洗濯に残り湯を使います。",
    "explanation": "洗濯に残り湯を使います。\nTôi dùng nước tắm còn lại để giặt đồ.\n残り湯: nước tắm còn lại trong bồn"
  },
  {
    "id": "tr_67",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi dùng nước tắm còn lại để giặt đồ.",
    "acceptedAnswers": [
      "洗濯に残り湯を使います。",
      "洗濯に残り湯を使います"
    ],
    "explanation": "洗濯に残り湯を使います。\n(せんたくにのこりゆをつかいます。)\n残り湯: nước tắm còn lại trong bồn"
  },
  {
    "id": "mc_68",
    "type": "multiple_choice",
    "question": "雨水 có nghĩa là gì?",
    "word": "雨水",
    "reading": "あまみず",
    "choices": [
      "hỏi, hỏi thăm thông tin",
      "nước mưa",
      "thành thật xin lỗi (lịch sự)",
      "xuất phát từ…; khởi hành lúc…"
    ],
    "answer": "nước mưa",
    "explanation": "雨水 (あまみず): nước mưa"
  },
  {
    "id": "fb_69",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "バケツに",
    "sentenceSuffix": "をためます。",
    "choices": [
      "ごうごう",
      "雨水",
      "石垣",
      "暮らす"
    ],
    "answer": "雨水",
    "fullSentence": "バケツに雨水をためます。",
    "explanation": "バケツに雨水をためます。\nTôi hứng nước mưa vào xô.\n雨水: nước mưa"
  },
  {
    "id": "tr_70",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi hứng nước mưa vào xô.",
    "acceptedAnswers": [
      "バケツに雨水をためます。",
      "バケツに雨水をためます"
    ],
    "explanation": "バケツに雨水をためます。\n(バケツにあまみずをためます。)\n雨水: nước mưa"
  },
  {
    "id": "mc_71",
    "type": "multiple_choice",
    "question": "平均 có nghĩa là gì?",
    "word": "平均",
    "reading": "へいきん",
    "choices": [
      "đường hầm",
      "bình quân, tính trung bình",
      "tiền mặt",
      "không hiểu sao, có cảm giác…"
    ],
    "answer": "bình quân, tính trung bình",
    "explanation": "平均 (へいきん): bình quân, tính trung bình"
  },
  {
    "id": "fb_72",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "毎日",
    "sentenceSuffix": "で七時間寝ます。",
    "choices": [
      "製造",
      "立派",
      "時刻",
      "平均"
    ],
    "answer": "平均",
    "fullSentence": "毎日平均で七時間寝ます。",
    "explanation": "毎日平均で七時間寝ます。\nMỗi ngày tôi ngủ trung bình bảy tiếng.\n平均: bình quân, tính trung bình"
  },
  {
    "id": "tr_73",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Mỗi ngày tôi ngủ trung bình bảy tiếng.",
    "acceptedAnswers": [
      "毎日平均で七時間寝ます。",
      "毎日平均で七時間寝ます"
    ],
    "explanation": "毎日平均で七時間寝ます。\n(まいにちへいきんでしちじかんねます。)\n平均: bình quân, tính trung bình"
  },
  {
    "id": "fb_74",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "三人の点数を",
    "sentenceSuffix": "します。",
    "choices": [
      "両手",
      "天井",
      "のんびり",
      "平均"
    ],
    "answer": "平均",
    "fullSentence": "三人の点数を平均します。",
    "explanation": "三人の点数を平均します。\nTôi tính trung bình điểm của ba người.\n平均: bình quân, tính trung bình"
  },
  {
    "id": "tr_75",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi tính trung bình điểm của ba người.",
    "acceptedAnswers": [
      "三人の点数を平均します。",
      "三人の点数を平均します"
    ],
    "explanation": "三人の点数を平均します。\n(さんにんのてんすうをへいきんします。)\n平均: bình quân, tính trung bình"
  },
  {
    "id": "mc_76",
    "type": "multiple_choice",
    "question": "降水量 có nghĩa là gì?",
    "word": "降水量",
    "reading": "こうすいりょう",
    "choices": [
      "lượng giáng thủy (mưa, tuyết… quy đổi ra nước)",
      "đất, khu đất; vùng đất, địa phương",
      "ùn tắc",
      "tiêu thụ, sử dụng hết"
    ],
    "answer": "lượng giáng thủy (mưa, tuyết… quy đổi ra nước)",
    "explanation": "降水量 (こうすいりょう): lượng giáng thủy (mưa, tuyết… quy đổi ra nước)"
  },
  {
    "id": "fb_77",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この地方は",
    "sentenceSuffix": "が多いです。",
    "choices": [
      "わざと",
      "蒸し暑い",
      "学園祭",
      "降水量"
    ],
    "answer": "降水量",
    "fullSentence": "この地方は降水量が多いです。",
    "explanation": "この地方は降水量が多いです。\nVùng này có lượng mưa nhiều.\n降水量: lượng giáng thủy (mưa, tuyết… quy đổi ra nước)"
  },
  {
    "id": "tr_78",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Vùng này có lượng mưa nhiều.",
    "acceptedAnswers": [
      "この地方は降水量が多いです。",
      "この地方は降水量が多いです"
    ],
    "explanation": "この地方は降水量が多いです。\n(このちほうはこうすいりょうがおおいです。)\n降水量: lượng giáng thủy (mưa, tuyết… quy đổi ra nước)"
  },
  {
    "id": "mc_79",
    "type": "multiple_choice",
    "question": "気候 có nghĩa là gì?",
    "word": "気候",
    "reading": "きこう",
    "choices": [
      "ầm ầm, tiếng vang lớn kéo dài",
      "người thực hiện/thuộc về…",
      "giọng nói, âm thanh lời nói",
      "khí hậu"
    ],
    "answer": "khí hậu",
    "explanation": "気候 (きこう): khí hậu"
  },
  {
    "id": "fb_80",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この島は",
    "sentenceSuffix": "が温暖です。",
    "choices": [
      "より～",
      "気候",
      "認める",
      "内回り"
    ],
    "answer": "気候",
    "fullSentence": "この島は気候が温暖です。",
    "explanation": "この島は気候が温暖です。\nĐảo này có khí hậu ôn hòa.\n気候: khí hậu"
  },
  {
    "id": "tr_81",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Đảo này có khí hậu ôn hòa.",
    "acceptedAnswers": [
      "この島は気候が温暖です。",
      "この島は気候が温暖です"
    ],
    "explanation": "この島は気候が温暖です。\n(このしまはきこうがおんだんです。)\n気候: khí hậu"
  },
  {
    "id": "mc_82",
    "type": "multiple_choice",
    "question": "コーナー có nghĩa là gì?",
    "word": "コーナー",
    "reading": "コーナー",
    "choices": [
      "góc, khu vực dành cho một mục đích",
      "khoản tiền…",
      "chọn dùng khác nhau tùy tình huống",
      "tàu kiểu xe goòng, thường dùng ngắm cảnh du lịch"
    ],
    "answer": "góc, khu vực dành cho một mục đích",
    "explanation": "コーナー (コーナー): góc, khu vực dành cho một mục đích"
  },
  {
    "id": "fb_83",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "雑誌の",
    "sentenceSuffix": "はどこですか。",
    "choices": [
      "フットサル",
      "コーナー",
      "カエル",
      "掛け声"
    ],
    "answer": "コーナー",
    "fullSentence": "雑誌のコーナーはどこですか。",
    "explanation": "雑誌のコーナーはどこですか。\nKhu tạp chí ở đâu?\nコーナー: góc, khu vực dành cho một mục đích"
  },
  {
    "id": "tr_84",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Khu tạp chí ở đâu?",
    "acceptedAnswers": [
      "雑誌のコーナーはどこですか。",
      "雑誌のコーナーはどこですか"
    ],
    "explanation": "雑誌のコーナーはどこですか。\n(ざっしのコーナーはどこですか。)\nコーナー: góc, khu vực dành cho một mục đích"
  },
  {
    "id": "mc_85",
    "type": "multiple_choice",
    "question": "南北 có nghĩa là gì?",
    "word": "南北",
    "reading": "なんぼく",
    "choices": [
      "kéo dài, mở rộng; bị dời lại",
      "nam và bắc; chiều bắc–nam",
      "xuất phát từ…; khởi hành lúc…",
      "việc gọi nhầm số điện thoại"
    ],
    "answer": "nam và bắc; chiều bắc–nam",
    "explanation": "南北 (なんぼく): nam và bắc; chiều bắc–nam"
  },
  {
    "id": "fb_86",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "日本は",
    "sentenceSuffix": "に長い国です。",
    "choices": [
      "気が利く",
      "かける（迷惑をかける）",
      "水道水",
      "南北"
    ],
    "answer": "南北",
    "fullSentence": "日本は南北に長い国です。",
    "explanation": "日本は南北に長い国です。\nNhật Bản là nước trải dài theo hướng bắc–nam.\n南北: nam và bắc; chiều bắc–nam"
  },
  {
    "id": "tr_87",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Nhật Bản là nước trải dài theo hướng bắc–nam.",
    "acceptedAnswers": [
      "日本は南北に長い国です。",
      "日本は南北に長い国です"
    ],
    "explanation": "日本は南北に長い国です。\n(にほんはなんぼくにながいくにです。)\n南北: nam và bắc; chiều bắc–nam"
  },
  {
    "id": "mc_88",
    "type": "multiple_choice",
    "question": "島 có nghĩa là gì?",
    "word": "島",
    "reading": "しま",
    "choices": [
      "đảo",
      "phát triển mạnh, sôi nổi, thịnh hành",
      "quý tộc",
      "cứ như, giống hệt; hoàn toàn (với phủ định)"
    ],
    "answer": "đảo",
    "explanation": "島 (しま): đảo"
  },
  {
    "id": "fb_89",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "祖父は小さな",
    "sentenceSuffix": "に住んでいます。",
    "choices": [
      "揚げる",
      "通る（電気が通る）",
      "色違い",
      "島"
    ],
    "answer": "島",
    "fullSentence": "祖父は小さな島に住んでいます。",
    "explanation": "祖父は小さな島に住んでいます。\nÔng tôi sống trên một hòn đảo nhỏ.\n島: đảo"
  },
  {
    "id": "tr_90",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Ông tôi sống trên một hòn đảo nhỏ.",
    "acceptedAnswers": [
      "祖父は小さな島に住んでいます。",
      "祖父は小さな島に住んでいます"
    ],
    "explanation": "祖父は小さな島に住んでいます。\n(そふはちいさなしまにすんでいます。)\n島: đảo"
  },
  {
    "id": "mc_91",
    "type": "multiple_choice",
    "question": "山林 có nghĩa là gì?",
    "word": "山林",
    "reading": "さんりん",
    "choices": [
      "tàu điện chạy trên đường phố, tram",
      "rừng núi; đất rừng",
      "điểm; khía cạnh, mặt",
      "khu vườn nổi tiếng, đẹp"
    ],
    "answer": "rừng núi; đất rừng",
    "explanation": "山林 (さんりん): rừng núi; đất rừng"
  },
  {
    "id": "fb_92",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "を守る活動に参加します。",
    "choices": [
      "ミーティング",
      "表れ",
      "全体",
      "山林"
    ],
    "answer": "山林",
    "fullSentence": "山林を守る活動に参加します。",
    "explanation": "山林を守る活動に参加します。\nTôi tham gia hoạt động bảo vệ rừng núi.\n山林: rừng núi; đất rừng"
  },
  {
    "id": "tr_93",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi tham gia hoạt động bảo vệ rừng núi.",
    "acceptedAnswers": [
      "山林を守る活動に参加します。",
      "山林を守る活動に参加します"
    ],
    "explanation": "山林を守る活動に参加します。\n(さんりんをまもるかつどうにさんかします。)\n山林: rừng núi; đất rừng"
  },
  {
    "id": "mc_94",
    "type": "multiple_choice",
    "question": "～分の～ có nghĩa là gì?",
    "word": "～分の～",
    "reading": "～ぶんの～",
    "choices": [
      "nam và bắc; chiều bắc–nam",
      "cách đọc phân số: mẫu số trước, tử số sau",
      "không ngờ tới, bất ngờ",
      "địa hình"
    ],
    "answer": "cách đọc phân số: mẫu số trước, tử số sau",
    "explanation": "～分の～ (～ぶんの～): cách đọc phân số: mẫu số trước, tử số sau"
  },
  {
    "id": "tr_95",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Hai phần ba sinh viên đi học bằng tàu điện.",
    "acceptedAnswers": [
      "学生の三分の二が電車で通っています。",
      "学生の三分の二が電車で通っています"
    ],
    "explanation": "学生の三分の二が電車で通っています。\n(がくせいのさんぶんのにがでんしゃでかよっています。)\n～分の～: cách đọc phân số: mẫu số trước, tử số sau"
  },
  {
    "id": "mc_96",
    "type": "multiple_choice",
    "question": "地形 có nghĩa là gì?",
    "word": "地形",
    "reading": "ちけい",
    "choices": [
      "được hưởng điều kiện tốt, may mắn có",
      "gió lạnh, khô và mạnh, thường vào mùa đông",
      "khoảnh khắc",
      "địa hình"
    ],
    "answer": "địa hình",
    "explanation": "地形 (ちけい): địa hình"
  },
  {
    "id": "fb_97",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "地図で",
    "sentenceSuffix": "を調べます。",
    "choices": [
      "石",
      "地形",
      "細長い",
      "相変わらず"
    ],
    "answer": "地形",
    "fullSentence": "地図で地形を調べます。",
    "explanation": "地図で地形を調べます。\nTôi xem địa hình trên bản đồ.\n地形: địa hình"
  },
  {
    "id": "tr_98",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi xem địa hình trên bản đồ.",
    "acceptedAnswers": [
      "地図で地形を調べます。",
      "地図で地形を調べます"
    ],
    "explanation": "地図で地形を調べます。\n(ちずでちけいをしらべます。)\n地形: địa hình"
  },
  {
    "id": "mc_99",
    "type": "multiple_choice",
    "question": "温帯 có nghĩa là gì?",
    "word": "温帯",
    "reading": "おんたい",
    "choices": [
      "từ đếm nhà, cửa hàng, tòa nhà nhỏ",
      "rảy nước xuống đất cho mát",
      "bia tươi",
      "vùng ôn đới"
    ],
    "answer": "vùng ôn đới",
    "explanation": "温帯 (おんたい): vùng ôn đới"
  },
  {
    "id": "fb_100",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この地域は",
    "sentenceSuffix": "に属しています。",
    "choices": [
      "優勝",
      "認める",
      "温帯",
      "文章"
    ],
    "answer": "温帯",
    "fullSentence": "この地域は温帯に属しています。",
    "explanation": "この地域は温帯に属しています。\nKhu vực này thuộc vùng ôn đới.\n温帯: vùng ôn đới"
  },
  {
    "id": "tr_101",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Khu vực này thuộc vùng ôn đới.",
    "acceptedAnswers": [
      "この地域は温帯に属しています。",
      "この地域は温帯に属しています"
    ],
    "explanation": "この地域は温帯に属しています。\n(このちいきはおんたいにぞくしています。)\n温帯: vùng ôn đới"
  },
  {
    "id": "mc_102",
    "type": "multiple_choice",
    "question": "位置 có nghĩa là gì?",
    "word": "位置",
    "reading": "いち",
    "choices": [
      "sản phẩm nổi tiếng của địa phương",
      "nối tiếp, trải thành dãy",
      "nằm ở, tọa lạc",
      "khác màu, phiên bản màu khác"
    ],
    "answer": "nằm ở, tọa lạc",
    "explanation": "位置 (いち): nằm ở, tọa lạc"
  },
  {
    "id": "fb_103",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "日本は東アジアに",
    "sentenceSuffix": "しています。",
    "choices": [
      "合わせる",
      "残り湯",
      "位置",
      "栄える"
    ],
    "answer": "位置",
    "fullSentence": "日本は東アジアに位置しています。",
    "explanation": "日本は東アジアに位置しています。\nNhật Bản nằm ở Đông Á.\n位置: nằm ở, tọa lạc"
  },
  {
    "id": "tr_104",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Nhật Bản nằm ở Đông Á.",
    "acceptedAnswers": [
      "日本は東アジアに位置しています。",
      "日本は東アジアに位置しています"
    ],
    "explanation": "日本は東アジアに位置しています。\n(にほんはひがしアジアにいちしています。)\n位置: nằm ở, tọa lạc"
  },
  {
    "id": "fb_105",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "地図でホテルの",
    "sentenceSuffix": "を確認します。",
    "choices": [
      "位置",
      "アドバイス",
      "破る",
      "同年代"
    ],
    "answer": "位置",
    "fullSentence": "地図でホテルの位置を確認します。",
    "explanation": "地図でホテルの位置を確認します。\nTôi kiểm tra vị trí khách sạn trên bản đồ.\n位置: nằm ở, tọa lạc"
  },
  {
    "id": "tr_106",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi kiểm tra vị trí khách sạn trên bản đồ.",
    "acceptedAnswers": [
      "地図でホテルの位置を確認します。",
      "地図でホテルの位置を確認します"
    ],
    "explanation": "地図でホテルの位置を確認します。\n(ちずでホテルのいちをかくにんします。)\n位置: nằm ở, tọa lạc"
  },
  {
    "id": "fb_107",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "机の",
    "sentenceSuffix": "を変えました。",
    "choices": [
      "姿",
      "位置",
      "いたす",
      "しっくい"
    ],
    "answer": "位置",
    "fullSentence": "机の位置を変えました。",
    "explanation": "机の位置を変えました。\nTôi đã đổi vị trí bàn.\n位置: nằm ở, tọa lạc"
  },
  {
    "id": "tr_108",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đã đổi vị trí bàn.",
    "acceptedAnswers": [
      "机の位置を変えました。",
      "机の位置を変えました"
    ],
    "explanation": "机の位置を変えました。\n(つくえのいちをかえました。)\n位置: nằm ở, tọa lạc"
  },
  {
    "id": "fb_109",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "海岸に",
    "sentenceSuffix": "する町を訪れました。",
    "choices": [
      "たまたま",
      "位置",
      "わざと",
      "魔除け"
    ],
    "answer": "位置",
    "fullSentence": "海岸に位置する町を訪れました。",
    "explanation": "海岸に位置する町を訪れました。\nTôi ghé thăm thị trấn nằm ở ven biển.\n位置: nằm ở, tọa lạc"
  },
  {
    "id": "tr_110",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi ghé thăm thị trấn nằm ở ven biển.",
    "acceptedAnswers": [
      "海岸に位置する町を訪れました。",
      "海岸に位置する町を訪れました"
    ],
    "explanation": "海岸に位置する町を訪れました。\n(かいがんにいちするまちをおとずれました。)\n位置: nằm ở, tọa lạc"
  },
  {
    "id": "fb_111",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "駅は便利な",
    "sentenceSuffix": "にあります。",
    "choices": [
      "励ます",
      "位置",
      "ほっぺた",
      "列車"
    ],
    "answer": "位置",
    "fullSentence": "駅は便利な位置にあります。",
    "explanation": "駅は便利な位置にあります。\nNhà ga ở vị trí thuận tiện.\n位置: nằm ở, tọa lạc"
  },
  {
    "id": "tr_112",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Nhà ga ở vị trí thuận tiện.",
    "acceptedAnswers": [
      "駅は便利な位置にあります。",
      "駅は便利な位置にあります"
    ],
    "explanation": "駅は便利な位置にあります。\n(えきはべんりないちにあります。)\n位置: nằm ở, tọa lạc"
  },
  {
    "id": "fb_113",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "指定された",
    "sentenceSuffix": "に移動してください。",
    "choices": [
      "人見知り",
      "位置",
      "畳",
      "内回り"
    ],
    "answer": "位置",
    "fullSentence": "指定された位置に移動してください。",
    "explanation": "指定された位置に移動してください。\nHãy di chuyển đến vị trí được chỉ định.\n位置: nằm ở, tọa lạc"
  },
  {
    "id": "tr_114",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Hãy di chuyển đến vị trí được chỉ định.",
    "acceptedAnswers": [
      "指定された位置に移動してください。",
      "指定された位置に移動してください"
    ],
    "explanation": "指定された位置に移動してください。\n(していされたいちにいどうしてください。)\n位置: nằm ở, tọa lạc"
  },
  {
    "id": "fb_115",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "観光はこの町の産業の中で重要な",
    "sentenceSuffix": "を占めています。",
    "choices": [
      "国宝",
      "位置",
      "申し訳ありません",
      "当時"
    ],
    "answer": "位置",
    "fullSentence": "観光はこの町の産業の中で重要な位置を占めています。",
    "explanation": "観光はこの町の産業の中で重要な位置を占めています。\nDu lịch giữ vị trí quan trọng trong các ngành kinh tế của thị trấn này.\n位置: nằm ở, tọa lạc"
  },
  {
    "id": "tr_116",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Du lịch giữ vị trí quan trọng trong các ngành kinh tế của thị trấn này.",
    "acceptedAnswers": [
      "観光はこの町の産業の中で重要な位置を占めています。",
      "観光はこの町の産業の中で重要な位置を占めています"
    ],
    "explanation": "観光はこの町の産業の中で重要な位置を占めています。\n(かんこうはこのまちのさんぎょうのなかでじゅうようないちをしめています。)\n位置: nằm ở, tọa lạc"
  },
  {
    "id": "mc_117",
    "type": "multiple_choice",
    "question": "蒸し暑い có nghĩa là gì?",
    "word": "蒸し暑い",
    "reading": "むしあつい",
    "choices": [
      "oi bức, nóng và ẩm",
      "giọng nói, âm thanh lời nói",
      "điều thắc mắc, sự nghi ngờ",
      "kế hoạch hành động, chiến thuật"
    ],
    "answer": "oi bức, nóng và ẩm",
    "explanation": "蒸し暑い (むしあつい): oi bức, nóng và ẩm"
  },
  {
    "id": "fb_118",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "今日は",
    "sentenceSuffix": "ですね。",
    "choices": [
      "食う",
      "ぐっと",
      "金",
      "蒸し暑い"
    ],
    "answer": "蒸し暑い",
    "fullSentence": "今日は蒸し暑いですね。",
    "explanation": "今日は蒸し暑いですね。\nHôm nay oi bức nhỉ.\n蒸し暑い: oi bức, nóng và ẩm"
  },
  {
    "id": "tr_119",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Hôm nay oi bức nhỉ.",
    "acceptedAnswers": [
      "今日は蒸し暑いですね。",
      "今日は蒸し暑いですね"
    ],
    "explanation": "今日は蒸し暑いですね。\n(きょうはむしあついですね。)\n蒸し暑い: oi bức, nóng và ẩm"
  },
  {
    "id": "mc_120",
    "type": "multiple_choice",
    "question": "～側 có nghĩa là gì?",
    "word": "～側",
    "reading": "～がわ",
    "choices": [
      "phía, bên…",
      "chân núi",
      "ngoài ra, xin nói thêm; vẫn còn",
      "khu vực xung quanh…"
    ],
    "answer": "phía, bên…",
    "explanation": "～側 (～がわ): phía, bên…"
  },
  {
    "id": "tr_121",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Phía Thái Bình Dương có nhiều mưa.",
    "acceptedAnswers": [
      "太平洋側では雨が多いです。",
      "太平洋側では雨が多いです"
    ],
    "explanation": "太平洋側では雨が多いです。\n(たいへいようがわではあめがおおいです。)\n～側: phía, bên…"
  },
  {
    "id": "mc_122",
    "type": "multiple_choice",
    "question": "ペンション có nghĩa là gì?",
    "word": "ペンション",
    "reading": "ペンション",
    "choices": [
      "chịu, nhận tác động (cú sốc)",
      "nhà nghỉ nhỏ kiểu phương Tây, thường do gia đình quản lý",
      "đặt tên",
      "bờ biển"
    ],
    "answer": "nhà nghỉ nhỏ kiểu phương Tây, thường do gia đình quản lý",
    "explanation": "ペンション (ペンション): nhà nghỉ nhỏ kiểu phương Tây, thường do gia đình quản lý"
  },
  {
    "id": "fb_123",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "山の近くの",
    "sentenceSuffix": "に泊まります。",
    "choices": [
      "通り過ぎる",
      "停車",
      "金",
      "ペンション"
    ],
    "answer": "ペンション",
    "fullSentence": "山の近くのペンションに泊まります。",
    "explanation": "山の近くのペンションに泊まります。\nTôi ở nhà nghỉ gần núi.\nペンション: nhà nghỉ nhỏ kiểu phương Tây, thường do gia đình quản lý"
  },
  {
    "id": "tr_124",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi ở nhà nghỉ gần núi.",
    "acceptedAnswers": [
      "山の近くのペンションに泊まります。",
      "山の近くのペンションに泊まります"
    ],
    "explanation": "山の近くのペンションに泊まります。\n(やまのちかくのペンションにとまります。)\nペンション: nhà nghỉ nhỏ kiểu phương Tây, thường do gia đình quản lý"
  },
  {
    "id": "mc_125",
    "type": "multiple_choice",
    "question": "割合 có nghĩa là gì?",
    "word": "割合",
    "reading": "わりあい",
    "choices": [
      "trạng thái không mặc quần áo, trần truồng",
      "khá, tương đối",
      "buộc, choàng, gắn (ruy băng lên vật)",
      "ồn ào, rôm rả (nhiều người)"
    ],
    "answer": "khá, tương đối",
    "explanation": "割合 (わりあい): khá, tương đối"
  },
  {
    "id": "fb_126",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この町は高齢者の",
    "sentenceSuffix": "が高いです。",
    "choices": [
      "後悔",
      "割合",
      "優勝",
      "迫力満点"
    ],
    "answer": "割合",
    "fullSentence": "この町は高齢者の割合が高いです。",
    "explanation": "この町は高齢者の割合が高いです。\nThị trấn này có tỷ lệ người cao tuổi cao.\n割合: khá, tương đối"
  },
  {
    "id": "tr_127",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Thị trấn này có tỷ lệ người cao tuổi cao.",
    "acceptedAnswers": [
      "この町は高齢者の割合が高いです。",
      "この町は高齢者の割合が高いです"
    ],
    "explanation": "この町は高齢者の割合が高いです。\n(このまちはこうれいしゃのわりあいがたかいです。)\n割合: khá, tương đối"
  },
  {
    "id": "fb_128",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この問題は",
    "sentenceSuffix": "に簡単です。",
    "choices": [
      "割合",
      "あはは",
      "ハプニング",
      "生物"
    ],
    "answer": "割合",
    "fullSentence": "この問題は割合に簡単です。",
    "explanation": "この問題は割合に簡単です。\nBài này tương đối dễ.\n割合: khá, tương đối"
  },
  {
    "id": "tr_129",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Bài này tương đối dễ.",
    "acceptedAnswers": [
      "この問題は割合に簡単です。",
      "この問題は割合に簡単です"
    ],
    "explanation": "この問題は割合に簡単です。\n(このもんだいはわりあいにかんたんです。)\n割合: khá, tương đối"
  },
  {
    "id": "mc_130",
    "type": "multiple_choice",
    "question": "例年 có nghĩa là gì?",
    "word": "例年",
    "reading": "れいねん",
    "choices": [
      "sau… mới lại làm, lần đầu sau khoảng…",
      "ùn tắc",
      "cướp, lấy mất",
      "mọi năm; năm bình thường làm mốc so sánh"
    ],
    "answer": "mọi năm; năm bình thường làm mốc so sánh",
    "explanation": "例年 (れいねん): mọi năm; năm bình thường làm mốc so sánh"
  },
  {
    "id": "fb_131",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "今年は",
    "sentenceSuffix": "より暑いです。",
    "choices": [
      "地方",
      "フリー切符",
      "例年",
      "受ける（ショックを受ける）"
    ],
    "answer": "例年",
    "fullSentence": "今年は例年より暑いです。",
    "explanation": "今年は例年より暑いです。\nNăm nay nóng hơn mọi năm.\n例年: mọi năm; năm bình thường làm mốc so sánh"
  },
  {
    "id": "tr_132",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Năm nay nóng hơn mọi năm.",
    "acceptedAnswers": [
      "今年は例年より暑いです。",
      "今年は例年より暑いです"
    ],
    "explanation": "今年は例年より暑いです。\n(ことしはれいねんよりあついです。)\n例年: mọi năm; năm bình thường làm mốc so sánh"
  },
  {
    "id": "mc_133",
    "type": "multiple_choice",
    "question": "連なる có nghĩa là gì?",
    "word": "連なる",
    "reading": "つらなる",
    "choices": [
      "nối tiếp, trải thành dãy",
      "tin nhắn, lời nhắn, thông điệp",
      "rảy nước xuống đất cho mát",
      "tính cả, đưa vào, bao gồm vào"
    ],
    "answer": "nối tiếp, trải thành dãy",
    "explanation": "連なる (つらなる): nối tiếp, trải thành dãy"
  },
  {
    "id": "tr_134",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Những ngọn núi cao nối tiếp thành dãy.",
    "acceptedAnswers": [
      "高い山が連なっています。",
      "高い山が連なっています"
    ],
    "explanation": "高い山が連なっています。\n(たかいやまがつらなっています。)\n連なる: nối tiếp, trải thành dãy"
  },
  {
    "id": "mc_135",
    "type": "multiple_choice",
    "question": "恵まれる có nghĩa là gì?",
    "word": "恵まれる",
    "reading": "めぐまれる",
    "choices": [
      "dáng vẻ, hình dáng; hình ảnh người/vật",
      "thời kỳ; nhóm tuổi, thế hệ",
      "được hưởng điều kiện tốt, may mắn có",
      "hỏi, hỏi thăm thông tin"
    ],
    "answer": "được hưởng điều kiện tốt, may mắn có",
    "explanation": "恵まれる (めぐまれる): được hưởng điều kiện tốt, may mắn có"
  },
  {
    "id": "tr_136",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Thị trấn này được thiên nhiên ưu đãi.",
    "acceptedAnswers": [
      "この町は自然に恵まれています。",
      "この町は自然に恵まれています"
    ],
    "explanation": "この町は自然に恵まれています。\n(このまちはしぜんにめぐまれています。)\n恵まれる: được hưởng điều kiện tốt, may mắn có"
  },
  {
    "id": "tr_137",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Trong chuyến đi, chúng tôi may mắn gặp thời tiết tốt.",
    "acceptedAnswers": [
      "旅行中は天気に恵まれました。",
      "旅行中は天気に恵まれました"
    ],
    "explanation": "旅行中は天気に恵まれました。\n(りょこうちゅうはてんきにめぐまれました。)\n恵まれる: được hưởng điều kiện tốt, may mắn có"
  },
  {
    "id": "mc_138",
    "type": "multiple_choice",
    "question": "展望台 có nghĩa là gì?",
    "word": "展望台",
    "reading": "てんぼうだい",
    "choices": [
      "số điện thoại miễn cước cho người gọi",
      "hơn hẳn; mạnh một cái, dồn sức",
      "bạn bè, người bạn",
      "đài quan sát, điểm ngắm toàn cảnh"
    ],
    "answer": "đài quan sát, điểm ngắm toàn cảnh",
    "explanation": "展望台 (てんぼうだい): đài quan sát, điểm ngắm toàn cảnh"
  },
  {
    "id": "fb_139",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "から海が見えます。",
    "choices": [
      "展望台",
      "近年",
      "フットサル",
      "国宝"
    ],
    "answer": "展望台",
    "fullSentence": "展望台から海が見えます。",
    "explanation": "展望台から海が見えます。\nTừ đài quan sát có thể thấy biển.\n展望台: đài quan sát, điểm ngắm toàn cảnh"
  },
  {
    "id": "tr_140",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Từ đài quan sát có thể thấy biển.",
    "acceptedAnswers": [
      "展望台から海が見えます。",
      "展望台から海が見えます"
    ],
    "explanation": "展望台から海が見えます。\n(てんぼうだいからうみがみえます。)\n展望台: đài quan sát, điểm ngắm toàn cảnh"
  },
  {
    "id": "mc_141",
    "type": "multiple_choice",
    "question": "美しい có nghĩa là gì?",
    "word": "美しい",
    "reading": "うつくしい",
    "choices": [
      "chuột máy tính",
      "buộc, choàng, gắn (ruy băng lên vật)",
      "đẹp, đẹp đẽ",
      "tàu điện chạy trên đường phố, tram"
    ],
    "answer": "đẹp, đẹp đẽ",
    "explanation": "美しい (うつくしい): đẹp, đẹp đẽ"
  },
  {
    "id": "fb_142",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "景色を写真に撮りました。",
    "choices": [
      "込める",
      "美しい",
      "今でこそ",
      "マウス"
    ],
    "answer": "美しい",
    "fullSentence": "美しい景色を写真に撮りました。",
    "explanation": "美しい景色を写真に撮りました。\nTôi chụp phong cảnh đẹp.\n美しい: đẹp, đẹp đẽ"
  },
  {
    "id": "tr_143",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi chụp phong cảnh đẹp.",
    "acceptedAnswers": [
      "美しい景色を写真に撮りました。",
      "美しい景色を写真に撮りました"
    ],
    "explanation": "美しい景色を写真に撮りました。\n(うつくしいけしきをしゃしんにとりました。)\n美しい: đẹp, đẹp đẽ"
  },
  {
    "id": "mc_144",
    "type": "multiple_choice",
    "question": "平野 có nghĩa là gì?",
    "word": "平野",
    "reading": "へいや",
    "choices": [
      "đồng bằng",
      "cách làm; cách giải quyết",
      "tâm tư, suy nghĩ, tình cảm",
      "khí tượng, hiện tượng thời tiết"
    ],
    "answer": "đồng bằng",
    "explanation": "平野 (へいや): đồng bằng"
  },
  {
    "id": "fb_145",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "川の周りに",
    "sentenceSuffix": "が広がっています。",
    "choices": [
      "メッセージ",
      "平野",
      "～センチ",
      "つるす"
    ],
    "answer": "平野",
    "fullSentence": "川の周りに平野が広がっています。",
    "explanation": "川の周りに平野が広がっています。\nĐồng bằng trải rộng quanh sông.\n平野: đồng bằng"
  },
  {
    "id": "tr_146",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Đồng bằng trải rộng quanh sông.",
    "acceptedAnswers": [
      "川の周りに平野が広がっています。",
      "川の周りに平野が広がっています"
    ],
    "explanation": "川の周りに平野が広がっています。\n(かわのまわりにへいやがひろがっています。)\n平野: đồng bằng"
  },
  {
    "id": "mc_147",
    "type": "multiple_choice",
    "question": "庭 có nghĩa là gì?",
    "word": "庭",
    "reading": "にわ",
    "choices": [
      "vườn, sân vườn",
      "không… chút nào (khẩu ngữ)",
      "thêm vào, gọi thêm",
      "câu nói líu lưỡi để luyện phát âm nhanh"
    ],
    "answer": "vườn, sân vườn",
    "explanation": "庭 (にわ): vườn, sân vườn"
  },
  {
    "id": "fb_148",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "に大きな木があります。",
    "choices": [
      "旅行記",
      "庭",
      "許す",
      "コーナー"
    ],
    "answer": "庭",
    "fullSentence": "庭に大きな木があります。",
    "explanation": "庭に大きな木があります。\nTrong vườn có cây lớn.\n庭: vườn, sân vườn"
  },
  {
    "id": "tr_149",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Trong vườn có cây lớn.",
    "acceptedAnswers": [
      "庭に大きな木があります。",
      "庭に大きな木があります"
    ],
    "explanation": "庭に大きな木があります。\n(にわにおおきなきがあります。)\n庭: vườn, sân vườn"
  },
  {
    "id": "mc_150",
    "type": "multiple_choice",
    "question": "石垣 có nghĩa là gì?",
    "word": "石垣",
    "reading": "いしがき",
    "choices": [
      "quả hồng, cây hồng",
      "tường xây bằng đá",
      "gió lạnh, khô và mạnh, thường vào mùa đông",
      "sinh vật"
    ],
    "answer": "tường xây bằng đá",
    "explanation": "石垣 (いしがき): tường xây bằng đá"
  },
  {
    "id": "fb_151",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "昔の人がこの",
    "sentenceSuffix": "を積みました。",
    "choices": [
      "伝わる",
      "石垣",
      "一部",
      "奪う"
    ],
    "answer": "石垣",
    "fullSentence": "昔の人がこの石垣を積みました。",
    "explanation": "昔の人がこの石垣を積みました。\nNgười xưa đã xếp đá xây bức tường này.\n石垣: tường xây bằng đá"
  },
  {
    "id": "tr_152",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Người xưa đã xếp đá xây bức tường này.",
    "acceptedAnswers": [
      "昔の人がこの石垣を積みました。",
      "昔の人がこの石垣を積みました"
    ],
    "explanation": "昔の人がこの石垣を積みました。\n(むかしのひとがこのいしがきをつみました。)\n石垣: tường xây bằng đá"
  },
  {
    "id": "mc_153",
    "type": "multiple_choice",
    "question": "名園 có nghĩa là gì?",
    "word": "名園",
    "reading": "めいえん",
    "choices": [
      "sinh vật",
      "truyện tranh bốn khung",
      "chỗ để, nơi đặt đồ",
      "khu vườn nổi tiếng, đẹp"
    ],
    "answer": "khu vườn nổi tiếng, đẹp",
    "explanation": "名園 (めいえん): khu vườn nổi tiếng, đẹp"
  },
  {
    "id": "fb_154",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この庭は",
    "sentenceSuffix": "として知られています。",
    "choices": [
      "言い表す",
      "名園",
      "団体",
      "上り"
    ],
    "answer": "名園",
    "fullSentence": "この庭は名園として知られています。",
    "explanation": "この庭は名園として知られています。\nKhu vườn này nổi tiếng là một danh viên.\n名園: khu vườn nổi tiếng, đẹp"
  },
  {
    "id": "tr_155",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Khu vườn này nổi tiếng là một danh viên.",
    "acceptedAnswers": [
      "この庭は名園として知られています。",
      "この庭は名園として知られています"
    ],
    "explanation": "この庭は名園として知られています。\n(このにわはめいえんとしてしられています。)\n名園: khu vườn nổi tiếng, đẹp"
  },
  {
    "id": "mc_156",
    "type": "multiple_choice",
    "question": "音声 có nghĩa là gì?",
    "word": "音声",
    "reading": "おんせい",
    "choices": [
      "tiến hành chiến tranh",
      "cây sugi, tuyết tùng Nhật Bản",
      "số điện thoại miễn cước cho người gọi",
      "giọng nói, âm thanh lời nói"
    ],
    "answer": "giọng nói, âm thanh lời nói",
    "explanation": "音声 (おんせい): giọng nói, âm thanh lời nói"
  },
  {
    "id": "fb_157",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "日本語の",
    "sentenceSuffix": "を聞いてください。",
    "choices": [
      "音声",
      "塀",
      "落ち込む",
      "うらやましい"
    ],
    "answer": "音声",
    "fullSentence": "日本語の音声を聞いてください。",
    "explanation": "日本語の音声を聞いてください。\nHãy nghe phần âm thanh tiếng Nhật.\n音声: giọng nói, âm thanh lời nói"
  },
  {
    "id": "tr_158",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Hãy nghe phần âm thanh tiếng Nhật.",
    "acceptedAnswers": [
      "日本語の音声を聞いてください。",
      "日本語の音声を聞いてください"
    ],
    "explanation": "日本語の音声を聞いてください。\n(にほんごのおんせいをきいてください。)\n音声: giọng nói, âm thanh lời nói"
  },
  {
    "id": "mc_159",
    "type": "multiple_choice",
    "question": "瓦 có nghĩa là gì?",
    "word": "瓦",
    "reading": "かわら",
    "choices": [
      "ngói",
      "nam và nữ",
      "tầm giờ này; giờ này rồi",
      "phía, bên…"
    ],
    "answer": "ngói",
    "explanation": "瓦 (かわら): ngói"
  },
  {
    "id": "fb_160",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "で屋根をふきます。",
    "choices": [
      "瓦",
      "唄",
      "印刷",
      "彫刻"
    ],
    "answer": "瓦",
    "fullSentence": "瓦で屋根をふきます。",
    "explanation": "瓦で屋根をふきます。\nNgười ta lợp mái bằng ngói.\n瓦: ngói"
  },
  {
    "id": "tr_161",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Người ta lợp mái bằng ngói.",
    "acceptedAnswers": [
      "瓦で屋根をふきます。",
      "瓦で屋根をふきます"
    ],
    "explanation": "瓦で屋根をふきます。\n(かわらでやねをふきます。)\n瓦: ngói"
  },
  {
    "id": "mc_162",
    "type": "multiple_choice",
    "question": "軒 có nghĩa là gì?",
    "word": "軒",
    "reading": "のき",
    "choices": [
      "nhé, nhỉ (trợ từ cuối câu thân mật)",
      "sàn gỗ, sàn lát ván",
      "phần mái chìa, mái hiên",
      "nhóm tuổi…; khoảng số…"
    ],
    "answer": "phần mái chìa, mái hiên",
    "explanation": "軒 (のき): phần mái chìa, mái hiên"
  },
  {
    "id": "fb_163",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "の下で雨がやむのを待ちます。",
    "choices": [
      "位置",
      "軒",
      "セメント",
      "雲"
    ],
    "answer": "軒",
    "fullSentence": "軒の下で雨がやむのを待ちます。",
    "explanation": "軒の下で雨がやむのを待ちます。\nTôi đợi mưa tạnh dưới mái hiên.\n軒: phần mái chìa, mái hiên"
  },
  {
    "id": "tr_164",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đợi mưa tạnh dưới mái hiên.",
    "acceptedAnswers": [
      "軒の下で雨がやむのを待ちます。",
      "軒の下で雨がやむのを待ちます"
    ],
    "explanation": "軒の下で雨がやむのを待ちます。\n(のきのしたであめがやむのをまちます。)\n軒: phần mái chìa, mái hiên"
  },
  {
    "id": "mc_165",
    "type": "multiple_choice",
    "question": "塀 có nghĩa là gì?",
    "word": "塀",
    "reading": "へい",
    "choices": [
      "bờ biển, bãi biển",
      "tường rào",
      "địa hình",
      "quả là, đúng là (như tiếng tăm/kỳ vọng)"
    ],
    "answer": "tường rào",
    "explanation": "塀 (へい): tường rào"
  },
  {
    "id": "fb_166",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "家は高い",
    "sentenceSuffix": "で囲まれています。",
    "choices": [
      "～末",
      "持ち上げる",
      "ミーティング",
      "塀"
    ],
    "answer": "塀",
    "fullSentence": "家は高い塀で囲まれています。",
    "explanation": "家は高い塀で囲まれています。\nNgôi nhà được bao quanh bằng tường rào cao.\n塀: tường rào"
  },
  {
    "id": "tr_167",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Ngôi nhà được bao quanh bằng tường rào cao.",
    "acceptedAnswers": [
      "家は高い塀で囲まれています。",
      "家は高い塀で囲まれています"
    ],
    "explanation": "家は高い塀で囲まれています。\n(いえはたかいへいでかこまれています。)\n塀: tường rào"
  },
  {
    "id": "mc_168",
    "type": "multiple_choice",
    "question": "石 có nghĩa là gì?",
    "word": "石",
    "reading": "いし",
    "choices": [
      "làm bẩn",
      "toa xe, phương tiện đường bộ/đường sắt",
      "đá, hòn đá",
      "bay hơi"
    ],
    "answer": "đá, hòn đá",
    "explanation": "石 (いし): đá, hòn đá"
  },
  {
    "id": "fb_169",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "川で丸い",
    "sentenceSuffix": "を拾いました。",
    "choices": [
      "ネット",
      "まく",
      "石",
      "ハーモニカ"
    ],
    "answer": "石",
    "fullSentence": "川で丸い石を拾いました。",
    "explanation": "川で丸い石を拾いました。\nTôi nhặt hòn đá tròn ở sông.\n石: đá, hòn đá"
  },
  {
    "id": "tr_170",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi nhặt hòn đá tròn ở sông.",
    "acceptedAnswers": [
      "川で丸い石を拾いました。",
      "川で丸い石を拾いました"
    ],
    "explanation": "川で丸い石を拾いました。\n(かわでまるいいしをひろいました。)\n石: đá, hòn đá"
  },
  {
    "id": "mc_171",
    "type": "multiple_choice",
    "question": "ふるさと có nghĩa là gì?",
    "word": "ふるさと",
    "reading": "ふるさと",
    "choices": [
      "vật/phép xua đuổi điều xấu, trừ tà",
      "đại diện, tiêu biểu cho",
      "quê hương",
      "toa Green, hạng ghế cao cấp hơn toa thường ở Nhật"
    ],
    "answer": "quê hương",
    "explanation": "ふるさと (ふるさと): quê hương"
  },
  {
    "id": "fb_172",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "正月に",
    "sentenceSuffix": "に帰ります。",
    "choices": [
      "着払い",
      "ふるさと",
      "カラフル",
      "掛け声"
    ],
    "answer": "ふるさと",
    "fullSentence": "正月にふるさとに帰ります。",
    "explanation": "正月にふるさとに帰ります。\nTết tôi về quê.\nふるさと: quê hương"
  },
  {
    "id": "tr_173",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tết tôi về quê.",
    "acceptedAnswers": [
      "正月にふるさとに帰ります。",
      "正月にふるさとに帰ります"
    ],
    "explanation": "正月にふるさとに帰ります。\n(しょうがつにふるさとにかえります。)\nふるさと: quê hương"
  },
  {
    "id": "mc_174",
    "type": "multiple_choice",
    "question": "合わせる có nghĩa là gì?",
    "word": "合わせる",
    "reading": "あわせる",
    "choices": [
      "thành phố, đô thị",
      "đương nhiên, tất nhiên",
      "điều chỉnh cho phù hợp; ghép, kết hợp",
      "địa hình"
    ],
    "answer": "điều chỉnh cho phù hợp; ghép, kết hợp",
    "explanation": "合わせる (あわせる): điều chỉnh cho phù hợp; ghép, kết hợp"
  },
  {
    "id": "tr_175",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Điều chỉnh sinh hoạt cho phù hợp với khí hậu.",
    "acceptedAnswers": [
      "生活を気候に合わせます。",
      "生活を気候に合わせます"
    ],
    "explanation": "生活を気候に合わせます。\n(せいかつをきこうにあわせます。)\n合わせる: điều chỉnh cho phù hợp; ghép, kết hợp"
  },
  {
    "id": "tr_176",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi ghép hai cái bàn lại.",
    "acceptedAnswers": [
      "二つの机を合わせます。",
      "二つの机を合わせます"
    ],
    "explanation": "二つの机を合わせます。\n(ふたつのつくえをあわせます。)\n合わせる: điều chỉnh cho phù hợp; ghép, kết hợp"
  },
  {
    "id": "mc_177",
    "type": "multiple_choice",
    "question": "日差し có nghĩa là gì?",
    "word": "日差し",
    "reading": "ひざし",
    "choices": [
      "ánh nắng chiếu xuống",
      "bờ biển",
      "dịch vụ chuyển phát tận nhà; kiện gửi qua dịch vụ đó",
      "làng"
    ],
    "answer": "ánh nắng chiếu xuống",
    "explanation": "日差し (ひざし): ánh nắng chiếu xuống"
  },
  {
    "id": "fb_178",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "昼は",
    "sentenceSuffix": "が強いです。",
    "choices": [
      "～センチ",
      "日差し",
      "本題",
      "女"
    ],
    "answer": "日差し",
    "fullSentence": "昼は日差しが強いです。",
    "explanation": "昼は日差しが強いです。\nBuổi trưa nắng gắt.\n日差し: ánh nắng chiếu xuống"
  },
  {
    "id": "tr_179",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Buổi trưa nắng gắt.",
    "acceptedAnswers": [
      "昼は日差しが強いです。",
      "昼は日差しが強いです"
    ],
    "explanation": "昼は日差しが強いです。\n(ひるはひざしがつよいです。)\n日差し: ánh nắng chiếu xuống"
  },
  {
    "id": "mc_180",
    "type": "multiple_choice",
    "question": "しっくい có nghĩa là gì?",
    "word": "しっくい",
    "reading": "しっくい",
    "choices": [
      "vữa vôi dùng trát tường",
      "thỏa đáng, đầy đủ; hài lòng",
      "đồ đã qua sử dụng",
      "đương nhiên, tất nhiên"
    ],
    "answer": "vữa vôi dùng trát tường",
    "explanation": "しっくい (しっくい): vữa vôi dùng trát tường"
  },
  {
    "id": "fb_181",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "壁に",
    "sentenceSuffix": "を塗ります。",
    "choices": [
      "しっくい",
      "数える",
      "メッセージ",
      "通話"
    ],
    "answer": "しっくい",
    "fullSentence": "壁にしっくいを塗ります。",
    "explanation": "壁にしっくいを塗ります。\nNgười ta trát vữa vôi lên tường.\nしっくい: vữa vôi dùng trát tường"
  },
  {
    "id": "tr_182",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Người ta trát vữa vôi lên tường.",
    "acceptedAnswers": [
      "壁にしっくいを塗ります。",
      "壁にしっくいを塗ります"
    ],
    "explanation": "壁にしっくいを塗ります。\n(かべにしっくいをぬります。)\nしっくい: vữa vôi dùng trát tường"
  },
  {
    "id": "mc_183",
    "type": "multiple_choice",
    "question": "セメント có nghĩa là gì?",
    "word": "セメント",
    "reading": "セメント",
    "choices": [
      "xi măng",
      "đặc sản địa phương",
      "rốt cuộc, không biết là… (nhấn câu hỏi)",
      "sàn gỗ, sàn lát ván"
    ],
    "answer": "xi măng",
    "explanation": "セメント (セメント): xi măng"
  },
  {
    "id": "fb_184",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "地面を",
    "sentenceSuffix": "で固めます。",
    "choices": [
      "もう少しで",
      "セメント",
      "タメ口",
      "載る"
    ],
    "answer": "セメント",
    "fullSentence": "地面をセメントで固めます。",
    "explanation": "地面をセメントで固めます。\nNgười ta làm cứng nền đất bằng xi măng.\nセメント: xi măng"
  },
  {
    "id": "tr_185",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Người ta làm cứng nền đất bằng xi măng.",
    "acceptedAnswers": [
      "地面をセメントで固めます。",
      "地面をセメントで固めます"
    ],
    "explanation": "地面をセメントで固めます。\n(じめんをセメントでかためます。)\nセメント: xi măng"
  },
  {
    "id": "mc_186",
    "type": "multiple_choice",
    "question": "固める có nghĩa là gì?",
    "word": "固める",
    "reading": "かためる",
    "choices": [
      "làm cứng, làm đông; củng cố",
      "ùn tắc",
      "cảm thấy, có cảm giác rằng…",
      "vấn đề/chủ đề chính"
    ],
    "answer": "làm cứng, làm đông; củng cố",
    "explanation": "固める (かためる): làm cứng, làm đông; củng cố"
  },
  {
    "id": "tr_187",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Làm lạnh cho thạch đông lại.",
    "acceptedAnswers": [
      "冷やしてゼリーを固めます。",
      "冷やしてゼリーを固めます"
    ],
    "explanation": "冷やしてゼリーを固めます。\n(ひやしてゼリーをかためます。)\n固める: làm cứng, làm đông; củng cố"
  },
  {
    "id": "tr_188",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đã quyết tâm đi du học.",
    "acceptedAnswers": [
      "留学する決意を固めました。",
      "留学する決意を固めました"
    ],
    "explanation": "留学する決意を固めました。\n(りゅうがくするけついをかためました。)\n固める: làm cứng, làm đông; củng cố"
  },
  {
    "id": "mc_189",
    "type": "multiple_choice",
    "question": "鉄筋 có nghĩa là gì?",
    "word": "鉄筋",
    "reading": "てっきん",
    "choices": [
      "chiều lên; chiều tàu đi về đầu mối/trung tâm của tuyến",
      "cốt thép",
      "háo hức, hồi hộp vui sướng",
      "tha thứ; cho phép"
    ],
    "answer": "cốt thép",
    "explanation": "鉄筋 (てっきん): cốt thép"
  },
  {
    "id": "fb_190",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この建物は",
    "sentenceSuffix": "コンクリートでできています。",
    "choices": [
      "頑固",
      "鉄筋",
      "登場人物",
      "ほっぺた"
    ],
    "answer": "鉄筋",
    "fullSentence": "この建物は鉄筋コンクリートでできています。",
    "explanation": "この建物は鉄筋コンクリートでできています。\nTòa nhà này được làm bằng bê tông cốt thép.\n鉄筋: cốt thép"
  },
  {
    "id": "tr_191",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tòa nhà này được làm bằng bê tông cốt thép.",
    "acceptedAnswers": [
      "この建物は鉄筋コンクリートでできています。",
      "この建物は鉄筋コンクリートでできています"
    ],
    "explanation": "この建物は鉄筋コンクリートでできています。\n(このたてものはてっきんコンクリートでできています。)\n鉄筋: cốt thép"
  },
  {
    "id": "mc_192",
    "type": "multiple_choice",
    "question": "コンクリート có nghĩa là gì?",
    "word": "コンクリート",
    "reading": "コンクリート",
    "choices": [
      "tháp chính cao trong thành Nhật",
      "bê tông",
      "trở lại, được trả lại",
      "nước máy"
    ],
    "answer": "bê tông",
    "explanation": "コンクリート (コンクリート): bê tông"
  },
  {
    "id": "fb_193",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "でできた橋を渡ります。",
    "choices": [
      "コンクリート",
      "一筆箋",
      "回収",
      "ハプニング"
    ],
    "answer": "コンクリート",
    "fullSentence": "コンクリートでできた橋を渡ります。",
    "explanation": "コンクリートでできた橋を渡ります。\nTôi đi qua cầu bê tông.\nコンクリート: bê tông"
  },
  {
    "id": "tr_194",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đi qua cầu bê tông.",
    "acceptedAnswers": [
      "コンクリートでできた橋を渡ります。",
      "コンクリートでできた橋を渡ります"
    ],
    "explanation": "コンクリートでできた橋を渡ります。\n(コンクリートでできたはしをわたります。)\nコンクリート: bê tông"
  },
  {
    "id": "mc_195",
    "type": "multiple_choice",
    "question": "気象 có nghĩa là gì?",
    "word": "気象",
    "reading": "きしょう",
    "choices": [
      "khí tượng, hiện tượng thời tiết",
      "ầm ầm, tiếng vang lớn kéo dài",
      "một ngày nào đó, lúc nào đó",
      "chịu đựng, nhịn"
    ],
    "answer": "khí tượng, hiện tượng thời tiết",
    "explanation": "気象 (きしょう): khí tượng, hiện tượng thời tiết"
  },
  {
    "id": "fb_196",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "出かける前に",
    "sentenceSuffix": "情報を確認します。",
    "choices": [
      "タイトル",
      "気象",
      "トンネル",
      "盛ん"
    ],
    "answer": "気象",
    "fullSentence": "出かける前に気象情報を確認します。",
    "explanation": "出かける前に気象情報を確認します。\nTôi kiểm tra thông tin thời tiết trước khi ra ngoài.\n気象: khí tượng, hiện tượng thời tiết"
  },
  {
    "id": "tr_197",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi kiểm tra thông tin thời tiết trước khi ra ngoài.",
    "acceptedAnswers": [
      "出かける前に気象情報を確認します。",
      "出かける前に気象情報を確認します"
    ],
    "explanation": "出かける前に気象情報を確認します。\n(でかけるまえにきしょうじょうほうをかくにんします。)\n気象: khí tượng, hiện tượng thời tiết"
  },
  {
    "id": "mc_198",
    "type": "multiple_choice",
    "question": "小論文 có nghĩa là gì?",
    "word": "小論文",
    "reading": "しょうろんぶん",
    "choices": [
      "chảy xuống, tuôn xuống",
      "cả… đều",
      "hiểu lầm",
      "bài luận ngắn"
    ],
    "answer": "bài luận ngắn",
    "explanation": "小論文 (しょうろんぶん): bài luận ngắn"
  },
  {
    "id": "fb_199",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "環境について",
    "sentenceSuffix": "を書きます。",
    "choices": [
      "地元",
      "小論文",
      "電子マネー",
      "世界自然遺産"
    ],
    "answer": "小論文",
    "fullSentence": "環境について小論文を書きます。",
    "explanation": "環境について小論文を書きます。\nTôi viết bài luận ngắn về môi trường.\n小論文: bài luận ngắn"
  },
  {
    "id": "tr_200",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi viết bài luận ngắn về môi trường.",
    "acceptedAnswers": [
      "環境について小論文を書きます。",
      "環境について小論文を書きます"
    ],
    "explanation": "環境について小論文を書きます。\n(かんきょうについてしょうろんぶんをかきます。)\n小論文: bài luận ngắn"
  },
  {
    "id": "mc_201",
    "type": "multiple_choice",
    "question": "畳 có nghĩa là gì?",
    "word": "畳",
    "reading": "たたみ",
    "choices": [
      "chiếu tatami",
      "nhảy bật lên, bay lên",
      "trở nên phổ biến, được phổ cập",
      "ngoài…, trừ…"
    ],
    "answer": "chiếu tatami",
    "explanation": "畳 (たたみ): chiếu tatami"
  },
  {
    "id": "fb_202",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この部屋には",
    "sentenceSuffix": "が敷いてあります。",
    "choices": [
      "回収",
      "個性",
      "上り",
      "畳"
    ],
    "answer": "畳",
    "fullSentence": "この部屋には畳が敷いてあります。",
    "explanation": "この部屋には畳が敷いてあります。\nPhòng này có trải chiếu tatami.\n畳: chiếu tatami"
  },
  {
    "id": "tr_203",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Phòng này có trải chiếu tatami.",
    "acceptedAnswers": [
      "この部屋には畳が敷いてあります。",
      "この部屋には畳が敷いてあります"
    ],
    "explanation": "この部屋には畳が敷いてあります。\n(このへやにはたたみがしいてあります。)\n畳: chiếu tatami"
  },
  {
    "id": "mc_204",
    "type": "multiple_choice",
    "question": "フローリング có nghĩa là gì?",
    "word": "フローリング",
    "reading": "フローリング",
    "choices": [
      "sàn gỗ, sàn lát ván",
      "cách nói suồng sã, ngang hàng, không dùng kính ngữ",
      "tích tụ, chất lên (tuyết, bụi…)",
      "kỳ vọng, mong đợi"
    ],
    "answer": "sàn gỗ, sàn lát ván",
    "explanation": "フローリング (フローリング): sàn gỗ, sàn lát ván"
  },
  {
    "id": "fb_205",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "の部屋に住んでいます。",
    "choices": [
      "名産品",
      "違和感",
      "フローリング",
      "鉄筋"
    ],
    "answer": "フローリング",
    "fullSentence": "フローリングの部屋に住んでいます。",
    "explanation": "フローリングの部屋に住んでいます。\nTôi sống trong phòng lát sàn gỗ.\nフローリング: sàn gỗ, sàn lát ván"
  },
  {
    "id": "tr_206",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi sống trong phòng lát sàn gỗ.",
    "acceptedAnswers": [
      "フローリングの部屋に住んでいます。",
      "フローリングの部屋に住んでいます"
    ],
    "explanation": "フローリングの部屋に住んでいます。\n(フローリングのへやにすんでいます。)\nフローリング: sàn gỗ, sàn lát ván"
  },
  {
    "id": "mc_207",
    "type": "multiple_choice",
    "question": "現金 có nghĩa là gì?",
    "word": "現金",
    "reading": "げんきん",
    "choices": [
      "về nhà",
      "bờ biển",
      "đầy ấn tượng mạnh, rất hùng tráng/ngoạn mục",
      "tiền mặt"
    ],
    "answer": "tiền mặt",
    "explanation": "現金 (げんきん): tiền mặt"
  },
  {
    "id": "fb_208",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "で払ってもいいですか。",
    "choices": [
      "現金",
      "奪う",
      "満足",
      "積もる"
    ],
    "answer": "現金",
    "fullSentence": "現金で払ってもいいですか。",
    "explanation": "現金で払ってもいいですか。\nTôi trả bằng tiền mặt được không?\n現金: tiền mặt"
  },
  {
    "id": "tr_209",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi trả bằng tiền mặt được không?",
    "acceptedAnswers": [
      "現金で払ってもいいですか。",
      "現金で払ってもいいですか"
    ],
    "explanation": "現金で払ってもいいですか。\n(げんきんではらってもいいですか。)\n現金: tiền mặt"
  },
  {
    "id": "mc_210",
    "type": "multiple_choice",
    "question": "電子マネー có nghĩa là gì?",
    "word": "電子マネー",
    "reading": "でんしマネー",
    "choices": [
      "đánh dấu",
      "sống, sinh sống",
      "tiền điện tử dùng thanh toán",
      "nhé, nhỉ (trợ từ cuối câu thân mật)"
    ],
    "answer": "tiền điện tử dùng thanh toán",
    "explanation": "電子マネー (でんしマネー): tiền điện tử dùng thanh toán"
  },
  {
    "id": "fb_211",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "で支払います。",
    "choices": [
      "小論文",
      "顔が広い",
      "電子マネー",
      "神秘的"
    ],
    "answer": "電子マネー",
    "fullSentence": "電子マネーで支払います。",
    "explanation": "電子マネーで支払います。\nTôi thanh toán bằng tiền điện tử.\n電子マネー: tiền điện tử dùng thanh toán"
  },
  {
    "id": "tr_212",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi thanh toán bằng tiền điện tử.",
    "acceptedAnswers": [
      "電子マネーで支払います。",
      "電子マネーで支払います"
    ],
    "explanation": "電子マネーで支払います。\n(でんしマネーでしはらいます。)\n電子マネー: tiền điện tử dùng thanh toán"
  },
  {
    "id": "mc_213",
    "type": "multiple_choice",
    "question": "アドバイス có nghĩa là gì?",
    "word": "アドバイス",
    "reading": "アドバイス",
    "choices": [
      "thác nước",
      "khuyên, đưa ra lời khuyên",
      "điểm; khía cạnh, mặt",
      "bây giờ thì mới/đúng là… nhưng trước đây…"
    ],
    "answer": "khuyên, đưa ra lời khuyên",
    "explanation": "アドバイス (アドバイス): khuyên, đưa ra lời khuyên"
  },
  {
    "id": "fb_214",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "先生が私に",
    "sentenceSuffix": "してくれました。",
    "choices": [
      "豊かさ",
      "かみさん",
      "浜",
      "アドバイス"
    ],
    "answer": "アドバイス",
    "fullSentence": "先生が私にアドバイスしてくれました。",
    "explanation": "先生が私にアドバイスしてくれました。\nThầy đã cho tôi lời khuyên.\nアドバイス: khuyên, đưa ra lời khuyên"
  },
  {
    "id": "tr_215",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Thầy đã cho tôi lời khuyên.",
    "acceptedAnswers": [
      "先生が私にアドバイスしてくれました。",
      "先生が私にアドバイスしてくれました"
    ],
    "explanation": "先生が私にアドバイスしてくれました。\n(せんせいがわたしにアドバイスしてくれました。)\nアドバイス: khuyên, đưa ra lời khuyên"
  },
  {
    "id": "fb_216",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "先輩から",
    "sentenceSuffix": "をもらいました。",
    "choices": [
      "アドバイス",
      "ぐっと",
      "便箋",
      "励ます"
    ],
    "answer": "アドバイス",
    "fullSentence": "先輩からアドバイスをもらいました。",
    "explanation": "先輩からアドバイスをもらいました。\nTôi nhận lời khuyên từ tiền bối.\nアドバイス: khuyên, đưa ra lời khuyên"
  },
  {
    "id": "tr_217",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi nhận lời khuyên từ tiền bối.",
    "acceptedAnswers": [
      "先輩からアドバイスをもらいました。",
      "先輩からアドバイスをもらいました"
    ],
    "explanation": "先輩からアドバイスをもらいました。\n(せんぱいからアドバイスをもらいました。)\nアドバイス: khuyên, đưa ra lời khuyên"
  },
  {
    "id": "mc_218",
    "type": "multiple_choice",
    "question": "体調 có nghĩa là gì?",
    "word": "体調",
    "reading": "たいちょう",
    "choices": [
      "động viên, khích lệ",
      "tình trạng sức khỏe",
      "oi bức, nóng và ẩm",
      "làm xong, giải quyết xong; làm cho qua bằng…"
    ],
    "answer": "tình trạng sức khỏe",
    "explanation": "体調 (たいちょう): tình trạng sức khỏe"
  },
  {
    "id": "fb_219",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "今日は",
    "sentenceSuffix": "が悪いです。",
    "choices": [
      "体調",
      "満足",
      "優勝",
      "音声"
    ],
    "answer": "体調",
    "fullSentence": "今日は体調が悪いです。",
    "explanation": "今日は体調が悪いです。\nHôm nay tôi không khỏe.\n体調: tình trạng sức khỏe"
  },
  {
    "id": "tr_220",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Hôm nay tôi không khỏe.",
    "acceptedAnswers": [
      "今日は体調が悪いです。",
      "今日は体調が悪いです"
    ],
    "explanation": "今日は体調が悪いです。\n(きょうはたいちょうがわるいです。)\n体調: tình trạng sức khỏe"
  },
  {
    "id": "fb_221",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "忙しくて",
    "sentenceSuffix": "を崩しました。",
    "choices": [
      "体調",
      "まるで",
      "揚げる",
      "友人"
    ],
    "answer": "体調",
    "fullSentence": "忙しくて体調を崩しました。",
    "explanation": "忙しくて体調を崩しました。\nVì bận rộn nên tôi đổ bệnh.\n体調: tình trạng sức khỏe"
  },
  {
    "id": "tr_222",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Vì bận rộn nên tôi đổ bệnh.",
    "acceptedAnswers": [
      "忙しくて体調を崩しました。",
      "忙しくて体調を崩しました"
    ],
    "explanation": "忙しくて体調を崩しました。\n(いそがしくてたいちょうをくずしました。)\n体調: tình trạng sức khỏe"
  },
  {
    "id": "mc_223",
    "type": "multiple_choice",
    "question": "なんだか có nghĩa là gì?",
    "word": "なんだか",
    "reading": "なんだか",
    "choices": [
      "xuất phát từ…; khởi hành lúc…",
      "in",
      "không hiểu sao, có cảm giác…",
      "gói quà"
    ],
    "answer": "không hiểu sao, có cảm giác…",
    "explanation": "なんだか (なんだか): không hiểu sao, có cảm giác…"
  },
  {
    "id": "fb_224",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "今日は眠いです。",
    "choices": [
      "なんだか",
      "積もる",
      "柿",
      "女子高生"
    ],
    "answer": "なんだか",
    "fullSentence": "なんだか今日は眠いです。",
    "explanation": "なんだか今日は眠いです。\nKhông hiểu sao hôm nay tôi buồn ngủ.\nなんだか: không hiểu sao, có cảm giác…"
  },
  {
    "id": "tr_225",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Không hiểu sao hôm nay tôi buồn ngủ.",
    "acceptedAnswers": [
      "なんだか今日は眠いです。",
      "なんだか今日は眠いです"
    ],
    "explanation": "なんだか今日は眠いです。\n(なんだかきょうはねむいです。)\nなんだか: không hiểu sao, có cảm giác…"
  },
  {
    "id": "mc_226",
    "type": "multiple_choice",
    "question": "和菓子 có nghĩa là gì?",
    "word": "和菓子",
    "reading": "わがし",
    "choices": [
      "cách dùng từ, cách nói năng",
      "biển và đại dương",
      "đông đúc, nhộn nhịp",
      "bánh kẹo truyền thống Nhật Bản"
    ],
    "answer": "bánh kẹo truyền thống Nhật Bản",
    "explanation": "和菓子 (わがし): bánh kẹo truyền thống Nhật Bản"
  },
  {
    "id": "fb_227",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "お茶と一緒に",
    "sentenceSuffix": "を食べます。",
    "choices": [
      "感動",
      "村",
      "生きる",
      "和菓子"
    ],
    "answer": "和菓子",
    "fullSentence": "お茶と一緒に和菓子を食べます。",
    "explanation": "お茶と一緒に和菓子を食べます。\nTôi ăn bánh Nhật cùng trà.\n和菓子: bánh kẹo truyền thống Nhật Bản"
  },
  {
    "id": "tr_228",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi ăn bánh Nhật cùng trà.",
    "acceptedAnswers": [
      "お茶と一緒に和菓子を食べます。",
      "お茶と一緒に和菓子を食べます"
    ],
    "explanation": "お茶と一緒に和菓子を食べます。\n(おちゃといっしょにわがしをたべます。)\n和菓子: bánh kẹo truyền thống Nhật Bản"
  },
  {
    "id": "mc_229",
    "type": "multiple_choice",
    "question": "港 có nghĩa là gì?",
    "word": "港",
    "reading": "みなと",
    "choices": [
      "cảng, bến cảng",
      "hóa thạch",
      "ếch",
      "họp"
    ],
    "answer": "cảng, bến cảng",
    "explanation": "港 (みなと): cảng, bến cảng"
  },
  {
    "id": "fb_230",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "船が",
    "sentenceSuffix": "に着きました。",
    "choices": [
      "瞬間",
      "数",
      "天守閣",
      "港"
    ],
    "answer": "港",
    "fullSentence": "船が港に着きました。",
    "explanation": "船が港に着きました。\nTàu đã cập cảng.\n港: cảng, bến cảng"
  },
  {
    "id": "tr_231",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tàu đã cập cảng.",
    "acceptedAnswers": [
      "船が港に着きました。",
      "船が港に着きました"
    ],
    "explanation": "船が港に着きました。\n(ふねがみなとにつきました。)\n港: cảng, bến cảng"
  },
  {
    "id": "mc_232",
    "type": "multiple_choice",
    "question": "栄える có nghĩa là gì?",
    "word": "栄える",
    "reading": "さかえる",
    "choices": [
      "phát triển thịnh vượng",
      "quê hương",
      "lao ra, nhảy ra, bất ngờ xuất hiện",
      "chó hỗ trợ người khuyết tật vận động"
    ],
    "answer": "phát triển thịnh vượng",
    "explanation": "栄える (さかえる): phát triển thịnh vượng"
  },
  {
    "id": "tr_233",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Thị trấn này từng phát triển thịnh vượng như một đô thị cảng.",
    "acceptedAnswers": [
      "この町は港町として栄えました。",
      "この町は港町として栄えました"
    ],
    "explanation": "この町は港町として栄えました。\n(このまちはみなとまちとしてさかえました。)\n栄える: phát triển thịnh vượng"
  },
  {
    "id": "mc_234",
    "type": "multiple_choice",
    "question": "現在 có nghĩa là gì?",
    "word": "現在",
    "reading": "げんざい",
    "choices": [
      "sàn gỗ, sàn lát ván",
      "hiện tại, hiện nay",
      "câu đố, trò đố vui",
      "ngày hội mở cửa trường cho người muốn tìm hiểu/tuyển sinh"
    ],
    "answer": "hiện tại, hiện nay",
    "explanation": "現在 (げんざい): hiện tại, hiện nay"
  },
  {
    "id": "fb_235",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "の仕事は楽しいです。",
    "choices": [
      "地形",
      "口々に",
      "現在",
      "見どころ"
    ],
    "answer": "現在",
    "fullSentence": "現在の仕事は楽しいです。",
    "explanation": "現在の仕事は楽しいです。\nCông việc hiện tại của tôi rất vui.\n現在: hiện tại, hiện nay"
  },
  {
    "id": "tr_236",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Công việc hiện tại của tôi rất vui.",
    "acceptedAnswers": [
      "現在の仕事は楽しいです。",
      "現在の仕事は楽しいです"
    ],
    "explanation": "現在の仕事は楽しいです。\n(げんざいのしごとはたのしいです。)\n現在: hiện tại, hiện nay"
  },
  {
    "id": "mc_237",
    "type": "multiple_choice",
    "question": "人口 có nghĩa là gì?",
    "word": "人口",
    "reading": "じんこう",
    "choices": [
      "đặc sản địa phương",
      "bay hơi",
      "sống, tồn tại",
      "dân số"
    ],
    "answer": "dân số",
    "explanation": "人口 (じんこう): dân số"
  },
  {
    "id": "fb_238",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この町は",
    "sentenceSuffix": "が減っています。",
    "choices": [
      "女",
      "言葉遣い",
      "変",
      "人口"
    ],
    "answer": "人口",
    "fullSentence": "この町は人口が減っています。",
    "explanation": "この町は人口が減っています。\nDân số thị trấn này đang giảm.\n人口: dân số"
  },
  {
    "id": "tr_239",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Dân số thị trấn này đang giảm.",
    "acceptedAnswers": [
      "この町は人口が減っています。",
      "この町は人口が減っています"
    ],
    "explanation": "この町は人口が減っています。\n(このまちはじんこうがへっています。)\n人口: dân số"
  },
  {
    "id": "mc_240",
    "type": "multiple_choice",
    "question": "都市 có nghĩa là gì?",
    "word": "都市",
    "reading": "とし",
    "choices": [
      "bay hơi",
      "thời gian cần để hoàn thành hành trình/công việc",
      "thành phố, đô thị",
      "mạng Internet (viết tắt của インターネット)"
    ],
    "answer": "thành phố, đô thị",
    "explanation": "都市 (とし): thành phố, đô thị"
  },
  {
    "id": "fb_241",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "大きな",
    "sentenceSuffix": "に住みたいです。",
    "choices": [
      "都市",
      "一部",
      "若々しい",
      "ドレス"
    ],
    "answer": "都市",
    "fullSentence": "大きな都市に住みたいです。",
    "explanation": "大きな都市に住みたいです。\nTôi muốn sống ở thành phố lớn.\n都市: thành phố, đô thị"
  },
  {
    "id": "tr_242",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi muốn sống ở thành phố lớn.",
    "acceptedAnswers": [
      "大きな都市に住みたいです。",
      "大きな都市に住みたいです"
    ],
    "explanation": "大きな都市に住みたいです。\n(おおきなとしにすみたいです。)\n都市: thành phố, đô thị"
  },
  {
    "id": "mc_243",
    "type": "multiple_choice",
    "question": "県庁 có nghĩa là gì?",
    "word": "県庁",
    "reading": "けんちょう",
    "choices": [
      "sản xuất, chế tạo",
      "thương mại",
      "hoàn toàn; hoàn toàn không (với phủ định)",
      "cơ quan/trụ sở chính quyền cấp tỉnh của Nhật"
    ],
    "answer": "cơ quan/trụ sở chính quyền cấp tỉnh của Nhật",
    "explanation": "県庁 (けんちょう): cơ quan/trụ sở chính quyền cấp tỉnh của Nhật"
  },
  {
    "id": "fb_244",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "兄は",
    "sentenceSuffix": "で働いています。",
    "choices": [
      "県庁",
      "～発",
      "添える",
      "若々しい"
    ],
    "answer": "県庁",
    "fullSentence": "兄は県庁で働いています。",
    "explanation": "兄は県庁で働いています。\nAnh tôi làm việc ở cơ quan chính quyền tỉnh.\n県庁: cơ quan/trụ sở chính quyền cấp tỉnh của Nhật"
  },
  {
    "id": "tr_245",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Anh tôi làm việc ở cơ quan chính quyền tỉnh.",
    "acceptedAnswers": [
      "兄は県庁で働いています。",
      "兄は県庁で働いています"
    ],
    "explanation": "兄は県庁で働いています。\n(あにはけんちょうではたらいています。)\n県庁: cơ quan/trụ sở chính quyền cấp tỉnh của Nhật"
  },
  {
    "id": "mc_246",
    "type": "multiple_choice",
    "question": "～周辺 có nghĩa là gì?",
    "word": "～周辺",
    "reading": "～しゅうへん",
    "choices": [
      "phán đoán, quyết định dựa trên thông tin",
      "hành khách trên phương tiện",
      "những người cùng… với nhau",
      "khu vực xung quanh…"
    ],
    "answer": "khu vực xung quanh…",
    "explanation": "～周辺 (～しゅうへん): khu vực xung quanh…"
  },
  {
    "id": "tr_247",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Quanh ga có nhiều cửa hàng.",
    "acceptedAnswers": [
      "駅周辺に店がたくさんあります。",
      "駅周辺に店がたくさんあります"
    ],
    "explanation": "駅周辺に店がたくさんあります。\n(えきしゅうへんにみせがたくさんあります。)\n～周辺: khu vực xung quanh…"
  },
  {
    "id": "mc_248",
    "type": "multiple_choice",
    "question": "地区 có nghĩa là gì?",
    "word": "地区",
    "reading": "ちく",
    "choices": [
      "cất công, đặc biệt dành công sức để làm",
      "chọn dùng khác nhau tùy tình huống",
      "khu vực, địa bàn",
      "phát triển thịnh vượng"
    ],
    "answer": "khu vực, địa bàn",
    "explanation": "地区 (ちく): khu vực, địa bàn"
  },
  {
    "id": "fb_249",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この",
    "sentenceSuffix": "では祭りが行われます。",
    "choices": [
      "延びる",
      "地区",
      "使い分ける",
      "一気に"
    ],
    "answer": "地区",
    "fullSentence": "この地区では祭りが行われます。",
    "explanation": "この地区では祭りが行われます。\nLễ hội được tổ chức ở khu vực này.\n地区: khu vực, địa bàn"
  },
  {
    "id": "tr_250",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Lễ hội được tổ chức ở khu vực này.",
    "acceptedAnswers": [
      "この地区では祭りが行われます。",
      "この地区では祭りが行われます"
    ],
    "explanation": "この地区では祭りが行われます。\n(このちくではまつりがおこなわれます。)\n地区: khu vực, địa bàn"
  },
  {
    "id": "mc_251",
    "type": "multiple_choice",
    "question": "商業 có nghĩa là gì?",
    "word": "商業",
    "reading": "しょうぎょう",
    "choices": [
      "khởi hành",
      "thế hệ",
      "thương mại",
      "chữ, ký tự"
    ],
    "answer": "thương mại",
    "explanation": "商業 (しょうぎょう): thương mại"
  },
  {
    "id": "fb_252",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この都市は",
    "sentenceSuffix": "が盛んです。",
    "choices": [
      "トレッキング",
      "商業",
      "トラック",
      "栄える"
    ],
    "answer": "商業",
    "fullSentence": "この都市は商業が盛んです。",
    "explanation": "この都市は商業が盛んです。\nThương mại ở thành phố này rất phát triển.\n商業: thương mại"
  },
  {
    "id": "tr_253",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Thương mại ở thành phố này rất phát triển.",
    "acceptedAnswers": [
      "この都市は商業が盛んです。",
      "この都市は商業が盛んです"
    ],
    "explanation": "この都市は商業が盛んです。\n(このとしはしょうぎょうがさかんです。)\n商業: thương mại"
  },
  {
    "id": "mc_254",
    "type": "multiple_choice",
    "question": "砂浜 có nghĩa là gì?",
    "word": "砂浜",
    "reading": "すなはま",
    "choices": [
      "bãi biển cát",
      "tinh ý, chu đáo, biết ý",
      "thu gom, thu hồi",
      "nhỏ, nho nhỏ, không lớn"
    ],
    "answer": "bãi biển cát",
    "explanation": "砂浜 (すなはま): bãi biển cát"
  },
  {
    "id": "fb_255",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "朝、",
    "sentenceSuffix": "を歩きます。",
    "choices": [
      "かける（迷惑をかける）",
      "顔が広い",
      "砂浜",
      "かける（リボンをかける）"
    ],
    "answer": "砂浜",
    "fullSentence": "朝、砂浜を歩きます。",
    "explanation": "朝、砂浜を歩きます。\nBuổi sáng tôi đi dạo trên bãi cát.\n砂浜: bãi biển cát"
  },
  {
    "id": "tr_256",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Buổi sáng tôi đi dạo trên bãi cát.",
    "acceptedAnswers": [
      "朝、砂浜を歩きます。",
      "朝、砂浜を歩きます"
    ],
    "explanation": "朝、砂浜を歩きます。\n(あさ、すなはまをあるきます。)\n砂浜: bãi biển cát"
  },
  {
    "id": "mc_257",
    "type": "multiple_choice",
    "question": "～年代 có nghĩa là gì?",
    "word": "～年代",
    "reading": "～ねんだい",
    "choices": [
      "những năm…; giai đoạn…",
      "cuộc gặp gỡ, cơ duyên gặp",
      "nam, đàn ông, con trai",
      "xe tải"
    ],
    "answer": "những năm…; giai đoạn…",
    "explanation": "～年代 (～ねんだい): những năm…; giai đoạn…"
  },
  {
    "id": "tr_258",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Bài hát này thịnh hành trong những năm 1990.",
    "acceptedAnswers": [
      "この歌は一九九〇年代に流行しました。",
      "この歌は一九九〇年代に流行しました"
    ],
    "explanation": "この歌は一九九〇年代に流行しました。\n(このうたはせんきゅうひゃくきゅうじゅうねんだいにりゅうこうしました。)\n～年代: những năm…; giai đoạn…"
  },
  {
    "id": "mc_259",
    "type": "multiple_choice",
    "question": "～街 có nghĩa là gì?",
    "word": "～街",
    "reading": "～がい",
    "choices": [
      "đôi khi, cũng có lúc",
      "tuyệt vời",
      "khu phố…",
      "tháp"
    ],
    "answer": "khu phố…",
    "explanation": "～街 (～がい): khu phố…"
  },
  {
    "id": "tr_260",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi ăn trưa ở phố người Hoa.",
    "acceptedAnswers": [
      "中華街で昼ご飯を食べました。",
      "中華街で昼ご飯を食べました"
    ],
    "explanation": "中華街で昼ご飯を食べました。\n(ちゅうかがいでひるごはんをたべました。)\n～街: khu phố…"
  },
  {
    "id": "mc_261",
    "type": "multiple_choice",
    "question": "タワー có nghĩa là gì?",
    "word": "タワー",
    "reading": "タワー",
    "choices": [
      "trạng thái không mặc quần áo, trần truồng",
      "tháp",
      "xuất phát từ…; khởi hành lúc…",
      "ruy băng, dây nơ"
    ],
    "answer": "tháp",
    "explanation": "タワー (タワー): tháp"
  },
  {
    "id": "fb_262",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "に上って夜景を見ます。",
    "choices": [
      "合わせる",
      "薦める",
      "タワー",
      "一生"
    ],
    "answer": "タワー",
    "fullSentence": "タワーに上って夜景を見ます。",
    "explanation": "タワーに上って夜景を見ます。\nTôi lên tháp ngắm cảnh đêm.\nタワー: tháp"
  },
  {
    "id": "tr_263",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi lên tháp ngắm cảnh đêm.",
    "acceptedAnswers": [
      "タワーに上って夜景を見ます。",
      "タワーに上って夜景を見ます"
    ],
    "explanation": "タワーに上って夜景を見ます。\n(タワーにのぼってやけいをみます。)\nタワー: tháp"
  },
  {
    "id": "mc_264",
    "type": "multiple_choice",
    "question": "今では có nghĩa là gì?",
    "word": "今では",
    "reading": "いまでは",
    "choices": [
      "vấn đề/chủ đề chính",
      "thành phố, đô thị",
      "hỏi, hỏi thăm thông tin",
      "giờ đây, hiện nay (khác với trước)"
    ],
    "answer": "giờ đây, hiện nay (khác với trước)",
    "explanation": "今では (いまでは): giờ đây, hiện nay (khác với trước)"
  },
  {
    "id": "fb_265",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "昔は静かでしたが、",
    "sentenceSuffix": "にぎやかです。",
    "choices": [
      "今では",
      "出店",
      "往復",
      "奥"
    ],
    "answer": "今では",
    "fullSentence": "昔は静かでしたが、今ではにぎやかです。",
    "explanation": "昔は静かでしたが、今ではにぎやかです。\nTrước kia yên tĩnh, nhưng giờ đây rất nhộn nhịp.\n今では: giờ đây, hiện nay (khác với trước)"
  },
  {
    "id": "tr_266",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Trước kia yên tĩnh, nhưng giờ đây rất nhộn nhịp.",
    "acceptedAnswers": [
      "昔は静かでしたが、今ではにぎやかです。",
      "昔は静かでしたが、今ではにぎやかです"
    ],
    "explanation": "昔は静かでしたが、今ではにぎやかです。\n(むかしはしずかでしたが、いまではにぎやかです。)\n今では: giờ đây, hiện nay (khác với trước)"
  },
  {
    "id": "mc_267",
    "type": "multiple_choice",
    "question": "訪れる có nghĩa là gì?",
    "word": "訪れる",
    "reading": "おとずれる",
    "choices": [
      "bỏ/ngừng hút thuốc",
      "ngực; lòng, tâm trạng",
      "ghé thăm; (mùa, thời điểm) đến",
      "cây sugi, tuyết tùng Nhật Bản"
    ],
    "answer": "ghé thăm; (mùa, thời điểm) đến",
    "explanation": "訪れる (おとずれる): ghé thăm; (mùa, thời điểm) đến"
  },
  {
    "id": "tr_268",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Mỗi năm tôi ghé thăm Kyoto.",
    "acceptedAnswers": [
      "毎年、京都を訪れます。",
      "毎年、京都を訪れます"
    ],
    "explanation": "毎年、京都を訪れます。\n(まいとし、きょうとをおとずれます。)\n訪れる: ghé thăm; (mùa, thời điểm) đến"
  },
  {
    "id": "tr_269",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Mùa xuân cũng đã đến thị trấn này.",
    "acceptedAnswers": [
      "この町にも春が訪れました。",
      "この町にも春が訪れました"
    ],
    "explanation": "この町にも春が訪れました。\n(このまちにもはるがおとずれました。)\n訪れる: ghé thăm; (mùa, thời điểm) đến"
  },
  {
    "id": "mc_270",
    "type": "multiple_choice",
    "question": "延びる có nghĩa là gì?",
    "word": "延びる",
    "reading": "のびる",
    "choices": [
      "việc thả diều",
      "phía trong sâu, phía cuối",
      "kéo dài, mở rộng; bị dời lại",
      "không hiểu sao, có vẻ; như…, chẳng hạn… (khẩu ngữ)"
    ],
    "answer": "kéo dài, mở rộng; bị dời lại",
    "explanation": "延びる (のびる): kéo dài, mở rộng; bị dời lại"
  },
  {
    "id": "tr_271",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Thời gian thi công đã kéo dài.",
    "acceptedAnswers": [
      "工事の期間が延びました。",
      "工事の期間が延びました"
    ],
    "explanation": "工事の期間が延びました。\n(こうじのきかんがのびました。)\n延びる: kéo dài, mở rộng; bị dời lại"
  },
  {
    "id": "tr_272",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Cuộc họp bị dời sang tuần sau.",
    "acceptedAnswers": [
      "会議が来週に延びました。",
      "会議が来週に延びました"
    ],
    "explanation": "会議が来週に延びました。\n(かいぎがらいしゅうにのびました。)\n延びる: kéo dài, mở rộng; bị dời lại"
  },
  {
    "id": "mc_273",
    "type": "multiple_choice",
    "question": "名付ける có nghĩa là gì?",
    "word": "名付ける",
    "reading": "なづける",
    "choices": [
      "đặt tên",
      "làm xong, giải quyết xong; làm cho qua bằng…",
      "gặp lại sau thời gian xa cách",
      "sai, nhầm"
    ],
    "answer": "đặt tên",
    "explanation": "名付ける (なづける): đặt tên"
  },
  {
    "id": "tr_274",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đặt tên chú chó con là Pochi.",
    "acceptedAnswers": [
      "子犬をポチと名付けました。",
      "子犬をポチと名付けました"
    ],
    "explanation": "子犬をポチと名付けました。\n(こいぬをポチとなづけました。)\n名付ける: đặt tên"
  },
  {
    "id": "mc_275",
    "type": "multiple_choice",
    "question": "村 có nghĩa là gì?",
    "word": "村",
    "reading": "むら",
    "choices": [
      "làng",
      "nhau, cả hai bên",
      "đi và về trong ngày",
      "bán hàng"
    ],
    "answer": "làng",
    "explanation": "村 (むら): làng"
  },
  {
    "id": "fb_276",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "祖母は山の",
    "sentenceSuffix": "に住んでいます。",
    "choices": [
      "詩",
      "海洋",
      "村",
      "寄付"
    ],
    "answer": "村",
    "fullSentence": "祖母は山の村に住んでいます。",
    "explanation": "祖母は山の村に住んでいます。\nBà tôi sống trong ngôi làng miền núi.\n村: làng"
  },
  {
    "id": "tr_277",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Bà tôi sống trong ngôi làng miền núi.",
    "acceptedAnswers": [
      "祖母は山の村に住んでいます。",
      "祖母は山の村に住んでいます"
    ],
    "explanation": "祖母は山の村に住んでいます。\n(そぼはやまのむらにすんでいます。)\n村: làng"
  },
  {
    "id": "mc_278",
    "type": "multiple_choice",
    "question": "埋め立てる có nghĩa là gì?",
    "word": "埋め立てる",
    "reading": "うめたてる",
    "choices": [
      "san lấp (biển, đầm…) để tạo đất",
      "sàn gỗ, sàn lát ván",
      "tàu điện chạy trên đường phố, tram",
      "tháp"
    ],
    "answer": "san lấp (biển, đầm…) để tạo đất",
    "explanation": "埋め立てる (うめたてる): san lấp (biển, đầm…) để tạo đất"
  },
  {
    "id": "tr_279",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Người ta lấp biển để xây sân bay.",
    "acceptedAnswers": [
      "海を埋め立てて空港を造りました。",
      "海を埋め立てて空港を造りました"
    ],
    "explanation": "海を埋め立てて空港を造りました。\n(うみをうめたててくうこうをつくりました。)\n埋め立てる: san lấp (biển, đầm…) để tạo đất"
  },
  {
    "id": "mc_280",
    "type": "multiple_choice",
    "question": "浜 có nghĩa là gì?",
    "word": "浜",
    "reading": "はま",
    "choices": [
      "cách dùng từ, cách nói năng",
      "bánh kẹo truyền thống Nhật Bản",
      "san lấp (biển, đầm…) để tạo đất",
      "bờ biển, bãi biển"
    ],
    "answer": "bờ biển, bãi biển",
    "explanation": "浜 (はま): bờ biển, bãi biển"
  },
  {
    "id": "fb_281",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "朝早く",
    "sentenceSuffix": "に出ました。",
    "choices": [
      "尋ねる",
      "浜",
      "タイトル",
      "男"
    ],
    "answer": "浜",
    "fullSentence": "朝早く浜に出ました。",
    "explanation": "朝早く浜に出ました。\nTôi ra bãi biển từ sáng sớm.\n浜: bờ biển, bãi biển"
  },
  {
    "id": "tr_282",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi ra bãi biển từ sáng sớm.",
    "acceptedAnswers": [
      "朝早く浜に出ました。",
      "朝早く浜に出ました"
    ],
    "explanation": "朝早く浜に出ました。\n(あさはやくはまにでました。)\n浜: bờ biển, bãi biển"
  },
  {
    "id": "mc_283",
    "type": "multiple_choice",
    "question": "地名 có nghĩa là gì?",
    "word": "地名",
    "reading": "ちめい",
    "choices": [
      "sản vật từ biển, hải sản",
      "tên địa điểm, địa danh",
      "tình cờ, ngẫu nhiên",
      "lay, rung, lắc"
    ],
    "answer": "tên địa điểm, địa danh",
    "explanation": "地名 (ちめい): tên địa điểm, địa danh"
  },
  {
    "id": "fb_284",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この",
    "sentenceSuffix": "の由来を調べます。",
    "choices": [
      "出会い",
      "いったい",
      "天井",
      "地名"
    ],
    "answer": "地名",
    "fullSentence": "この地名の由来を調べます。",
    "explanation": "この地名の由来を調べます。\nTôi tìm hiểu nguồn gốc địa danh này.\n地名: tên địa điểm, địa danh"
  },
  {
    "id": "tr_285",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi tìm hiểu nguồn gốc địa danh này.",
    "acceptedAnswers": [
      "この地名の由来を調べます。",
      "この地名の由来を調べます"
    ],
    "explanation": "この地名の由来を調べます。\n(このちめいのゆらいをしらべます。)\n地名: tên địa điểm, địa danh"
  },
  {
    "id": "mc_286",
    "type": "multiple_choice",
    "question": "風景 có nghĩa là gì?",
    "word": "風景",
    "reading": "ふうけい",
    "choices": [
      "sau… mới lại làm, lần đầu sau khoảng…",
      "cần",
      "tháp",
      "phong cảnh"
    ],
    "answer": "phong cảnh",
    "explanation": "風景 (ふうけい): phong cảnh"
  },
  {
    "id": "fb_287",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "窓から田舎の",
    "sentenceSuffix": "を楽しみます。",
    "choices": [
      "全く",
      "風景",
      "奥",
      "現在"
    ],
    "answer": "風景",
    "fullSentence": "窓から田舎の風景を楽しみます。",
    "explanation": "窓から田舎の風景を楽しみます。\nTôi ngắm phong cảnh đồng quê qua cửa sổ.\n風景: phong cảnh"
  },
  {
    "id": "tr_288",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi ngắm phong cảnh đồng quê qua cửa sổ.",
    "acceptedAnswers": [
      "窓から田舎の風景を楽しみます。",
      "窓から田舎の風景を楽しみます"
    ],
    "explanation": "窓から田舎の風景を楽しみます。\n(まどからいなかのふうけいをたのしみます。)\n風景: phong cảnh"
  },
  {
    "id": "mc_289",
    "type": "multiple_choice",
    "question": "まとまる có nghĩa là gì?",
    "word": "まとまる",
    "reading": "まとまる",
    "choices": [
      "đại diện, tiêu biểu cho",
      "người nhận trả phí vận chuyển",
      "quả hồng, cây hồng",
      "được tập hợp; đi đến thống nhất; hoàn chỉnh"
    ],
    "answer": "được tập hợp; đi đến thống nhất; hoàn chỉnh",
    "explanation": "まとまる (まとまる): được tập hợp; đi đến thống nhất; hoàn chỉnh"
  },
  {
    "id": "tr_290",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Sau khi thảo luận, mọi người đã thống nhất ý kiến.",
    "acceptedAnswers": [
      "話し合って、意見がまとまりました。",
      "話し合って、意見がまとまりました"
    ],
    "explanation": "話し合って、意見がまとまりました。\n(はなしあって、いけんがまとまりました。)\nまとまる: được tập hợp; đi đến thống nhất; hoàn chỉnh"
  },
  {
    "id": "tr_291",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Phần giải thích được tổng hợp trong một bảng.",
    "acceptedAnswers": [
      "説明が一つの表にまとまっています。",
      "説明が一つの表にまとまっています"
    ],
    "explanation": "説明が一つの表にまとまっています。\n(せつめいがひとつのひょうにまとまっています。)\nまとまる: được tập hợp; đi đến thống nhất; hoàn chỉnh"
  },
  {
    "id": "mc_292",
    "type": "multiple_choice",
    "question": "地方 có nghĩa là gì?",
    "word": "地方",
    "reading": "ちほう",
    "choices": [
      "thon dài, dài và hẹp",
      "đoàn thể, tổ chức, nhóm",
      "vùng, miền; địa phương ngoài đô thị lớn",
      "đỉnh (núi, vật cao)"
    ],
    "answer": "vùng, miền; địa phương ngoài đô thị lớn",
    "explanation": "地方 (ちほう): vùng, miền; địa phương ngoài đô thị lớn"
  },
  {
    "id": "fb_293",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "東北",
    "sentenceSuffix": "へ旅行します。",
    "choices": [
      "往復",
      "配布",
      "地方",
      "文字"
    ],
    "answer": "地方",
    "fullSentence": "東北地方へ旅行します。",
    "explanation": "東北地方へ旅行します。\nTôi đi du lịch vùng Tohoku.\n地方: vùng, miền; địa phương ngoài đô thị lớn"
  },
  {
    "id": "tr_294",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đi du lịch vùng Tohoku.",
    "acceptedAnswers": [
      "東北地方へ旅行します。",
      "東北地方へ旅行します"
    ],
    "explanation": "東北地方へ旅行します。\n(とうほくちほうへりょこうします。)\n地方: vùng, miền; địa phương ngoài đô thị lớn"
  },
  {
    "id": "mc_295",
    "type": "multiple_choice",
    "question": "名産品 có nghĩa là gì?",
    "word": "名産品",
    "reading": "めいさんひん",
    "choices": [
      "thổi (gió; nhạc cụ hơi)",
      "tuổi nghỉ hưu theo quy định",
      "nhiều màu sắc rực rỡ",
      "sản phẩm nổi tiếng của địa phương"
    ],
    "answer": "sản phẩm nổi tiếng của địa phương",
    "explanation": "名産品 (めいさんひん): sản phẩm nổi tiếng của địa phương"
  },
  {
    "id": "fb_296",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この町の",
    "sentenceSuffix": "はお茶です。",
    "choices": [
      "名産品",
      "出店",
      "風景",
      "瞬間"
    ],
    "answer": "名産品",
    "fullSentence": "この町の名産品はお茶です。",
    "explanation": "この町の名産品はお茶です。\nSản phẩm nổi tiếng của thị trấn này là trà.\n名産品: sản phẩm nổi tiếng của địa phương"
  },
  {
    "id": "tr_297",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Sản phẩm nổi tiếng của thị trấn này là trà.",
    "acceptedAnswers": [
      "この町の名産品はお茶です。",
      "この町の名産品はお茶です"
    ],
    "explanation": "この町の名産品はお茶です。\n(このまちのめいさんひんはおちゃです。)\n名産品: sản phẩm nổi tiếng của địa phương"
  },
  {
    "id": "mc_298",
    "type": "multiple_choice",
    "question": "にぎわう có nghĩa là gì?",
    "word": "にぎわう",
    "reading": "にぎわう",
    "choices": [
      "sút/ném để ghi bàn",
      "xe tải",
      "sản phẩm nổi tiếng của địa phương",
      "đông đúc, nhộn nhịp"
    ],
    "answer": "đông đúc, nhộn nhịp",
    "explanation": "にぎわう (にぎわう): đông đúc, nhộn nhịp"
  },
  {
    "id": "tr_299",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Khu chợ nhộn nhịp khách du lịch.",
    "acceptedAnswers": [
      "市場は観光客でにぎわっています。",
      "市場は観光客でにぎわっています"
    ],
    "explanation": "市場は観光客でにぎわっています。\n(いちばはかんこうきゃくでにぎわっています。)\nにぎわう: đông đúc, nhộn nhịp"
  },
  {
    "id": "mc_300",
    "type": "multiple_choice",
    "question": "一生 có nghĩa là gì?",
    "word": "一生",
    "reading": "いっしょう",
    "choices": [
      "cả đời, suốt đời",
      "lên xuống phương tiện",
      "làm (cách nói khiêm nhường/lịch sự của する)",
      "vật/phép xua đuổi điều xấu, trừ tà"
    ],
    "answer": "cả đời, suốt đời",
    "explanation": "一生 (いっしょう): cả đời, suốt đời"
  },
  {
    "id": "fb_301",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この経験は",
    "sentenceSuffix": "忘れません。",
    "choices": [
      "顔が広い",
      "一生",
      "彫刻",
      "海洋"
    ],
    "answer": "一生",
    "fullSentence": "この経験は一生忘れません。",
    "explanation": "この経験は一生忘れません。\nTôi sẽ không quên trải nghiệm này suốt đời.\n一生: cả đời, suốt đời"
  },
  {
    "id": "tr_302",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi sẽ không quên trải nghiệm này suốt đời.",
    "acceptedAnswers": [
      "この経験は一生忘れません。",
      "この経験は一生忘れません"
    ],
    "explanation": "この経験は一生忘れません。\n(このけいけんはいっしょうわすれません。)\n一生: cả đời, suốt đời"
  },
  {
    "id": "mc_303",
    "type": "multiple_choice",
    "question": "頑固 có nghĩa là gì?",
    "word": "頑固",
    "reading": "がんこ",
    "choices": [
      "được hưởng điều kiện tốt, may mắn có",
      "sự phong phú, giàu có",
      "việc gọi nhầm số điện thoại",
      "bướng bỉnh, cứng đầu"
    ],
    "answer": "bướng bỉnh, cứng đầu",
    "explanation": "頑固 (がんこ): bướng bỉnh, cứng đầu"
  },
  {
    "id": "fb_304",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "祖父は少し",
    "sentenceSuffix": "な人です。",
    "choices": [
      "頑固",
      "飛び出す",
      "縦",
      "全く"
    ],
    "answer": "頑固",
    "fullSentence": "祖父は少し頑固な人です。",
    "explanation": "祖父は少し頑固な人です。\nÔng tôi hơi cứng đầu.\n頑固: bướng bỉnh, cứng đầu"
  },
  {
    "id": "tr_305",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Ông tôi hơi cứng đầu.",
    "acceptedAnswers": [
      "祖父は少し頑固な人です。",
      "祖父は少し頑固な人です"
    ],
    "explanation": "祖父は少し頑固な人です。\n(そふはすこしがんこなひとです。)\n頑固: bướng bỉnh, cứng đầu"
  },
  {
    "id": "mc_306",
    "type": "multiple_choice",
    "question": "職人 có nghĩa là gì?",
    "word": "職人",
    "reading": "しょくにん",
    "choices": [
      "chủ đề trò chuyện; đề tài được chú ý",
      "xe tải",
      "khu vực, địa bàn",
      "thợ thủ công có tay nghề"
    ],
    "answer": "thợ thủ công có tay nghề",
    "explanation": "職人 (しょくにん): thợ thủ công có tay nghề"
  },
  {
    "id": "fb_307",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "これは",
    "sentenceSuffix": "が手で作った物です。",
    "choices": [
      "埋め立てる",
      "職人",
      "顔から火が出る",
      "ぴょこぴょこ"
    ],
    "answer": "職人",
    "fullSentence": "これは職人が手で作った物です。",
    "explanation": "これは職人が手で作った物です。\nĐây là đồ do thợ thủ công làm bằng tay.\n職人: thợ thủ công có tay nghề"
  },
  {
    "id": "tr_308",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Đây là đồ do thợ thủ công làm bằng tay.",
    "acceptedAnswers": [
      "これは職人が手で作った物です。",
      "これは職人が手で作った物です"
    ],
    "explanation": "これは職人が手で作った物です。\n(これはしょくにんがてでつくったものです。)\n職人: thợ thủ công có tay nghề"
  },
  {
    "id": "mc_309",
    "type": "multiple_choice",
    "question": "海洋 có nghĩa là gì?",
    "word": "海洋",
    "reading": "かいよう",
    "choices": [
      "tên địa điểm, địa danh",
      "việc viết tay, chữ viết tay",
      "biển và đại dương",
      "vữa vôi dùng trát tường"
    ],
    "answer": "biển và đại dương",
    "explanation": "海洋 (かいよう): biển và đại dương"
  },
  {
    "id": "fb_310",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "生物について勉強しています。",
    "choices": [
      "より～",
      "グッズ",
      "海洋",
      "相変わらず"
    ],
    "answer": "海洋",
    "fullSentence": "海洋生物について勉強しています。",
    "explanation": "海洋生物について勉強しています。\nTôi đang học về sinh vật biển.\n海洋: biển và đại dương"
  },
  {
    "id": "tr_311",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đang học về sinh vật biển.",
    "acceptedAnswers": [
      "海洋生物について勉強しています。",
      "海洋生物について勉強しています"
    ],
    "explanation": "海洋生物について勉強しています。\n(かいようせいぶつについてべんきょうしています。)\n海洋: biển và đại dương"
  },
  {
    "id": "mc_312",
    "type": "multiple_choice",
    "question": "生物 có nghĩa là gì?",
    "word": "生物",
    "reading": "せいぶつ",
    "choices": [
      "đón người; đón một thời điểm, giai đoạn",
      "sinh vật",
      "bảo vật quốc gia; danh hiệu bảo tồn văn hóa của Nhật",
      "đồ đã qua sử dụng"
    ],
    "answer": "sinh vật",
    "explanation": "生物 (せいぶつ): sinh vật"
  },
  {
    "id": "fb_313",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "池の",
    "sentenceSuffix": "を観察します。",
    "choices": [
      "親孝行",
      "宅配便",
      "生物",
      "わざと"
    ],
    "answer": "生物",
    "fullSentence": "池の生物を観察します。",
    "explanation": "池の生物を観察します。\nTôi quan sát sinh vật trong ao.\n生物: sinh vật"
  },
  {
    "id": "tr_314",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi quan sát sinh vật trong ao.",
    "acceptedAnswers": [
      "池の生物を観察します。",
      "池の生物を観察します"
    ],
    "explanation": "池の生物を観察します。\n(いけのせいぶつをかんさつします。)\n生物: sinh vật"
  },
  {
    "id": "mc_315",
    "type": "multiple_choice",
    "question": "化石 có nghĩa là gì?",
    "word": "化石",
    "reading": "かせき",
    "choices": [
      "nỗ lực",
      "hóa thạch",
      "toa xe, phương tiện đường bộ/đường sắt",
      "lời than vãn, càm ràm"
    ],
    "answer": "hóa thạch",
    "explanation": "化石 (かせき): hóa thạch"
  },
  {
    "id": "fb_316",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "ここで魚の",
    "sentenceSuffix": "が見つかりました。",
    "choices": [
      "思いがけない",
      "化石",
      "目を向ける",
      "～者"
    ],
    "answer": "化石",
    "fullSentence": "ここで魚の化石が見つかりました。",
    "explanation": "ここで魚の化石が見つかりました。\nHóa thạch cá được tìm thấy ở đây.\n化石: hóa thạch"
  },
  {
    "id": "tr_317",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Hóa thạch cá được tìm thấy ở đây.",
    "acceptedAnswers": [
      "ここで魚の化石が見つかりました。",
      "ここで魚の化石が見つかりました"
    ],
    "explanation": "ここで魚の化石が見つかりました。\n(ここでさかなのかせきがみつかりました。)\n化石: hóa thạch"
  },
  {
    "id": "mc_318",
    "type": "multiple_choice",
    "question": "辺り có nghĩa là gì?",
    "word": "辺り",
    "reading": "あたり",
    "choices": [
      "nối tiếp, trải thành dãy",
      "treo, mắc lên",
      "khu vực xung quanh, gần…",
      "sinh vật"
    ],
    "answer": "khu vực xung quanh, gần…",
    "explanation": "辺り (あたり): khu vực xung quanh, gần…"
  },
  {
    "id": "fb_319",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この",
    "sentenceSuffix": "に銀行はありますか。",
    "choices": [
      "～末",
      "世界自然遺産",
      "雨水",
      "辺り"
    ],
    "answer": "辺り",
    "fullSentence": "この辺りに銀行はありますか。",
    "explanation": "この辺りに銀行はありますか。\nQuanh đây có ngân hàng không?\n辺り: khu vực xung quanh, gần…"
  },
  {
    "id": "tr_320",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Quanh đây có ngân hàng không?",
    "acceptedAnswers": [
      "この辺りに銀行はありますか。",
      "この辺りに銀行はありますか"
    ],
    "explanation": "この辺りに銀行はありますか。\n(このあたりにぎんこうはありますか。)\n辺り: khu vực xung quanh, gần…"
  },
  {
    "id": "mc_321",
    "type": "multiple_choice",
    "question": "産業 có nghĩa là gì?",
    "word": "産業",
    "reading": "さんぎょう",
    "choices": [
      "hết sức, liều mình, hết lòng cố gắng",
      "ngành sản xuất, ngành kinh tế",
      "mặt trời",
      "đường sắt"
    ],
    "answer": "ngành sản xuất, ngành kinh tế",
    "explanation": "産業 (さんぎょう): ngành sản xuất, ngành kinh tế"
  },
  {
    "id": "fb_322",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この地域では観光",
    "sentenceSuffix": "が発展しています。",
    "choices": [
      "産業",
      "必死",
      "やって来る",
      "積もる"
    ],
    "answer": "産業",
    "fullSentence": "この地域では観光産業が発展しています。",
    "explanation": "この地域では観光産業が発展しています。\nNgành du lịch đang phát triển ở khu vực này.\n産業: ngành sản xuất, ngành kinh tế"
  },
  {
    "id": "tr_323",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Ngành du lịch đang phát triển ở khu vực này.",
    "acceptedAnswers": [
      "この地域では観光産業が発展しています。",
      "この地域では観光産業が発展しています"
    ],
    "explanation": "この地域では観光産業が発展しています。\n(このちいきではかんこうさんぎょうがはってんしています。)\n産業: ngành sản xuất, ngành kinh tế"
  },
  {
    "id": "mc_324",
    "type": "multiple_choice",
    "question": "盛ん có nghĩa là gì?",
    "word": "盛ん",
    "reading": "さかん",
    "choices": [
      "cuộc gặp gỡ, cơ duyên gặp",
      "chỉ định, quy định",
      "tạm hoãn/tạm ngừng; nhìn nhau",
      "phát triển mạnh, sôi nổi, thịnh hành"
    ],
    "answer": "phát triển mạnh, sôi nổi, thịnh hành",
    "explanation": "盛ん (さかん): phát triển mạnh, sôi nổi, thịnh hành"
  },
  {
    "id": "fb_325",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この町はスポーツが",
    "sentenceSuffix": "です。",
    "choices": [
      "出会い",
      "回収",
      "盛ん",
      "学園祭"
    ],
    "answer": "盛ん",
    "fullSentence": "この町はスポーツが盛んです。",
    "explanation": "この町はスポーツが盛んです。\nHoạt động thể thao ở thị trấn này rất sôi nổi.\n盛ん: phát triển mạnh, sôi nổi, thịnh hành"
  },
  {
    "id": "tr_326",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Hoạt động thể thao ở thị trấn này rất sôi nổi.",
    "acceptedAnswers": [
      "この町はスポーツが盛んです。",
      "この町はスポーツが盛んです"
    ],
    "explanation": "この町はスポーツが盛んです。\n(このまちはスポーツがさかんです。)\n盛ん: phát triển mạnh, sôi nổi, thịnh hành"
  },
  {
    "id": "fb_327",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "学生たちが",
    "sentenceSuffix": "に質問しています。",
    "choices": [
      "電子マネー",
      "チリンチリン",
      "盛ん",
      "勘違い"
    ],
    "answer": "盛ん",
    "fullSentence": "学生たちが盛んに質問しています。",
    "explanation": "学生たちが盛んに質問しています。\nCác sinh viên đang tích cực đặt câu hỏi.\n盛ん: phát triển mạnh, sôi nổi, thịnh hành"
  },
  {
    "id": "tr_328",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Các sinh viên đang tích cực đặt câu hỏi.",
    "acceptedAnswers": [
      "学生たちが盛んに質問しています。",
      "学生たちが盛んに質問しています"
    ],
    "explanation": "学生たちが盛んに質問しています。\n(がくせいたちがさかんにしつもんしています。)\n盛ん: phát triển mạnh, sôi nổi, thịnh hành"
  },
  {
    "id": "mc_329",
    "type": "multiple_choice",
    "question": "企業 có nghĩa là gì?",
    "word": "企業",
    "reading": "きぎょう",
    "choices": [
      "doanh nghiệp, công ty",
      "dân làng",
      "shachihoko: tượng linh vật thân cá đầu thú trên nóc thành, đền…",
      "lời thoại"
    ],
    "answer": "doanh nghiệp, công ty",
    "explanation": "企業 (きぎょう): doanh nghiệp, công ty"
  },
  {
    "id": "fb_330",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "日本の",
    "sentenceSuffix": "に就職しました。",
    "choices": [
      "企業",
      "にぎわう",
      "口々に",
      "発車"
    ],
    "answer": "企業",
    "fullSentence": "日本の企業に就職しました。",
    "explanation": "日本の企業に就職しました。\nTôi đã vào làm tại một doanh nghiệp Nhật.\n企業: doanh nghiệp, công ty"
  },
  {
    "id": "tr_331",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đã vào làm tại một doanh nghiệp Nhật.",
    "acceptedAnswers": [
      "日本の企業に就職しました。",
      "日本の企業に就職しました"
    ],
    "explanation": "日本の企業に就職しました。\n(にほんのきぎょうにしゅうしょくしました。)\n企業: doanh nghiệp, công ty"
  },
  {
    "id": "mc_332",
    "type": "multiple_choice",
    "question": "発展 có nghĩa là gì?",
    "word": "発展",
    "reading": "はってん",
    "choices": [
      "phát triển",
      "làm cứng, làm đông; củng cố",
      "thổi (gió; nhạc cụ hơi)",
      "mặt trời"
    ],
    "answer": "phát triển",
    "explanation": "発展 (はってん): phát triển"
  },
  {
    "id": "fb_333",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "交通が便利になり、町が",
    "sentenceSuffix": "しました。",
    "choices": [
      "発展",
      "カーディガン",
      "うらやましい",
      "にぎわう"
    ],
    "answer": "発展",
    "fullSentence": "交通が便利になり、町が発展しました。",
    "explanation": "交通が便利になり、町が発展しました。\nGiao thông thuận tiện hơn và thị trấn đã phát triển.\n発展: phát triển"
  },
  {
    "id": "tr_334",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Giao thông thuận tiện hơn và thị trấn đã phát triển.",
    "acceptedAnswers": [
      "交通が便利になり、町が発展しました。",
      "交通が便利になり、町が発展しました"
    ],
    "explanation": "交通が便利になり、町が発展しました。\n(こうつうがべんりになり、まちがはってんしました。)\n発展: phát triển"
  },
  {
    "id": "mc_335",
    "type": "multiple_choice",
    "question": "特産物 có nghĩa là gì?",
    "word": "特産物",
    "reading": "とくさんぶつ",
    "choices": [
      "việc gọi nhầm số điện thoại",
      "đặc sản địa phương",
      "nhóm tuổi…; khoảng số…",
      "thời điểm thích hợp, lúc thực hiện"
    ],
    "answer": "đặc sản địa phương",
    "explanation": "特産物 (とくさんぶつ): đặc sản địa phương"
  },
  {
    "id": "fb_336",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この地域の",
    "sentenceSuffix": "を買いました。",
    "choices": [
      "体調",
      "出産",
      "特産物",
      "製造"
    ],
    "answer": "特産物",
    "fullSentence": "この地域の特産物を買いました。",
    "explanation": "この地域の特産物を買いました。\nTôi mua đặc sản vùng này.\n特産物: đặc sản địa phương"
  },
  {
    "id": "tr_337",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi mua đặc sản vùng này.",
    "acceptedAnswers": [
      "この地域の特産物を買いました。",
      "この地域の特産物を買いました"
    ],
    "explanation": "この地域の特産物を買いました。\n(このちいきのとくさんぶつをかいました。)\n特産物: đặc sản địa phương"
  },
  {
    "id": "mc_338",
    "type": "multiple_choice",
    "question": "空っ風 có nghĩa là gì?",
    "word": "空っ風",
    "reading": "からっかぜ",
    "choices": [
      "gió lạnh, khô và mạnh, thường vào mùa đông",
      "bờ biển",
      "sự việc, chuyện xảy ra",
      "lâu rồi không gặp"
    ],
    "answer": "gió lạnh, khô và mạnh, thường vào mùa đông",
    "explanation": "空っ風 (からっかぜ): gió lạnh, khô và mạnh, thường vào mùa đông"
  },
  {
    "id": "fb_339",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "冬には強い",
    "sentenceSuffix": "が吹きます。",
    "choices": [
      "まだまだ",
      "友人",
      "対等",
      "空っ風"
    ],
    "answer": "空っ風",
    "fullSentence": "冬には強い空っ風が吹きます。",
    "explanation": "冬には強い空っ風が吹きます。\nMùa đông có gió khô lạnh thổi mạnh.\n空っ風: gió lạnh, khô và mạnh, thường vào mùa đông"
  },
  {
    "id": "tr_340",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Mùa đông có gió khô lạnh thổi mạnh.",
    "acceptedAnswers": [
      "冬には強い空っ風が吹きます。",
      "冬には強い空っ風が吹きます"
    ],
    "explanation": "冬には強い空っ風が吹きます。\n(ふゆにはつよいからっかぜがふきます。)\n空っ風: gió lạnh, khô và mạnh, thường vào mùa đông"
  },
  {
    "id": "mc_341",
    "type": "multiple_choice",
    "question": "吹く có nghĩa là gì?",
    "word": "吹く",
    "reading": "ふく",
    "choices": [
      "từ đếm nhà, cửa hàng, tòa nhà nhỏ",
      "thổi (gió; nhạc cụ hơi)",
      "đi ngang qua, đi quá",
      "nhỏ, nho nhỏ, không lớn"
    ],
    "answer": "thổi (gió; nhạc cụ hơi)",
    "explanation": "吹く (ふく): thổi (gió; nhạc cụ hơi)"
  },
  {
    "id": "tr_342",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Gió lạnh đang thổi.",
    "acceptedAnswers": [
      "冷たい風が吹いています。",
      "冷たい風が吹いています"
    ],
    "explanation": "冷たい風が吹いています。\n(つめたいかぜがふいています。)\n吹く: thổi (gió; nhạc cụ hơi)"
  },
  {
    "id": "tr_343",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Em trai tôi đang thổi sáo.",
    "acceptedAnswers": [
      "弟は笛を吹いています。",
      "弟は笛を吹いています"
    ],
    "explanation": "弟は笛を吹いています。\n(おとうとはふえをふいています。)\n吹く: thổi (gió; nhạc cụ hơi)"
  },
  {
    "id": "mc_344",
    "type": "multiple_choice",
    "question": "湿る có nghĩa là gì?",
    "word": "湿る",
    "reading": "しめる",
    "choices": [
      "ẩm, bị ẩm",
      "giấy gói hàng/quà",
      "chịu, nhận tác động (cú sốc)",
      "số điện thoại miễn cước cho người gọi"
    ],
    "answer": "ẩm, bị ẩm",
    "explanation": "湿る (しめる): ẩm, bị ẩm"
  },
  {
    "id": "tr_345",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Quần áo bị ẩm vì mưa.",
    "acceptedAnswers": [
      "雨で服が湿っています。",
      "雨で服が湿っています"
    ],
    "explanation": "雨で服が湿っています。\n(あめでふくがしめっています。)\n湿る: ẩm, bị ẩm"
  },
  {
    "id": "mc_346",
    "type": "multiple_choice",
    "question": "越える có nghĩa là gì?",
    "word": "越える",
    "reading": "こえる",
    "choices": [
      "nếm, thưởng thức; trải nghiệm cảm giác",
      "khí hậu",
      "vượt qua ranh giới, núi; trải qua thời kỳ",
      "thành viên"
    ],
    "answer": "vượt qua ranh giới, núi; trải qua thời kỳ",
    "explanation": "越える (こえる): vượt qua ranh giới, núi; trải qua thời kỳ"
  },
  {
    "id": "tr_347",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi vượt núi bằng xe buýt.",
    "acceptedAnswers": [
      "バスで山を越えます。",
      "バスで山を越えます"
    ],
    "explanation": "バスで山を越えます。\n(バスでやまをこえます。)\n越える: vượt qua ranh giới, núi; trải qua thời kỳ"
  },
  {
    "id": "tr_348",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Cây này có thể sống qua mùa đông ở ngoài trời.",
    "acceptedAnswers": [
      "この植物は外で冬を越せます。",
      "この植物は外で冬を越せます"
    ],
    "explanation": "この植物は外で冬を越せます。\n(このしょくぶつはそとでふゆをこせます。)\n越える: vượt qua ranh giới, núi; trải qua thời kỳ"
  },
  {
    "id": "mc_349",
    "type": "multiple_choice",
    "question": "風力 có nghĩa là gì?",
    "word": "風力",
    "reading": "ふうりょく",
    "choices": [
      "diễn đạt, thể hiện",
      "sức gió, năng lượng gió",
      "đời sống hằng ngày, thường nhật",
      "quả là, đúng là (như tiếng tăm/kỳ vọng)"
    ],
    "answer": "sức gió, năng lượng gió",
    "explanation": "風力 (ふうりょく): sức gió, năng lượng gió"
  },
  {
    "id": "fb_350",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "を利用して電気を作ります。",
    "choices": [
      "タメ口",
      "地べた",
      "風力",
      "言葉遣い"
    ],
    "answer": "風力",
    "fullSentence": "風力を利用して電気を作ります。",
    "explanation": "風力を利用して電気を作ります。\nNgười ta tận dụng sức gió để phát điện.\n風力: sức gió, năng lượng gió"
  },
  {
    "id": "tr_351",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Người ta tận dụng sức gió để phát điện.",
    "acceptedAnswers": [
      "風力を利用して電気を作ります。",
      "風力を利用して電気を作ります"
    ],
    "explanation": "風力を利用して電気を作ります。\n(ふうりょくをりようしてでんきをつくります。)\n風力: sức gió, năng lượng gió"
  },
  {
    "id": "mc_352",
    "type": "multiple_choice",
    "question": "凧揚げ có nghĩa là gì?",
    "word": "凧揚げ",
    "reading": "たこあげ",
    "choices": [
      "người thực hiện/thuộc về…",
      "cuối (tháng, năm…)",
      "kỳ vọng, mong đợi",
      "việc thả diều"
    ],
    "answer": "việc thả diều",
    "explanation": "凧揚げ (たこあげ): việc thả diều"
  },
  {
    "id": "fb_353",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "公園で",
    "sentenceSuffix": "をします。",
    "choices": [
      "朝日",
      "かける（迷惑をかける）",
      "気がする",
      "凧揚げ"
    ],
    "answer": "凧揚げ",
    "fullSentence": "公園で凧揚げをします。",
    "explanation": "公園で凧揚げをします。\nTôi thả diều ở công viên.\n凧揚げ: việc thả diều"
  },
  {
    "id": "tr_354",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi thả diều ở công viên.",
    "acceptedAnswers": [
      "公園で凧揚げをします。",
      "公園で凧揚げをします"
    ],
    "explanation": "公園で凧揚げをします。\n(こうえんでたこあげをします。)\n凧揚げ: việc thả diều"
  },
  {
    "id": "mc_355",
    "type": "multiple_choice",
    "question": "揚げる có nghĩa là gì?",
    "word": "揚げる",
    "reading": "あげる",
    "choices": [
      "nam và bắc; chiều bắc–nam",
      "quạt điện",
      "khí hậu",
      "thả/đưa lên cao; chiên ngập dầu"
    ],
    "answer": "thả/đưa lên cao; chiên ngập dầu",
    "explanation": "揚げる (あげる): thả/đưa lên cao; chiên ngập dầu"
  },
  {
    "id": "tr_356",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Đứa trẻ đang thả diều.",
    "acceptedAnswers": [
      "子どもが凧を揚げています。",
      "子どもが凧を揚げています"
    ],
    "explanation": "子どもが凧を揚げています。\n(こどもがたこをあげています。)\n揚げる: thả/đưa lên cao; chiên ngập dầu"
  },
  {
    "id": "tr_357",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi chiên rau bằng dầu.",
    "acceptedAnswers": [
      "野菜を油で揚げます。",
      "野菜を油で揚げます"
    ],
    "explanation": "野菜を油で揚げます。\n(やさいをあぶらであげます。)\n揚げる: thả/đưa lên cao; chiên ngập dầu"
  },
  {
    "id": "mc_358",
    "type": "multiple_choice",
    "question": "思い浮かべる có nghĩa là gì?",
    "word": "思い浮かべる",
    "reading": "おもいうかべる",
    "choices": [
      "khoang cửa/đầu toa tàu; boong tàu thủy",
      "dịch vụ chuyển phát tận nhà; kiện gửi qua dịch vụ đó",
      "thoải mái, dễ chịu",
      "hình dung, gợi nhớ trong đầu"
    ],
    "answer": "hình dung, gợi nhớ trong đầu",
    "explanation": "思い浮かべる (おもいうかべる): hình dung, gợi nhớ trong đầu"
  },
  {
    "id": "tr_359",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi hình dung phong cảnh quê hương.",
    "acceptedAnswers": [
      "故郷の景色を思い浮かべます。",
      "故郷の景色を思い浮かべます"
    ],
    "explanation": "故郷の景色を思い浮かべます。\n(ふるさとのけしきをおもいうかべます。)\n思い浮かべる: hình dung, gợi nhớ trong đầu"
  },
  {
    "id": "mc_360",
    "type": "multiple_choice",
    "question": "同年代 có nghĩa là gì?",
    "word": "同年代",
    "reading": "どうねんだい",
    "choices": [
      "mặt đất (cách nói đời thường)",
      "tình hình gần đây của một người",
      "chiều vòng trong của tuyến vòng",
      "cùng thế hệ, cùng khoảng tuổi"
    ],
    "answer": "cùng thế hệ, cùng khoảng tuổi",
    "explanation": "同年代 (どうねんだい): cùng thế hệ, cùng khoảng tuổi"
  },
  {
    "id": "fb_361",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "彼は私と",
    "sentenceSuffix": "です。",
    "choices": [
      "庭",
      "和尚",
      "同年代",
      "所要時間"
    ],
    "answer": "同年代",
    "fullSentence": "彼は私と同年代です。",
    "explanation": "彼は私と同年代です。\nAnh ấy cùng thế hệ với tôi.\n同年代: cùng thế hệ, cùng khoảng tuổi"
  },
  {
    "id": "tr_362",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Anh ấy cùng thế hệ với tôi.",
    "acceptedAnswers": [
      "彼は私と同年代です。",
      "彼は私と同年代です"
    ],
    "explanation": "彼は私と同年代です。\n(かれはわたしとどうねんだいです。)\n同年代: cùng thế hệ, cùng khoảng tuổi"
  },
  {
    "id": "mc_363",
    "type": "multiple_choice",
    "question": "すると có nghĩa là gì?",
    "word": "すると",
    "reading": "すると",
    "choices": [
      "thế rồi, khi đó thì; nếu vậy thì",
      "làm xong, giải quyết xong; làm cho qua bằng…",
      "cho phép",
      "câu nói líu lưỡi để luyện phát âm nhanh"
    ],
    "answer": "thế rồi, khi đó thì; nếu vậy thì",
    "explanation": "すると (すると): thế rồi, khi đó thì; nếu vậy thì"
  },
  {
    "id": "fb_364",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "ドアを開けました。",
    "sentenceSuffix": "、猫が入ってきました。",
    "choices": [
      "畳",
      "すると",
      "再び",
      "人口"
    ],
    "answer": "すると",
    "fullSentence": "ドアを開けました。すると、猫が入ってきました。",
    "explanation": "ドアを開けました。すると、猫が入ってきました。\nTôi mở cửa. Thế rồi một con mèo đi vào.\nすると: thế rồi, khi đó thì; nếu vậy thì"
  },
  {
    "id": "tr_365",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi mở cửa. Thế rồi một con mèo đi vào.",
    "acceptedAnswers": [
      "ドアを開けました。すると、猫が入ってきました。",
      "ドアを開けました。すると、猫が入ってきました"
    ],
    "explanation": "ドアを開けました。すると、猫が入ってきました。\n(ドアをあけました。すると、ねこがはいってきました。)\nすると: thế rồi, khi đó thì; nếu vậy thì"
  },
  {
    "id": "mc_366",
    "type": "multiple_choice",
    "question": "返る có nghĩa là gì?",
    "word": "返る",
    "reading": "かえる",
    "choices": [
      "trở lại, được trả lại",
      "trung tâm đô thị lớn",
      "sắt",
      "phía, bên…"
    ],
    "answer": "trở lại, được trả lại",
    "explanation": "返る (かえる): trở lại, được trả lại"
  },
  {
    "id": "tr_367",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Cuốn sách tôi cho mượn đã được trả lại.",
    "acceptedAnswers": [
      "貸した本が返ってきました。",
      "貸した本が返ってきました"
    ],
    "explanation": "貸した本が返ってきました。\n(かしたほんがかえってきました。)\n返る: trở lại, được trả lại"
  },
  {
    "id": "tr_368",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi nhận được hồi âm ngay.",
    "acceptedAnswers": [
      "すぐに返事が返ってきました。",
      "すぐに返事が返ってきました"
    ],
    "explanation": "すぐに返事が返ってきました。\n(すぐにへんじがかえってきました。)\n返る: trở lại, được trả lại"
  },
  {
    "id": "mc_369",
    "type": "multiple_choice",
    "question": "タメ口 có nghĩa là gì?",
    "word": "タメ口",
    "reading": "タメぐち",
    "choices": [
      "đường sắt",
      "cách nói suồng sã, ngang hàng, không dùng kính ngữ",
      "bên trong xe/tàu",
      "thế kỷ…"
    ],
    "answer": "cách nói suồng sã, ngang hàng, không dùng kính ngữ",
    "explanation": "タメ口 (タメぐち): cách nói suồng sã, ngang hàng, không dùng kính ngữ"
  },
  {
    "id": "fb_370",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "初対面の人に",
    "sentenceSuffix": "で話すのは避けます。",
    "choices": [
      "なお",
      "ときには",
      "セメント",
      "タメ口"
    ],
    "answer": "タメ口",
    "fullSentence": "初対面の人にタメ口で話すのは避けます。",
    "explanation": "初対面の人にタメ口で話すのは避けます。\nTôi tránh nói suồng sã với người mới gặp.\nタメ口: cách nói suồng sã, ngang hàng, không dùng kính ngữ"
  },
  {
    "id": "tr_371",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi tránh nói suồng sã với người mới gặp.",
    "acceptedAnswers": [
      "初対面の人にタメ口で話すのは避けます。",
      "初対面の人にタメ口で話すのは避けます"
    ],
    "explanation": "初対面の人にタメ口で話すのは避けます。\n(しょたいめんのひとにタメぐちではなすのはさけます。)\nタメ口: cách nói suồng sã, ngang hàng, không dùng kính ngữ"
  },
  {
    "id": "mc_372",
    "type": "multiple_choice",
    "question": "違和感 có nghĩa là gì?",
    "word": "違和感",
    "reading": "いわかん",
    "choices": [
      "vữa vôi dùng trát tường",
      "phong cảnh",
      "cảm giác không tự nhiên, không phù hợp",
      "thời đại, thời kỳ"
    ],
    "answer": "cảm giác không tự nhiên, không phù hợp",
    "explanation": "違和感 (いわかん): cảm giác không tự nhiên, không phù hợp"
  },
  {
    "id": "fb_373",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "その言い方に",
    "sentenceSuffix": "があります。",
    "choices": [
      "受ける（ショックを受ける）",
      "違和感",
      "立派",
      "汚す"
    ],
    "answer": "違和感",
    "fullSentence": "その言い方に違和感があります。",
    "explanation": "その言い方に違和感があります。\nTôi thấy cách nói đó không tự nhiên.\n違和感: cảm giác không tự nhiên, không phù hợp"
  },
  {
    "id": "tr_374",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi thấy cách nói đó không tự nhiên.",
    "acceptedAnswers": [
      "その言い方に違和感があります。",
      "その言い方に違和感があります"
    ],
    "explanation": "その言い方に違和感があります。\n(そのいいかたにいわかんがあります。)\n違和感: cảm giác không tự nhiên, không phù hợp"
  },
  {
    "id": "mc_375",
    "type": "multiple_choice",
    "question": "共通 có nghĩa là gì?",
    "word": "共通",
    "reading": "きょうつう",
    "choices": [
      "nhà trọ gia đình, minshuku",
      "tiến hành chiến tranh",
      "có điểm chung",
      "mây"
    ],
    "answer": "có điểm chung",
    "explanation": "共通 (きょうつう): có điểm chung"
  },
  {
    "id": "fb_376",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "私たちには",
    "sentenceSuffix": "の趣味があります。",
    "choices": [
      "共通",
      "発展",
      "地元",
      "わ（けがしたわ）"
    ],
    "answer": "共通",
    "fullSentence": "私たちには共通の趣味があります。",
    "explanation": "私たちには共通の趣味があります。\nChúng tôi có sở thích chung.\n共通: có điểm chung"
  },
  {
    "id": "tr_377",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Chúng tôi có sở thích chung.",
    "acceptedAnswers": [
      "私たちには共通の趣味があります。",
      "私たちには共通の趣味があります"
    ],
    "explanation": "私たちには共通の趣味があります。\n(わたしたちにはきょうつうのしゅみがあります。)\n共通: có điểm chung"
  },
  {
    "id": "fb_378",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "これは日本とベトナムに",
    "sentenceSuffix": "する問題です。",
    "choices": [
      "山の幸",
      "共通",
      "石垣",
      "飛び上がる"
    ],
    "answer": "共通",
    "fullSentence": "これは日本とベトナムに共通する問題です。",
    "explanation": "これは日本とベトナムに共通する問題です。\nĐây là vấn đề chung của Nhật Bản và Việt Nam.\n共通: có điểm chung"
  },
  {
    "id": "tr_379",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Đây là vấn đề chung của Nhật Bản và Việt Nam.",
    "acceptedAnswers": [
      "これは日本とベトナムに共通する問題です。",
      "これは日本とベトナムに共通する問題です"
    ],
    "explanation": "これは日本とベトナムに共通する問題です。\n(これはにほんとベトナムにきょうつうするもんだいです。)\n共通: có điểm chung"
  },
  {
    "id": "mc_380",
    "type": "multiple_choice",
    "question": "友人 có nghĩa là gì?",
    "word": "友人",
    "reading": "ゆうじん",
    "choices": [
      "biểu hiện, dấu hiệu thể hiện",
      "tình trạng sức khỏe",
      "điêu khắc",
      "bạn bè, người bạn"
    ],
    "answer": "bạn bè, người bạn",
    "explanation": "友人 (ゆうじん): bạn bè, người bạn"
  },
  {
    "id": "fb_381",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "週末に",
    "sentenceSuffix": "と会います。",
    "choices": [
      "蒸発",
      "友人",
      "リボン",
      "分野"
    ],
    "answer": "友人",
    "fullSentence": "週末に友人と会います。",
    "explanation": "週末に友人と会います。\nCuối tuần tôi gặp bạn.\n友人: bạn bè, người bạn"
  },
  {
    "id": "tr_382",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Cuối tuần tôi gặp bạn.",
    "acceptedAnswers": [
      "週末に友人と会います。",
      "週末に友人と会います"
    ],
    "explanation": "週末に友人と会います。\n(しゅうまつにゆうじんとあいます。)\n友人: bạn bè, người bạn"
  },
  {
    "id": "mc_383",
    "type": "multiple_choice",
    "question": "対等 có nghĩa là gì?",
    "word": "対等",
    "reading": "たいとう",
    "choices": [
      "bình đẳng, ngang hàng",
      "nỗ lực",
      "chiếu tatami",
      "oi bức, nóng và ẩm"
    ],
    "answer": "bình đẳng, ngang hàng",
    "explanation": "対等 (たいとう): bình đẳng, ngang hàng"
  },
  {
    "id": "fb_384",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "年齢が違っても",
    "sentenceSuffix": "に話せます。",
    "choices": [
      "島",
      "対等",
      "見どころ",
      "盛ん"
    ],
    "answer": "対等",
    "fullSentence": "年齢が違っても対等に話せます。",
    "explanation": "年齢が違っても対等に話せます。\nDù khác tuổi vẫn có thể nói chuyện ngang hàng.\n対等: bình đẳng, ngang hàng"
  },
  {
    "id": "tr_385",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Dù khác tuổi vẫn có thể nói chuyện ngang hàng.",
    "acceptedAnswers": [
      "年齢が違っても対等に話せます。",
      "年齢が違っても対等に話せます"
    ],
    "explanation": "年齢が違っても対等に話せます。\n(ねんれいがちがってもたいとうにはなせます。)\n対等: bình đẳng, ngang hàng"
  },
  {
    "id": "mc_386",
    "type": "multiple_choice",
    "question": "回答 có nghĩa là gì?",
    "word": "回答",
    "reading": "かいとう",
    "choices": [
      "trả lời (câu hỏi, khảo sát)",
      "đồ ngủ, pyjama",
      "cửa sổ tàu/xe; cảnh nhìn qua cửa sổ",
      "khởi hành"
    ],
    "answer": "trả lời (câu hỏi, khảo sát)",
    "explanation": "回答 (かいとう): trả lời (câu hỏi, khảo sát)"
  },
  {
    "id": "fb_387",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "質問に",
    "sentenceSuffix": "してください。",
    "choices": [
      "表現",
      "回答",
      "同僚",
      "平気"
    ],
    "answer": "回答",
    "fullSentence": "質問に回答してください。",
    "explanation": "質問に回答してください。\nXin hãy trả lời câu hỏi.\n回答: trả lời (câu hỏi, khảo sát)"
  },
  {
    "id": "tr_388",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Xin hãy trả lời câu hỏi.",
    "acceptedAnswers": [
      "質問に回答してください。",
      "質問に回答してください"
    ],
    "explanation": "質問に回答してください。\n(しつもんにかいとうしてください。)\n回答: trả lời (câu hỏi, khảo sát)"
  },
  {
    "id": "fb_389",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "多くの人から",
    "sentenceSuffix": "を得ました。",
    "choices": [
      "了承",
      "まく",
      "回答",
      "小論文"
    ],
    "answer": "回答",
    "fullSentence": "多くの人から回答を得ました。",
    "explanation": "多くの人から回答を得ました。\nChúng tôi nhận được câu trả lời từ nhiều người.\n回答: trả lời (câu hỏi, khảo sát)"
  },
  {
    "id": "tr_390",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Chúng tôi nhận được câu trả lời từ nhiều người.",
    "acceptedAnswers": [
      "多くの人から回答を得ました。",
      "多くの人から回答を得ました"
    ],
    "explanation": "多くの人から回答を得ました。\n(おおくのひとからかいとうをえました。)\n回答: trả lời (câu hỏi, khảo sát)"
  },
  {
    "id": "mc_391",
    "type": "multiple_choice",
    "question": "初対面 có nghĩa là gì?",
    "word": "初対面",
    "reading": "しょたいめん",
    "choices": [
      "lần đầu gặp mặt",
      "chịu, nhận tác động (cú sốc)",
      "nếm, thưởng thức; trải nghiệm cảm giác",
      "nối tiếp, trải thành dãy"
    ],
    "answer": "lần đầu gặp mặt",
    "explanation": "初対面 (しょたいめん): lần đầu gặp mặt"
  },
  {
    "id": "fb_392",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "の人には丁寧に話します。",
    "choices": [
      "所要時間",
      "お参り",
      "～同士",
      "初対面"
    ],
    "answer": "初対面",
    "fullSentence": "初対面の人には丁寧に話します。",
    "explanation": "初対面の人には丁寧に話します。\nTôi nói lịch sự với người mới gặp.\n初対面: lần đầu gặp mặt"
  },
  {
    "id": "tr_393",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi nói lịch sự với người mới gặp.",
    "acceptedAnswers": [
      "初対面の人には丁寧に話します。",
      "初対面の人には丁寧に話します"
    ],
    "explanation": "初対面の人には丁寧に話します。\n(しょたいめんのひとにはていねいにはなします。)\n初対面: lần đầu gặp mặt"
  },
  {
    "id": "mc_394",
    "type": "multiple_choice",
    "question": "タイミング có nghĩa là gì?",
    "word": "タイミング",
    "reading": "タイミング",
    "choices": [
      "lay, rung, lắc",
      "nữ, phụ nữ, con gái",
      "hiểu lầm",
      "thời điểm thích hợp, lúc thực hiện"
    ],
    "answer": "thời điểm thích hợp, lúc thực hiện",
    "explanation": "タイミング (タイミング): thời điểm thích hợp, lúc thực hiện"
  },
  {
    "id": "fb_395",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "がよければ、先生に聞きます。",
    "choices": [
      "飛び上がる",
      "メッセージ",
      "タイミング",
      "退職"
    ],
    "answer": "タイミング",
    "fullSentence": "タイミングがよければ、先生に聞きます。",
    "explanation": "タイミングがよければ、先生に聞きます。\nNếu đúng lúc thuận tiện, tôi sẽ hỏi thầy.\nタイミング: thời điểm thích hợp, lúc thực hiện"
  },
  {
    "id": "tr_396",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Nếu đúng lúc thuận tiện, tôi sẽ hỏi thầy.",
    "acceptedAnswers": [
      "タイミングがよければ、先生に聞きます。",
      "タイミングがよければ、先生に聞きます"
    ],
    "explanation": "タイミングがよければ、先生に聞きます。\n(タイミングがよければ、せんせいにききます。)\nタイミング: thời điểm thích hợp, lúc thực hiện"
  },
  {
    "id": "mc_397",
    "type": "multiple_choice",
    "question": "話題 có nghĩa là gì?",
    "word": "話題",
    "reading": "わだい",
    "choices": [
      "chủ đề trò chuyện; đề tài được chú ý",
      "đất, khu đất; vùng đất, địa phương",
      "quãng đường đi bộ",
      "ngoài ra, xin nói thêm; vẫn còn"
    ],
    "answer": "chủ đề trò chuyện; đề tài được chú ý",
    "explanation": "話題 (わだい): chủ đề trò chuyện; đề tài được chú ý"
  },
  {
    "id": "fb_398",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この映画は学校で",
    "sentenceSuffix": "になっています。",
    "choices": [
      "和菓子",
      "言葉遣い",
      "話題",
      "広げる"
    ],
    "answer": "話題",
    "fullSentence": "この映画は学校で話題になっています。",
    "explanation": "この映画は学校で話題になっています。\nBộ phim này đang được bàn tán ở trường.\n話題: chủ đề trò chuyện; đề tài được chú ý"
  },
  {
    "id": "tr_399",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Bộ phim này đang được bàn tán ở trường.",
    "acceptedAnswers": [
      "この映画は学校で話題になっています。",
      "この映画は学校で話題になっています"
    ],
    "explanation": "この映画は学校で話題になっています。\n(このえいがはがっこうでわだいになっています。)\n話題: chủ đề trò chuyện; đề tài được chú ý"
  },
  {
    "id": "fb_400",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "別の",
    "sentenceSuffix": "に変えましょう。",
    "choices": [
      "文章",
      "～分け",
      "～同士",
      "話題"
    ],
    "answer": "話題",
    "fullSentence": "別の話題に変えましょう。",
    "explanation": "別の話題に変えましょう。\nHãy chuyển sang chủ đề khác.\n話題: chủ đề trò chuyện; đề tài được chú ý"
  },
  {
    "id": "tr_401",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Hãy chuyển sang chủ đề khác.",
    "acceptedAnswers": [
      "別の話題に変えましょう。",
      "別の話題に変えましょう"
    ],
    "explanation": "別の話題に変えましょう。\n(べつのわだいにかえましょう。)\n話題: chủ đề trò chuyện; đề tài được chú ý"
  },
  {
    "id": "mc_402",
    "type": "multiple_choice",
    "question": "分野 có nghĩa là gì?",
    "word": "分野",
    "reading": "ぶんや",
    "choices": [
      "lĩnh vực",
      "lọt vào, đi sâu vào bên trong",
      "nhỏ, nho nhỏ, không lớn",
      "đắt tiền, có giá trị cao"
    ],
    "answer": "lĩnh vực",
    "explanation": "分野 (ぶんや): lĩnh vực"
  },
  {
    "id": "fb_403",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "医療の",
    "sentenceSuffix": "で働きたいです。",
    "choices": [
      "贈り物",
      "今でこそ",
      "タイトル",
      "分野"
    ],
    "answer": "分野",
    "fullSentence": "医療の分野で働きたいです。",
    "explanation": "医療の分野で働きたいです。\nTôi muốn làm trong lĩnh vực y tế.\n分野: lĩnh vực"
  },
  {
    "id": "tr_404",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi muốn làm trong lĩnh vực y tế.",
    "acceptedAnswers": [
      "医療の分野で働きたいです。",
      "医療の分野で働きたいです"
    ],
    "explanation": "医療の分野で働きたいです。\n(いりょうのぶんやではたらきたいです。)\n分野: lĩnh vực"
  },
  {
    "id": "mc_405",
    "type": "multiple_choice",
    "question": "より～ có nghĩa là gì?",
    "word": "より～",
    "reading": "より～",
    "choices": [
      "thêm vào, đính kèm",
      "bài luận ngắn",
      "khoang cửa/đầu toa tàu; boong tàu thủy",
      "hơn, càng… hơn"
    ],
    "answer": "hơn, càng… hơn",
    "explanation": "より～ (より～): hơn, càng… hơn"
  },
  {
    "id": "tr_406",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi muốn nói tiếng Nhật tự nhiên hơn.",
    "acceptedAnswers": [
      "より自然な日本語を話したいです。",
      "より自然な日本語を話したいです"
    ],
    "explanation": "より自然な日本語を話したいです。\n(よりしぜんなにほんごをはなしたいです。)\nより～: hơn, càng… hơn"
  },
  {
    "id": "mc_407",
    "type": "multiple_choice",
    "question": "判断 có nghĩa là gì?",
    "word": "判断",
    "reading": "はんだん",
    "choices": [
      "được nướng chín; bị cháy; bị rám nắng",
      "phán đoán, quyết định dựa trên thông tin",
      "khoản tiền…",
      "điểm đáng xem, nét hấp dẫn"
    ],
    "answer": "phán đoán, quyết định dựa trên thông tin",
    "explanation": "判断 (はんだん): phán đoán, quyết định dựa trên thông tin"
  },
  {
    "id": "fb_408",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "見た目だけで",
    "sentenceSuffix": "しないでください。",
    "choices": [
      "思い切って",
      "判断",
      "さらす",
      "空っ風"
    ],
    "answer": "判断",
    "fullSentence": "見た目だけで判断しないでください。",
    "explanation": "見た目だけで判断しないでください。\nĐừng đánh giá chỉ dựa vào vẻ ngoài.\n判断: phán đoán, quyết định dựa trên thông tin"
  },
  {
    "id": "tr_409",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Đừng đánh giá chỉ dựa vào vẻ ngoài.",
    "acceptedAnswers": [
      "見た目だけで判断しないでください。",
      "見た目だけで判断しないでください"
    ],
    "explanation": "見た目だけで判断しないでください。\n(みためだけではんだんしないでください。)\n判断: phán đoán, quyết định dựa trên thông tin"
  },
  {
    "id": "fb_410",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "今は安全だと",
    "sentenceSuffix": "しました。",
    "choices": [
      "友人",
      "判断",
      "アドバイス",
      "数える"
    ],
    "answer": "判断",
    "fullSentence": "今は安全だと判断しました。",
    "explanation": "今は安全だと判断しました。\nTôi đánh giá rằng hiện tại an toàn.\n判断: phán đoán, quyết định dựa trên thông tin"
  },
  {
    "id": "tr_411",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đánh giá rằng hiện tại an toàn.",
    "acceptedAnswers": [
      "今は安全だと判断しました。",
      "今は安全だと判断しました"
    ],
    "explanation": "今は安全だと判断しました。\n(いまはあんぜんだとはんだんしました。)\n判断: phán đoán, quyết định dựa trên thông tin"
  },
  {
    "id": "mc_412",
    "type": "multiple_choice",
    "question": "思い切って có nghĩa là gì?",
    "word": "思い切って",
    "reading": "おもいきって",
    "choices": [
      "đi lễ đền/chùa",
      "dáng vẻ, hình dáng; hình ảnh người/vật",
      "bài hát, khúc hát (thường gặp với dân ca)",
      "mạnh dạn, lấy hết can đảm, quyết tâm làm"
    ],
    "answer": "mạnh dạn, lấy hết can đảm, quyết tâm làm",
    "explanation": "思い切って (おもいきって): mạnh dạn, lấy hết can đảm, quyết tâm làm"
  },
  {
    "id": "fb_413",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "先生に相談しました。",
    "choices": [
      "幸運",
      "座席",
      "思い切って",
      "文字"
    ],
    "answer": "思い切って",
    "fullSentence": "思い切って先生に相談しました。",
    "explanation": "思い切って先生に相談しました。\nTôi lấy hết can đảm trao đổi với thầy.\n思い切って: mạnh dạn, lấy hết can đảm, quyết tâm làm"
  },
  {
    "id": "tr_414",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi lấy hết can đảm trao đổi với thầy.",
    "acceptedAnswers": [
      "思い切って先生に相談しました。",
      "思い切って先生に相談しました"
    ],
    "explanation": "思い切って先生に相談しました。\n(おもいきってせんせいにそうだんしました。)\n思い切って: mạnh dạn, lấy hết can đảm, quyết tâm làm"
  },
  {
    "id": "mc_415",
    "type": "multiple_choice",
    "question": "体験談 có nghĩa là gì?",
    "word": "体験談",
    "reading": "たいけんだん",
    "choices": [
      "câu chuyện về trải nghiệm thực tế",
      "làng",
      "nhân vật trong truyện, phim…",
      "được sản xuất/trồng/đánh bắt tại…"
    ],
    "answer": "câu chuyện về trải nghiệm thực tế",
    "explanation": "体験談 (たいけんだん): câu chuyện về trải nghiệm thực tế"
  },
  {
    "id": "fb_416",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "先輩の留学",
    "sentenceSuffix": "を聞きました。",
    "choices": [
      "時代",
      "山の幸",
      "男",
      "体験談"
    ],
    "answer": "体験談",
    "fullSentence": "先輩の留学体験談を聞きました。",
    "explanation": "先輩の留学体験談を聞きました。\nTôi nghe tiền bối kể trải nghiệm du học.\n体験談: câu chuyện về trải nghiệm thực tế"
  },
  {
    "id": "tr_417",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi nghe tiền bối kể trải nghiệm du học.",
    "acceptedAnswers": [
      "先輩の留学体験談を聞きました。",
      "先輩の留学体験談を聞きました"
    ],
    "explanation": "先輩の留学体験談を聞きました。\n(せんぱいのりゅうがくたいけんだんをききました。)\n体験談: câu chuyện về trải nghiệm thực tế"
  },
  {
    "id": "mc_418",
    "type": "multiple_choice",
    "question": "海岸 có nghĩa là gì?",
    "word": "海岸",
    "reading": "かいがん",
    "choices": [
      "khá, tương đối",
      "thêm vào, gọi thêm",
      "bờ biển",
      "giờ, thời điểm chính xác"
    ],
    "answer": "bờ biển",
    "explanation": "海岸 (かいがん): bờ biển"
  },
  {
    "id": "fb_419",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "夕方、",
    "sentenceSuffix": "を歩きます。",
    "choices": [
      "日差し",
      "海岸",
      "日帰り",
      "メンバー"
    ],
    "answer": "海岸",
    "fullSentence": "夕方、海岸を歩きます。",
    "explanation": "夕方、海岸を歩きます。\nBuổi chiều tôi đi dọc bờ biển.\n海岸: bờ biển"
  },
  {
    "id": "tr_420",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Buổi chiều tôi đi dọc bờ biển.",
    "acceptedAnswers": [
      "夕方、海岸を歩きます。",
      "夕方、海岸を歩きます"
    ],
    "explanation": "夕方、海岸を歩きます。\n(ゆうがた、かいがんをあるきます。)\n海岸: bờ biển"
  },
  {
    "id": "mc_421",
    "type": "multiple_choice",
    "question": "年代 có nghĩa là gì?",
    "word": "年代",
    "reading": "ねんだい",
    "choices": [
      "nét đặc trưng, phẩm chất riêng của…",
      "ngay, lập tức bắt tay làm",
      "thời kỳ; nhóm tuổi, thế hệ",
      "doanh nghiệp, công ty"
    ],
    "answer": "thời kỳ; nhóm tuổi, thế hệ",
    "explanation": "年代 (ねんだい): thời kỳ; nhóm tuổi, thế hệ"
  },
  {
    "id": "fb_422",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "が違っても仲良くなれます。",
    "choices": [
      "開催",
      "年代",
      "疑問",
      "話題"
    ],
    "answer": "年代",
    "fullSentence": "年代が違っても仲良くなれます。",
    "explanation": "年代が違っても仲良くなれます。\nDù khác thế hệ vẫn có thể trở nên thân thiết.\n年代: thời kỳ; nhóm tuổi, thế hệ"
  },
  {
    "id": "tr_423",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Dù khác thế hệ vẫn có thể trở nên thân thiết.",
    "acceptedAnswers": [
      "年代が違っても仲良くなれます。",
      "年代が違っても仲良くなれます"
    ],
    "explanation": "年代が違っても仲良くなれます。\n(ねんだいがちがってもなかよくなれます。)\n年代: thời kỳ; nhóm tuổi, thế hệ"
  },
  {
    "id": "mc_424",
    "type": "multiple_choice",
    "question": "～分け có nghĩa là gì?",
    "word": "～分け",
    "reading": "～わけ",
    "choices": [
      "đi lại hai chiều",
      "sự chia, phân loại theo…",
      "bãi biển cát",
      "sức gió, năng lượng gió"
    ],
    "answer": "sự chia, phân loại theo…",
    "explanation": "～分け (～わけ): sự chia, phân loại theo…"
  },
  {
    "id": "tr_425",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Trong giờ học, chúng tôi chia nhóm.",
    "acceptedAnswers": [
      "授業でグループ分けをします。",
      "授業でグループ分けをします"
    ],
    "explanation": "授業でグループ分けをします。\n(じゅぎょうでグループわけをします。)\n～分け: sự chia, phân loại theo…"
  },
  {
    "id": "mc_426",
    "type": "multiple_choice",
    "question": "年配 có nghĩa là gì?",
    "word": "年配",
    "reading": "ねんぱい",
    "choices": [
      "người có tuổi, lớn tuổi",
      "thời đại, thời kỳ",
      "thừa nhận, công nhận; chấp nhận, cho phép",
      "ngày tháng, thời gian trôi qua"
    ],
    "answer": "người có tuổi, lớn tuổi",
    "explanation": "年配 (ねんぱい): người có tuổi, lớn tuổi"
  },
  {
    "id": "fb_427",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "の人に席を譲りました。",
    "choices": [
      "年配",
      "誤解",
      "受ける（ショックを受ける）",
      "豊かさ"
    ],
    "answer": "年配",
    "fullSentence": "年配の人に席を譲りました。",
    "explanation": "年配の人に席を譲りました。\nTôi nhường ghế cho người lớn tuổi.\n年配: người có tuổi, lớn tuổi"
  },
  {
    "id": "tr_428",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi nhường ghế cho người lớn tuổi.",
    "acceptedAnswers": [
      "年配の人に席を譲りました。",
      "年配の人に席を譲りました"
    ],
    "explanation": "年配の人に席を譲りました。\n(ねんぱいのひとにせきをゆずりました。)\n年配: người có tuổi, lớn tuổi"
  },
  {
    "id": "mc_429",
    "type": "multiple_choice",
    "question": "要る có nghĩa là gì?",
    "word": "要る",
    "reading": "いる",
    "choices": [
      "sàn gỗ, sàn lát ván",
      "những năm gần đây",
      "chỉ định, quy định",
      "cần"
    ],
    "answer": "cần",
    "explanation": "要る (いる): cần"
  },
  {
    "id": "tr_430",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Thủ tục này cần con dấu.",
    "acceptedAnswers": [
      "この手続きには印鑑が要ります。",
      "この手続きには印鑑が要ります"
    ],
    "explanation": "この手続きには印鑑が要ります。\n(このてつづきにはいんかんがいります。)\n要る: cần"
  },
  {
    "id": "mc_431",
    "type": "multiple_choice",
    "question": "～以外 có nghĩa là gì?",
    "word": "～以外",
    "reading": "～いがい",
    "choices": [
      "ngoài…, trừ…",
      "tuổi nghỉ hưu theo quy định",
      "biển và đại dương",
      "tạm hoãn/tạm ngừng; nhìn nhau"
    ],
    "answer": "ngoài…, trừ…",
    "explanation": "～以外 (～いがい): ngoài…, trừ…"
  },
  {
    "id": "tr_432",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Ngoài chủ nhật, tôi làm việc mỗi ngày.",
    "acceptedAnswers": [
      "日曜日以外は毎日働いています。",
      "日曜日以外は毎日働いています"
    ],
    "explanation": "日曜日以外は毎日働いています。\n(にちようびいがいはまいにちはたらいています。)\n～以外: ngoài…, trừ…"
  },
  {
    "id": "tr_433",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Ngoài tiếng Nhật, tôi còn học tiếng Anh.",
    "acceptedAnswers": [
      "日本語以外にも英語を勉強しています。",
      "日本語以外にも英語を勉強しています"
    ],
    "explanation": "日本語以外にも英語を勉強しています。\n(にほんごいがいにもえいごをべんきょうしています。)\n～以外: ngoài…, trừ…"
  },
  {
    "id": "mc_434",
    "type": "multiple_choice",
    "question": "景気 có nghĩa là gì?",
    "word": "景気",
    "reading": "けいき",
    "choices": [
      "mùa đông ấm hơn bình thường",
      "phát triển, tạo sản phẩm/công nghệ mới",
      "tình hình kinh tế, tình hình làm ăn",
      "ngói"
    ],
    "answer": "tình hình kinh tế, tình hình làm ăn",
    "explanation": "景気 (けいき): tình hình kinh tế, tình hình làm ăn"
  },
  {
    "id": "fb_435",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "最近は",
    "sentenceSuffix": "がよくありません。",
    "choices": [
      "つるす",
      "景気",
      "掛け声",
      "努力"
    ],
    "answer": "景気",
    "fullSentence": "最近は景気がよくありません。",
    "explanation": "最近は景気がよくありません。\nGần đây tình hình kinh tế không tốt.\n景気: tình hình kinh tế, tình hình làm ăn"
  },
  {
    "id": "tr_436",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Gần đây tình hình kinh tế không tốt.",
    "acceptedAnswers": [
      "最近は景気がよくありません。",
      "最近は景気がよくありません"
    ],
    "explanation": "最近は景気がよくありません。\n(さいきんはけいきがよくありません。)\n景気: tình hình kinh tế, tình hình làm ăn"
  },
  {
    "id": "mc_437",
    "type": "multiple_choice",
    "question": "都心 có nghĩa là gì?",
    "word": "都心",
    "reading": "としん",
    "choices": [
      "trung tâm đô thị lớn",
      "hồi hộp lo lắng, thót tim",
      "hiếu thảo, báo hiếu",
      "được làm bằng…; sản xuất tại…"
    ],
    "answer": "trung tâm đô thị lớn",
    "explanation": "都心 (としん): trung tâm đô thị lớn"
  },
  {
    "id": "fb_438",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "毎日、",
    "sentenceSuffix": "の会社に通っています。",
    "choices": [
      "メッセージ",
      "掛け声",
      "都心",
      "優勝"
    ],
    "answer": "都心",
    "fullSentence": "毎日、都心の会社に通っています。",
    "explanation": "毎日、都心の会社に通っています。\nHằng ngày tôi đi làm tại công ty ở trung tâm.\n都心: trung tâm đô thị lớn"
  },
  {
    "id": "tr_439",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Hằng ngày tôi đi làm tại công ty ở trung tâm.",
    "acceptedAnswers": [
      "毎日、都心の会社に通っています。",
      "毎日、都心の会社に通っています"
    ],
    "explanation": "毎日、都心の会社に通っています。\n(まいにち、としんのかいしゃにかよっています。)\n都心: trung tâm đô thị lớn"
  },
  {
    "id": "mc_440",
    "type": "multiple_choice",
    "question": "ドレス có nghĩa là gì?",
    "word": "ドレス",
    "reading": "ドレス",
    "choices": [
      "những người cùng… với nhau",
      "ầm ầm, tiếng vang lớn kéo dài",
      "háo hức, hồi hộp vui sướng",
      "váy đầm, lễ phục nữ"
    ],
    "answer": "váy đầm, lễ phục nữ",
    "explanation": "ドレス (ドレス): váy đầm, lễ phục nữ"
  },
  {
    "id": "fb_441",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "結婚式で青い",
    "sentenceSuffix": "を着ます。",
    "choices": [
      "わざと",
      "美しい",
      "数える",
      "ドレス"
    ],
    "answer": "ドレス",
    "fullSentence": "結婚式で青いドレスを着ます。",
    "explanation": "結婚式で青いドレスを着ます。\nTôi mặc đầm xanh trong lễ cưới.\nドレス: váy đầm, lễ phục nữ"
  },
  {
    "id": "tr_442",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi mặc đầm xanh trong lễ cưới.",
    "acceptedAnswers": [
      "結婚式で青いドレスを着ます。",
      "結婚式で青いドレスを着ます"
    ],
    "explanation": "結婚式で青いドレスを着ます。\n(けっこんしきであおいドレスをきます。)\nドレス: váy đầm, lễ phục nữ"
  },
  {
    "id": "mc_443",
    "type": "multiple_choice",
    "question": "努力 có nghĩa là gì?",
    "word": "努力",
    "reading": "どりょく",
    "choices": [
      "khuyên, đưa ra lời khuyên",
      "nỗ lực",
      "dịch vụ chuyển phát tận nhà; kiện gửi qua dịch vụ đó",
      "đi ngang qua, đi quá"
    ],
    "answer": "nỗ lực",
    "explanation": "努力 (どりょく): nỗ lực"
  },
  {
    "id": "fb_444",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "試験に合格するために",
    "sentenceSuffix": "しています。",
    "choices": [
      "トレッキング",
      "女子高生",
      "わ（けがしたわ）",
      "努力"
    ],
    "answer": "努力",
    "fullSentence": "試験に合格するために努力しています。",
    "explanation": "試験に合格するために努力しています。\nTôi đang nỗ lực để đỗ kỳ thi.\n努力: nỗ lực"
  },
  {
    "id": "tr_445",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đang nỗ lực để đỗ kỳ thi.",
    "acceptedAnswers": [
      "試験に合格するために努力しています。",
      "試験に合格するために努力しています"
    ],
    "explanation": "試験に合格するために努力しています。\n(しけんにごうかくするためにどりょくしています。)\n努力: nỗ lực"
  },
  {
    "id": "fb_446",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "毎日",
    "sentenceSuffix": "を続けます。",
    "choices": [
      "今でこそ",
      "持ち上げる",
      "戦争",
      "努力"
    ],
    "answer": "努力",
    "fullSentence": "毎日努力を続けます。",
    "explanation": "毎日努力を続けます。\nTôi tiếp tục nỗ lực mỗi ngày.\n努力: nỗ lực"
  },
  {
    "id": "tr_447",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi tiếp tục nỗ lực mỗi ngày.",
    "acceptedAnswers": [
      "毎日努力を続けます。",
      "毎日努力を続けます"
    ],
    "explanation": "毎日努力を続けます。\n(まいにちどりょくをつづけます。)\n努力: nỗ lực"
  },
  {
    "id": "mc_448",
    "type": "multiple_choice",
    "question": "当然 có nghĩa là gì?",
    "word": "当然",
    "reading": "とうぜん",
    "choices": [
      "tường xây bằng đá",
      "đương nhiên, tất nhiên",
      "chỗ ngồi, ghế ngồi",
      "vấn đề/chủ đề chính"
    ],
    "answer": "đương nhiên, tất nhiên",
    "explanation": "当然 (とうぜん): đương nhiên, tất nhiên"
  },
  {
    "id": "fb_449",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "約束を守るのは",
    "sentenceSuffix": "のことです。",
    "choices": [
      "朝日",
      "内回り",
      "当然",
      "ドレス"
    ],
    "answer": "当然",
    "fullSentence": "約束を守るのは当然のことです。",
    "explanation": "約束を守るのは当然のことです。\nGiữ lời hứa là điều đương nhiên.\n当然: đương nhiên, tất nhiên"
  },
  {
    "id": "tr_450",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Giữ lời hứa là điều đương nhiên.",
    "acceptedAnswers": [
      "約束を守るのは当然のことです。",
      "約束を守るのは当然のことです"
    ],
    "explanation": "約束を守るのは当然のことです。\n(やくそくをまもるのはとうぜんのことです。)\n当然: đương nhiên, tất nhiên"
  },
  {
    "id": "fb_451",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "、私も参加します。",
    "choices": [
      "表現",
      "かみさん",
      "当然",
      "共通"
    ],
    "answer": "当然",
    "fullSentence": "当然、私も参加します。",
    "explanation": "当然、私も参加します。\nTất nhiên tôi cũng tham gia.\n当然: đương nhiên, tất nhiên"
  },
  {
    "id": "tr_452",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tất nhiên tôi cũng tham gia.",
    "acceptedAnswers": [
      "当然、私も参加します。",
      "当然、私も参加します"
    ],
    "explanation": "当然、私も参加します。\n(とうぜん、わたしもさんかします。)\n当然: đương nhiên, tất nhiên"
  },
  {
    "id": "mc_453",
    "type": "multiple_choice",
    "question": "ブログ có nghĩa là gì?",
    "word": "ブログ",
    "reading": "ブログ",
    "choices": [
      "thế rồi, khi đó thì; nếu vậy thì",
      "khá, tương đối",
      "ngay, lập tức bắt tay làm",
      "blog, nhật ký trên mạng"
    ],
    "answer": "blog, nhật ký trên mạng",
    "explanation": "ブログ (ブログ): blog, nhật ký trên mạng"
  },
  {
    "id": "fb_454",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "旅行のことを",
    "sentenceSuffix": "に書きます。",
    "choices": [
      "ミーティング",
      "今では",
      "ブログ",
      "開発"
    ],
    "answer": "ブログ",
    "fullSentence": "旅行のことをブログに書きます。",
    "explanation": "旅行のことをブログに書きます。\nTôi viết về chuyến đi trên blog.\nブログ: blog, nhật ký trên mạng"
  },
  {
    "id": "tr_455",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi viết về chuyến đi trên blog.",
    "acceptedAnswers": [
      "旅行のことをブログに書きます。",
      "旅行のことをブログに書きます"
    ],
    "explanation": "旅行のことをブログに書きます。\n(りょこうのことをブログにかきます。)\nブログ: blog, nhật ký trên mạng"
  },
  {
    "id": "mc_456",
    "type": "multiple_choice",
    "question": "フットサル có nghĩa là gì?",
    "word": "フットサル",
    "reading": "フットサル",
    "choices": [
      "futsal, bóng đá sân nhỏ năm người",
      "xúc động, cảm động",
      "không được, không ổn, vô ích",
      "ngành sản xuất, ngành kinh tế"
    ],
    "answer": "futsal, bóng đá sân nhỏ năm người",
    "explanation": "フットサル (フットサル): futsal, bóng đá sân nhỏ năm người"
  },
  {
    "id": "fb_457",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "週末は友達と",
    "sentenceSuffix": "をします。",
    "choices": [
      "村",
      "済ませる",
      "フットサル",
      "例年"
    ],
    "answer": "フットサル",
    "fullSentence": "週末は友達とフットサルをします。",
    "explanation": "週末は友達とフットサルをします。\nCuối tuần tôi chơi futsal với bạn.\nフットサル: futsal, bóng đá sân nhỏ năm người"
  },
  {
    "id": "tr_458",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Cuối tuần tôi chơi futsal với bạn.",
    "acceptedAnswers": [
      "週末は友達とフットサルをします。",
      "週末は友達とフットサルをします"
    ],
    "explanation": "週末は友達とフットサルをします。\n(しゅうまつはともだちとフットサルをします。)\nフットサル: futsal, bóng đá sân nhỏ năm người"
  },
  {
    "id": "mc_459",
    "type": "multiple_choice",
    "question": "ネット có nghĩa là gì?",
    "word": "ネット",
    "reading": "ネット",
    "choices": [
      "từ đếm nhà, cửa hàng, tòa nhà nhỏ",
      "mạng Internet (viết tắt của インターネット)",
      "không… chút nào (khẩu ngữ)",
      "hiếu thảo, báo hiếu"
    ],
    "answer": "mạng Internet (viết tắt của インターネット)",
    "explanation": "ネット (ネット): mạng Internet (viết tắt của インターネット)"
  },
  {
    "id": "fb_460",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "言葉の意味を",
    "sentenceSuffix": "で調べます。",
    "choices": [
      "焼ける",
      "ネット",
      "モデル",
      "地区"
    ],
    "answer": "ネット",
    "fullSentence": "言葉の意味をネットで調べます。",
    "explanation": "言葉の意味をネットで調べます。\nTôi tra nghĩa của từ trên mạng.\nネット: mạng Internet (viết tắt của インターネット)"
  },
  {
    "id": "tr_461",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi tra nghĩa của từ trên mạng.",
    "acceptedAnswers": [
      "言葉の意味をネットで調べます。",
      "言葉の意味をネットで調べます"
    ],
    "explanation": "言葉の意味をネットで調べます。\n(ことばのいみをネットでしらべます。)\nネット: mạng Internet (viết tắt của インターネット)"
  },
  {
    "id": "mc_462",
    "type": "multiple_choice",
    "question": "メンバー có nghĩa là gì?",
    "word": "メンバー",
    "reading": "メンバー",
    "choices": [
      "lúc đó, thời ấy",
      "thành viên",
      "đường bờ biển",
      "cảng, bến cảng"
    ],
    "answer": "thành viên",
    "explanation": "メンバー (メンバー): thành viên"
  },
  {
    "id": "fb_463",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "サッカーチームの",
    "sentenceSuffix": "になりました。",
    "choices": [
      "メンバー",
      "車窓",
      "トレッキング",
      "ゆする"
    ],
    "answer": "メンバー",
    "fullSentence": "サッカーチームのメンバーになりました。",
    "explanation": "サッカーチームのメンバーになりました。\nTôi đã trở thành thành viên đội bóng.\nメンバー: thành viên"
  },
  {
    "id": "tr_464",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đã trở thành thành viên đội bóng.",
    "acceptedAnswers": [
      "サッカーチームのメンバーになりました。",
      "サッカーチームのメンバーになりました"
    ],
    "explanation": "サッカーチームのメンバーになりました。\n(サッカーチームのメンバーになりました。)\nメンバー: thành viên"
  },
  {
    "id": "mc_465",
    "type": "multiple_choice",
    "question": "数 có nghĩa là gì?",
    "word": "数",
    "reading": "かず",
    "choices": [
      "số lượng",
      "ghé thăm; (mùa, thời điểm) đến",
      "kín chỗ, hết ghế trống",
      "xé, làm rách; phá vỡ/không giữ"
    ],
    "answer": "số lượng",
    "explanation": "数 (かず): số lượng"
  },
  {
    "id": "fb_466",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "外国人の",
    "sentenceSuffix": "が増えています。",
    "choices": [
      "セメント",
      "文章",
      "数",
      "香り"
    ],
    "answer": "数",
    "fullSentence": "外国人の数が増えています。",
    "explanation": "外国人の数が増えています。\nSố người nước ngoài đang tăng.\n数: số lượng"
  },
  {
    "id": "tr_467",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Số người nước ngoài đang tăng.",
    "acceptedAnswers": [
      "外国人の数が増えています。",
      "外国人の数が増えています"
    ],
    "explanation": "外国人の数が増えています。\n(がいこくじんのかずがふえています。)\n数: số lượng"
  },
  {
    "id": "mc_468",
    "type": "multiple_choice",
    "question": "～代 có nghĩa là gì?",
    "word": "～代",
    "reading": "～だい",
    "choices": [
      "nhóm tuổi…; khoảng số…",
      "bỏ/ngừng hút thuốc",
      "tiền điện tử dùng thanh toán",
      "lượng giáng thủy (mưa, tuyết… quy đổi ra nước)"
    ],
    "answer": "nhóm tuổi…; khoảng số…",
    "explanation": "～代 (～だい): nhóm tuổi…; khoảng số…"
  },
  {
    "id": "tr_469",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Bố tôi ở độ tuổi bốn mươi.",
    "acceptedAnswers": [
      "父は四十代です。",
      "父は四十代です"
    ],
    "explanation": "父は四十代です。\n(ちちはよんじゅうだいです。)\n～代: nhóm tuổi…; khoảng số…"
  },
  {
    "id": "mc_470",
    "type": "multiple_choice",
    "question": "シュート có nghĩa là gì?",
    "word": "シュート",
    "reading": "シュート",
    "choices": [
      "chân núi",
      "kéo dài, mở rộng; bị dời lại",
      "sút/ném để ghi bàn",
      "đoạn văn, bài văn, văn bản"
    ],
    "answer": "sút/ném để ghi bàn",
    "explanation": "シュート (シュート): sút/ném để ghi bàn"
  },
  {
    "id": "fb_471",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "彼はゴールに",
    "sentenceSuffix": "しました。",
    "choices": [
      "かけ間違い",
      "埋め立てる",
      "シュート",
      "開催"
    ],
    "answer": "シュート",
    "fullSentence": "彼はゴールにシュートしました。",
    "explanation": "彼はゴールにシュートしました。\nAnh ấy sút bóng về phía khung thành.\nシュート: sút/ném để ghi bàn"
  },
  {
    "id": "tr_472",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Anh ấy sút bóng về phía khung thành.",
    "acceptedAnswers": [
      "彼はゴールにシュートしました。",
      "彼はゴールにシュートしました"
    ],
    "explanation": "彼はゴールにシュートしました。\n(かれはゴールにシュートしました。)\nシュート: sút/ném để ghi bàn"
  },
  {
    "id": "mc_473",
    "type": "multiple_choice",
    "question": "お互い có nghĩa là gì?",
    "word": "お互い",
    "reading": "おたがい",
    "choices": [
      "người lớn tuổi/cấp bậc cao hơn",
      "nhau, cả hai bên",
      "vườn, sân vườn",
      "mọi năm; năm bình thường làm mốc so sánh"
    ],
    "answer": "nhau, cả hai bên",
    "explanation": "お互い (おたがい): nhau, cả hai bên"
  },
  {
    "id": "fb_474",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "困ったときは",
    "sentenceSuffix": "に助け合います。",
    "choices": [
      "ハプニング",
      "軒",
      "人見知り",
      "お互い"
    ],
    "answer": "お互い",
    "fullSentence": "困ったときはお互いに助け合います。",
    "explanation": "困ったときはお互いに助け合います。\nKhi gặp khó khăn, chúng tôi giúp đỡ lẫn nhau.\nお互い: nhau, cả hai bên"
  },
  {
    "id": "tr_475",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Khi gặp khó khăn, chúng tôi giúp đỡ lẫn nhau.",
    "acceptedAnswers": [
      "困ったときはお互いに助け合います。",
      "困ったときはお互いに助け合います"
    ],
    "explanation": "困ったときはお互いに助け合います。\n(こまったときはおたがいにたすけあいます。)\nお互い: nhau, cả hai bên"
  },
  {
    "id": "mc_476",
    "type": "multiple_choice",
    "question": "チームプレー có nghĩa là gì?",
    "word": "チームプレー",
    "reading": "チームプレー",
    "choices": [
      "ghé thăm; (mùa, thời điểm) đến",
      "lối chơi phối hợp đồng đội",
      "chiều dọc",
      "góc, khu vực dành cho một mục đích"
    ],
    "answer": "lối chơi phối hợp đồng đội",
    "explanation": "チームプレー (チームプレー): lối chơi phối hợp đồng đội"
  },
  {
    "id": "fb_477",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "サッカーでは",
    "sentenceSuffix": "が大切です。",
    "choices": [
      "地形",
      "すると",
      "チームプレー",
      "村"
    ],
    "answer": "チームプレー",
    "fullSentence": "サッカーではチームプレーが大切です。",
    "explanation": "サッカーではチームプレーが大切です。\nTrong bóng đá, phối hợp đồng đội rất quan trọng.\nチームプレー: lối chơi phối hợp đồng đội"
  },
  {
    "id": "tr_478",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Trong bóng đá, phối hợp đồng đội rất quan trọng.",
    "acceptedAnswers": [
      "サッカーではチームプレーが大切です。",
      "サッカーではチームプレーが大切です"
    ],
    "explanation": "サッカーではチームプレーが大切です。\n(サッカーではチームプレーがたいせつです。)\nチームプレー: lối chơi phối hợp đồng đội"
  },
  {
    "id": "mc_479",
    "type": "multiple_choice",
    "question": "気がする có nghĩa là gì?",
    "word": "気がする",
    "reading": "きがする",
    "choices": [
      "việc gọi nhầm số điện thoại",
      "cảm thấy, có cảm giác rằng…",
      "bản đồ du lịch",
      "sống, tồn tại"
    ],
    "answer": "cảm thấy, có cảm giác rằng…",
    "explanation": "気がする (きがする): cảm thấy, có cảm giác rằng…"
  },
  {
    "id": "tr_480",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi có cảm giác ngày mai sẽ mưa.",
    "acceptedAnswers": [
      "明日は雨が降る気がします。",
      "明日は雨が降る気がします"
    ],
    "explanation": "明日は雨が降る気がします。\n(あしたはあめがふるきがします。)\n気がする: cảm thấy, có cảm giác rằng…"
  },
  {
    "id": "tr_481",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi cảm thấy cách này có vẻ tiện.",
    "acceptedAnswers": [
      "この方法は便利な気がします。",
      "この方法は便利な気がします"
    ],
    "explanation": "この方法は便利な気がします。\n(このほうほうはべんりなきがします。)\n気がする: cảm thấy, có cảm giác rằng…"
  },
  {
    "id": "mc_482",
    "type": "multiple_choice",
    "question": "掛け声 có nghĩa là gì?",
    "word": "掛け声",
    "reading": "かけごえ",
    "choices": [
      "ngành sản xuất, ngành kinh tế",
      "tiếng hô, tiếng gọi để cổ vũ/phối hợp",
      "khu vườn nổi tiếng, đẹp",
      "thu gom, thu hồi"
    ],
    "answer": "tiếng hô, tiếng gọi để cổ vũ/phối hợp",
    "explanation": "掛け声 (かけごえ): tiếng hô, tiếng gọi để cổ vũ/phối hợp"
  },
  {
    "id": "fb_483",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "みんなで",
    "sentenceSuffix": "をかけて運びます。",
    "choices": [
      "数える",
      "戦争",
      "判断",
      "掛け声"
    ],
    "answer": "掛け声",
    "fullSentence": "みんなで掛け声をかけて運びます。",
    "explanation": "みんなで掛け声をかけて運びます。\nMọi người cùng hô để phối hợp khi khiêng.\n掛け声: tiếng hô, tiếng gọi để cổ vũ/phối hợp"
  },
  {
    "id": "tr_484",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Mọi người cùng hô để phối hợp khi khiêng.",
    "acceptedAnswers": [
      "みんなで掛け声をかけて運びます。",
      "みんなで掛け声をかけて運びます"
    ],
    "explanation": "みんなで掛け声をかけて運びます。\n(みんなでかけごえをかけてはこびます。)\n掛け声: tiếng hô, tiếng gọi để cổ vũ/phối hợp"
  },
  {
    "id": "mc_485",
    "type": "multiple_choice",
    "question": "瞬間 có nghĩa là gì?",
    "word": "瞬間",
    "reading": "しゅんかん",
    "choices": [
      "vữa vôi dùng trát tường",
      "cứng, chắc; cứng nhắc, trang trọng quá",
      "hình dung, gợi nhớ trong đầu",
      "khoảnh khắc"
    ],
    "answer": "khoảnh khắc",
    "explanation": "瞬間 (しゅんかん): khoảnh khắc"
  },
  {
    "id": "fb_486",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "ドアを開けた",
    "sentenceSuffix": "に、猫が逃げました。",
    "choices": [
      "現在",
      "瞬間",
      "男",
      "チリンチリン"
    ],
    "answer": "瞬間",
    "fullSentence": "ドアを開けた瞬間に、猫が逃げました。",
    "explanation": "ドアを開けた瞬間に、猫が逃げました。\nNgay khi tôi mở cửa, con mèo chạy mất.\n瞬間: khoảnh khắc"
  },
  {
    "id": "tr_487",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Ngay khi tôi mở cửa, con mèo chạy mất.",
    "acceptedAnswers": [
      "ドアを開けた瞬間に、猫が逃げました。",
      "ドアを開けた瞬間に、猫が逃げました"
    ],
    "explanation": "ドアを開けた瞬間に、猫が逃げました。\n(ドアをあけたしゅんかんに、ねこがにげました。)\n瞬間: khoảnh khắc"
  },
  {
    "id": "mc_488",
    "type": "multiple_choice",
    "question": "ハイタッチ có nghĩa là gì?",
    "word": "ハイタッチ",
    "reading": "ハイタッチ",
    "choices": [
      "sản phẩm nổi tiếng của địa phương",
      "đập tay chúc mừng",
      "vẫn còn nhiều; còn lâu mới đạt",
      "bỏ/ngừng hút thuốc"
    ],
    "answer": "đập tay chúc mừng",
    "explanation": "ハイタッチ (ハイタッチ): đập tay chúc mừng"
  },
  {
    "id": "fb_489",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "試合に勝って、仲間と",
    "sentenceSuffix": "しました。",
    "choices": [
      "ハイタッチ",
      "ハーモニカ",
      "学園祭",
      "フローリング"
    ],
    "answer": "ハイタッチ",
    "fullSentence": "試合に勝って、仲間とハイタッチしました。",
    "explanation": "試合に勝って、仲間とハイタッチしました。\nThắng trận xong, tôi đập tay với đồng đội.\nハイタッチ: đập tay chúc mừng"
  },
  {
    "id": "tr_490",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Thắng trận xong, tôi đập tay với đồng đội.",
    "acceptedAnswers": [
      "試合に勝って、仲間とハイタッチしました。",
      "試合に勝って、仲間とハイタッチしました"
    ],
    "explanation": "試合に勝って、仲間とハイタッチしました。\n(しあいにかって、なかまとハイタッチしました。)\nハイタッチ: đập tay chúc mừng"
  },
  {
    "id": "mc_491",
    "type": "multiple_choice",
    "question": "意外 có nghĩa là gì?",
    "word": "意外",
    "reading": "いがい",
    "choices": [
      "ghé thăm; (mùa, thời điểm) đến",
      "bất ngờ, ngoài dự đoán",
      "thổi (gió; nhạc cụ hơi)",
      "chỉ định, quy định"
    ],
    "answer": "bất ngờ, ngoài dự đoán",
    "explanation": "意外 (いがい): bất ngờ, ngoài dự đoán"
  },
  {
    "id": "fb_492",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "な結果になりました。",
    "choices": [
      "誤解",
      "～とも",
      "意外",
      "渋滞"
    ],
    "answer": "意外",
    "fullSentence": "意外な結果になりました。",
    "explanation": "意外な結果になりました。\nKết quả thật bất ngờ.\n意外: bất ngờ, ngoài dự đoán"
  },
  {
    "id": "tr_493",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Kết quả thật bất ngờ.",
    "acceptedAnswers": [
      "意外な結果になりました。",
      "意外な結果になりました"
    ],
    "explanation": "意外な結果になりました。\n(いがいなけっかになりました。)\n意外: bất ngờ, ngoài dự đoán"
  },
  {
    "id": "fb_494",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この問題は",
    "sentenceSuffix": "に簡単です。",
    "choices": [
      "意外",
      "出会い",
      "置き場",
      "マウス"
    ],
    "answer": "意外",
    "fullSentence": "この問題は意外に簡単です。",
    "explanation": "この問題は意外に簡単です。\nBài này dễ hơn tôi tưởng.\n意外: bất ngờ, ngoài dự đoán"
  },
  {
    "id": "tr_495",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Bài này dễ hơn tôi tưởng.",
    "acceptedAnswers": [
      "この問題は意外に簡単です。",
      "この問題は意外に簡単です"
    ],
    "explanation": "この問題は意外に簡単です。\n(このもんだいはいがいにかんたんです。)\n意外: bất ngờ, ngoài dự đoán"
  },
  {
    "id": "mc_496",
    "type": "multiple_choice",
    "question": "出会い có nghĩa là gì?",
    "word": "出会い",
    "reading": "であい",
    "choices": [
      "cách nói suồng sã, ngang hàng, không dùng kính ngữ",
      "mạnh dạn, lấy hết can đảm, quyết tâm làm",
      "cuộc gặp gỡ, cơ duyên gặp",
      "má (khẩu ngữ)"
    ],
    "answer": "cuộc gặp gỡ, cơ duyên gặp",
    "explanation": "出会い (であい): cuộc gặp gỡ, cơ duyên gặp"
  },
  {
    "id": "fb_497",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "旅では人との",
    "sentenceSuffix": "を大切にしています。",
    "choices": [
      "出会い",
      "列車",
      "越える",
      "開発"
    ],
    "answer": "出会い",
    "fullSentence": "旅では人との出会いを大切にしています。",
    "explanation": "旅では人との出会いを大切にしています。\nKhi đi du lịch, tôi trân trọng những cuộc gặp gỡ.\n出会い: cuộc gặp gỡ, cơ duyên gặp"
  },
  {
    "id": "tr_498",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Khi đi du lịch, tôi trân trọng những cuộc gặp gỡ.",
    "acceptedAnswers": [
      "旅では人との出会いを大切にしています。",
      "旅では人との出会いを大切にしています"
    ],
    "explanation": "旅では人との出会いを大切にしています。\n(たびではひととのであいをたいせつにしています。)\n出会い: cuộc gặp gỡ, cơ duyên gặp"
  },
  {
    "id": "mc_499",
    "type": "multiple_choice",
    "question": "出店 có nghĩa là gì?",
    "word": "出店",
    "reading": "しゅってん",
    "choices": [
      "đời sống hằng ngày, thường nhật",
      "khu vực, địa bàn",
      "mở cửa hàng, đặt gian hàng",
      "giao phó, để ai lo"
    ],
    "answer": "mở cửa hàng, đặt gian hàng",
    "explanation": "出店 (しゅってん): mở cửa hàng, đặt gian hàng"
  },
  {
    "id": "fb_500",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "駅前に",
    "sentenceSuffix": "する予定です。",
    "choices": [
      "了承",
      "出店",
      "流れ落ちる",
      "笑い出す"
    ],
    "answer": "出店",
    "fullSentence": "駅前に出店する予定です。",
    "explanation": "駅前に出店する予定です。\nChúng tôi dự định mở cửa hàng trước ga.\n出店: mở cửa hàng, đặt gian hàng"
  },
  {
    "id": "tr_501",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Chúng tôi dự định mở cửa hàng trước ga.",
    "acceptedAnswers": [
      "駅前に出店する予定です。",
      "駅前に出店する予定です"
    ],
    "explanation": "駅前に出店する予定です。\n(えきまえにしゅってんするよていです。)\n出店: mở cửa hàng, đặt gian hàng"
  },
  {
    "id": "fb_502",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "学園祭に",
    "sentenceSuffix": "します。",
    "choices": [
      "後悔",
      "地名",
      "出店",
      "配布"
    ],
    "answer": "出店",
    "fullSentence": "学園祭に出店します。",
    "explanation": "学園祭に出店します。\nChúng tôi mở gian hàng ở lễ hội trường.\n出店: mở cửa hàng, đặt gian hàng"
  },
  {
    "id": "tr_503",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Chúng tôi mở gian hàng ở lễ hội trường.",
    "acceptedAnswers": [
      "学園祭に出店します。",
      "学園祭に出店します"
    ],
    "explanation": "学園祭に出店します。\n(がくえんさいにしゅってんします。)\n出店: mở cửa hàng, đặt gian hàng"
  },
  {
    "id": "mc_504",
    "type": "multiple_choice",
    "question": "中古品 có nghĩa là gì?",
    "word": "中古品",
    "reading": "ちゅうこひん",
    "choices": [
      "toa Green, hạng ghế cao cấp hơn toa thường ở Nhật",
      "đồ đã qua sử dụng",
      "sau… mới lại làm, lần đầu sau khoảng…",
      "quý tộc"
    ],
    "answer": "đồ đã qua sử dụng",
    "explanation": "中古品 (ちゅうこひん): đồ đã qua sử dụng"
  },
  {
    "id": "fb_505",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この店では",
    "sentenceSuffix": "を売っています。",
    "choices": [
      "だって",
      "SL",
      "中古品",
      "樹齢"
    ],
    "answer": "中古品",
    "fullSentence": "この店では中古品を売っています。",
    "explanation": "この店では中古品を売っています。\nCửa hàng này bán đồ đã qua sử dụng.\n中古品: đồ đã qua sử dụng"
  },
  {
    "id": "tr_506",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Cửa hàng này bán đồ đã qua sử dụng.",
    "acceptedAnswers": [
      "この店では中古品を売っています。",
      "この店では中古品を売っています"
    ],
    "explanation": "この店では中古品を売っています。\n(このみせではちゅうこひんをうっています。)\n中古品: đồ đã qua sử dụng"
  },
  {
    "id": "mc_507",
    "type": "multiple_choice",
    "question": "介助犬 có nghĩa là gì?",
    "word": "介助犬",
    "reading": "かいじょけん",
    "choices": [
      "đầy ấn tượng mạnh, rất hùng tráng/ngoạn mục",
      "chó hỗ trợ người khuyết tật vận động",
      "rốt cuộc, không biết là… (nhấn câu hỏi)",
      "để lộ, phơi ra; ngâm/phơi để tẩy trắng"
    ],
    "answer": "chó hỗ trợ người khuyết tật vận động",
    "explanation": "介助犬 (かいじょけん): chó hỗ trợ người khuyết tật vận động"
  },
  {
    "id": "fb_508",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "を育てる活動を応援しています。",
    "choices": [
      "共通",
      "初対面",
      "介助犬",
      "鉄"
    ],
    "answer": "介助犬",
    "fullSentence": "介助犬を育てる活動を応援しています。",
    "explanation": "介助犬を育てる活動を応援しています。\nTôi ủng hộ hoạt động nuôi dạy chó hỗ trợ.\n介助犬: chó hỗ trợ người khuyết tật vận động"
  },
  {
    "id": "tr_509",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi ủng hộ hoạt động nuôi dạy chó hỗ trợ.",
    "acceptedAnswers": [
      "介助犬を育てる活動を応援しています。",
      "介助犬を育てる活動を応援しています"
    ],
    "explanation": "介助犬を育てる活動を応援しています。\n(かいじょけんをそだてるかつどうをおうえんしています。)\n介助犬: chó hỗ trợ người khuyết tật vận động"
  },
  {
    "id": "mc_510",
    "type": "multiple_choice",
    "question": "育成 có nghĩa là gì?",
    "word": "育成",
    "reading": "いくせい",
    "choices": [
      "không hiểu sao, có vẻ; như…, chẳng hạn… (khẩu ngữ)",
      "say mê, mải mê",
      "nuôi dưỡng, đào tạo",
      "địa phương nơi mình sống/xuất thân; vùng sở tại"
    ],
    "answer": "nuôi dưỡng, đào tạo",
    "explanation": "育成 (いくせい): nuôi dưỡng, đào tạo"
  },
  {
    "id": "fb_511",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この団体は介助犬を",
    "sentenceSuffix": "しています。",
    "choices": [
      "育成",
      "もしかしたら",
      "越える",
      "県庁"
    ],
    "answer": "育成",
    "fullSentence": "この団体は介助犬を育成しています。",
    "explanation": "この団体は介助犬を育成しています。\nTổ chức này nuôi dạy chó hỗ trợ.\n育成: nuôi dưỡng, đào tạo"
  },
  {
    "id": "tr_512",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tổ chức này nuôi dạy chó hỗ trợ.",
    "acceptedAnswers": [
      "この団体は介助犬を育成しています。",
      "この団体は介助犬を育成しています"
    ],
    "explanation": "この団体は介助犬を育成しています。\n(このだんたいはかいじょけんをいくせいしています。)\n育成: nuôi dưỡng, đào tạo"
  },
  {
    "id": "mc_513",
    "type": "multiple_choice",
    "question": "寄付 có nghĩa là gì?",
    "word": "寄付",
    "reading": "きふ",
    "choices": [
      "quyên góp, ủng hộ",
      "đảo",
      "áo cardigan, áo khoác len mở phía trước",
      "tâm tư, suy nghĩ, tình cảm"
    ],
    "answer": "quyên góp, ủng hộ",
    "explanation": "寄付 (きふ): quyên góp, ủng hộ"
  },
  {
    "id": "fb_514",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "病院にお金を",
    "sentenceSuffix": "しました。",
    "choices": [
      "寄付",
      "打ち水",
      "作家",
      "合わせる"
    ],
    "answer": "寄付",
    "fullSentence": "病院にお金を寄付しました。",
    "explanation": "病院にお金を寄付しました。\nTôi quyên góp tiền cho bệnh viện.\n寄付: quyên góp, ủng hộ"
  },
  {
    "id": "tr_515",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi quyên góp tiền cho bệnh viện.",
    "acceptedAnswers": [
      "病院にお金を寄付しました。",
      "病院にお金を寄付しました"
    ],
    "explanation": "病院にお金を寄付しました。\n(びょういんにおかねをきふしました。)\n寄付: quyên góp, ủng hộ"
  },
  {
    "id": "mc_516",
    "type": "multiple_choice",
    "question": "～金 có nghĩa là gì?",
    "word": "～金",
    "reading": "～きん",
    "choices": [
      "khoản tiền…",
      "sản xuất, chế tạo",
      "đồ đã qua sử dụng",
      "hiện tại, hiện nay"
    ],
    "answer": "khoản tiền…",
    "explanation": "～金 (～きん): khoản tiền…"
  },
  {
    "id": "tr_517",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Trường đang quyên góp tiền ủng hộ.",
    "acceptedAnswers": [
      "学校で寄付金を集めています。",
      "学校で寄付金を集めています"
    ],
    "explanation": "学校で寄付金を集めています。\n(がっこうできふきんをあつめています。)\n～金: khoản tiền…"
  },
  {
    "id": "mc_518",
    "type": "multiple_choice",
    "question": "受ける（誘いを受ける） có nghĩa là gì?",
    "word": "受ける（誘いを受ける）",
    "reading": "うける（さそいをうける）",
    "choices": [
      "vẫn như trước, không thay đổi",
      "sự việc bất ngờ, sự cố ngoài dự kiến",
      "sức gió, năng lượng gió",
      "nhận (lời mời, lời đề nghị)"
    ],
    "answer": "nhận (lời mời, lời đề nghị)",
    "explanation": "受ける（誘いを受ける） (うける（さそいをうける）): nhận (lời mời, lời đề nghị)"
  },
  {
    "id": "tr_519",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi nhận được lời mời đi du lịch từ bạn.",
    "acceptedAnswers": [
      "友人から旅行の誘いを受けました。",
      "友人から旅行の誘いを受けました"
    ],
    "explanation": "友人から旅行の誘いを受けました。\n(ゆうじんからりょこうのさそいをうけました。)\n受ける（誘いを受ける）: nhận (lời mời, lời đề nghị)"
  },
  {
    "id": "mc_520",
    "type": "multiple_choice",
    "question": "売り上げ có nghĩa là gì?",
    "word": "売り上げ",
    "reading": "うりあげ",
    "choices": [
      "doanh thu, số tiền bán hàng thu được",
      "nữ, phụ nữ, con gái",
      "vẫn như trước, không thay đổi",
      "đốt, làm cháy"
    ],
    "answer": "doanh thu, số tiền bán hàng thu được",
    "explanation": "売り上げ (うりあげ): doanh thu, số tiền bán hàng thu được"
  },
  {
    "id": "fb_521",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "今月は",
    "sentenceSuffix": "が増えました。",
    "choices": [
      "訪れる",
      "風力",
      "コーナー",
      "売り上げ"
    ],
    "answer": "売り上げ",
    "fullSentence": "今月は売り上げが増えました。",
    "explanation": "今月は売り上げが増えました。\nDoanh thu tháng này đã tăng.\n売り上げ: doanh thu, số tiền bán hàng thu được"
  },
  {
    "id": "tr_522",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Doanh thu tháng này đã tăng.",
    "acceptedAnswers": [
      "今月は売り上げが増えました。",
      "今月は売り上げが増えました"
    ],
    "explanation": "今月は売り上げが増えました。\n(こんげつはうりあげがふえました。)\n売り上げ: doanh thu, số tiền bán hàng thu được"
  },
  {
    "id": "mc_523",
    "type": "multiple_choice",
    "question": "一部 có nghĩa là gì?",
    "word": "一部",
    "reading": "いちぶ",
    "choices": [
      "một phần",
      "dáng vẻ, hình dáng; hình ảnh người/vật",
      "thơ, bài thơ",
      "sinh vật"
    ],
    "answer": "một phần",
    "explanation": "一部 (いちぶ): một phần"
  },
  {
    "id": "fb_524",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "売り上げの",
    "sentenceSuffix": "を寄付します。",
    "choices": [
      "暮らす",
      "一部",
      "お互い",
      "伝わる"
    ],
    "answer": "一部",
    "fullSentence": "売り上げの一部を寄付します。",
    "explanation": "売り上げの一部を寄付します。\nChúng tôi quyên góp một phần doanh thu.\n一部: một phần"
  },
  {
    "id": "tr_525",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Chúng tôi quyên góp một phần doanh thu.",
    "acceptedAnswers": [
      "売り上げの一部を寄付します。",
      "売り上げの一部を寄付します"
    ],
    "explanation": "売り上げの一部を寄付します。\n(うりあげのいちぶをきふします。)\n一部: một phần"
  },
  {
    "id": "mc_526",
    "type": "multiple_choice",
    "question": "今ごろ có nghĩa là gì?",
    "word": "今ごろ",
    "reading": "いまごろ",
    "choices": [
      "tầm giờ này; giờ này rồi",
      "di sản thiên nhiên thế giới",
      "sau…",
      "đỉnh (núi, vật cao)"
    ],
    "answer": "tầm giờ này; giờ này rồi",
    "explanation": "今ごろ (いまごろ): tầm giờ này; giờ này rồi"
  },
  {
    "id": "fb_527",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "母は",
    "sentenceSuffix": "家にいると思います。",
    "choices": [
      "山の幸",
      "気候",
      "今ごろ",
      "友人"
    ],
    "answer": "今ごろ",
    "fullSentence": "母は今ごろ家にいると思います。",
    "explanation": "母は今ごろ家にいると思います。\nTôi nghĩ tầm giờ này mẹ đang ở nhà.\n今ごろ: tầm giờ này; giờ này rồi"
  },
  {
    "id": "tr_528",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi nghĩ tầm giờ này mẹ đang ở nhà.",
    "acceptedAnswers": [
      "母は今ごろ家にいると思います。",
      "母は今ごろ家にいると思います"
    ],
    "explanation": "母は今ごろ家にいると思います。\n(ははいまごろいえにいるとおもいます。)\n今ごろ: tầm giờ này; giờ này rồi"
  },
  {
    "id": "mc_529",
    "type": "multiple_choice",
    "question": "点 có nghĩa là gì?",
    "word": "点",
    "reading": "てん",
    "choices": [
      "phân phát",
      "vô địch, giành giải nhất",
      "tích tụ, chất lên (tuyết, bụi…)",
      "điểm; khía cạnh, mặt"
    ],
    "answer": "điểm; khía cạnh, mặt",
    "explanation": "点 (てん): điểm; khía cạnh, mặt"
  },
  {
    "id": "fb_530",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "便利だという",
    "sentenceSuffix": "が気に入りました。",
    "choices": [
      "点",
      "女",
      "後悔",
      "絵の具"
    ],
    "answer": "点",
    "fullSentence": "便利だという点が気に入りました。",
    "explanation": "便利だという点が気に入りました。\nTôi thích ở điểm nó tiện lợi.\n点: điểm; khía cạnh, mặt"
  },
  {
    "id": "tr_531",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi thích ở điểm nó tiện lợi.",
    "acceptedAnswers": [
      "便利だという点が気に入りました。",
      "便利だという点が気に入りました"
    ],
    "explanation": "便利だという点が気に入りました。\n(べんりだというてんがきにいりました。)\n点: điểm; khía cạnh, mặt"
  },
  {
    "id": "fb_532",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "テストでいい",
    "sentenceSuffix": "を取りました。",
    "choices": [
      "点",
      "目上",
      "数える",
      "フリー切符"
    ],
    "answer": "点",
    "fullSentence": "テストでいい点を取りました。",
    "explanation": "テストでいい点を取りました。\nTôi được điểm tốt trong bài kiểm tra.\n点: điểm; khía cạnh, mặt"
  },
  {
    "id": "tr_533",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi được điểm tốt trong bài kiểm tra.",
    "acceptedAnswers": [
      "テストでいい点を取りました。",
      "テストでいい点を取りました"
    ],
    "explanation": "テストでいい点を取りました。\n(テストでいいてんをとりました。)\n点: điểm; khía cạnh, mặt"
  },
  {
    "id": "mc_534",
    "type": "multiple_choice",
    "question": "たまたま có nghĩa là gì?",
    "word": "たまたま",
    "reading": "たまたま",
    "choices": [
      "tình cờ, ngẫu nhiên",
      "khu phố…",
      "khác màu, phiên bản màu khác",
      "lời than vãn, càm ràm"
    ],
    "answer": "tình cờ, ngẫu nhiên",
    "explanation": "たまたま (たまたま): tình cờ, ngẫu nhiên"
  },
  {
    "id": "fb_535",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "駅で",
    "sentenceSuffix": "友人に会いました。",
    "choices": [
      "笑い出す",
      "今では",
      "平気",
      "たまたま"
    ],
    "answer": "たまたま",
    "fullSentence": "駅でたまたま友人に会いました。",
    "explanation": "駅でたまたま友人に会いました。\nTôi tình cờ gặp bạn ở ga.\nたまたま: tình cờ, ngẫu nhiên"
  },
  {
    "id": "tr_536",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi tình cờ gặp bạn ở ga.",
    "acceptedAnswers": [
      "駅でたまたま友人に会いました。",
      "駅でたまたま友人に会いました"
    ],
    "explanation": "駅でたまたま友人に会いました。\n(えきでたまたまゆうじんにあいました。)\nたまたま: tình cờ, ngẫu nhiên"
  },
  {
    "id": "mc_537",
    "type": "multiple_choice",
    "question": "団体 có nghĩa là gì?",
    "word": "団体",
    "reading": "だんたい",
    "choices": [
      "nhà văn; người sáng tác",
      "đoàn thể, tổ chức, nhóm",
      "tại sao (khẩu ngữ)",
      "thơ, bài thơ"
    ],
    "answer": "đoàn thể, tổ chức, nhóm",
    "explanation": "団体 (だんたい): đoàn thể, tổ chức, nhóm"
  },
  {
    "id": "fb_538",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "ボランティア",
    "sentenceSuffix": "に参加しています。",
    "choices": [
      "薦める",
      "蒸発",
      "手書き",
      "団体"
    ],
    "answer": "団体",
    "fullSentence": "ボランティア団体に参加しています。",
    "explanation": "ボランティア団体に参加しています。\nTôi tham gia một tổ chức tình nguyện.\n団体: đoàn thể, tổ chức, nhóm"
  },
  {
    "id": "tr_539",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi tham gia một tổ chức tình nguyện.",
    "acceptedAnswers": [
      "ボランティア団体に参加しています。",
      "ボランティア団体に参加しています"
    ],
    "explanation": "ボランティア団体に参加しています。\n(ボランティアだんたいにさんかしています。)\n団体: đoàn thể, tổ chức, nhóm"
  },
  {
    "id": "mc_540",
    "type": "multiple_choice",
    "question": "学園祭 có nghĩa là gì?",
    "word": "学園祭",
    "reading": "がくえんさい",
    "choices": [
      "thừa nhận, công nhận; chấp nhận, cho phép",
      "lễ hội trường",
      "khu phố…",
      "mặt trời"
    ],
    "answer": "lễ hội trường",
    "explanation": "学園祭 (がくえんさい): lễ hội trường"
  },
  {
    "id": "fb_541",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "来週、",
    "sentenceSuffix": "を開きます。",
    "choices": [
      "気候",
      "タワー",
      "表現",
      "学園祭"
    ],
    "answer": "学園祭",
    "fullSentence": "来週、学園祭を開きます。",
    "explanation": "来週、学園祭を開きます。\nTuần sau chúng tôi tổ chức lễ hội trường.\n学園祭: lễ hội trường"
  },
  {
    "id": "tr_542",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tuần sau chúng tôi tổ chức lễ hội trường.",
    "acceptedAnswers": [
      "来週、学園祭を開きます。",
      "来週、学園祭を開きます"
    ],
    "explanation": "来週、学園祭を開きます。\n(らいしゅう、がくえんさいをひらきます。)\n学園祭: lễ hội trường"
  },
  {
    "id": "mc_543",
    "type": "multiple_choice",
    "question": "全て có nghĩa là gì?",
    "word": "全て",
    "reading": "すべて",
    "choices": [
      "làm hỏng; làm tổn hại sức khỏe",
      "shachihoko: tượng linh vật thân cá đầu thú trên nóc thành, đền…",
      "mặt đất",
      "tất cả, toàn bộ"
    ],
    "answer": "tất cả, toàn bộ",
    "explanation": "全て (すべて): tất cả, toàn bộ"
  },
  {
    "id": "fb_544",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "の学生が参加しました。",
    "choices": [
      "洗面台",
      "全て",
      "かみさん",
      "名所"
    ],
    "answer": "全て",
    "fullSentence": "全ての学生が参加しました。",
    "explanation": "全ての学生が参加しました。\nTất cả sinh viên đã tham gia.\n全て: tất cả, toàn bộ"
  },
  {
    "id": "tr_545",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tất cả sinh viên đã tham gia.",
    "acceptedAnswers": [
      "全ての学生が参加しました。",
      "全ての学生が参加しました"
    ],
    "explanation": "全ての学生が参加しました。\n(すべてのがくせいがさんかしました。)\n全て: tất cả, toàn bộ"
  },
  {
    "id": "fb_546",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "宿題を",
    "sentenceSuffix": "終えました。",
    "choices": [
      "機械",
      "全て",
      "帰宅",
      "渋滞"
    ],
    "answer": "全て",
    "fullSentence": "宿題を全て終えました。",
    "explanation": "宿題を全て終えました。\nTôi làm xong toàn bộ bài tập.\n全て: tất cả, toàn bộ"
  },
  {
    "id": "tr_547",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi làm xong toàn bộ bài tập.",
    "acceptedAnswers": [
      "宿題を全て終えました。",
      "宿題を全て終えました"
    ],
    "explanation": "宿題を全て終えました。\n(しゅくだいをすべておえました。)\n全て: tất cả, toàn bộ"
  },
  {
    "id": "mc_548",
    "type": "multiple_choice",
    "question": "苦しむ có nghĩa là gì?",
    "word": "苦しむ",
    "reading": "くるしむ",
    "choices": [
      "cứ như, giống hệt; hoàn toàn (với phủ định)",
      "đau khổ, chịu khổ, chật vật",
      "ếch",
      "tình hình kinh tế, tình hình làm ăn"
    ],
    "answer": "đau khổ, chịu khổ, chật vật",
    "explanation": "苦しむ (くるしむ): đau khổ, chịu khổ, chật vật"
  },
  {
    "id": "tr_549",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Nhiều người đang chịu khổ vì bệnh tật.",
    "acceptedAnswers": [
      "多くの人が病気で苦しんでいます。",
      "多くの人が病気で苦しんでいます"
    ],
    "explanation": "多くの人が病気で苦しんでいます。\n(おおくのひとがびょうきでくるしんでいます。)\n苦しむ: đau khổ, chịu khổ, chật vật"
  },
  {
    "id": "mc_550",
    "type": "multiple_choice",
    "question": "世代 có nghĩa là gì?",
    "word": "世代",
    "reading": "せだい",
    "choices": [
      "thế hệ",
      "một mạch, một hơi, trong một lần",
      "vượt qua ranh giới, núi; trải qua thời kỳ",
      "nhé, nhỉ (trợ từ cuối câu thân mật)"
    ],
    "answer": "thế hệ",
    "explanation": "世代 (せだい): thế hệ"
  },
  {
    "id": "fb_551",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "を超えて交流します。",
    "choices": [
      "努力",
      "地形",
      "世代",
      "満席"
    ],
    "answer": "世代",
    "fullSentence": "世代を超えて交流します。",
    "explanation": "世代を超えて交流します。\nMọi người giao lưu vượt khoảng cách thế hệ.\n世代: thế hệ"
  },
  {
    "id": "tr_552",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Mọi người giao lưu vượt khoảng cách thế hệ.",
    "acceptedAnswers": [
      "世代を超えて交流します。",
      "世代を超えて交流します"
    ],
    "explanation": "世代を超えて交流します。\n(せだいをこえてこうりゅうします。)\n世代: thế hệ"
  },
  {
    "id": "mc_553",
    "type": "multiple_choice",
    "question": "ミーティング có nghĩa là gì?",
    "word": "ミーティング",
    "reading": "ミーティング",
    "choices": [
      "họp",
      "làm vỡ; chia, chia nhỏ",
      "sinh vật",
      "lâu rồi không gặp"
    ],
    "answer": "họp",
    "explanation": "ミーティング (ミーティング): họp"
  },
  {
    "id": "fb_554",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "午後、メンバーと",
    "sentenceSuffix": "をします。",
    "choices": [
      "トロッコ列車",
      "ミーティング",
      "渓谷",
      "流れ落ちる"
    ],
    "answer": "ミーティング",
    "fullSentence": "午後、メンバーとミーティングをします。",
    "explanation": "午後、メンバーとミーティングをします。\nChiều nay tôi họp với các thành viên.\nミーティング: họp"
  },
  {
    "id": "tr_555",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Chiều nay tôi họp với các thành viên.",
    "acceptedAnswers": [
      "午後、メンバーとミーティングをします。",
      "午後、メンバーとミーティングをします"
    ],
    "explanation": "午後、メンバーとミーティングをします。\n(ごご、メンバーとミーティングをします。)\nミーティング: họp"
  },
  {
    "id": "mc_556",
    "type": "multiple_choice",
    "question": "定年 có nghĩa là gì?",
    "word": "定年",
    "reading": "ていねん",
    "choices": [
      "tuổi nghỉ hưu theo quy định",
      "làm cứng, làm đông; củng cố",
      "khí hậu",
      "quý tộc"
    ],
    "answer": "tuổi nghỉ hưu theo quy định",
    "explanation": "定年 (ていねん): tuổi nghỉ hưu theo quy định"
  },
  {
    "id": "fb_557",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "父は来年",
    "sentenceSuffix": "を迎えます。",
    "choices": [
      "～金",
      "定年",
      "指定",
      "含める"
    ],
    "answer": "定年",
    "fullSentence": "父は来年定年を迎えます。",
    "explanation": "父は来年定年を迎えます。\nNăm sau bố tôi đến tuổi nghỉ hưu.\n定年: tuổi nghỉ hưu theo quy định"
  },
  {
    "id": "tr_558",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Năm sau bố tôi đến tuổi nghỉ hưu.",
    "acceptedAnswers": [
      "父は来年定年を迎えます。",
      "父は来年定年を迎えます"
    ],
    "explanation": "父は来年定年を迎えます。\n(ちちはらいねんていねんをむかえます。)\n定年: tuổi nghỉ hưu theo quy định"
  },
  {
    "id": "mc_559",
    "type": "multiple_choice",
    "question": "退職 có nghĩa là gì?",
    "word": "退職",
    "reading": "たいしょく",
    "choices": [
      "tạm hoãn/tạm ngừng; nhìn nhau",
      "nghỉ việc, về hưu tùy ngữ cảnh",
      "tháp",
      "biết đâu, có lẽ"
    ],
    "answer": "nghỉ việc, về hưu tùy ngữ cảnh",
    "explanation": "退職 (たいしょく): nghỉ việc, về hưu tùy ngữ cảnh"
  },
  {
    "id": "fb_560",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "母は去年会社を",
    "sentenceSuffix": "しました。",
    "choices": [
      "越える",
      "退職",
      "指定",
      "思いがけない"
    ],
    "answer": "退職",
    "fullSentence": "母は去年会社を退職しました。",
    "explanation": "母は去年会社を退職しました。\nMẹ tôi đã nghỉ việc ở công ty năm ngoái.\n退職: nghỉ việc, về hưu tùy ngữ cảnh"
  },
  {
    "id": "tr_561",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Mẹ tôi đã nghỉ việc ở công ty năm ngoái.",
    "acceptedAnswers": [
      "母は去年会社を退職しました。",
      "母は去年会社を退職しました"
    ],
    "explanation": "母は去年会社を退職しました。\n(はははきょねんかいしゃをたいしょくしました。)\n退職: nghỉ việc, về hưu tùy ngữ cảnh"
  },
  {
    "id": "mc_562",
    "type": "multiple_choice",
    "question": "～とも có nghĩa là gì?",
    "word": "～とも",
    "reading": "～とも",
    "choices": [
      "cả… đều",
      "màu xám",
      "mặt đất",
      "từ đếm nhà, cửa hàng, tòa nhà nhỏ"
    ],
    "answer": "cả… đều",
    "explanation": "～とも (～とも): cả… đều"
  },
  {
    "id": "tr_563",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Cả hai anh em đều sống ở Nhật.",
    "acceptedAnswers": [
      "兄弟二人とも日本に住んでいます。",
      "兄弟二人とも日本に住んでいます"
    ],
    "explanation": "兄弟二人とも日本に住んでいます。\n(きょうだいふたりともにほんにすんでいます。)\n～とも: cả… đều"
  },
  {
    "id": "mc_564",
    "type": "multiple_choice",
    "question": "ただ có nghĩa là gì?",
    "word": "ただ",
    "reading": "ただ",
    "choices": [
      "chỉ; tuy nhiên, có điều",
      "bánh kẹo truyền thống Nhật Bản",
      "biểu hiện, dấu hiệu thể hiện",
      "quê hương"
    ],
    "answer": "chỉ; tuy nhiên, có điều",
    "explanation": "ただ (ただ): chỉ; tuy nhiên, có điều"
  },
  {
    "id": "fb_565",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "話を聞きたいだけです。",
    "choices": [
      "天井",
      "学園祭",
      "ただ",
      "マーク"
    ],
    "answer": "ただ",
    "fullSentence": "ただ話を聞きたいだけです。",
    "explanation": "ただ話を聞きたいだけです。\nTôi chỉ muốn nghe câu chuyện thôi.\nただ: chỉ; tuy nhiên, có điều"
  },
  {
    "id": "tr_566",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi chỉ muốn nghe câu chuyện thôi.",
    "acceptedAnswers": [
      "ただ話を聞きたいだけです。",
      "ただ話を聞きたいだけです"
    ],
    "explanation": "ただ話を聞きたいだけです。\n(ただはなしをききたいだけです。)\nただ: chỉ; tuy nhiên, có điều"
  },
  {
    "id": "fb_567",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "行きたいです。",
    "sentenceSuffix": "、時間がありません。",
    "choices": [
      "鈴",
      "海洋",
      "ただ",
      "フリーダイヤル"
    ],
    "answer": "ただ",
    "fullSentence": "行きたいです。ただ、時間がありません。",
    "explanation": "行きたいです。ただ、時間がありません。\nTôi muốn đi. Có điều, tôi không có thời gian.\nただ: chỉ; tuy nhiên, có điều"
  },
  {
    "id": "tr_568",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi muốn đi. Có điều, tôi không có thời gian.",
    "acceptedAnswers": [
      "行きたいです。ただ、時間がありません。",
      "行きたいです。ただ、時間がありません"
    ],
    "explanation": "行きたいです。ただ、時間がありません。\n(いきたいです。ただ、じかんがありません。)\nただ: chỉ; tuy nhiên, có điều"
  },
  {
    "id": "mc_569",
    "type": "multiple_choice",
    "question": "かみさん có nghĩa là gì?",
    "word": "かみさん",
    "reading": "かみさん",
    "choices": [
      "khu vườn nổi tiếng, đẹp",
      "thổi (gió; nhạc cụ hơi)",
      "vợ, bà xã (khẩu ngữ)",
      "phần mái chìa, mái hiên"
    ],
    "answer": "vợ, bà xã (khẩu ngữ)",
    "explanation": "かみさん (かみさん): vợ, bà xã (khẩu ngữ)"
  },
  {
    "id": "fb_570",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "うちの",
    "sentenceSuffix": "は料理が得意です。",
    "choices": [
      "売り上げ",
      "かみさん",
      "中古品",
      "ちょっとした"
    ],
    "answer": "かみさん",
    "fullSentence": "うちのかみさんは料理が得意です。",
    "explanation": "うちのかみさんは料理が得意です。\nBà xã tôi nấu ăn giỏi.\nかみさん: vợ, bà xã (khẩu ngữ)"
  },
  {
    "id": "tr_571",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Bà xã tôi nấu ăn giỏi.",
    "acceptedAnswers": [
      "うちのかみさんは料理が得意です。",
      "うちのかみさんは料理が得意です"
    ],
    "explanation": "うちのかみさんは料理が得意です。\n(うちのかみさんはりょうりがとくいです。)\nかみさん: vợ, bà xã (khẩu ngữ)"
  },
  {
    "id": "mc_572",
    "type": "multiple_choice",
    "question": "うらやましい có nghĩa là gì?",
    "word": "うらやましい",
    "reading": "うらやましい",
    "choices": [
      "tầm giờ này; giờ này rồi",
      "lời than vãn, càm ràm",
      "rừng núi; đất rừng",
      "thấy người khác có điều tốt mà mình cũng muốn, ghen tị"
    ],
    "answer": "thấy người khác có điều tốt mà mình cũng muốn, ghen tị",
    "explanation": "うらやましい (うらやましい): thấy người khác có điều tốt mà mình cũng muốn, ghen tị"
  },
  {
    "id": "fb_573",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "日本語が上手な友達が",
    "sentenceSuffix": "です。",
    "choices": [
      "うらやましい",
      "遠足",
      "かみさん",
      "はらはら"
    ],
    "answer": "うらやましい",
    "fullSentence": "日本語が上手な友達がうらやましいです。",
    "explanation": "日本語が上手な友達がうらやましいです。\nTôi ước mình giỏi tiếng Nhật như người bạn đó.\nうらやましい: thấy người khác có điều tốt mà mình cũng muốn, ghen tị"
  },
  {
    "id": "tr_574",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi ước mình giỏi tiếng Nhật như người bạn đó.",
    "acceptedAnswers": [
      "日本語が上手な友達がうらやましいです。",
      "日本語が上手な友達がうらやましいです"
    ],
    "explanation": "日本語が上手な友達がうらやましいです。\n(にほんごがじょうずなともだちがうらやましいです。)\nうらやましい: thấy người khác có điều tốt mà mình cũng muốn, ghen tị"
  },
  {
    "id": "mc_575",
    "type": "multiple_choice",
    "question": "人見知り có nghĩa là gì?",
    "word": "人見知り",
    "reading": "ひとみしり",
    "choices": [
      "rụt rè trước người lạ",
      "điều chỉnh cho phù hợp; ghép, kết hợp",
      "bất ngờ, ngoài dự đoán",
      "cùng thế hệ, cùng khoảng tuổi"
    ],
    "answer": "rụt rè trước người lạ",
    "explanation": "人見知り (ひとみしり): rụt rè trước người lạ"
  },
  {
    "id": "fb_576",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "弟は少し",
    "sentenceSuffix": "をします。",
    "choices": [
      "目を向ける",
      "南北",
      "人見知り",
      "流れ落ちる"
    ],
    "answer": "人見知り",
    "fullSentence": "弟は少し人見知りをします。",
    "explanation": "弟は少し人見知りをします。\nEm trai tôi hơi ngại người lạ.\n人見知り: rụt rè trước người lạ"
  },
  {
    "id": "tr_577",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Em trai tôi hơi ngại người lạ.",
    "acceptedAnswers": [
      "弟は少し人見知りをします。",
      "弟は少し人見知りをします"
    ],
    "explanation": "弟は少し人見知りをします。\n(おとうとはすこしひとみしりをします。)\n人見知り: rụt rè trước người lạ"
  },
  {
    "id": "mc_578",
    "type": "multiple_choice",
    "question": "～同士 có nghĩa là gì?",
    "word": "～同士",
    "reading": "～どうし",
    "choices": [
      "người thực hiện/thuộc về…",
      "đánh dấu",
      "những người cùng… với nhau",
      "lao ra, nhảy ra, bất ngờ xuất hiện"
    ],
    "answer": "những người cùng… với nhau",
    "explanation": "～同士 (～どうし): những người cùng… với nhau"
  },
  {
    "id": "tr_579",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Các sinh viên trao đổi với nhau.",
    "acceptedAnswers": [
      "学生同士で相談しました。",
      "学生同士で相談しました"
    ],
    "explanation": "学生同士で相談しました。\n(がくせいどうしでそうだんしました。)\n～同士: những người cùng… với nhau"
  },
  {
    "id": "mc_580",
    "type": "multiple_choice",
    "question": "な（頑張ろうな） có nghĩa là gì?",
    "word": "な（頑張ろうな）",
    "reading": "な（がんばろうな）",
    "choices": [
      "ghé thăm; (mùa, thời điểm) đến",
      "thời gian cần để hoàn thành hành trình/công việc",
      "đau khổ, chịu khổ, chật vật",
      "nhé, nhỉ (trợ từ cuối câu thân mật)"
    ],
    "answer": "nhé, nhỉ (trợ từ cuối câu thân mật)",
    "explanation": "な（頑張ろうな） (な（がんばろうな）): nhé, nhỉ (trợ từ cuối câu thân mật)"
  },
  {
    "id": "tr_581",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Ngày mai cũng cùng cố gắng nhé.",
    "acceptedAnswers": [
      "明日も頑張ろうな。",
      "明日も頑張ろうな"
    ],
    "explanation": "明日も頑張ろうな。\n(あしたもがんばろうな。)\nな（頑張ろうな）: nhé, nhỉ (trợ từ cuối câu thân mật)"
  },
  {
    "id": "mc_582",
    "type": "multiple_choice",
    "question": "素晴らしい có nghĩa là gì?",
    "word": "素晴らしい",
    "reading": "すばらしい",
    "choices": [
      "đồ đã qua sử dụng",
      "tuyệt vời",
      "nam và bắc; chiều bắc–nam",
      "trả lời (câu hỏi, khảo sát)"
    ],
    "answer": "tuyệt vời",
    "explanation": "素晴らしい (すばらしい): tuyệt vời"
  },
  {
    "id": "fb_583",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "経験ができました。",
    "choices": [
      "水道水",
      "表れ",
      "素晴らしい",
      "追加"
    ],
    "answer": "素晴らしい",
    "fullSentence": "素晴らしい経験ができました。",
    "explanation": "素晴らしい経験ができました。\nTôi đã có trải nghiệm tuyệt vời.\n素晴らしい: tuyệt vời"
  },
  {
    "id": "tr_584",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đã có trải nghiệm tuyệt vời.",
    "acceptedAnswers": [
      "素晴らしい経験ができました。",
      "素晴らしい経験ができました"
    ],
    "explanation": "素晴らしい経験ができました。\n(すばらしいけいけんができました。)\n素晴らしい: tuyệt vời"
  },
  {
    "id": "mc_585",
    "type": "multiple_choice",
    "question": "いつか có nghĩa là gì?",
    "word": "いつか",
    "reading": "いつか",
    "choices": [
      "địa phương nơi mình sống/xuất thân; vùng sở tại",
      "thành phố, đô thị",
      "một ngày nào đó, lúc nào đó",
      "trợ từ cuối câu thể hiện cảm xúc/nhấn nhẹ"
    ],
    "answer": "một ngày nào đó, lúc nào đó",
    "explanation": "いつか (いつか): một ngày nào đó, lúc nào đó"
  },
  {
    "id": "fb_586",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "日本で働きたいです。",
    "choices": [
      "いつか",
      "～街",
      "グッズ",
      "帰国"
    ],
    "answer": "いつか",
    "fullSentence": "いつか日本で働きたいです。",
    "explanation": "いつか日本で働きたいです。\nMột ngày nào đó tôi muốn làm việc ở Nhật.\nいつか: một ngày nào đó, lúc nào đó"
  },
  {
    "id": "tr_587",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Một ngày nào đó tôi muốn làm việc ở Nhật.",
    "acceptedAnswers": [
      "いつか日本で働きたいです。",
      "いつか日本で働きたいです"
    ],
    "explanation": "いつか日本で働きたいです。\n(いつかにほんではたらきたいです。)\nいつか: một ngày nào đó, lúc nào đó"
  },
  {
    "id": "mc_588",
    "type": "multiple_choice",
    "question": "月日 có nghĩa là gì?",
    "word": "月日",
    "reading": "つきひ",
    "choices": [
      "ngày tháng, thời gian trôi qua",
      "nhận (lời mời, lời đề nghị)",
      "hiểu lầm",
      "giao phó, để ai lo"
    ],
    "answer": "ngày tháng, thời gian trôi qua",
    "explanation": "月日 (つきひ): ngày tháng, thời gian trôi qua"
  },
  {
    "id": "fb_589",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "がたつのは早いです。",
    "choices": [
      "月日",
      "開発",
      "まるで",
      "胸"
    ],
    "answer": "月日",
    "fullSentence": "月日がたつのは早いです。",
    "explanation": "月日がたつのは早いです。\nNgày tháng trôi nhanh thật.\n月日: ngày tháng, thời gian trôi qua"
  },
  {
    "id": "tr_590",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Ngày tháng trôi nhanh thật.",
    "acceptedAnswers": [
      "月日がたつのは早いです。",
      "月日がたつのは早いです"
    ],
    "explanation": "月日がたつのは早いです。\n(つきひがたつのははやいです。)\n月日: ngày tháng, thời gian trôi qua"
  },
  {
    "id": "mc_591",
    "type": "multiple_choice",
    "question": "夢中 có nghĩa là gì?",
    "word": "夢中",
    "reading": "むちゅう",
    "choices": [
      "nhận (lời mời, lời đề nghị)",
      "được làm bằng…; sản xuất tại…",
      "say mê, mải mê",
      "khoảnh khắc"
    ],
    "answer": "say mê, mải mê",
    "explanation": "夢中 (むちゅう): say mê, mải mê"
  },
  {
    "id": "fb_592",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "弟はゲームに",
    "sentenceSuffix": "になっています。",
    "choices": [
      "お世話になっています",
      "恵まれる",
      "打ち水",
      "夢中"
    ],
    "answer": "夢中",
    "fullSentence": "弟はゲームに夢中になっています。",
    "explanation": "弟はゲームに夢中になっています。\nEm trai tôi đang mê trò chơi.\n夢中: say mê, mải mê"
  },
  {
    "id": "tr_593",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Em trai tôi đang mê trò chơi.",
    "acceptedAnswers": [
      "弟はゲームに夢中になっています。",
      "弟はゲームに夢中になっています"
    ],
    "explanation": "弟はゲームに夢中になっています。\n(おとうとはゲームにむちゅうになっています。)\n夢中: say mê, mải mê"
  },
  {
    "id": "fb_594",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "で本を読んでいました。",
    "choices": [
      "～周辺",
      "込める",
      "小論文",
      "夢中"
    ],
    "answer": "夢中",
    "fullSentence": "夢中で本を読んでいました。",
    "explanation": "夢中で本を読んでいました。\nTôi đã mải mê đọc sách.\n夢中: say mê, mải mê"
  },
  {
    "id": "tr_595",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đã mải mê đọc sách.",
    "acceptedAnswers": [
      "夢中で本を読んでいました。",
      "夢中で本を読んでいました"
    ],
    "explanation": "夢中で本を読んでいました。\n(むちゅうでほんをよんでいました。)\n夢中: say mê, mải mê"
  },
  {
    "id": "mc_596",
    "type": "multiple_choice",
    "question": "迎える có nghĩa là gì?",
    "word": "迎える",
    "reading": "むかえる",
    "choices": [
      "đón người; đón một thời điểm, giai đoạn",
      "thấy người khác có điều tốt mà mình cũng muốn, ghen tị",
      "đồng nghiệp",
      "nhấp nhô, nhảy những bước nhỏ liên tiếp"
    ],
    "answer": "đón người; đón một thời điểm, giai đoạn",
    "explanation": "迎える (むかえる): đón người; đón một thời điểm, giai đoạn"
  },
  {
    "id": "tr_597",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đón bạn ở ga.",
    "acceptedAnswers": [
      "駅で友人を迎えます。",
      "駅で友人を迎えます"
    ],
    "explanation": "駅で友人を迎えます。\n(えきでゆうじんをむかえます。)\n迎える: đón người; đón một thời điểm, giai đoạn"
  },
  {
    "id": "tr_598",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Sắp đón năm mới rồi.",
    "acceptedAnswers": [
      "もうすぐ新年を迎えます。",
      "もうすぐ新年を迎えます"
    ],
    "explanation": "もうすぐ新年を迎えます。\n(もうすぐしんねんをむかえます。)\n迎える: đón người; đón một thời điểm, giai đoạn"
  },
  {
    "id": "mc_599",
    "type": "multiple_choice",
    "question": "感動 có nghĩa là gì?",
    "word": "感動",
    "reading": "かんどう",
    "choices": [
      "nhóm tuổi…; khoảng số…",
      "góc, khu vực dành cho một mục đích",
      "xúc động, cảm động",
      "tại sao (khẩu ngữ)"
    ],
    "answer": "xúc động, cảm động",
    "explanation": "感動 (かんどう): xúc động, cảm động"
  },
  {
    "id": "fb_600",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "友人の言葉に",
    "sentenceSuffix": "しました。",
    "choices": [
      "愚痴",
      "乗り降り",
      "感動",
      "出来事"
    ],
    "answer": "感動",
    "fullSentence": "友人の言葉に感動しました。",
    "explanation": "友人の言葉に感動しました。\nTôi xúc động vì lời của bạn.\n感動: xúc động, cảm động"
  },
  {
    "id": "tr_601",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi xúc động vì lời của bạn.",
    "acceptedAnswers": [
      "友人の言葉に感動しました。",
      "友人の言葉に感動しました"
    ],
    "explanation": "友人の言葉に感動しました。\n(ゆうじんのことばにかんどうしました。)\n感動: xúc động, cảm động"
  },
  {
    "id": "mc_602",
    "type": "multiple_choice",
    "question": "若々しい có nghĩa là gì?",
    "word": "若々しい",
    "reading": "わかわかしい",
    "choices": [
      "đưa mắt nhìn; chú ý đến",
      "trẻ trung, đầy sức sống",
      "hình dung, gợi nhớ trong đầu",
      "má (khẩu ngữ)"
    ],
    "answer": "trẻ trung, đầy sức sống",
    "explanation": "若々しい (わかわかしい): trẻ trung, đầy sức sống"
  },
  {
    "id": "tr_603",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Bà tôi trông rất trẻ trung.",
    "acceptedAnswers": [
      "祖母はとても若々しく見えます。",
      "祖母はとても若々しく見えます"
    ],
    "explanation": "祖母はとても若々しく見えます。\n(そぼはとてもわかわかしくみえます。)\n若々しい: trẻ trung, đầy sức sống"
  },
  {
    "id": "mc_604",
    "type": "multiple_choice",
    "question": "持ち上げる có nghĩa là gì?",
    "word": "持ち上げる",
    "reading": "もちあげる",
    "choices": [
      "cuối (tháng, năm…)",
      "khu vực xung quanh, gần…",
      "dáng vẻ, hình dáng; hình ảnh người/vật",
      "nhấc lên, nâng lên"
    ],
    "answer": "nhấc lên, nâng lên",
    "explanation": "持ち上げる (もちあげる): nhấc lên, nâng lên"
  },
  {
    "id": "tr_605",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Hai người cùng nhấc chiếc hộp nặng.",
    "acceptedAnswers": [
      "二人で重い箱を持ち上げます。",
      "二人で重い箱を持ち上げます"
    ],
    "explanation": "二人で重い箱を持ち上げます。\n(ふたりでおもいはこをもちあげます。)\n持ち上げる: nhấc lên, nâng lên"
  },
  {
    "id": "mc_606",
    "type": "multiple_choice",
    "question": "トラック có nghĩa là gì?",
    "word": "トラック",
    "reading": "トラック",
    "choices": [
      "xe tải",
      "đỉnh (núi, vật cao)",
      "thế rồi, khi đó thì; nếu vậy thì",
      "lượng giáng thủy (mưa, tuyết… quy đổi ra nước)"
    ],
    "answer": "xe tải",
    "explanation": "トラック (トラック): xe tải"
  },
  {
    "id": "fb_607",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "家具を",
    "sentenceSuffix": "で運びます。",
    "choices": [
      "メンバー",
      "トラック",
      "発展",
      "努力"
    ],
    "answer": "トラック",
    "fullSentence": "家具をトラックで運びます。",
    "explanation": "家具をトラックで運びます。\nChúng tôi chở đồ nội thất bằng xe tải.\nトラック: xe tải"
  },
  {
    "id": "tr_608",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Chúng tôi chở đồ nội thất bằng xe tải.",
    "acceptedAnswers": [
      "家具をトラックで運びます。",
      "家具をトラックで運びます"
    ],
    "explanation": "家具をトラックで運びます。\n(かぐをトラックではこびます。)\nトラック: xe tải"
  },
  {
    "id": "mc_609",
    "type": "multiple_choice",
    "question": "孫 có nghĩa là gì?",
    "word": "孫",
    "reading": "まご",
    "choices": [
      "nhóm tuổi…; khoảng số…",
      "lên xuống phương tiện",
      "cháu (của ông bà)",
      "thời đại, thời kỳ"
    ],
    "answer": "cháu (của ông bà)",
    "explanation": "孫 (まご): cháu (của ông bà)"
  },
  {
    "id": "fb_610",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "祖父は",
    "sentenceSuffix": "に会うのを楽しみにしています。",
    "choices": [
      "男女",
      "まだまだ",
      "数える",
      "孫"
    ],
    "answer": "孫",
    "fullSentence": "祖父は孫に会うのを楽しみにしています。",
    "explanation": "祖父は孫に会うのを楽しみにしています。\nÔng mong được gặp cháu.\n孫: cháu (của ông bà)"
  },
  {
    "id": "tr_611",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Ông mong được gặp cháu.",
    "acceptedAnswers": [
      "祖父は孫に会うのを楽しみにしています。",
      "祖父は孫に会うのを楽しみにしています"
    ],
    "explanation": "祖父は孫に会うのを楽しみにしています。\n(そふはまごにあうのをたのしみにしています。)\n孫: cháu (của ông bà)"
  },
  {
    "id": "mc_612",
    "type": "multiple_choice",
    "question": "気象庁 có nghĩa là gì?",
    "word": "気象庁",
    "reading": "きしょうちょう",
    "choices": [
      "ngành sản xuất, ngành kinh tế",
      "Cơ quan Khí tượng Nhật Bản",
      "lọt vào, đi sâu vào bên trong",
      "sản xuất, chế tạo"
    ],
    "answer": "Cơ quan Khí tượng Nhật Bản",
    "explanation": "気象庁 (きしょうちょう): Cơ quan Khí tượng Nhật Bản"
  },
  {
    "id": "fb_613",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "の発表を確認しました。",
    "choices": [
      "太陽",
      "気象庁",
      "雲",
      "女"
    ],
    "answer": "気象庁",
    "fullSentence": "気象庁の発表を確認しました。",
    "explanation": "気象庁の発表を確認しました。\nTôi đã kiểm tra thông báo của Cơ quan Khí tượng.\n気象庁: Cơ quan Khí tượng Nhật Bản"
  },
  {
    "id": "tr_614",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đã kiểm tra thông báo của Cơ quan Khí tượng.",
    "acceptedAnswers": [
      "気象庁の発表を確認しました。",
      "気象庁の発表を確認しました"
    ],
    "explanation": "気象庁の発表を確認しました。\n(きしょうちょうのはっぴょうをかくにんしました。)\n気象庁: Cơ quan Khí tượng Nhật Bản"
  },
  {
    "id": "mc_615",
    "type": "multiple_choice",
    "question": "暖冬 có nghĩa là gì?",
    "word": "暖冬",
    "reading": "だんとう",
    "choices": [
      "in",
      "nói chuyện điện thoại",
      "im lặng, ngừng nói",
      "mùa đông ấm hơn bình thường"
    ],
    "answer": "mùa đông ấm hơn bình thường",
    "explanation": "暖冬 (だんとう): mùa đông ấm hơn bình thường"
  },
  {
    "id": "fb_616",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "今年は",
    "sentenceSuffix": "になるそうです。",
    "choices": [
      "タイトル",
      "暖冬",
      "帰宅",
      "すると"
    ],
    "answer": "暖冬",
    "fullSentence": "今年は暖冬になるそうです。",
    "explanation": "今年は暖冬になるそうです。\nNghe nói năm nay sẽ có mùa đông ấm.\n暖冬: mùa đông ấm hơn bình thường"
  },
  {
    "id": "tr_617",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Nghe nói năm nay sẽ có mùa đông ấm.",
    "acceptedAnswers": [
      "今年は暖冬になるそうです。",
      "今年は暖冬になるそうです"
    ],
    "explanation": "今年は暖冬になるそうです。\n(ことしはだんとうになるそうです。)\n暖冬: mùa đông ấm hơn bình thường"
  },
  {
    "id": "mc_618",
    "type": "multiple_choice",
    "question": "期待 có nghĩa là gì?",
    "word": "期待",
    "reading": "きたい",
    "choices": [
      "tàu kiểu xe goòng, thường dùng ngắm cảnh du lịch",
      "kỳ vọng, mong đợi",
      "không… chút nào (khẩu ngữ)",
      "nhấp nhô, nhảy những bước nhỏ liên tiếp"
    ],
    "answer": "kỳ vọng, mong đợi",
    "explanation": "期待 (きたい): kỳ vọng, mong đợi"
  },
  {
    "id": "fb_619",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "新しい選手に",
    "sentenceSuffix": "しています。",
    "choices": [
      "おやつ",
      "～分の～",
      "期待",
      "～末"
    ],
    "answer": "期待",
    "fullSentence": "新しい選手に期待しています。",
    "explanation": "新しい選手に期待しています。\nTôi kỳ vọng vào tuyển thủ mới.\n期待: kỳ vọng, mong đợi"
  },
  {
    "id": "tr_620",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi kỳ vọng vào tuyển thủ mới.",
    "acceptedAnswers": [
      "新しい選手に期待しています。",
      "新しい選手に期待しています"
    ],
    "explanation": "新しい選手に期待しています。\n(あたらしいせんしゅにきたいしています。)\n期待: kỳ vọng, mong đợi"
  },
  {
    "id": "fb_621",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "試験に合格することを",
    "sentenceSuffix": "しています。",
    "choices": [
      "期待",
      "村",
      "モデル",
      "全て"
    ],
    "answer": "期待",
    "fullSentence": "試験に合格することを期待しています。",
    "explanation": "試験に合格することを期待しています。\nTôi mong sẽ đỗ kỳ thi.\n期待: kỳ vọng, mong đợi"
  },
  {
    "id": "tr_622",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi mong sẽ đỗ kỳ thi.",
    "acceptedAnswers": [
      "試験に合格することを期待しています。",
      "試験に合格することを期待しています"
    ],
    "explanation": "試験に合格することを期待しています。\n(しけんにごうかくすることをきたいしています。)\n期待: kỳ vọng, mong đợi"
  },
  {
    "id": "mc_623",
    "type": "multiple_choice",
    "question": "親孝行 có nghĩa là gì?",
    "word": "親孝行",
    "reading": "おやこうこう",
    "choices": [
      "hiếu thảo, báo hiếu",
      "xuất phát từ…; khởi hành lúc…",
      "đến, xuất hiện ở chỗ người nói/điểm nhìn",
      "họp"
    ],
    "answer": "hiếu thảo, báo hiếu",
    "explanation": "親孝行 (おやこうこう): hiếu thảo, báo hiếu"
  },
  {
    "id": "fb_624",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "旅行に連れていって、",
    "sentenceSuffix": "をしたいです。",
    "choices": [
      "鈴",
      "わざと",
      "あはは",
      "親孝行"
    ],
    "answer": "親孝行",
    "fullSentence": "旅行に連れていって、親孝行をしたいです。",
    "explanation": "旅行に連れていって、親孝行をしたいです。\nTôi muốn báo hiếu bằng cách đưa bố mẹ đi du lịch.\n親孝行: hiếu thảo, báo hiếu"
  },
  {
    "id": "tr_625",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi muốn báo hiếu bằng cách đưa bố mẹ đi du lịch.",
    "acceptedAnswers": [
      "旅行に連れていって、親孝行をしたいです。",
      "旅行に連れていって、親孝行をしたいです"
    ],
    "explanation": "旅行に連れていって、親孝行をしたいです。\n(りょこうにつれていって、おやこうこうをしたいです。)\n親孝行: hiếu thảo, báo hiếu"
  },
  {
    "id": "mc_626",
    "type": "multiple_choice",
    "question": "タイトル có nghĩa là gì?",
    "word": "タイトル",
    "reading": "タイトル",
    "choices": [
      "cốt thép",
      "được sản xuất/trồng/đánh bắt tại…",
      "tiêu đề, tên tác phẩm",
      "thành phố, đô thị"
    ],
    "answer": "tiêu đề, tên tác phẩm",
    "explanation": "タイトル (タイトル): tiêu đề, tên tác phẩm"
  },
  {
    "id": "fb_627",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "作文に",
    "sentenceSuffix": "を付けます。",
    "choices": [
      "近況",
      "タイトル",
      "森",
      "～以外"
    ],
    "answer": "タイトル",
    "fullSentence": "作文にタイトルを付けます。",
    "explanation": "作文にタイトルを付けます。\nTôi đặt tiêu đề cho bài văn.\nタイトル: tiêu đề, tên tác phẩm"
  },
  {
    "id": "tr_628",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đặt tiêu đề cho bài văn.",
    "acceptedAnswers": [
      "作文にタイトルを付けます。",
      "作文にタイトルを付けます"
    ],
    "explanation": "作文にタイトルを付けます。\n(さくぶんにタイトルをつけます。)\nタイトル: tiêu đề, tên tác phẩm"
  },
  {
    "id": "mc_629",
    "type": "multiple_choice",
    "question": "立派 có nghĩa là gì?",
    "word": "立派",
    "reading": "りっぱ",
    "choices": [
      "lời thoại",
      "đầy ấn tượng mạnh, rất hùng tráng/ngoạn mục",
      "tiền điện tử dùng thanh toán",
      "đáng khâm phục, xuất sắc; to đẹp, bề thế"
    ],
    "answer": "đáng khâm phục, xuất sắc; to đẹp, bề thế",
    "explanation": "立派 (りっぱ): đáng khâm phục, xuất sắc; to đẹp, bề thế"
  },
  {
    "id": "fb_630",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "な建物ですね。",
    "choices": [
      "済ませる",
      "香り",
      "立派",
      "畳"
    ],
    "answer": "立派",
    "fullSentence": "立派な建物ですね。",
    "explanation": "立派な建物ですね。\nTòa nhà bề thế thật nhỉ.\n立派: đáng khâm phục, xuất sắc; to đẹp, bề thế"
  },
  {
    "id": "tr_631",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tòa nhà bề thế thật nhỉ.",
    "acceptedAnswers": [
      "立派な建物ですね。",
      "立派な建物ですね"
    ],
    "explanation": "立派な建物ですね。\n(りっぱなたてものですね。)\n立派: đáng khâm phục, xuất sắc; to đẹp, bề thế"
  },
  {
    "id": "fb_632",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "彼は仕事を",
    "sentenceSuffix": "にやり遂げました。",
    "choices": [
      "小鳥",
      "渋滞",
      "立派",
      "伝わる"
    ],
    "answer": "立派",
    "fullSentence": "彼は仕事を立派にやり遂げました。",
    "explanation": "彼は仕事を立派にやり遂げました。\nAnh ấy đã hoàn thành công việc xuất sắc.\n立派: đáng khâm phục, xuất sắc; to đẹp, bề thế"
  },
  {
    "id": "tr_633",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Anh ấy đã hoàn thành công việc xuất sắc.",
    "acceptedAnswers": [
      "彼は仕事を立派にやり遂げました。",
      "彼は仕事を立派にやり遂げました"
    ],
    "explanation": "彼は仕事を立派にやり遂げました。\n(かれはしごとをりっぱにやりとげました。)\n立派: đáng khâm phục, xuất sắc; to đẹp, bề thế"
  },
  {
    "id": "mc_634",
    "type": "multiple_choice",
    "question": "包装 có nghĩa là gì?",
    "word": "包装",
    "reading": "ほうそう",
    "choices": [
      "đau khổ, chịu khổ, chật vật",
      "tiền mặt",
      "chuyện có thật",
      "gói, bao bọc"
    ],
    "answer": "gói, bao bọc",
    "explanation": "包装 (ほうそう): gói, bao bọc"
  },
  {
    "id": "fb_635",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "プレゼントを紙で",
    "sentenceSuffix": "します。",
    "choices": [
      "包装",
      "苦しむ",
      "せりふ",
      "退職"
    ],
    "answer": "包装",
    "fullSentence": "プレゼントを紙で包装します。",
    "explanation": "プレゼントを紙で包装します。\nTôi gói quà bằng giấy.\n包装: gói, bao bọc"
  },
  {
    "id": "tr_636",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi gói quà bằng giấy.",
    "acceptedAnswers": [
      "プレゼントを紙で包装します。",
      "プレゼントを紙で包装します"
    ],
    "explanation": "プレゼントを紙で包装します。\n(プレゼントをかみでほうそうします。)\n包装: gói, bao bọc"
  },
  {
    "id": "mc_637",
    "type": "multiple_choice",
    "question": "仕方 có nghĩa là gì?",
    "word": "仕方",
    "reading": "しかた",
    "choices": [
      "làm hỏng; làm tổn hại sức khỏe",
      "cách làm; cách giải quyết",
      "đau khổ, chịu khổ, chật vật",
      "sự việc, chuyện xảy ra"
    ],
    "answer": "cách làm; cách giải quyết",
    "explanation": "仕方 (しかた): cách làm; cách giải quyết"
  },
  {
    "id": "fb_638",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "予約の",
    "sentenceSuffix": "を教えてください。",
    "choices": [
      "カエル",
      "仕方",
      "軒",
      "遠足"
    ],
    "answer": "仕方",
    "fullSentence": "予約の仕方を教えてください。",
    "explanation": "予約の仕方を教えてください。\nHãy chỉ tôi cách đặt chỗ.\n仕方: cách làm; cách giải quyết"
  },
  {
    "id": "tr_639",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Hãy chỉ tôi cách đặt chỗ.",
    "acceptedAnswers": [
      "予約の仕方を教えてください。",
      "予約の仕方を教えてください"
    ],
    "explanation": "予約の仕方を教えてください。\n(よやくのしかたをおしえてください。)\n仕方: cách làm; cách giải quyết"
  },
  {
    "id": "fb_640",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "雨なので中止しても",
    "sentenceSuffix": "がありません。",
    "choices": [
      "仕方",
      "頑固",
      "当然",
      "港"
    ],
    "answer": "仕方",
    "fullSentence": "雨なので中止しても仕方がありません。",
    "explanation": "雨なので中止しても仕方がありません。\nVì trời mưa nên đành chấp nhận hủy.\n仕方: cách làm; cách giải quyết"
  },
  {
    "id": "tr_641",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Vì trời mưa nên đành chấp nhận hủy.",
    "acceptedAnswers": [
      "雨なので中止しても仕方がありません。",
      "雨なので中止しても仕方がありません"
    ],
    "explanation": "雨なので中止しても仕方がありません。\n(あめなのでちゅうししてもしかたがありません。)\n仕方: cách làm; cách giải quyết"
  },
  {
    "id": "mc_642",
    "type": "multiple_choice",
    "question": "任せる có nghĩa là gì?",
    "word": "任せる",
    "reading": "まかせる",
    "choices": [
      "giao phó, để ai lo",
      "đi bộ đường núi",
      "nhấc lên, nâng lên",
      "thoải mái, dễ chịu"
    ],
    "answer": "giao phó, để ai lo",
    "explanation": "任せる (まかせる): giao phó, để ai lo"
  },
  {
    "id": "tr_643",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi giao việc gói hàng cho nhân viên.",
    "acceptedAnswers": [
      "包装は店員に任せました。",
      "包装は店員に任せました"
    ],
    "explanation": "包装は店員に任せました。\n(ほうそうはてんいんにまかせました。)\n任せる: giao phó, để ai lo"
  },
  {
    "id": "tr_644",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi để bạn quyết định cách chọn cửa hàng.",
    "acceptedAnswers": [
      "店の選び方はあなたに任せます。",
      "店の選び方はあなたに任せます"
    ],
    "explanation": "店の選び方はあなたに任せます。\n(みせのえらびかたはあなたにまかせます。)\n任せる: giao phó, để ai lo"
  },
  {
    "id": "mc_645",
    "type": "multiple_choice",
    "question": "箱 có nghĩa là gì?",
    "word": "箱",
    "reading": "はこ",
    "choices": [
      "tính cả, đưa vào, bao gồm vào",
      "khắc, chạm, tạc",
      "bản đồ du lịch",
      "hộp, thùng"
    ],
    "answer": "hộp, thùng",
    "explanation": "箱 (はこ): hộp, thùng"
  },
  {
    "id": "fb_646",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "贈り物を",
    "sentenceSuffix": "に入れます。",
    "choices": [
      "追加",
      "全く",
      "箱",
      "美しい"
    ],
    "answer": "箱",
    "fullSentence": "贈り物を箱に入れます。",
    "explanation": "贈り物を箱に入れます。\nTôi bỏ quà vào hộp.\n箱: hộp, thùng"
  },
  {
    "id": "tr_647",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi bỏ quà vào hộp.",
    "acceptedAnswers": [
      "贈り物を箱に入れます。",
      "贈り物を箱に入れます"
    ],
    "explanation": "贈り物を箱に入れます。\n(おくりものをはこにいれます。)\n箱: hộp, thùng"
  },
  {
    "id": "mc_648",
    "type": "multiple_choice",
    "question": "包装紙 có nghĩa là gì?",
    "word": "包装紙",
    "reading": "ほうそうし",
    "choices": [
      "nhiều màu sắc rực rỡ",
      "giấy gói hàng/quà",
      "cảm thấy, có cảm giác rằng…",
      "futsal, bóng đá sân nhỏ năm người"
    ],
    "answer": "giấy gói hàng/quà",
    "explanation": "包装紙 (ほうそうし): giấy gói hàng/quà"
  },
  {
    "id": "fb_649",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "箱を",
    "sentenceSuffix": "で包みます。",
    "choices": [
      "扇風機",
      "包装紙",
      "請求",
      "販売"
    ],
    "answer": "包装紙",
    "fullSentence": "箱を包装紙で包みます。",
    "explanation": "箱を包装紙で包みます。\nTôi gói hộp bằng giấy gói quà.\n包装紙: giấy gói hàng/quà"
  },
  {
    "id": "tr_650",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi gói hộp bằng giấy gói quà.",
    "acceptedAnswers": [
      "箱を包装紙で包みます。",
      "箱を包装紙で包みます"
    ],
    "explanation": "箱を包装紙で包みます。\n(はこをほうそうしでつつみます。)\n包装紙: giấy gói hàng/quà"
  },
  {
    "id": "mc_651",
    "type": "multiple_choice",
    "question": "リボン có nghĩa là gì?",
    "word": "リボン",
    "reading": "リボン",
    "choices": [
      "khoang cửa/đầu toa tàu; boong tàu thủy",
      "tiến hành chiến tranh",
      "quê hương",
      "ruy băng, dây nơ"
    ],
    "answer": "ruy băng, dây nơ",
    "explanation": "リボン (リボン): ruy băng, dây nơ"
  },
  {
    "id": "fb_652",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "箱に赤い",
    "sentenceSuffix": "を結びます。",
    "choices": [
      "杉",
      "わいわい",
      "素晴らしい",
      "リボン"
    ],
    "answer": "リボン",
    "fullSentence": "箱に赤いリボンを結びます。",
    "explanation": "箱に赤いリボンを結びます。\nTôi thắt ruy băng đỏ vào hộp.\nリボン: ruy băng, dây nơ"
  },
  {
    "id": "tr_653",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi thắt ruy băng đỏ vào hộp.",
    "acceptedAnswers": [
      "箱に赤いリボンを結びます。",
      "箱に赤いリボンを結びます"
    ],
    "explanation": "箱に赤いリボンを結びます。\n(はこにあかいリボンをむすびます。)\nリボン: ruy băng, dây nơ"
  },
  {
    "id": "mc_654",
    "type": "multiple_choice",
    "question": "かける（リボンをかける） có nghĩa là gì?",
    "word": "かける（リボンをかける）",
    "reading": "かける（リボンをかける）",
    "choices": [
      "buộc, choàng, gắn (ruy băng lên vật)",
      "rảy nước xuống đất cho mát",
      "sinh con",
      "hỏi, hỏi thăm thông tin"
    ],
    "answer": "buộc, choàng, gắn (ruy băng lên vật)",
    "explanation": "かける（リボンをかける） (かける（リボンをかける）): buộc, choàng, gắn (ruy băng lên vật)"
  },
  {
    "id": "tr_655",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Xin hãy buộc ruy băng vào hộp.",
    "acceptedAnswers": [
      "箱にリボンをかけてください。",
      "箱にリボンをかけてください"
    ],
    "explanation": "箱にリボンをかけてください。\n(はこにリボンをかけてください。)\nかける（リボンをかける）: buộc, choàng, gắn (ruy băng lên vật)"
  },
  {
    "id": "mc_656",
    "type": "multiple_choice",
    "question": "ラッピング có nghĩa là gì?",
    "word": "ラッピング",
    "reading": "ラッピング",
    "choices": [
      "in",
      "ngày tháng, thời gian trôi qua",
      "gói quà",
      "đau khổ, chịu khổ, chật vật"
    ],
    "answer": "gói quà",
    "explanation": "ラッピング (ラッピング): gói quà"
  },
  {
    "id": "fb_657",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "店員がプレゼントを",
    "sentenceSuffix": "してくれました。",
    "choices": [
      "割合",
      "ラッピング",
      "平気",
      "空っ風"
    ],
    "answer": "ラッピング",
    "fullSentence": "店員がプレゼントをラッピングしてくれました。",
    "explanation": "店員がプレゼントをラッピングしてくれました。\nNhân viên đã gói quà giúp tôi.\nラッピング: gói quà"
  },
  {
    "id": "tr_658",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Nhân viên đã gói quà giúp tôi.",
    "acceptedAnswers": [
      "店員がプレゼントをラッピングしてくれました。",
      "店員がプレゼントをラッピングしてくれました"
    ],
    "explanation": "店員がプレゼントをラッピングしてくれました。\n(てんいんがプレゼントをラッピングしてくれました。)\nラッピング: gói quà"
  },
  {
    "id": "mc_659",
    "type": "multiple_choice",
    "question": "グッズ có nghĩa là gì?",
    "word": "グッズ",
    "reading": "グッズ",
    "choices": [
      "vàng (kim loại)",
      "tinh ý, chu đáo, biết ý",
      "bắt đầu bật cười",
      "các món đồ, sản phẩm theo chủ đề"
    ],
    "answer": "các món đồ, sản phẩm theo chủ đề",
    "explanation": "グッズ (グッズ): các món đồ, sản phẩm theo chủ đề"
  },
  {
    "id": "fb_660",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "好きなアニメの",
    "sentenceSuffix": "を集めています。",
    "choices": [
      "停車",
      "鉄",
      "グッズ",
      "あらかじめ"
    ],
    "answer": "グッズ",
    "fullSentence": "好きなアニメのグッズを集めています。",
    "explanation": "好きなアニメのグッズを集めています。\nTôi sưu tầm đồ liên quan đến anime yêu thích.\nグッズ: các món đồ, sản phẩm theo chủ đề"
  },
  {
    "id": "tr_661",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi sưu tầm đồ liên quan đến anime yêu thích.",
    "acceptedAnswers": [
      "好きなアニメのグッズを集めています。",
      "好きなアニメのグッズを集めています"
    ],
    "explanation": "好きなアニメのグッズを集めています。\n(すきなアニメのグッズをあつめています。)\nグッズ: các món đồ, sản phẩm theo chủ đề"
  },
  {
    "id": "mc_662",
    "type": "multiple_choice",
    "question": "貴族 có nghĩa là gì?",
    "word": "貴族",
    "reading": "きぞく",
    "choices": [
      "quý tộc",
      "quà tặng",
      "mặt đất (cách nói đời thường)",
      "về nhà"
    ],
    "answer": "quý tộc",
    "explanation": "貴族 (きぞく): quý tộc"
  },
  {
    "id": "fb_663",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "昔の",
    "sentenceSuffix": "の生活を学びます。",
    "choices": [
      "にぎわう",
      "貴族",
      "当時",
      "樹齢"
    ],
    "answer": "貴族",
    "fullSentence": "昔の貴族の生活を学びます。",
    "explanation": "昔の貴族の生活を学びます。\nChúng tôi học về cuộc sống quý tộc thời xưa.\n貴族: quý tộc"
  },
  {
    "id": "tr_664",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Chúng tôi học về cuộc sống quý tộc thời xưa.",
    "acceptedAnswers": [
      "昔の貴族の生活を学びます。",
      "昔の貴族の生活を学びます"
    ],
    "explanation": "昔の貴族の生活を学びます。\n(むかしのきぞくのせいかつをまなびます。)\n貴族: quý tộc"
  },
  {
    "id": "mc_665",
    "type": "multiple_choice",
    "question": "さらす có nghĩa là gì?",
    "word": "さらす",
    "reading": "さらす",
    "choices": [
      "thêm vào, đính kèm",
      "váy đầm, lễ phục nữ",
      "chỉ định, quy định",
      "để lộ, phơi ra; ngâm/phơi để tẩy trắng"
    ],
    "answer": "để lộ, phơi ra; ngâm/phơi để tẩy trắng",
    "explanation": "さらす (さらす): để lộ, phơi ra; ngâm/phơi để tẩy trắng"
  },
  {
    "id": "tr_666",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi phơi vải ra nắng.",
    "acceptedAnswers": [
      "布を日にさらします。",
      "布を日にさらします"
    ],
    "explanation": "布を日にさらします。\n(ぬのをひにさらします。)\nさらす: để lộ, phơi ra; ngâm/phơi để tẩy trắng"
  },
  {
    "id": "tr_667",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi không muốn để món đồ quý lộ ra trước mắt mọi người.",
    "acceptedAnswers": [
      "大切な物を人目にさらしたくありません。",
      "大切な物を人目にさらしたくありません"
    ],
    "explanation": "大切な物を人目にさらしたくありません。\n(たいせつなものをひとめにさらしたくありません。)\nさらす: để lộ, phơi ra; ngâm/phơi để tẩy trắng"
  },
  {
    "id": "mc_668",
    "type": "multiple_choice",
    "question": "当時 có nghĩa là gì?",
    "word": "当時",
    "reading": "とうじ",
    "choices": [
      "dịch vụ chuyển phát tận nhà; kiện gửi qua dịch vụ đó",
      "lúc đó, thời ấy",
      "bên trong xe/tàu",
      "cuộc gặp gỡ, cơ duyên gặp"
    ],
    "answer": "lúc đó, thời ấy",
    "explanation": "当時 (とうじ): lúc đó, thời ấy"
  },
  {
    "id": "fb_669",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "は携帯電話がありませんでした。",
    "choices": [
      "わざわざ",
      "当時",
      "地区",
      "朝礼"
    ],
    "answer": "当時",
    "fullSentence": "当時は携帯電話がありませんでした。",
    "explanation": "当時は携帯電話がありませんでした。\nThời ấy chưa có điện thoại di động.\n当時: lúc đó, thời ấy"
  },
  {
    "id": "tr_670",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Thời ấy chưa có điện thoại di động.",
    "acceptedAnswers": [
      "当時は携帯電話がありませんでした。",
      "当時は携帯電話がありませんでした"
    ],
    "explanation": "当時は携帯電話がありませんでした。\n(とうじはけいたいでんわがありませんでした。)\n当時: lúc đó, thời ấy"
  },
  {
    "id": "mc_671",
    "type": "multiple_choice",
    "question": "高価 có nghĩa là gì?",
    "word": "高価",
    "reading": "こうか",
    "choices": [
      "ồn ào, rôm rả (nhiều người)",
      "điều thắc mắc, sự nghi ngờ",
      "… xăng-ti-mét (cm)",
      "đắt tiền, có giá trị cao"
    ],
    "answer": "đắt tiền, có giá trị cao",
    "explanation": "高価 (こうか): đắt tiền, có giá trị cao"
  },
  {
    "id": "fb_672",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "な時計をもらいました。",
    "choices": [
      "個性",
      "出産",
      "包装",
      "高価"
    ],
    "answer": "高価",
    "fullSentence": "高価な時計をもらいました。",
    "explanation": "高価な時計をもらいました。\nTôi được tặng một chiếc đồng hồ đắt tiền.\n高価: đắt tiền, có giá trị cao"
  },
  {
    "id": "tr_673",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi được tặng một chiếc đồng hồ đắt tiền.",
    "acceptedAnswers": [
      "高価な時計をもらいました。",
      "高価な時計をもらいました"
    ],
    "explanation": "高価な時計をもらいました。\n(こうかなとけいをもらいました。)\n高価: đắt tiền, có giá trị cao"
  },
  {
    "id": "mc_674",
    "type": "multiple_choice",
    "question": "表れ có nghĩa là gì?",
    "word": "表れ",
    "reading": "あらわれ",
    "choices": [
      "tính cả, đưa vào, bao gồm vào",
      "biểu hiện, dấu hiệu thể hiện",
      "xi măng",
      "mặt trời"
    ],
    "answer": "biểu hiện, dấu hiệu thể hiện",
    "explanation": "表れ (あらわれ): biểu hiện, dấu hiệu thể hiện"
  },
  {
    "id": "fb_675",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "これは感謝の気持ちの",
    "sentenceSuffix": "です。",
    "choices": [
      "アドバイス",
      "パジャマ",
      "表れ",
      "所要時間"
    ],
    "answer": "表れ",
    "fullSentence": "これは感謝の気持ちの表れです。",
    "explanation": "これは感謝の気持ちの表れです。\nĐây là biểu hiện của lòng biết ơn.\n表れ: biểu hiện, dấu hiệu thể hiện"
  },
  {
    "id": "tr_676",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Đây là biểu hiện của lòng biết ơn.",
    "acceptedAnswers": [
      "これは感謝の気持ちの表れです。",
      "これは感謝の気持ちの表れです"
    ],
    "explanation": "これは感謝の気持ちの表れです。\n(これはかんしゃのきもちのあらわれです。)\n表れ: biểu hiện, dấu hiệu thể hiện"
  },
  {
    "id": "mc_677",
    "type": "multiple_choice",
    "question": "破る có nghĩa là gì?",
    "word": "破る",
    "reading": "やぶる",
    "choices": [
      "vẫn còn nhiều; còn lâu mới đạt",
      "xé, làm rách; phá vỡ/không giữ",
      "nước mưa",
      "đau khổ, chịu khổ, chật vật"
    ],
    "answer": "xé, làm rách; phá vỡ/không giữ",
    "explanation": "破る (やぶる): xé, làm rách; phá vỡ/không giữ"
  },
  {
    "id": "tr_678",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Đừng làm rách giấy gói.",
    "acceptedAnswers": [
      "包装紙を破らないでください。",
      "包装紙を破らないでください"
    ],
    "explanation": "包装紙を破らないでください。\n(ほうそうしをやぶらないでください。)\n破る: xé, làm rách; phá vỡ/không giữ"
  },
  {
    "id": "tr_679",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Không được thất hứa.",
    "acceptedAnswers": [
      "約束を破ってはいけません。",
      "約束を破ってはいけません"
    ],
    "explanation": "約束を破ってはいけません。\n(やくそくをやぶってはいけません。)\n破る: xé, làm rách; phá vỡ/không giữ"
  },
  {
    "id": "mc_680",
    "type": "multiple_choice",
    "question": "ブックカバー có nghĩa là gì?",
    "word": "ブックカバー",
    "reading": "ブックカバー",
    "choices": [
      "mặt trời",
      "bìa bọc sách",
      "bài hát, khúc hát (thường gặp với dân ca)",
      "tâm tư, suy nghĩ, tình cảm"
    ],
    "answer": "bìa bọc sách",
    "explanation": "ブックカバー (ブックカバー): bìa bọc sách"
  },
  {
    "id": "fb_681",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "本に",
    "sentenceSuffix": "をかけます。",
    "choices": [
      "ブックカバー",
      "かけ間違い",
      "タイトル",
      "越える"
    ],
    "answer": "ブックカバー",
    "fullSentence": "本にブックカバーをかけます。",
    "explanation": "本にブックカバーをかけます。\nTôi bọc bìa cho sách.\nブックカバー: bìa bọc sách"
  },
  {
    "id": "tr_682",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi bọc bìa cho sách.",
    "acceptedAnswers": [
      "本にブックカバーをかけます。",
      "本にブックカバーをかけます"
    ],
    "explanation": "本にブックカバーをかけます。\n(ほんにブックカバーをかけます。)\nブックカバー: bìa bọc sách"
  },
  {
    "id": "mc_683",
    "type": "multiple_choice",
    "question": "あるいは có nghĩa là gì?",
    "word": "あるいは",
    "reading": "あるいは",
    "choices": [
      "dân làng",
      "hoặc, hoặc là",
      "hình dung, tưởng tượng",
      "ầm ầm, tiếng vang lớn kéo dài"
    ],
    "answer": "hoặc, hoặc là",
    "explanation": "あるいは (あるいは): hoặc, hoặc là"
  },
  {
    "id": "fb_684",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "電話、",
    "sentenceSuffix": "メールで連絡してください。",
    "choices": [
      "変",
      "ハイタッチ",
      "あるいは",
      "文章"
    ],
    "answer": "あるいは",
    "fullSentence": "電話、あるいはメールで連絡してください。",
    "explanation": "電話、あるいはメールで連絡してください。\nHãy liên hệ bằng điện thoại hoặc email.\nあるいは: hoặc, hoặc là"
  },
  {
    "id": "tr_685",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Hãy liên hệ bằng điện thoại hoặc email.",
    "acceptedAnswers": [
      "電話、あるいはメールで連絡してください。",
      "電話、あるいはメールで連絡してください"
    ],
    "explanation": "電話、あるいはメールで連絡してください。\n(でんわ、あるいはメールでれんらくしてください。)\nあるいは: hoặc, hoặc là"
  },
  {
    "id": "mc_686",
    "type": "multiple_choice",
    "question": "含める có nghĩa là gì?",
    "word": "含める",
    "reading": "ふくめる",
    "choices": [
      "tiêu thụ, sử dụng hết",
      "tính cả, đưa vào, bao gồm vào",
      "được nướng chín; bị cháy; bị rám nắng",
      "bán hàng"
    ],
    "answer": "tính cả, đưa vào, bao gồm vào",
    "explanation": "含める (ふくめる): tính cả, đưa vào, bao gồm vào"
  },
  {
    "id": "tr_687",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Chúng tôi tính phí vận chuyển vào giá tiền.",
    "acceptedAnswers": [
      "送料を代金に含めます。",
      "送料を代金に含めます"
    ],
    "explanation": "送料を代金に含めます。\n(そうりょうをだいきんにふくめます。)\n含める: tính cả, đưa vào, bao gồm vào"
  },
  {
    "id": "tr_688",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Kể cả tôi là năm người.",
    "acceptedAnswers": [
      "私を含めて五人です。",
      "私を含めて五人です"
    ],
    "explanation": "私を含めて五人です。\n(わたしをふくめてごにんです。)\n含める: tính cả, đưa vào, bao gồm vào"
  },
  {
    "id": "mc_689",
    "type": "multiple_choice",
    "question": "ぐっと có nghĩa là gì?",
    "word": "ぐっと",
    "reading": "ぐっと",
    "choices": [
      "trẻ trung, đầy sức sống",
      "thêm vào, đính kèm",
      "hơn hẳn; mạnh một cái, dồn sức",
      "toa xe, phương tiện đường bộ/đường sắt"
    ],
    "answer": "hơn hẳn; mạnh một cái, dồn sức",
    "explanation": "ぐっと (ぐっと): hơn hẳn; mạnh một cái, dồn sức"
  },
  {
    "id": "fb_690",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "リボンを付けると、",
    "sentenceSuffix": "きれいになります。",
    "choices": [
      "ちょっとした",
      "ぐっと",
      "～者",
      "堅い"
    ],
    "answer": "ぐっと",
    "fullSentence": "リボンを付けると、ぐっときれいになります。",
    "explanation": "リボンを付けると、ぐっときれいになります。\nThêm ruy băng vào thì đẹp hơn hẳn.\nぐっと: hơn hẳn; mạnh một cái, dồn sức"
  },
  {
    "id": "tr_691",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Thêm ruy băng vào thì đẹp hơn hẳn.",
    "acceptedAnswers": [
      "リボンを付けると、ぐっときれいになります。",
      "リボンを付けると、ぐっときれいになります"
    ],
    "explanation": "リボンを付けると、ぐっときれいになります。\n(リボンをつけると、ぐっときれいになります。)\nぐっと: hơn hẳn; mạnh một cái, dồn sức"
  },
  {
    "id": "fb_692",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "ひもを",
    "sentenceSuffix": "引きます。",
    "choices": [
      "一生",
      "ぐっと",
      "パジャマ",
      "停車"
    ],
    "answer": "ぐっと",
    "fullSentence": "ひもをぐっと引きます。",
    "explanation": "ひもをぐっと引きます。\nTôi kéo mạnh sợi dây.\nぐっと: hơn hẳn; mạnh một cái, dồn sức"
  },
  {
    "id": "tr_693",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi kéo mạnh sợi dây.",
    "acceptedAnswers": [
      "ひもをぐっと引きます。",
      "ひもをぐっと引きます"
    ],
    "explanation": "ひもをぐっと引きます。\n(ひもをぐっとひきます。)\nぐっと: hơn hẳn; mạnh một cái, dồn sức"
  },
  {
    "id": "mc_694",
    "type": "multiple_choice",
    "question": "許可 có nghĩa là gì?",
    "word": "許可",
    "reading": "きょか",
    "choices": [
      "đảo",
      "giấy viết thư",
      "cho phép",
      "đông đúc, nhộn nhịp"
    ],
    "answer": "cho phép",
    "explanation": "許可 (きょか): cho phép"
  },
  {
    "id": "fb_695",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "先生は学生に辞書の使用を",
    "sentenceSuffix": "しました。",
    "choices": [
      "便箋",
      "販売",
      "フットサル",
      "許可"
    ],
    "answer": "許可",
    "fullSentence": "先生は学生に辞書の使用を許可しました。",
    "explanation": "先生は学生に辞書の使用を許可しました。\nThầy cho phép sinh viên dùng từ điển.\n許可: cho phép"
  },
  {
    "id": "tr_696",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Thầy cho phép sinh viên dùng từ điển.",
    "acceptedAnswers": [
      "先生は学生に辞書の使用を許可しました。",
      "先生は学生に辞書の使用を許可しました"
    ],
    "explanation": "先生は学生に辞書の使用を許可しました。\n(せんせいはがくせいにじしょのしようをきょかしました。)\n許可: cho phép"
  },
  {
    "id": "fb_697",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "撮影の",
    "sentenceSuffix": "を得ました。",
    "choices": [
      "置き場",
      "許可",
      "出店",
      "実話"
    ],
    "answer": "許可",
    "fullSentence": "撮影の許可を得ました。",
    "explanation": "撮影の許可を得ました。\nTôi đã được phép chụp ảnh.\n許可: cho phép"
  },
  {
    "id": "tr_698",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đã được phép chụp ảnh.",
    "acceptedAnswers": [
      "撮影の許可を得ました。",
      "撮影の許可を得ました"
    ],
    "explanation": "撮影の許可を得ました。\n(さつえいのきょかをえました。)\n許可: cho phép"
  },
  {
    "id": "mc_699",
    "type": "multiple_choice",
    "question": "～末 có nghĩa là gì?",
    "word": "～末",
    "reading": "～まつ",
    "choices": [
      "sự phong phú, giàu có",
      "đánh dấu",
      "nam và nữ",
      "cuối (tháng, năm…)"
    ],
    "answer": "cuối (tháng, năm…)",
    "explanation": "～末 (～まつ): cuối (tháng, năm…)"
  },
  {
    "id": "tr_700",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Cuối tháng sau tôi về nước.",
    "acceptedAnswers": [
      "来月末に帰国します。",
      "来月末に帰国します"
    ],
    "explanation": "来月末に帰国します。\n(らいげつまつにきこくします。)\n～末: cuối (tháng, năm…)"
  },
  {
    "id": "mc_701",
    "type": "multiple_choice",
    "question": "全く có nghĩa là gì?",
    "word": "全く",
    "reading": "まったく",
    "choices": [
      "cây sugi, tuyết tùng Nhật Bản",
      "hỏi, hỏi thăm thông tin",
      "hoàn toàn; hoàn toàn không (với phủ định)",
      "rải, rắc; tưới/rảy (nước)"
    ],
    "answer": "hoàn toàn; hoàn toàn không (với phủ định)",
    "explanation": "全く (まったく): hoàn toàn; hoàn toàn không (với phủ định)"
  },
  {
    "id": "fb_702",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "説明が",
    "sentenceSuffix": "分かりません。",
    "choices": [
      "～者",
      "優勝",
      "ハーモニカ",
      "全く"
    ],
    "answer": "全く",
    "fullSentence": "説明が全く分かりません。",
    "explanation": "説明が全く分かりません。\nTôi hoàn toàn không hiểu phần giải thích.\n全く: hoàn toàn; hoàn toàn không (với phủ định)"
  },
  {
    "id": "tr_703",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi hoàn toàn không hiểu phần giải thích.",
    "acceptedAnswers": [
      "説明が全く分かりません。",
      "説明が全く分かりません"
    ],
    "explanation": "説明が全く分かりません。\n(せつめいがまったくわかりません。)\n全く: hoàn toàn; hoàn toàn không (với phủ định)"
  },
  {
    "id": "fb_704",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "二つの答えは",
    "sentenceSuffix": "同じです。",
    "choices": [
      "所要時間",
      "海洋",
      "より～",
      "全く"
    ],
    "answer": "全く",
    "fullSentence": "二つの答えは全く同じです。",
    "explanation": "二つの答えは全く同じです。\nHai câu trả lời hoàn toàn giống nhau.\n全く: hoàn toàn; hoàn toàn không (với phủ định)"
  },
  {
    "id": "tr_705",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Hai câu trả lời hoàn toàn giống nhau.",
    "acceptedAnswers": [
      "二つの答えは全く同じです。",
      "二つの答えは全く同じです"
    ],
    "explanation": "二つの答えは全く同じです。\n(ふたつのこたえはまったくおなじです。)\n全く: hoàn toàn; hoàn toàn không (với phủ định)"
  },
  {
    "id": "mc_706",
    "type": "multiple_choice",
    "question": "同僚 có nghĩa là gì?",
    "word": "同僚",
    "reading": "どうりょう",
    "choices": [
      "lại, một lần nữa",
      "phía trong sâu, phía cuối",
      "đồng nghiệp",
      "chịu đựng, nhịn"
    ],
    "answer": "đồng nghiệp",
    "explanation": "同僚 (どうりょう): đồng nghiệp"
  },
  {
    "id": "fb_707",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "と昼ご飯を食べます。",
    "choices": [
      "パジャマ",
      "同僚",
      "駄目",
      "わざと"
    ],
    "answer": "同僚",
    "fullSentence": "同僚と昼ご飯を食べます。",
    "explanation": "同僚と昼ご飯を食べます。\nTôi ăn trưa với đồng nghiệp.\n同僚: đồng nghiệp"
  },
  {
    "id": "tr_708",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi ăn trưa với đồng nghiệp.",
    "acceptedAnswers": [
      "同僚と昼ご飯を食べます。",
      "同僚と昼ご飯を食べます"
    ],
    "explanation": "同僚と昼ご飯を食べます。\n(どうりょうとひるごはんをたべます。)\n同僚: đồng nghiệp"
  },
  {
    "id": "mc_709",
    "type": "multiple_choice",
    "question": "かける（迷惑をかける） có nghĩa là gì?",
    "word": "かける（迷惑をかける）",
    "reading": "かける（めいわくをかける）",
    "choices": [
      "bánh kẹo truyền thống Nhật Bản",
      "giọng nói, âm thanh lời nói",
      "người nhận trả phí vận chuyển",
      "gây ra, làm cho (ai phiền)"
    ],
    "answer": "gây ra, làm cho (ai phiền)",
    "explanation": "かける（迷惑をかける） (かける（めいわくをかける）): gây ra, làm cho (ai phiền)"
  },
  {
    "id": "tr_710",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đã gây phiền cho bạn.",
    "acceptedAnswers": [
      "友達に迷惑をかけてしまいました。",
      "友達に迷惑をかけてしまいました"
    ],
    "explanation": "友達に迷惑をかけてしまいました。\n(ともだちにめいわくをかけてしまいました。)\nかける（迷惑をかける）: gây ra, làm cho (ai phiền)"
  },
  {
    "id": "mc_711",
    "type": "multiple_choice",
    "question": "回収 có nghĩa là gì?",
    "word": "回収",
    "reading": "かいしゅう",
    "choices": [
      "phát triển, tạo sản phẩm/công nghệ mới",
      "không… chút nào (khẩu ngữ)",
      "thu gom, thu hồi",
      "khuyên, đưa ra lời khuyên"
    ],
    "answer": "thu gom, thu hồi",
    "explanation": "回収 (かいしゅう): thu gom, thu hồi"
  },
  {
    "id": "fb_712",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "毎週、古い新聞を",
    "sentenceSuffix": "します。",
    "choices": [
      "心より",
      "回収",
      "奥",
      "男"
    ],
    "answer": "回収",
    "fullSentence": "毎週、古い新聞を回収します。",
    "explanation": "毎週、古い新聞を回収します。\nHằng tuần người ta thu gom báo cũ.\n回収: thu gom, thu hồi"
  },
  {
    "id": "tr_713",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Hằng tuần người ta thu gom báo cũ.",
    "acceptedAnswers": [
      "毎週、古い新聞を回収します。",
      "毎週、古い新聞を回収します"
    ],
    "explanation": "毎週、古い新聞を回収します。\n(まいしゅう、ふるいしんぶんをかいしゅうします。)\n回収: thu gom, thu hồi"
  },
  {
    "id": "mc_714",
    "type": "multiple_choice",
    "question": "置き場 có nghĩa là gì?",
    "word": "置き場",
    "reading": "おきば",
    "choices": [
      "chỗ để, nơi đặt đồ",
      "vé đi không giới hạn trong phạm vi và thời hạn quy định",
      "chịu đựng, nhịn",
      "được nướng chín; bị cháy; bị rám nắng"
    ],
    "answer": "chỗ để, nơi đặt đồ",
    "explanation": "置き場 (おきば): chỗ để, nơi đặt đồ"
  },
  {
    "id": "fb_715",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "自転車の",
    "sentenceSuffix": "はあちらです。",
    "choices": [
      "柿",
      "置き場",
      "今では",
      "ときには"
    ],
    "answer": "置き場",
    "fullSentence": "自転車の置き場はあちらです。",
    "explanation": "自転車の置き場はあちらです。\nChỗ để xe đạp ở đằng kia.\n置き場: chỗ để, nơi đặt đồ"
  },
  {
    "id": "tr_716",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Chỗ để xe đạp ở đằng kia.",
    "acceptedAnswers": [
      "自転車の置き場はあちらです。",
      "自転車の置き場はあちらです"
    ],
    "explanation": "自転車の置き場はあちらです。\n(じてんしゃのおきばはあちらです。)\n置き場: chỗ để, nơi đặt đồ"
  },
  {
    "id": "mc_717",
    "type": "multiple_choice",
    "question": "色違い có nghĩa là gì?",
    "word": "色違い",
    "reading": "いろちがい",
    "choices": [
      "khác màu, phiên bản màu khác",
      "im lặng, ngừng nói",
      "trẻ trung, đầy sức sống",
      "phát triển mạnh, sôi nổi, thịnh hành"
    ],
    "answer": "khác màu, phiên bản màu khác",
    "explanation": "色違い (いろちがい): khác màu, phiên bản màu khác"
  },
  {
    "id": "fb_718",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この服の",
    "sentenceSuffix": "はありますか。",
    "choices": [
      "生物",
      "色違い",
      "産業",
      "コンクリート"
    ],
    "answer": "色違い",
    "fullSentence": "この服の色違いはありますか。",
    "explanation": "この服の色違いはありますか。\nMẫu áo này có màu khác không?\n色違い: khác màu, phiên bản màu khác"
  },
  {
    "id": "tr_719",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Mẫu áo này có màu khác không?",
    "acceptedAnswers": [
      "この服の色違いはありますか。",
      "この服の色違いはありますか"
    ],
    "explanation": "この服の色違いはありますか。\n(このふくのいろちがいはありますか。)\n色違い: khác màu, phiên bản màu khác"
  },
  {
    "id": "mc_720",
    "type": "multiple_choice",
    "question": "申し訳ありません có nghĩa là gì?",
    "word": "申し訳ありません",
    "reading": "もうしわけありません",
    "choices": [
      "gói quà",
      "điêu khắc",
      "thành thật xin lỗi (lịch sự)",
      "dáng vẻ, hình dáng; hình ảnh người/vật"
    ],
    "answer": "thành thật xin lỗi (lịch sự)",
    "explanation": "申し訳ありません (もうしわけありません): thành thật xin lỗi (lịch sự)"
  },
  {
    "id": "fb_721",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "お待たせして",
    "sentenceSuffix": "。",
    "choices": [
      "なんだか",
      "申し訳ありません",
      "わ（けがしたわ）",
      "～発"
    ],
    "answer": "申し訳ありません",
    "fullSentence": "お待たせして申し訳ありません。",
    "explanation": "お待たせして申し訳ありません。\nThành thật xin lỗi vì đã để quý khách chờ.\n申し訳ありません: thành thật xin lỗi (lịch sự)"
  },
  {
    "id": "tr_722",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Thành thật xin lỗi vì đã để quý khách chờ.",
    "acceptedAnswers": [
      "お待たせして申し訳ありません。",
      "お待たせして申し訳ありません"
    ],
    "explanation": "お待たせして申し訳ありません。\n(おまたせしてもうしわけありません。)\n申し訳ありません: thành thật xin lỗi (lịch sự)"
  },
  {
    "id": "mc_723",
    "type": "multiple_choice",
    "question": "朝礼 có nghĩa là gì?",
    "word": "朝礼",
    "reading": "ちょうれい",
    "choices": [
      "sự phong phú, giàu có",
      "màu xám",
      "máy móc",
      "buổi tập trung/họp đầu giờ sáng"
    ],
    "answer": "buổi tập trung/họp đầu giờ sáng",
    "explanation": "朝礼 (ちょうれい): buổi tập trung/họp đầu giờ sáng"
  },
  {
    "id": "fb_724",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "で今日の予定を説明します。",
    "choices": [
      "朝礼",
      "出店",
      "若者",
      "恵まれる"
    ],
    "answer": "朝礼",
    "fullSentence": "朝礼で今日の予定を説明します。",
    "explanation": "朝礼で今日の予定を説明します。\nTôi giải thích lịch hôm nay trong buổi họp đầu giờ.\n朝礼: buổi tập trung/họp đầu giờ sáng"
  },
  {
    "id": "tr_725",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi giải thích lịch hôm nay trong buổi họp đầu giờ.",
    "acceptedAnswers": [
      "朝礼で今日の予定を説明します。",
      "朝礼で今日の予定を説明します"
    ],
    "explanation": "朝礼で今日の予定を説明します。\n(ちょうれいできょうのよていをせつめいします。)\n朝礼: buổi tập trung/họp đầu giờ sáng"
  },
  {
    "id": "mc_726",
    "type": "multiple_choice",
    "question": "オープンキャンパス có nghĩa là gì?",
    "word": "オープンキャンパス",
    "reading": "オープンキャンパス",
    "choices": [
      "ngày hội mở cửa trường cho người muốn tìm hiểu/tuyển sinh",
      "cách dùng từ, cách nói năng",
      "lạ, kỳ lạ, bất thường",
      "bình đẳng, ngang hàng"
    ],
    "answer": "ngày hội mở cửa trường cho người muốn tìm hiểu/tuyển sinh",
    "explanation": "オープンキャンパス (オープンキャンパス): ngày hội mở cửa trường cho người muốn tìm hiểu/tuyển sinh"
  },
  {
    "id": "fb_727",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "大学の",
    "sentenceSuffix": "に参加します。",
    "choices": [
      "わざわざ",
      "着払い",
      "タイミング",
      "オープンキャンパス"
    ],
    "answer": "オープンキャンパス",
    "fullSentence": "大学のオープンキャンパスに参加します。",
    "explanation": "大学のオープンキャンパスに参加します。\nTôi tham dự ngày hội mở cửa của trường đại học.\nオープンキャンパス: ngày hội mở cửa trường cho người muốn tìm hiểu/tuyển sinh"
  },
  {
    "id": "tr_728",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi tham dự ngày hội mở cửa của trường đại học.",
    "acceptedAnswers": [
      "大学のオープンキャンパスに参加します。",
      "大学のオープンキャンパスに参加します"
    ],
    "explanation": "大学のオープンキャンパスに参加します。\n(だいがくのオープンキャンパスにさんかします。)\nオープンキャンパス: ngày hội mở cửa trường cho người muốn tìm hiểu/tuyển sinh"
  },
  {
    "id": "mc_729",
    "type": "multiple_choice",
    "question": "一時帰国 có nghĩa là gì?",
    "word": "一時帰国",
    "reading": "いちじきこく",
    "choices": [
      "hiểu lầm",
      "tạm về nước",
      "dáng vẻ, hình dáng; hình ảnh người/vật",
      "khác màu, phiên bản màu khác"
    ],
    "answer": "tạm về nước",
    "explanation": "一時帰国 (いちじきこく): tạm về nước"
  },
  {
    "id": "fb_730",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "夏休みに",
    "sentenceSuffix": "します。",
    "choices": [
      "一時帰国",
      "イメージ",
      "破る",
      "暖冬"
    ],
    "answer": "一時帰国",
    "fullSentence": "夏休みに一時帰国します。",
    "explanation": "夏休みに一時帰国します。\nTôi tạm về nước vào kỳ nghỉ hè.\n一時帰国: tạm về nước"
  },
  {
    "id": "tr_731",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi tạm về nước vào kỳ nghỉ hè.",
    "acceptedAnswers": [
      "夏休みに一時帰国します。",
      "夏休みに一時帰国します"
    ],
    "explanation": "夏休みに一時帰国します。\n(なつやすみにいちじきこくします。)\n一時帰国: tạm về nước"
  },
  {
    "id": "mc_732",
    "type": "multiple_choice",
    "question": "帰国 có nghĩa là gì?",
    "word": "帰国",
    "reading": "きこく",
    "choices": [
      "về nước mình",
      "chiều dọc",
      "im lặng, ngừng nói",
      "nỗ lực"
    ],
    "answer": "về nước mình",
    "explanation": "帰国 (きこく): về nước mình"
  },
  {
    "id": "fb_733",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "来月、ベトナムに",
    "sentenceSuffix": "します。",
    "choices": [
      "人口",
      "帰国",
      "貴族",
      "～とも"
    ],
    "answer": "帰国",
    "fullSentence": "来月、ベトナムに帰国します。",
    "explanation": "来月、ベトナムに帰国します。\nTháng sau tôi về Việt Nam.\n帰国: về nước mình"
  },
  {
    "id": "tr_734",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tháng sau tôi về Việt Nam.",
    "acceptedAnswers": [
      "来月、ベトナムに帰国します。",
      "来月、ベトナムに帰国します"
    ],
    "explanation": "来月、ベトナムに帰国します。\n(らいげつ、ベトナムにきこくします。)\n帰国: về nước mình"
  },
  {
    "id": "mc_735",
    "type": "multiple_choice",
    "question": "メッセージ có nghĩa là gì?",
    "word": "メッセージ",
    "reading": "メッセージ",
    "choices": [
      "nhé, nhỉ (trợ từ cuối câu thân mật)",
      "phong cảnh",
      "bài luận ngắn",
      "tin nhắn, lời nhắn, thông điệp"
    ],
    "answer": "tin nhắn, lời nhắn, thông điệp",
    "explanation": "メッセージ (メッセージ): tin nhắn, lời nhắn, thông điệp"
  },
  {
    "id": "fb_736",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "友人に",
    "sentenceSuffix": "を送りました。",
    "choices": [
      "メッセージ",
      "詩",
      "若々しい",
      "見どころ"
    ],
    "answer": "メッセージ",
    "fullSentence": "友人にメッセージを送りました。",
    "explanation": "友人にメッセージを送りました。\nTôi đã gửi tin nhắn cho bạn.\nメッセージ: tin nhắn, lời nhắn, thông điệp"
  },
  {
    "id": "tr_737",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đã gửi tin nhắn cho bạn.",
    "acceptedAnswers": [
      "友人にメッセージを送りました。",
      "友人にメッセージを送りました"
    ],
    "explanation": "友人にメッセージを送りました。\n(ゆうじんにメッセージをおくりました。)\nメッセージ: tin nhắn, lời nhắn, thông điệp"
  },
  {
    "id": "mc_738",
    "type": "multiple_choice",
    "question": "一筆箋 có nghĩa là gì?",
    "word": "一筆箋",
    "reading": "いっぴつせん",
    "choices": [
      "sau… mới lại làm, lần đầu sau khoảng…",
      "ngày hội mở cửa trường cho người muốn tìm hiểu/tuyển sinh",
      "giấy nhỏ dài để viết vài dòng nhắn gửi",
      "nhé, nhỉ (trợ từ cuối câu thân mật)"
    ],
    "answer": "giấy nhỏ dài để viết vài dòng nhắn gửi",
    "explanation": "一筆箋 (いっぴつせん): giấy nhỏ dài để viết vài dòng nhắn gửi"
  },
  {
    "id": "fb_739",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "にお礼を書きました。",
    "choices": [
      "黙る",
      "文字",
      "込める",
      "一筆箋"
    ],
    "answer": "一筆箋",
    "fullSentence": "一筆箋にお礼を書きました。",
    "explanation": "一筆箋にお礼を書きました。\nTôi viết lời cảm ơn lên tờ giấy nhắn.\n一筆箋: giấy nhỏ dài để viết vài dòng nhắn gửi"
  },
  {
    "id": "tr_740",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi viết lời cảm ơn lên tờ giấy nhắn.",
    "acceptedAnswers": [
      "一筆箋にお礼を書きました。",
      "一筆箋にお礼を書きました"
    ],
    "explanation": "一筆箋にお礼を書きました。\n(いっぴつせんにおれいをかきました。)\n一筆箋: giấy nhỏ dài để viết vài dòng nhắn gửi"
  },
  {
    "id": "mc_741",
    "type": "multiple_choice",
    "question": "伝わる có nghĩa là gì?",
    "word": "伝わる",
    "reading": "つたわる",
    "choices": [
      "khoảnh khắc",
      "được truyền đến, được hiểu",
      "sống, tồn tại",
      "địa phương nơi mình sống/xuất thân; vùng sở tại"
    ],
    "answer": "được truyền đến, được hiểu",
    "explanation": "伝わる (つたわる): được truyền đến, được hiểu"
  },
  {
    "id": "tr_742",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Lòng biết ơn đã truyền đến người kia.",
    "acceptedAnswers": [
      "感謝の気持ちが相手に伝わりました。",
      "感謝の気持ちが相手に伝わりました"
    ],
    "explanation": "感謝の気持ちが相手に伝わりました。\n(かんしゃのきもちがあいてにつたわりました。)\n伝わる: được truyền đến, được hiểu"
  },
  {
    "id": "tr_743",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tin tức được truyền qua mạng.",
    "acceptedAnswers": [
      "ニュースはネットで伝わりました。",
      "ニュースはネットで伝わりました"
    ],
    "explanation": "ニュースはネットで伝わりました。\n(ニュースはネットでつたわりました。)\n伝わる: được truyền đến, được hiểu"
  },
  {
    "id": "mc_744",
    "type": "multiple_choice",
    "question": "縦 có nghĩa là gì?",
    "word": "縦",
    "reading": "たて",
    "choices": [
      "chiều dọc",
      "sự may mắn; may mắn",
      "chiếu tatami",
      "quả là, đúng là (như tiếng tăm/kỳ vọng)"
    ],
    "answer": "chiều dọc",
    "explanation": "縦 (たて): chiều dọc"
  },
  {
    "id": "fb_745",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "紙を",
    "sentenceSuffix": "に折ってください。",
    "choices": [
      "縦",
      "見合わせる",
      "貴族",
      "同年代"
    ],
    "answer": "縦",
    "fullSentence": "紙を縦に折ってください。",
    "explanation": "紙を縦に折ってください。\nHãy gấp giấy theo chiều dọc.\n縦: chiều dọc"
  },
  {
    "id": "tr_746",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Hãy gấp giấy theo chiều dọc.",
    "acceptedAnswers": [
      "紙を縦に折ってください。",
      "紙を縦に折ってください"
    ],
    "explanation": "紙を縦に折ってください。\n(かみをたてにおってください。)\n縦: chiều dọc"
  },
  {
    "id": "mc_747",
    "type": "multiple_choice",
    "question": "～センチ có nghĩa là gì?",
    "word": "～センチ",
    "reading": "～センチ",
    "choices": [
      "thấy ưng ý, thích sau khi tiếp xúc",
      "… xăng-ti-mét (cm)",
      "lâu rồi không gặp",
      "sắt"
    ],
    "answer": "… xăng-ti-mét (cm)",
    "explanation": "～センチ (～センチ): … xăng-ti-mét (cm)"
  },
  {
    "id": "tr_748",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tờ giấy này dài mười tám xăng-ti-mét theo chiều dọc.",
    "acceptedAnswers": [
      "この紙は縦十八センチです。",
      "この紙は縦十八センチです"
    ],
    "explanation": "この紙は縦十八センチです。\n(このかみはたてじゅうはちセンチです。)\n～センチ: … xăng-ti-mét (cm)"
  },
  {
    "id": "mc_749",
    "type": "multiple_choice",
    "question": "細長い có nghĩa là gì?",
    "word": "細長い",
    "reading": "ほそながい",
    "choices": [
      "cốt thép",
      "xé, làm rách; phá vỡ/không giữ",
      "truyện tranh bốn khung",
      "thon dài, dài và hẹp"
    ],
    "answer": "thon dài, dài và hẹp",
    "explanation": "細長い (ほそながい): thon dài, dài và hẹp"
  },
  {
    "id": "fb_750",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "紙に名前を書きます。",
    "choices": [
      "対等",
      "湿る",
      "女子高生",
      "細長い"
    ],
    "answer": "細長い",
    "fullSentence": "細長い紙に名前を書きます。",
    "explanation": "細長い紙に名前を書きます。\nTôi viết tên lên tờ giấy dài hẹp.\n細長い: thon dài, dài và hẹp"
  },
  {
    "id": "tr_751",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi viết tên lên tờ giấy dài hẹp.",
    "acceptedAnswers": [
      "細長い紙に名前を書きます。",
      "細長い紙に名前を書きます"
    ],
    "explanation": "細長い紙に名前を書きます。\n(ほそながいかみになまえをかきます。)\n細長い: thon dài, dài và hẹp"
  },
  {
    "id": "mc_752",
    "type": "multiple_choice",
    "question": "便箋 có nghĩa là gì?",
    "word": "便箋",
    "reading": "びんせん",
    "choices": [
      "không sao, không sợ/không bận tâm",
      "giấy viết thư",
      "biết đâu, có lẽ",
      "nước mưa"
    ],
    "answer": "giấy viết thư",
    "explanation": "便箋 (びんせん): giấy viết thư"
  },
  {
    "id": "fb_753",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "きれいな",
    "sentenceSuffix": "に手紙を書きます。",
    "choices": [
      "たまたま",
      "便箋",
      "帰宅",
      "気がする"
    ],
    "answer": "便箋",
    "fullSentence": "きれいな便箋に手紙を書きます。",
    "explanation": "きれいな便箋に手紙を書きます。\nTôi viết thư trên giấy viết thư đẹp.\n便箋: giấy viết thư"
  },
  {
    "id": "tr_754",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi viết thư trên giấy viết thư đẹp.",
    "acceptedAnswers": [
      "きれいな便箋に手紙を書きます。",
      "きれいな便箋に手紙を書きます"
    ],
    "explanation": "きれいな便箋に手紙を書きます。\n(きれいなびんせんにてがみをかきます。)\n便箋: giấy viết thư"
  },
  {
    "id": "mc_755",
    "type": "multiple_choice",
    "question": "堅い có nghĩa là gì?",
    "word": "堅い",
    "reading": "かたい",
    "choices": [
      "cứng, chắc; cứng nhắc, trang trọng quá",
      "blog, nhật ký trên mạng",
      "hồi hộp lo lắng, thót tim",
      "việc thả diều"
    ],
    "answer": "cứng, chắc; cứng nhắc, trang trọng quá",
    "explanation": "堅い (かたい): cứng, chắc; cứng nhắc, trang trọng quá"
  },
  {
    "id": "fb_756",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "友達への手紙なので、",
    "sentenceSuffix": "表現は使いません。",
    "choices": [
      "包装紙",
      "堅い",
      "都心",
      "なぞなぞ"
    ],
    "answer": "堅い",
    "fullSentence": "友達への手紙なので、堅い表現は使いません。",
    "explanation": "友達への手紙なので、堅い表現は使いません。\nVì là thư cho bạn nên tôi không dùng cách diễn đạt quá trang trọng.\n堅い: cứng, chắc; cứng nhắc, trang trọng quá"
  },
  {
    "id": "tr_757",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Vì là thư cho bạn nên tôi không dùng cách diễn đạt quá trang trọng.",
    "acceptedAnswers": [
      "友達への手紙なので、堅い表現は使いません。",
      "友達への手紙なので、堅い表現は使いません"
    ],
    "explanation": "友達への手紙なので、堅い表現は使いません。\n(ともだちへのてがみなので、かたいひょうげんはつかいません。)\n堅い: cứng, chắc; cứng nhắc, trang trọng quá"
  },
  {
    "id": "mc_758",
    "type": "multiple_choice",
    "question": "本題 có nghĩa là gì?",
    "word": "本題",
    "reading": "ほんだい",
    "choices": [
      "vô địch, giành giải nhất",
      "thấy người khác có điều tốt mà mình cũng muốn, ghen tị",
      "vấn đề/chủ đề chính",
      "đắt tiền, có giá trị cao"
    ],
    "answer": "vấn đề/chủ đề chính",
    "explanation": "本題 (ほんだい): vấn đề/chủ đề chính"
  },
  {
    "id": "fb_759",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "では、",
    "sentenceSuffix": "に入りましょう。",
    "choices": [
      "職人",
      "国宝",
      "車内",
      "本題"
    ],
    "answer": "本題",
    "fullSentence": "では、本題に入りましょう。",
    "explanation": "では、本題に入りましょう。\nVậy hãy vào vấn đề chính.\n本題: vấn đề/chủ đề chính"
  },
  {
    "id": "tr_760",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Vậy hãy vào vấn đề chính.",
    "acceptedAnswers": [
      "では、本題に入りましょう。",
      "では、本題に入りましょう"
    ],
    "explanation": "では、本題に入りましょう。\n(では、ほんだいにはいりましょう。)\n本題: vấn đề/chủ đề chính"
  },
  {
    "id": "mc_761",
    "type": "multiple_choice",
    "question": "手書き có nghĩa là gì?",
    "word": "手書き",
    "reading": "てがき",
    "choices": [
      "thoải mái, dễ chịu",
      "việc viết tay, chữ viết tay",
      "lao ra, nhảy ra, bất ngờ xuất hiện",
      "tinh ý, chu đáo, biết ý"
    ],
    "answer": "việc viết tay, chữ viết tay",
    "explanation": "手書き (てがき): việc viết tay, chữ viết tay"
  },
  {
    "id": "fb_762",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "の手紙をもらいました。",
    "choices": [
      "地面",
      "小論文",
      "手書き",
      "頑固"
    ],
    "answer": "手書き",
    "fullSentence": "手書きの手紙をもらいました。",
    "explanation": "手書きの手紙をもらいました。\nTôi nhận được một lá thư viết tay.\n手書き: việc viết tay, chữ viết tay"
  },
  {
    "id": "tr_763",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi nhận được một lá thư viết tay.",
    "acceptedAnswers": [
      "手書きの手紙をもらいました。",
      "手書きの手紙をもらいました"
    ],
    "explanation": "手書きの手紙をもらいました。\n(てがきのてがみをもらいました。)\n手書き: việc viết tay, chữ viết tay"
  },
  {
    "id": "fb_764",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "名前は",
    "sentenceSuffix": "でお願いします。",
    "choices": [
      "手書き",
      "サプライズパーティー",
      "～ぶりに",
      "タイミング"
    ],
    "answer": "手書き",
    "fullSentence": "名前は手書きでお願いします。",
    "explanation": "名前は手書きでお願いします。\nXin hãy viết tên bằng tay.\n手書き: việc viết tay, chữ viết tay"
  },
  {
    "id": "tr_765",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Xin hãy viết tên bằng tay.",
    "acceptedAnswers": [
      "名前は手書きでお願いします。",
      "名前は手書きでお願いします"
    ],
    "explanation": "名前は手書きでお願いします。\n(なまえはてがきでおねがいします。)\n手書き: việc viết tay, chữ viết tay"
  },
  {
    "id": "mc_766",
    "type": "multiple_choice",
    "question": "贈り物 có nghĩa là gì?",
    "word": "贈り物",
    "reading": "おくりもの",
    "choices": [
      "quà tặng",
      "bất ngờ, ngoài dự đoán",
      "vợ, bà xã (khẩu ngữ)",
      "bồn/bệ rửa mặt"
    ],
    "answer": "quà tặng",
    "explanation": "贈り物 (おくりもの): quà tặng"
  },
  {
    "id": "fb_767",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "これは母への",
    "sentenceSuffix": "です。",
    "choices": [
      "まく",
      "任せる",
      "ブックカバー",
      "贈り物"
    ],
    "answer": "贈り物",
    "fullSentence": "これは母への贈り物です。",
    "explanation": "これは母への贈り物です。\nĐây là quà tặng mẹ.\n贈り物: quà tặng"
  },
  {
    "id": "tr_768",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Đây là quà tặng mẹ.",
    "acceptedAnswers": [
      "これは母への贈り物です。",
      "これは母への贈り物です"
    ],
    "explanation": "これは母への贈り物です。\n(これはははへのおくりものです。)\n贈り物: quà tặng"
  },
  {
    "id": "mc_769",
    "type": "multiple_choice",
    "question": "お世話になっています có nghĩa là gì?",
    "word": "お世話になっています",
    "reading": "おせわになっています",
    "choices": [
      "cảm ơn vì luôn giúp đỡ/chiếu cố (lời chào trong quan hệ thường xuyên)",
      "kéo dài, mở rộng; bị dời lại",
      "tiếng hô, tiếng gọi để cổ vũ/phối hợp",
      "bất ngờ, ngoài dự đoán"
    ],
    "answer": "cảm ơn vì luôn giúp đỡ/chiếu cố (lời chào trong quan hệ thường xuyên)",
    "explanation": "お世話になっています (おせわになっています): cảm ơn vì luôn giúp đỡ/chiếu cố (lời chào trong quan hệ thường xuyên)"
  },
  {
    "id": "fb_770",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "いつも",
    "sentenceSuffix": "。田中です。",
    "choices": [
      "体調",
      "旅行記",
      "気に入る",
      "お世話になっています"
    ],
    "answer": "お世話になっています",
    "fullSentence": "いつもお世話になっています。田中です。",
    "explanation": "いつもお世話になっています。田中です。\nCảm ơn anh/chị luôn giúp đỡ. Tôi là Tanaka.\nお世話になっています: cảm ơn vì luôn giúp đỡ/chiếu cố (lời chào trong quan hệ thường xuyên)"
  },
  {
    "id": "tr_771",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Cảm ơn anh/chị luôn giúp đỡ. Tôi là Tanaka.",
    "acceptedAnswers": [
      "いつもお世話になっています。田中です。",
      "いつもお世話になっています。田中です"
    ],
    "explanation": "いつもお世話になっています。田中です。\n(いつもおせわになっています。たなかです。)\nお世話になっています: cảm ơn vì luôn giúp đỡ/chiếu cố (lời chào trong quan hệ thường xuyên)"
  },
  {
    "id": "mc_772",
    "type": "multiple_choice",
    "question": "気が利く có nghĩa là gì?",
    "word": "気が利く",
    "reading": "きがきく",
    "choices": [
      "giao phó, để ai lo",
      "cảnh tượng trước mắt",
      "tinh ý, chu đáo, biết ý",
      "sản phẩm nổi tiếng của địa phương"
    ],
    "answer": "tinh ý, chu đáo, biết ý",
    "explanation": "気が利く (きがきく): tinh ý, chu đáo, biết ý"
  },
  {
    "id": "fb_773",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "彼女は",
    "sentenceSuffix": "人です。",
    "choices": [
      "～ぶりに",
      "チームプレー",
      "気が利く",
      "ぐっと"
    ],
    "answer": "気が利く",
    "fullSentence": "彼女は気が利く人です。",
    "explanation": "彼女は気が利く人です。\nCô ấy là người tinh ý.\n気が利く: tinh ý, chu đáo, biết ý"
  },
  {
    "id": "tr_774",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Cô ấy là người tinh ý.",
    "acceptedAnswers": [
      "彼女は気が利く人です。",
      "彼女は気が利く人です"
    ],
    "explanation": "彼女は気が利く人です。\n(かのじょはきがきくひとです。)\n気が利く: tinh ý, chu đáo, biết ý"
  },
  {
    "id": "mc_775",
    "type": "multiple_choice",
    "question": "機械 có nghĩa là gì?",
    "word": "機械",
    "reading": "きかい",
    "choices": [
      "vợ, bà xã (khẩu ngữ)",
      "giới thiệu, đề cử, khuyên chọn",
      "chảy xuống, tuôn xuống",
      "máy móc"
    ],
    "answer": "máy móc",
    "explanation": "機械 (きかい): máy móc"
  },
  {
    "id": "fb_776",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この",
    "sentenceSuffix": "を使って印刷します。",
    "choices": [
      "あらかじめ",
      "発車",
      "姿",
      "機械"
    ],
    "answer": "機械",
    "fullSentence": "この機械を使って印刷します。",
    "explanation": "この機械を使って印刷します。\nTôi dùng máy này để in.\n機械: máy móc"
  },
  {
    "id": "tr_777",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi dùng máy này để in.",
    "acceptedAnswers": [
      "この機械を使って印刷します。",
      "この機械を使って印刷します"
    ],
    "explanation": "この機械を使って印刷します。\n(このきかいをつかっていんさつします。)\n機械: máy móc"
  },
  {
    "id": "mc_778",
    "type": "multiple_choice",
    "question": "印刷 có nghĩa là gì?",
    "word": "印刷",
    "reading": "いんさつ",
    "choices": [
      "xé, làm rách; phá vỡ/không giữ",
      "đại diện, tiêu biểu cho",
      "dừng xe/tàu",
      "in"
    ],
    "answer": "in",
    "explanation": "印刷 (いんさつ): in"
  },
  {
    "id": "fb_779",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "資料を十枚",
    "sentenceSuffix": "してください。",
    "choices": [
      "ペンション",
      "印刷",
      "許す",
      "一気に"
    ],
    "answer": "印刷",
    "fullSentence": "資料を十枚印刷してください。",
    "explanation": "資料を十枚印刷してください。\nHãy in mười tờ tài liệu.\n印刷: in"
  },
  {
    "id": "tr_780",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Hãy in mười tờ tài liệu.",
    "acceptedAnswers": [
      "資料を十枚印刷してください。",
      "資料を十枚印刷してください"
    ],
    "explanation": "資料を十枚印刷してください。\n(しりょうをじゅうまいいんさつしてください。)\n印刷: in"
  },
  {
    "id": "fb_781",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "写真を紙に",
    "sentenceSuffix": "します。",
    "choices": [
      "印刷",
      "誤解",
      "４こま漫画",
      "蒸し暑い"
    ],
    "answer": "印刷",
    "fullSentence": "写真を紙に印刷します。",
    "explanation": "写真を紙に印刷します。\nTôi in ảnh lên giấy.\n印刷: in"
  },
  {
    "id": "tr_782",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi in ảnh lên giấy.",
    "acceptedAnswers": [
      "写真を紙に印刷します。",
      "写真を紙に印刷します"
    ],
    "explanation": "写真を紙に印刷します。\n(しゃしんをかみにいんさつします。)\n印刷: in"
  },
  {
    "id": "mc_783",
    "type": "multiple_choice",
    "question": "済ませる có nghĩa là gì?",
    "word": "済ませる",
    "reading": "すませる",
    "choices": [
      "kéo dài, mở rộng; bị dời lại",
      "làm xong, giải quyết xong; làm cho qua bằng…",
      "cháu (của ông bà)",
      "được tập hợp; đi đến thống nhất; hoàn chỉnh"
    ],
    "answer": "làm xong, giải quyết xong; làm cho qua bằng…",
    "explanation": "済ませる (すませる): làm xong, giải quyết xong; làm cho qua bằng…"
  },
  {
    "id": "tr_784",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi làm xong bài tập trước khi ra ngoài.",
    "acceptedAnswers": [
      "出かける前に宿題を済ませます。",
      "出かける前に宿題を済ませます"
    ],
    "explanation": "出かける前に宿題を済ませます。\n(でかけるまえにしゅくだいをすませます。)\n済ませる: làm xong, giải quyết xong; làm cho qua bằng…"
  },
  {
    "id": "tr_785",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi ăn bánh mì cho xong bữa trưa.",
    "acceptedAnswers": [
      "昼ご飯はパンで済ませました。",
      "昼ご飯はパンで済ませました"
    ],
    "explanation": "昼ご飯はパンで済ませました。\n(ひるごはんはパンですませました。)\n済ませる: làm xong, giải quyết xong; làm cho qua bằng…"
  },
  {
    "id": "mc_786",
    "type": "multiple_choice",
    "question": "思い có nghĩa là gì?",
    "word": "思い",
    "reading": "おもい",
    "choices": [
      "tâm tư, suy nghĩ, tình cảm",
      "bình quân, tính trung bình",
      "hoàn toàn; hoàn toàn không (với phủ định)",
      "lâu rồi không gặp"
    ],
    "answer": "tâm tư, suy nghĩ, tình cảm",
    "explanation": "思い (おもい): tâm tư, suy nghĩ, tình cảm"
  },
  {
    "id": "fb_787",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "手紙で自分の",
    "sentenceSuffix": "を伝えます。",
    "choices": [
      "凧揚げ",
      "分野",
      "わいわい",
      "思い"
    ],
    "answer": "思い",
    "fullSentence": "手紙で自分の思いを伝えます。",
    "explanation": "手紙で自分の思いを伝えます。\nTôi truyền đạt tâm tư qua thư.\n思い: tâm tư, suy nghĩ, tình cảm"
  },
  {
    "id": "tr_788",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi truyền đạt tâm tư qua thư.",
    "acceptedAnswers": [
      "手紙で自分の思いを伝えます。",
      "手紙で自分の思いを伝えます"
    ],
    "explanation": "手紙で自分の思いを伝えます。\n(てがみでじぶんのおもいをつたえます。)\n思い: tâm tư, suy nghĩ, tình cảm"
  },
  {
    "id": "mc_789",
    "type": "multiple_choice",
    "question": "先日 có nghĩa là gì?",
    "word": "先日",
    "reading": "せんじつ",
    "choices": [
      "hết sức, liều mình, hết lòng cố gắng",
      "tạm về nước",
      "hôm trước, ít ngày trước",
      "sự may mắn; may mắn"
    ],
    "answer": "hôm trước, ít ngày trước",
    "explanation": "先日 (せんじつ): hôm trước, ít ngày trước"
  },
  {
    "id": "fb_790",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "はありがとうございました。",
    "choices": [
      "奪う",
      "先日",
      "金",
      "唄"
    ],
    "answer": "先日",
    "fullSentence": "先日はありがとうございました。",
    "explanation": "先日はありがとうございました。\nCảm ơn anh/chị về hôm trước.\n先日: hôm trước, ít ngày trước"
  },
  {
    "id": "tr_791",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Cảm ơn anh/chị về hôm trước.",
    "acceptedAnswers": [
      "先日はありがとうございました。",
      "先日はありがとうございました"
    ],
    "explanation": "先日はありがとうございました。\n(せんじつはありがとうございました。)\n先日: hôm trước, ít ngày trước"
  },
  {
    "id": "mc_792",
    "type": "multiple_choice",
    "question": "近況 có nghĩa là gì?",
    "word": "近況",
    "reading": "きんきょう",
    "choices": [
      "áo cardigan, áo khoác len mở phía trước",
      "tình hình gần đây của một người",
      "mặt trời/ánh nắng buổi sáng",
      "không sao, không sợ/không bận tâm"
    ],
    "answer": "tình hình gần đây của một người",
    "explanation": "近況 (きんきょう): tình hình gần đây của một người"
  },
  {
    "id": "fb_793",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "友人に",
    "sentenceSuffix": "を知らせます。",
    "choices": [
      "朝礼",
      "ミーティング",
      "近況",
      "含める"
    ],
    "answer": "近況",
    "fullSentence": "友人に近況を知らせます。",
    "explanation": "友人に近況を知らせます。\nTôi báo cho bạn biết tình hình gần đây của mình.\n近況: tình hình gần đây của một người"
  },
  {
    "id": "tr_794",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi báo cho bạn biết tình hình gần đây của mình.",
    "acceptedAnswers": [
      "友人に近況を知らせます。",
      "友人に近況を知らせます"
    ],
    "explanation": "友人に近況を知らせます。\n(ゆうじんにきんきょうをしらせます。)\n近況: tình hình gần đây của một người"
  },
  {
    "id": "mc_795",
    "type": "multiple_choice",
    "question": "お久しぶりです có nghĩa là gì?",
    "word": "お久しぶりです",
    "reading": "おひさしぶりです",
    "choices": [
      "ngoài…, trừ…",
      "rung, lắc, đung đưa",
      "nhà trọ gia đình, minshuku",
      "lâu rồi không gặp"
    ],
    "answer": "lâu rồi không gặp",
    "explanation": "お久しぶりです (おひさしぶりです): lâu rồi không gặp"
  },
  {
    "id": "fb_796",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "。お元気ですか。",
    "choices": [
      "意外",
      "お久しぶりです",
      "残り湯",
      "浜"
    ],
    "answer": "お久しぶりです",
    "fullSentence": "お久しぶりです。お元気ですか。",
    "explanation": "お久しぶりです。お元気ですか。\nLâu rồi không gặp. Bạn có khỏe không?\nお久しぶりです: lâu rồi không gặp"
  },
  {
    "id": "tr_797",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Lâu rồi không gặp. Bạn có khỏe không?",
    "acceptedAnswers": [
      "お久しぶりです。お元気ですか。",
      "お久しぶりです。お元気ですか"
    ],
    "explanation": "お久しぶりです。お元気ですか。\n(おひさしぶりです。おげんきですか。)\nお久しぶりです: lâu rồi không gặp"
  },
  {
    "id": "mc_798",
    "type": "multiple_choice",
    "question": "相変わらず có nghĩa là gì?",
    "word": "相変わらず",
    "reading": "あいかわらず",
    "choices": [
      "khuyên, đưa ra lời khuyên",
      "chiều dọc",
      "vẫn như trước, không thay đổi",
      "giờ đây, hiện nay (khác với trước)"
    ],
    "answer": "vẫn như trước, không thay đổi",
    "explanation": "相変わらず (あいかわらず): vẫn như trước, không thay đổi"
  },
  {
    "id": "fb_799",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "父は",
    "sentenceSuffix": "元気です。",
    "choices": [
      "顔が広い",
      "相変わらず",
      "山林",
      "車内"
    ],
    "answer": "相変わらず",
    "fullSentence": "父は相変わらず元気です。",
    "explanation": "父は相変わらず元気です。\nBố tôi vẫn khỏe như trước.\n相変わらず: vẫn như trước, không thay đổi"
  },
  {
    "id": "tr_800",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Bố tôi vẫn khỏe như trước.",
    "acceptedAnswers": [
      "父は相変わらず元気です。",
      "父は相変わらず元気です"
    ],
    "explanation": "父は相変わらず元気です。\n(ちちはあいかわらずげんきです。)\n相変わらず: vẫn như trước, không thay đổi"
  },
  {
    "id": "mc_801",
    "type": "multiple_choice",
    "question": "出産 có nghĩa là gì?",
    "word": "出産",
    "reading": "しゅっさん",
    "choices": [
      "khác màu, phiên bản màu khác",
      "sinh con",
      "bờ biển, bãi biển",
      "diễn đạt, thể hiện"
    ],
    "answer": "sinh con",
    "explanation": "出産 (しゅっさん): sinh con"
  },
  {
    "id": "fb_802",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "姉は先月、女の子を",
    "sentenceSuffix": "しました。",
    "choices": [
      "入り込む",
      "世代",
      "鉄筋",
      "出産"
    ],
    "answer": "出産",
    "fullSentence": "姉は先月、女の子を出産しました。",
    "explanation": "姉は先月、女の子を出産しました。\nTháng trước chị tôi sinh một bé gái.\n出産: sinh con"
  },
  {
    "id": "tr_803",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tháng trước chị tôi sinh một bé gái.",
    "acceptedAnswers": [
      "姉は先月、女の子を出産しました。",
      "姉は先月、女の子を出産しました"
    ],
    "explanation": "姉は先月、女の子を出産しました。\n(あねはせんげつ、おんなのこをしゅっさんしました。)\n出産: sinh con"
  },
  {
    "id": "mc_804",
    "type": "multiple_choice",
    "question": "ちょっとした có nghĩa là gì?",
    "word": "ちょっとした",
    "reading": "ちょっとした",
    "choices": [
      "tinh ý, chu đáo, biết ý",
      "nhỏ, nho nhỏ, không lớn",
      "bướng bỉnh, cứng đầu",
      "thế kỷ…"
    ],
    "answer": "nhỏ, nho nhỏ, không lớn",
    "explanation": "ちょっとした (ちょっとした): nhỏ, nho nhỏ, không lớn"
  },
  {
    "id": "fb_805",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "贈り物を用意しました。",
    "choices": [
      "車内",
      "なんだか",
      "ちょっとした",
      "なんか"
    ],
    "answer": "ちょっとした",
    "fullSentence": "ちょっとした贈り物を用意しました。",
    "explanation": "ちょっとした贈り物を用意しました。\nTôi chuẩn bị một món quà nho nhỏ.\nちょっとした: nhỏ, nho nhỏ, không lớn"
  },
  {
    "id": "tr_806",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi chuẩn bị một món quà nho nhỏ.",
    "acceptedAnswers": [
      "ちょっとした贈り物を用意しました。",
      "ちょっとした贈り物を用意しました"
    ],
    "explanation": "ちょっとした贈り物を用意しました。\n(ちょっとしたおくりものをよういしました。)\nちょっとした: nhỏ, nho nhỏ, không lớn"
  },
  {
    "id": "mc_807",
    "type": "multiple_choice",
    "question": "一言 có nghĩa là gì?",
    "word": "一言",
    "reading": "ひとこと",
    "choices": [
      "về nhà",
      "một lời, vài lời ngắn gọn",
      "shachihoko: tượng linh vật thân cá đầu thú trên nóc thành, đền…",
      "ùn tắc"
    ],
    "answer": "một lời, vài lời ngắn gọn",
    "explanation": "一言 (ひとこと): một lời, vài lời ngắn gọn"
  },
  {
    "id": "fb_808",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "贈り物に",
    "sentenceSuffix": "添えました。",
    "choices": [
      "違和感",
      "入り込む",
      "都市",
      "一言"
    ],
    "answer": "一言",
    "fullSentence": "贈り物に一言添えました。",
    "explanation": "贈り物に一言添えました。\nTôi gửi thêm vài lời kèm món quà.\n一言: một lời, vài lời ngắn gọn"
  },
  {
    "id": "tr_809",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi gửi thêm vài lời kèm món quà.",
    "acceptedAnswers": [
      "贈り物に一言添えました。",
      "贈り物に一言添えました"
    ],
    "explanation": "贈り物に一言添えました。\n(おくりものにひとことそえました。)\n一言: một lời, vài lời ngắn gọn"
  },
  {
    "id": "mc_810",
    "type": "multiple_choice",
    "question": "添える có nghĩa là gì?",
    "word": "添える",
    "reading": "そえる",
    "choices": [
      "sức gió, năng lượng gió",
      "từ đếm nhà, cửa hàng, tòa nhà nhỏ",
      "ùn tắc",
      "thêm vào, đính kèm"
    ],
    "answer": "thêm vào, đính kèm",
    "explanation": "添える (そえる): thêm vào, đính kèm"
  },
  {
    "id": "tr_811",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đính kèm thiệp vào bó hoa.",
    "acceptedAnswers": [
      "花にカードを添えます。",
      "花にカードを添えます"
    ],
    "explanation": "花にカードを添えます。\n(はなにカードをそえます。)\n添える: thêm vào, đính kèm"
  },
  {
    "id": "mc_812",
    "type": "multiple_choice",
    "question": "気に入る có nghĩa là gì?",
    "word": "気に入る",
    "reading": "きにいる",
    "choices": [
      "thấy ưng ý, thích sau khi tiếp xúc",
      "thác nước",
      "nước máy",
      "khởi hành"
    ],
    "answer": "thấy ưng ý, thích sau khi tiếp xúc",
    "explanation": "気に入る (きにいる): thấy ưng ý, thích sau khi tiếp xúc"
  },
  {
    "id": "tr_813",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi thấy thích chiếc túi này.",
    "acceptedAnswers": [
      "このかばんが気に入りました。",
      "このかばんが気に入りました"
    ],
    "explanation": "このかばんが気に入りました。\n(このかばんがきにいりました。)\n気に入る: thấy ưng ý, thích sau khi tiếp xúc"
  },
  {
    "id": "tr_814",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Em gái tôi rất ưng đôi giày này.",
    "acceptedAnswers": [
      "妹はこの靴を気に入っています。",
      "妹はこの靴を気に入っています"
    ],
    "explanation": "妹はこの靴を気に入っています。\n(いもうとはこのくつをきにいっています。)\n気に入る: thấy ưng ý, thích sau khi tiếp xúc"
  },
  {
    "id": "mc_815",
    "type": "multiple_choice",
    "question": "愚痴 có nghĩa là gì?",
    "word": "愚痴",
    "reading": "ぐち",
    "choices": [
      "lý do, nguyên do; lẽ, kết luận",
      "lao ra, nhảy ra, bất ngờ xuất hiện",
      "vấn đề/chủ đề chính",
      "lời than vãn, càm ràm"
    ],
    "answer": "lời than vãn, càm ràm",
    "explanation": "愚痴 (ぐち): lời than vãn, càm ràm"
  },
  {
    "id": "fb_816",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "友達に仕事の",
    "sentenceSuffix": "をこぼしました。",
    "choices": [
      "海岸線",
      "お世話になっています",
      "愚痴",
      "月日"
    ],
    "answer": "愚痴",
    "fullSentence": "友達に仕事の愚痴をこぼしました。",
    "explanation": "友達に仕事の愚痴をこぼしました。\nTôi than thở với bạn về công việc.\n愚痴: lời than vãn, càm ràm"
  },
  {
    "id": "tr_817",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi than thở với bạn về công việc.",
    "acceptedAnswers": [
      "友達に仕事の愚痴をこぼしました。",
      "友達に仕事の愚痴をこぼしました"
    ],
    "explanation": "友達に仕事の愚痴をこぼしました。\n(ともだちにしごとのぐちをこぼしました。)\n愚痴: lời than vãn, càm ràm"
  },
  {
    "id": "mc_818",
    "type": "multiple_choice",
    "question": "ラストオーダー có nghĩa là gì?",
    "word": "ラストオーダー",
    "reading": "ラストオーダー",
    "choices": [
      "lâu rồi không gặp",
      "đi và về trong ngày",
      "lượt/giờ nhận gọi món cuối cùng",
      "đất, khu đất; vùng đất, địa phương"
    ],
    "answer": "lượt/giờ nhận gọi món cuối cùng",
    "explanation": "ラストオーダー (ラストオーダー): lượt/giờ nhận gọi món cuối cùng"
  },
  {
    "id": "fb_819",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "は九時です。",
    "choices": [
      "フットサル",
      "美しい",
      "回収",
      "ラストオーダー"
    ],
    "answer": "ラストオーダー",
    "fullSentence": "ラストオーダーは九時です。",
    "explanation": "ラストオーダーは九時です。\nGiờ nhận gọi món cuối cùng là chín giờ.\nラストオーダー: lượt/giờ nhận gọi món cuối cùng"
  },
  {
    "id": "tr_820",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Giờ nhận gọi món cuối cùng là chín giờ.",
    "acceptedAnswers": [
      "ラストオーダーは九時です。",
      "ラストオーダーは九時です"
    ],
    "explanation": "ラストオーダーは九時です。\n(ラストオーダーはくじです。)\nラストオーダー: lượt/giờ nhận gọi món cuối cùng"
  },
  {
    "id": "mc_821",
    "type": "multiple_choice",
    "question": "追加 có nghĩa là gì?",
    "word": "追加",
    "reading": "ついか",
    "choices": [
      "đi qua, chạy qua; điện được dẫn đến",
      "thấy người khác có điều tốt mà mình cũng muốn, ghen tị",
      "thương mại",
      "thêm vào, gọi thêm"
    ],
    "answer": "thêm vào, gọi thêm",
    "explanation": "追加 (ついか): thêm vào, gọi thêm"
  },
  {
    "id": "fb_822",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "飲み物を",
    "sentenceSuffix": "しました。",
    "choices": [
      "ハーモニカ",
      "まく",
      "追加",
      "なんで"
    ],
    "answer": "追加",
    "fullSentence": "飲み物を追加しました。",
    "explanation": "飲み物を追加しました。\nTôi gọi thêm đồ uống.\n追加: thêm vào, gọi thêm"
  },
  {
    "id": "tr_823",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi gọi thêm đồ uống.",
    "acceptedAnswers": [
      "飲み物を追加しました。",
      "飲み物を追加しました"
    ],
    "explanation": "飲み物を追加しました。\n(のみものをついかしました。)\n追加: thêm vào, gọi thêm"
  },
  {
    "id": "fb_824",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "名簿に新しい名前を",
    "sentenceSuffix": "します。",
    "choices": [
      "～以外",
      "石",
      "追加",
      "のんびり"
    ],
    "answer": "追加",
    "fullSentence": "名簿に新しい名前を追加します。",
    "explanation": "名簿に新しい名前を追加します。\nTôi thêm tên mới vào danh sách.\n追加: thêm vào, gọi thêm"
  },
  {
    "id": "tr_825",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi thêm tên mới vào danh sách.",
    "acceptedAnswers": [
      "名簿に新しい名前を追加します。",
      "名簿に新しい名前を追加します"
    ],
    "explanation": "名簿に新しい名前を追加します。\n(めいぼにあたらしいなまえをついかします。)\n追加: thêm vào, gọi thêm"
  },
  {
    "id": "mc_826",
    "type": "multiple_choice",
    "question": "生ビール có nghĩa là gì?",
    "word": "生ビール",
    "reading": "なまビール",
    "choices": [
      "bia tươi",
      "cuối (tháng, năm…)",
      "chuyến dã ngoại, thường do trường tổ chức",
      "giấy viết thư"
    ],
    "answer": "bia tươi",
    "explanation": "生ビール (なまビール): bia tươi"
  },
  {
    "id": "fb_827",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "を一杯注文しました。",
    "choices": [
      "生ビール",
      "使い分ける",
      "訪れる",
      "湿る"
    ],
    "answer": "生ビール",
    "fullSentence": "生ビールを一杯注文しました。",
    "explanation": "生ビールを一杯注文しました。\nTôi gọi một cốc bia tươi.\n生ビール: bia tươi"
  },
  {
    "id": "tr_828",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi gọi một cốc bia tươi.",
    "acceptedAnswers": [
      "生ビールを一杯注文しました。",
      "生ビールを一杯注文しました"
    ],
    "explanation": "生ビールを一杯注文しました。\n(なまビールをいっぱいちゅうもんしました。)\n生ビール: bia tươi"
  },
  {
    "id": "mc_829",
    "type": "multiple_choice",
    "question": "渋滞 có nghĩa là gì?",
    "word": "渋滞",
    "reading": "じゅうたい",
    "choices": [
      "rung, lắc, đung đưa",
      "ùn tắc",
      "cho phép",
      "giấy gói hàng/quà"
    ],
    "answer": "ùn tắc",
    "explanation": "渋滞 (じゅうたい): ùn tắc"
  },
  {
    "id": "fb_830",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "事故で道路が",
    "sentenceSuffix": "しています。",
    "choices": [
      "雲",
      "堅い",
      "生ビール",
      "渋滞"
    ],
    "answer": "渋滞",
    "fullSentence": "事故で道路が渋滞しています。",
    "explanation": "事故で道路が渋滞しています。\nĐường đang ùn tắc vì tai nạn.\n渋滞: ùn tắc"
  },
  {
    "id": "tr_831",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Đường đang ùn tắc vì tai nạn.",
    "acceptedAnswers": [
      "事故で道路が渋滞しています。",
      "事故で道路が渋滞しています"
    ],
    "explanation": "事故で道路が渋滞しています。\n(じこでどうろがじゅうたいしています。)\n渋滞: ùn tắc"
  },
  {
    "id": "fb_832",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "に巻き込まれて遅れました。",
    "choices": [
      "渋滞",
      "近年",
      "もう少しで",
      "思い浮かべる"
    ],
    "answer": "渋滞",
    "fullSentence": "渋滞に巻き込まれて遅れました。",
    "explanation": "渋滞に巻き込まれて遅れました。\nTôi đến muộn vì bị kẹt xe.\n渋滞: ùn tắc"
  },
  {
    "id": "tr_833",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đến muộn vì bị kẹt xe.",
    "acceptedAnswers": [
      "渋滞に巻き込まれて遅れました。",
      "渋滞に巻き込まれて遅れました"
    ],
    "explanation": "渋滞に巻き込まれて遅れました。\n(じゅうたいにまきこまれておくれました。)\n渋滞: ùn tắc"
  },
  {
    "id": "mc_834",
    "type": "multiple_choice",
    "question": "帰宅 có nghĩa là gì?",
    "word": "帰宅",
    "reading": "きたく",
    "choices": [
      "tình trạng sức khỏe",
      "lễ hội trường",
      "về nhà",
      "ngày hội mở cửa trường cho người muốn tìm hiểu/tuyển sinh"
    ],
    "answer": "về nhà",
    "explanation": "帰宅 (きたく): về nhà"
  },
  {
    "id": "fb_835",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "毎晩七時に",
    "sentenceSuffix": "します。",
    "choices": [
      "帰宅",
      "上り",
      "使い分ける",
      "～末"
    ],
    "answer": "帰宅",
    "fullSentence": "毎晩七時に帰宅します。",
    "explanation": "毎晩七時に帰宅します。\nMỗi tối tôi về nhà lúc bảy giờ.\n帰宅: về nhà"
  },
  {
    "id": "tr_836",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Mỗi tối tôi về nhà lúc bảy giờ.",
    "acceptedAnswers": [
      "毎晩七時に帰宅します。",
      "毎晩七時に帰宅します"
    ],
    "explanation": "毎晩七時に帰宅します。\n(まいばんしちじにきたくします。)\n帰宅: về nhà"
  },
  {
    "id": "mc_837",
    "type": "multiple_choice",
    "question": "久しぶり có nghĩa là gì?",
    "word": "久しぶり",
    "reading": "ひさしぶり",
    "choices": [
      "im lặng, ngừng nói",
      "lâu rồi mới lại…; lâu không gặp/làm",
      "cháu (của ông bà)",
      "làm hỏng; làm tổn hại sức khỏe"
    ],
    "answer": "lâu rồi mới lại…; lâu không gặp/làm",
    "explanation": "久しぶり (ひさしぶり): lâu rồi mới lại…; lâu không gặp/làm"
  },
  {
    "id": "fb_838",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "に友達と会いました。",
    "choices": [
      "相変わらず",
      "久しぶり",
      "光景",
      "あはは"
    ],
    "answer": "久しぶり",
    "fullSentence": "久しぶりに友達と会いました。",
    "explanation": "久しぶりに友達と会いました。\nLâu rồi tôi mới gặp lại bạn.\n久しぶり: lâu rồi mới lại…; lâu không gặp/làm"
  },
  {
    "id": "tr_839",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Lâu rồi tôi mới gặp lại bạn.",
    "acceptedAnswers": [
      "久しぶりに友達と会いました。",
      "久しぶりに友達と会いました"
    ],
    "explanation": "久しぶりに友達と会いました。\n(ひさしぶりにともだちとあいました。)\n久しぶり: lâu rồi mới lại…; lâu không gặp/làm"
  },
  {
    "id": "fb_840",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "の旅行を楽しみました。",
    "choices": [
      "マーク",
      "車掌",
      "久しぶり",
      "ブックカバー"
    ],
    "answer": "久しぶり",
    "fullSentence": "久しぶりの旅行を楽しみました。",
    "explanation": "久しぶりの旅行を楽しみました。\nTôi tận hưởng chuyến du lịch sau một thời gian dài.\n久しぶり: lâu rồi mới lại…; lâu không gặp/làm"
  },
  {
    "id": "tr_841",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi tận hưởng chuyến du lịch sau một thời gian dài.",
    "acceptedAnswers": [
      "久しぶりの旅行を楽しみました。",
      "久しぶりの旅行を楽しみました"
    ],
    "explanation": "久しぶりの旅行を楽しみました。\n(ひさしぶりのりょこうをたのしみました。)\n久しぶり: lâu rồi mới lại…; lâu không gặp/làm"
  },
  {
    "id": "mc_842",
    "type": "multiple_choice",
    "question": "壊す（体を壊す） có nghĩa là gì?",
    "word": "壊す（体を壊す）",
    "reading": "こわす（からだをこわす）",
    "choices": [
      "tháp chính cao trong thành Nhật",
      "điều thắc mắc, sự nghi ngờ",
      "được truyền đến, được hiểu",
      "làm hỏng; làm tổn hại sức khỏe"
    ],
    "answer": "làm hỏng; làm tổn hại sức khỏe",
    "explanation": "壊す（体を壊す） (こわす（からだをこわす）): làm hỏng; làm tổn hại sức khỏe"
  },
  {
    "id": "tr_843",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Làm việc quá sức sẽ khiến sức khỏe suy sụp.",
    "acceptedAnswers": [
      "働きすぎると体を壊します。",
      "働きすぎると体を壊します"
    ],
    "explanation": "働きすぎると体を壊します。\n(はたらきすぎるとからだをこわします。)\n壊す（体を壊す）: làm hỏng; làm tổn hại sức khỏe"
  },
  {
    "id": "tr_844",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Em trai tôi làm hỏng đồ chơi.",
    "acceptedAnswers": [
      "弟がおもちゃを壊しました。",
      "弟がおもちゃを壊しました"
    ],
    "explanation": "弟がおもちゃを壊しました。\n(おとうとがおもちゃをこわしました。)\n壊す（体を壊す）: làm hỏng; làm tổn hại sức khỏe"
  },
  {
    "id": "mc_845",
    "type": "multiple_choice",
    "question": "割る có nghĩa là gì?",
    "word": "割る",
    "reading": "わる",
    "choices": [
      "làm vỡ; chia, chia nhỏ",
      "khởi hành",
      "cứ như, giống hệt; hoàn toàn (với phủ định)",
      "đoạn văn, bài văn, văn bản"
    ],
    "answer": "làm vỡ; chia, chia nhỏ",
    "explanation": "割る (わる): làm vỡ; chia, chia nhỏ"
  },
  {
    "id": "tr_846",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi lỡ làm vỡ cốc.",
    "acceptedAnswers": [
      "コップを割ってしまいました。",
      "コップを割ってしまいました"
    ],
    "explanation": "コップを割ってしまいました。\n(コップをわってしまいました。)\n割る: làm vỡ; chia, chia nhỏ"
  },
  {
    "id": "fb_847",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "十を二で",
    "sentenceSuffix": "と五です。",
    "choices": [
      "気候",
      "割る",
      "日差し",
      "書き込む"
    ],
    "answer": "割る",
    "fullSentence": "十を二で割ると五です。",
    "explanation": "十を二で割ると五です。\nMười chia hai bằng năm.\n割る: làm vỡ; chia, chia nhỏ"
  },
  {
    "id": "tr_848",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Mười chia hai bằng năm.",
    "acceptedAnswers": [
      "十を二で割ると五です。",
      "十を二で割ると五です"
    ],
    "explanation": "十を二で割ると五です。\n(じゅうをにでわるとごです。)\n割る: làm vỡ; chia, chia nhỏ"
  },
  {
    "id": "mc_849",
    "type": "multiple_choice",
    "question": "サプライズパーティー có nghĩa là gì?",
    "word": "サプライズパーティー",
    "reading": "サプライズパーティー",
    "choices": [
      "vẫn như trước, không thay đổi",
      "bữa tiệc tổ chức bất ngờ cho ai",
      "nếm, thưởng thức; trải nghiệm cảm giác",
      "sản phẩm nổi tiếng của địa phương"
    ],
    "answer": "bữa tiệc tổ chức bất ngờ cho ai",
    "explanation": "サプライズパーティー (サプライズパーティー): bữa tiệc tổ chức bất ngờ cho ai"
  },
  {
    "id": "fb_850",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "友人のために",
    "sentenceSuffix": "を開きます。",
    "choices": [
      "サプライズパーティー",
      "ミーティング",
      "尋ねる",
      "一時帰国"
    ],
    "answer": "サプライズパーティー",
    "fullSentence": "友人のためにサプライズパーティーを開きます。",
    "explanation": "友人のためにサプライズパーティーを開きます。\nChúng tôi tổ chức tiệc bất ngờ cho bạn.\nサプライズパーティー: bữa tiệc tổ chức bất ngờ cho ai"
  },
  {
    "id": "tr_851",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Chúng tôi tổ chức tiệc bất ngờ cho bạn.",
    "acceptedAnswers": [
      "友人のためにサプライズパーティーを開きます。",
      "友人のためにサプライズパーティーを開きます"
    ],
    "explanation": "友人のためにサプライズパーティーを開きます。\n(ゆうじんのためにサプライズパーティーをひらきます。)\nサプライズパーティー: bữa tiệc tổ chức bất ngờ cho ai"
  },
  {
    "id": "mc_852",
    "type": "multiple_choice",
    "question": "言葉遣い có nghĩa là gì?",
    "word": "言葉遣い",
    "reading": "ことばづかい",
    "choices": [
      "cách dùng từ, cách nói năng",
      "sự việc bất ngờ, sự cố ngoài dự kiến",
      "gói quà",
      "cùng thế hệ, cùng khoảng tuổi"
    ],
    "answer": "cách dùng từ, cách nói năng",
    "explanation": "言葉遣い (ことばづかい): cách dùng từ, cách nói năng"
  },
  {
    "id": "fb_853",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "面接では",
    "sentenceSuffix": "に気を付けます。",
    "choices": [
      "～分の～",
      "言葉遣い",
      "まだまだ",
      "広げる"
    ],
    "answer": "言葉遣い",
    "fullSentence": "面接では言葉遣いに気を付けます。",
    "explanation": "面接では言葉遣いに気を付けます。\nKhi phỏng vấn, tôi chú ý cách nói năng.\n言葉遣い: cách dùng từ, cách nói năng"
  },
  {
    "id": "tr_854",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Khi phỏng vấn, tôi chú ý cách nói năng.",
    "acceptedAnswers": [
      "面接では言葉遣いに気を付けます。",
      "面接では言葉遣いに気を付けます"
    ],
    "explanation": "面接では言葉遣いに気を付けます。\n(めんせつではことばづかいにきをつけます。)\n言葉遣い: cách dùng từ, cách nói năng"
  },
  {
    "id": "mc_855",
    "type": "multiple_choice",
    "question": "間違う có nghĩa là gì?",
    "word": "間違う",
    "reading": "まちがう",
    "choices": [
      "cảm thấy, có cảm giác rằng…",
      "hối hận",
      "màu xám",
      "sai, nhầm"
    ],
    "answer": "sai, nhầm",
    "explanation": "間違う (まちがう): sai, nhầm"
  },
  {
    "id": "tr_856",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Câu trả lời này sai.",
    "acceptedAnswers": [
      "この答えは間違っています。",
      "この答えは間違っています"
    ],
    "explanation": "この答えは間違っています。\n(このこたえはまちがっています。)\n間違う: sai, nhầm"
  },
  {
    "id": "tr_857",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đã lên nhầm tàu.",
    "acceptedAnswers": [
      "電車を間違ってしまいました。",
      "電車を間違ってしまいました"
    ],
    "explanation": "電車を間違ってしまいました。\n(でんしゃをまちがってしまいました。)\n間違う: sai, nhầm"
  },
  {
    "id": "mc_858",
    "type": "multiple_choice",
    "question": "ショック có nghĩa là gì?",
    "word": "ショック",
    "reading": "ショック",
    "choices": [
      "dân làng",
      "tường xây bằng đá",
      "ngày hội mở cửa trường cho người muốn tìm hiểu/tuyển sinh",
      "cú sốc, sự bàng hoàng"
    ],
    "answer": "cú sốc, sự bàng hoàng",
    "explanation": "ショック (ショック): cú sốc, sự bàng hoàng"
  },
  {
    "id": "fb_859",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "その知らせを聞いて",
    "sentenceSuffix": "を受けました。",
    "choices": [
      "土地",
      "うらやましい",
      "奥",
      "ショック"
    ],
    "answer": "ショック",
    "fullSentence": "その知らせを聞いてショックを受けました。",
    "explanation": "その知らせを聞いてショックを受けました。\nTôi bị sốc khi nghe tin đó.\nショック: cú sốc, sự bàng hoàng"
  },
  {
    "id": "tr_860",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi bị sốc khi nghe tin đó.",
    "acceptedAnswers": [
      "その知らせを聞いてショックを受けました。",
      "その知らせを聞いてショックを受けました"
    ],
    "explanation": "その知らせを聞いてショックを受けました。\n(そのしらせをきいてショックをうけました。)\nショック: cú sốc, sự bàng hoàng"
  },
  {
    "id": "mc_861",
    "type": "multiple_choice",
    "question": "受ける（ショックを受ける） có nghĩa là gì?",
    "word": "受ける（ショックを受ける）",
    "reading": "うける（ショックをうける）",
    "choices": [
      "hôm trước, ít ngày trước",
      "kế hoạch hành động, chiến thuật",
      "chó hỗ trợ người khuyết tật vận động",
      "chịu, nhận tác động (cú sốc)"
    ],
    "answer": "chịu, nhận tác động (cú sốc)",
    "explanation": "受ける（ショックを受ける） (うける（ショックをうける）): chịu, nhận tác động (cú sốc)"
  },
  {
    "id": "tr_862",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi bị sốc vì kết quả kỳ thi.",
    "acceptedAnswers": [
      "試験の結果にショックを受けました。",
      "試験の結果にショックを受けました"
    ],
    "explanation": "試験の結果にショックを受けました。\n(しけんのけっかにショックをうけました。)\n受ける（ショックを受ける）: chịu, nhận tác động (cú sốc)"
  },
  {
    "id": "mc_863",
    "type": "multiple_choice",
    "question": "落ち込む có nghĩa là gì?",
    "word": "落ち込む",
    "reading": "おちこむ",
    "choices": [
      "lọt vào, đi sâu vào bên trong",
      "buồn bã, suy sụp tinh thần; giảm sút",
      "nước máy",
      "cần"
    ],
    "answer": "buồn bã, suy sụp tinh thần; giảm sút",
    "explanation": "落ち込む (おちこむ): buồn bã, suy sụp tinh thần; giảm sút"
  },
  {
    "id": "tr_864",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đang buồn vì thi trượt.",
    "acceptedAnswers": [
      "試験に落ちて、落ち込んでいます。",
      "試験に落ちて、落ち込んでいます"
    ],
    "explanation": "試験に落ちて、落ち込んでいます。\n(しけんにおちて、おちこんでいます。)\n落ち込む: buồn bã, suy sụp tinh thần; giảm sút"
  },
  {
    "id": "tr_865",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Doanh thu tháng này đã giảm sút.",
    "acceptedAnswers": [
      "今月は売り上げが落ち込みました。",
      "今月は売り上げが落ち込みました"
    ],
    "explanation": "今月は売り上げが落ち込みました。\n(こんげつはうりあげがおちこみました。)\n落ち込む: buồn bã, suy sụp tinh thần; giảm sút"
  },
  {
    "id": "mc_866",
    "type": "multiple_choice",
    "question": "わざわざ có nghĩa là gì?",
    "word": "わざわざ",
    "reading": "わざわざ",
    "choices": [
      "nhỏ, nho nhỏ, không lớn",
      "cất công, đặc biệt dành công sức để làm",
      "điêu khắc",
      "xúc động, cảm động"
    ],
    "answer": "cất công, đặc biệt dành công sức để làm",
    "explanation": "わざわざ (わざわざ): cất công, đặc biệt dành công sức để làm"
  },
  {
    "id": "fb_867",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "来てくれてありがとう。",
    "choices": [
      "伝わる",
      "～らしさ",
      "マーク",
      "わざわざ"
    ],
    "answer": "わざわざ",
    "fullSentence": "わざわざ来てくれてありがとう。",
    "explanation": "わざわざ来てくれてありがとう。\nCảm ơn bạn đã cất công đến.\nわざわざ: cất công, đặc biệt dành công sức để làm"
  },
  {
    "id": "tr_868",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Cảm ơn bạn đã cất công đến.",
    "acceptedAnswers": [
      "わざわざ来てくれてありがとう。",
      "わざわざ来てくれてありがとう"
    ],
    "explanation": "わざわざ来てくれてありがとう。\n(わざわざきてくれてありがとう。)\nわざわざ: cất công, đặc biệt dành công sức để làm"
  },
  {
    "id": "mc_869",
    "type": "multiple_choice",
    "question": "倒す có nghĩa là gì?",
    "word": "倒す",
    "reading": "たおす",
    "choices": [
      "làm đổ, đánh ngã; đánh bại",
      "bê tông",
      "hóa thạch",
      "họp"
    ],
    "answer": "làm đổ, đánh ngã; đánh bại",
    "explanation": "倒す (たおす): làm đổ, đánh ngã; đánh bại"
  },
  {
    "id": "tr_870",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi lỡ làm đổ bình hoa.",
    "acceptedAnswers": [
      "花瓶を倒してしまいました。",
      "花瓶を倒してしまいました"
    ],
    "explanation": "花瓶を倒してしまいました。\n(かびんをたおしてしまいました。)\n倒す: làm đổ, đánh ngã; đánh bại"
  },
  {
    "id": "tr_871",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đã đánh bại đối thủ mạnh.",
    "acceptedAnswers": [
      "強い相手を倒しました。",
      "強い相手を倒しました"
    ],
    "explanation": "強い相手を倒しました。\n(つよいあいてをたおしました。)\n倒す: làm đổ, đánh ngã; đánh bại"
  },
  {
    "id": "mc_872",
    "type": "multiple_choice",
    "question": "汚す có nghĩa là gì?",
    "word": "汚す",
    "reading": "よごす",
    "choices": [
      "mạnh dạn, lấy hết can đảm, quyết tâm làm",
      "bầu trời",
      "bên trong xe/tàu",
      "làm bẩn"
    ],
    "answer": "làm bẩn",
    "explanation": "汚す (よごす): làm bẩn"
  },
  {
    "id": "tr_873",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi chú ý để không làm bẩn quần áo.",
    "acceptedAnswers": [
      "服を汚さないように気を付けます。",
      "服を汚さないように気を付けます"
    ],
    "explanation": "服を汚さないように気を付けます。\n(ふくをよごさないようにきをつけます。)\n汚す: làm bẩn"
  },
  {
    "id": "mc_874",
    "type": "multiple_choice",
    "question": "本気 có nghĩa là gì?",
    "word": "本気",
    "reading": "ほんき",
    "choices": [
      "được tập hợp; đi đến thống nhất; hoàn chỉnh",
      "thần bí, huyền bí",
      "mạnh dạn, lấy hết can đảm, quyết tâm làm",
      "sự nghiêm túc, thật lòng"
    ],
    "answer": "sự nghiêm túc, thật lòng",
    "explanation": "本気 (ほんき): sự nghiêm túc, thật lòng"
  },
  {
    "id": "fb_875",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "で日本語を勉強しています。",
    "choices": [
      "飛び出す",
      "思いがけない",
      "本気",
      "ございます"
    ],
    "answer": "本気",
    "fullSentence": "本気で日本語を勉強しています。",
    "explanation": "本気で日本語を勉強しています。\nTôi đang nghiêm túc học tiếng Nhật.\n本気: sự nghiêm túc, thật lòng"
  },
  {
    "id": "tr_876",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đang nghiêm túc học tiếng Nhật.",
    "acceptedAnswers": [
      "本気で日本語を勉強しています。",
      "本気で日本語を勉強しています"
    ],
    "explanation": "本気で日本語を勉強しています。\n(ほんきでにほんごをべんきょうしています。)\n本気: sự nghiêm túc, thật lòng"
  },
  {
    "id": "fb_877",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "試験が近づいて、",
    "sentenceSuffix": "になりました。",
    "choices": [
      "砂浜",
      "積もる",
      "本気",
      "雲"
    ],
    "answer": "本気",
    "fullSentence": "試験が近づいて、本気になりました。",
    "explanation": "試験が近づいて、本気になりました。\nKỳ thi đến gần nên tôi bắt đầu nghiêm túc.\n本気: sự nghiêm túc, thật lòng"
  },
  {
    "id": "tr_878",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Kỳ thi đến gần nên tôi bắt đầu nghiêm túc.",
    "acceptedAnswers": [
      "試験が近づいて、本気になりました。",
      "試験が近づいて、本気になりました"
    ],
    "explanation": "試験が近づいて、本気になりました。\n(しけんがちかづいて、ほんきになりました。)\n本気: sự nghiêm túc, thật lòng"
  },
  {
    "id": "mc_879",
    "type": "multiple_choice",
    "question": "わざと có nghĩa là gì?",
    "word": "わざと",
    "reading": "わざと",
    "choices": [
      "vùng, miền; địa phương ngoài đô thị lớn",
      "vẻ lộng lẫy, sự xa hoa",
      "đốt, làm cháy",
      "cố ý, có chủ đích"
    ],
    "answer": "cố ý, có chủ đích",
    "explanation": "わざと (わざと): cố ý, có chủ đích"
  },
  {
    "id": "fb_880",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "間違えたわけではありません。",
    "choices": [
      "わざと",
      "石炭",
      "ラッピング",
      "着払い"
    ],
    "answer": "わざと",
    "fullSentence": "わざと間違えたわけではありません。",
    "explanation": "わざと間違えたわけではありません。\nKhông phải tôi cố tình làm sai.\nわざと: cố ý, có chủ đích"
  },
  {
    "id": "tr_881",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Không phải tôi cố tình làm sai.",
    "acceptedAnswers": [
      "わざと間違えたわけではありません。",
      "わざと間違えたわけではありません"
    ],
    "explanation": "わざと間違えたわけではありません。\n(わざとまちがえたわけではありません。)\nわざと: cố ý, có chủ đích"
  },
  {
    "id": "mc_882",
    "type": "multiple_choice",
    "question": "後悔 có nghĩa là gì?",
    "word": "後悔",
    "reading": "こうかい",
    "choices": [
      "hối hận",
      "chữ, ký tự",
      "kèn harmonica",
      "… xăng-ti-mét (cm)"
    ],
    "answer": "hối hận",
    "explanation": "後悔 (こうかい): hối hận"
  },
  {
    "id": "fb_883",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "自分の言葉を",
    "sentenceSuffix": "しています。",
    "choices": [
      "ただ",
      "上り",
      "後悔",
      "数"
    ],
    "answer": "後悔",
    "fullSentence": "自分の言葉を後悔しています。",
    "explanation": "自分の言葉を後悔しています。\nTôi hối hận về lời mình nói.\n後悔: hối hận"
  },
  {
    "id": "tr_884",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi hối hận về lời mình nói.",
    "acceptedAnswers": [
      "自分の言葉を後悔しています。",
      "自分の言葉を後悔しています"
    ],
    "explanation": "自分の言葉を後悔しています。\n(じぶんのことばをこうかいしています。)\n後悔: hối hận"
  },
  {
    "id": "fb_885",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "約束を破ったことを",
    "sentenceSuffix": "しています。",
    "choices": [
      "後悔",
      "倒す",
      "女",
      "尋ねる"
    ],
    "answer": "後悔",
    "fullSentence": "約束を破ったことを後悔しています。",
    "explanation": "約束を破ったことを後悔しています。\nTôi hối hận vì đã thất hứa.\n後悔: hối hận"
  },
  {
    "id": "tr_886",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi hối hận vì đã thất hứa.",
    "acceptedAnswers": [
      "約束を破ったことを後悔しています。",
      "約束を破ったことを後悔しています"
    ],
    "explanation": "約束を破ったことを後悔しています。\n(やくそくをやぶったことをこうかいしています。)\n後悔: hối hận"
  },
  {
    "id": "mc_887",
    "type": "multiple_choice",
    "question": "なんで có nghĩa là gì?",
    "word": "なんで",
    "reading": "なんで",
    "choices": [
      "tại sao (khẩu ngữ)",
      "tháp",
      "sản phẩm nổi tiếng của địa phương",
      "động viên, khích lệ"
    ],
    "answer": "tại sao (khẩu ngữ)",
    "explanation": "なんで (なんで): tại sao (khẩu ngữ)"
  },
  {
    "id": "fb_888",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "昨日休んだんですか。",
    "choices": [
      "メッセージ",
      "雲",
      "なんで",
      "降水量"
    ],
    "answer": "なんで",
    "fullSentence": "なんで昨日休んだんですか。",
    "explanation": "なんで昨日休んだんですか。\nTại sao hôm qua bạn nghỉ?\nなんで: tại sao (khẩu ngữ)"
  },
  {
    "id": "tr_889",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tại sao hôm qua bạn nghỉ?",
    "acceptedAnswers": [
      "なんで昨日休んだんですか。",
      "なんで昨日休んだんですか"
    ],
    "explanation": "なんで昨日休んだんですか。\n(なんできのうやすんだんですか。)\nなんで: tại sao (khẩu ngữ)"
  },
  {
    "id": "mc_890",
    "type": "multiple_choice",
    "question": "なんか có nghĩa là gì?",
    "word": "なんか",
    "reading": "なんか",
    "choices": [
      "rảy nước xuống đất cho mát",
      "không hiểu sao, có vẻ; như…, chẳng hạn… (khẩu ngữ)",
      "bên trong xe/tàu",
      "tháp"
    ],
    "answer": "không hiểu sao, có vẻ; như…, chẳng hạn… (khẩu ngữ)",
    "explanation": "なんか (なんか): không hiểu sao, có vẻ; như…, chẳng hạn… (khẩu ngữ)"
  },
  {
    "id": "fb_891",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "変な音がします。",
    "choices": [
      "まるで",
      "迎える",
      "なんか",
      "なんで"
    ],
    "answer": "なんか",
    "fullSentence": "なんか変な音がします。",
    "explanation": "なんか変な音がします。\nCó tiếng gì đó là lạ.\nなんか: không hiểu sao, có vẻ; như…, chẳng hạn… (khẩu ngữ)"
  },
  {
    "id": "tr_892",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Có tiếng gì đó là lạ.",
    "acceptedAnswers": [
      "なんか変な音がします。",
      "なんか変な音がします"
    ],
    "explanation": "なんか変な音がします。\n(なんかへんなおとがします。)\nなんか: không hiểu sao, có vẻ; như…, chẳng hạn… (khẩu ngữ)"
  },
  {
    "id": "fb_893",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "お茶",
    "sentenceSuffix": "どうですか。",
    "choices": [
      "今でこそ",
      "浜",
      "育成",
      "なんか"
    ],
    "answer": "なんか",
    "fullSentence": "お茶なんかどうですか。",
    "explanation": "お茶なんかどうですか。\nTrà chẳng hạn thì sao?\nなんか: không hiểu sao, có vẻ; như…, chẳng hạn… (khẩu ngữ)"
  },
  {
    "id": "tr_894",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Trà chẳng hạn thì sao?",
    "acceptedAnswers": [
      "お茶なんかどうですか。",
      "お茶なんかどうですか"
    ],
    "explanation": "お茶なんかどうですか。\n(おちゃなんかどうですか。)\nなんか: không hiểu sao, có vẻ; như…, chẳng hạn… (khẩu ngữ)"
  },
  {
    "id": "mc_895",
    "type": "multiple_choice",
    "question": "変 có nghĩa là gì?",
    "word": "変",
    "reading": "へん",
    "choices": [
      "mẫu, hình mẫu; người mẫu",
      "nhận (lời mời, lời đề nghị)",
      "chỗ để, nơi đặt đồ",
      "lạ, kỳ lạ, bất thường"
    ],
    "answer": "lạ, kỳ lạ, bất thường",
    "explanation": "変 (へん): lạ, kỳ lạ, bất thường"
  },
  {
    "id": "fb_896",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "な夢を見ました。",
    "choices": [
      "通る（電気が通る）",
      "変",
      "栄える",
      "時刻"
    ],
    "answer": "変",
    "fullSentence": "変な夢を見ました。",
    "explanation": "変な夢を見ました。\nTôi mơ một giấc mơ kỳ lạ.\n変: lạ, kỳ lạ, bất thường"
  },
  {
    "id": "tr_897",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi mơ một giấc mơ kỳ lạ.",
    "acceptedAnswers": [
      "変な夢を見ました。",
      "変な夢を見ました"
    ],
    "explanation": "変な夢を見ました。\n(へんなゆめをみました。)\n変: lạ, kỳ lạ, bất thường"
  },
  {
    "id": "fb_898",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この文は少し",
    "sentenceSuffix": "です。",
    "choices": [
      "山林",
      "変",
      "彫刻",
      "思い切って"
    ],
    "answer": "変",
    "fullSentence": "この文は少し変です。",
    "explanation": "この文は少し変です。\nCâu này hơi không tự nhiên.\n変: lạ, kỳ lạ, bất thường"
  },
  {
    "id": "tr_899",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Câu này hơi không tự nhiên.",
    "acceptedAnswers": [
      "この文は少し変です。",
      "この文は少し変です"
    ],
    "explanation": "この文は少し変です。\n(このぶんはすこしへんです。)\n変: lạ, kỳ lạ, bất thường"
  },
  {
    "id": "mc_900",
    "type": "multiple_choice",
    "question": "ふもと có nghĩa là gì?",
    "word": "ふもと",
    "reading": "ふもと",
    "choices": [
      "sản vật núi rừng như nấm, rau rừng",
      "ăn (khẩu ngữ thô, suồng sã)",
      "bờ biển, bãi biển",
      "chân núi"
    ],
    "answer": "chân núi",
    "explanation": "ふもと (ふもと): chân núi"
  },
  {
    "id": "fb_901",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "山の",
    "sentenceSuffix": "に村があります。",
    "choices": [
      "ふもと",
      "企業",
      "女",
      "飛び出す"
    ],
    "answer": "ふもと",
    "fullSentence": "山のふもとに村があります。",
    "explanation": "山のふもとに村があります。\nCó một ngôi làng ở chân núi.\nふもと: chân núi"
  },
  {
    "id": "tr_902",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Có một ngôi làng ở chân núi.",
    "acceptedAnswers": [
      "山のふもとに村があります。",
      "山のふもとに村があります"
    ],
    "explanation": "山のふもとに村があります。\n(やまのふもとにむらがあります。)\nふもと: chân núi"
  },
  {
    "id": "mc_903",
    "type": "multiple_choice",
    "question": "～軒 có nghĩa là gì?",
    "word": "～軒",
    "reading": "～けん",
    "choices": [
      "từ đếm nhà, cửa hàng, tòa nhà nhỏ",
      "đẹp, đẹp đẽ",
      "được truyền đến, được hiểu",
      "đi và về trong ngày"
    ],
    "answer": "từ đếm nhà, cửa hàng, tòa nhà nhỏ",
    "explanation": "～軒 (～けん): từ đếm nhà, cửa hàng, tòa nhà nhỏ"
  },
  {
    "id": "tr_904",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Làng này có mười căn nhà.",
    "acceptedAnswers": [
      "この村には家が十軒あります。",
      "この村には家が十軒あります"
    ],
    "explanation": "この村には家が十軒あります。\n(このむらにはいえがじゅっけんあります。)\n～軒: từ đếm nhà, cửa hàng, tòa nhà nhỏ"
  },
  {
    "id": "mc_905",
    "type": "multiple_choice",
    "question": "お参り có nghĩa là gì?",
    "word": "お参り",
    "reading": "おまいり",
    "choices": [
      "nhân vật trong truyện, phim…",
      "đường hầm",
      "đi lễ đền/chùa",
      "thừa nhận, công nhận; chấp nhận, cho phép"
    ],
    "answer": "đi lễ đền/chùa",
    "explanation": "お参り (おまいり): đi lễ đền/chùa"
  },
  {
    "id": "fb_906",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "正月に神社に",
    "sentenceSuffix": "します。",
    "choices": [
      "展望台",
      "思い浮かべる",
      "話題",
      "お参り"
    ],
    "answer": "お参り",
    "fullSentence": "正月に神社にお参りします。",
    "explanation": "正月に神社にお参りします。\nTết tôi đi lễ đền.\nお参り: đi lễ đền/chùa"
  },
  {
    "id": "tr_907",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tết tôi đi lễ đền.",
    "acceptedAnswers": [
      "正月に神社にお参りします。",
      "正月に神社にお参りします"
    ],
    "explanation": "正月に神社にお参りします。\n(しょうがつにじんじゃにおまいりします。)\nお参り: đi lễ đền/chùa"
  },
  {
    "id": "mc_908",
    "type": "multiple_choice",
    "question": "村人 có nghĩa là gì?",
    "word": "村人",
    "reading": "むらびと",
    "choices": [
      "thế kỷ…",
      "vàng (kim loại)",
      "dân làng",
      "khu phố…"
    ],
    "answer": "dân làng",
    "explanation": "村人 (むらびと): dân làng"
  },
  {
    "id": "fb_909",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "が広場に集まりました。",
    "choices": [
      "当時",
      "村人",
      "尋ねる",
      "気が利く"
    ],
    "answer": "村人",
    "fullSentence": "村人が広場に集まりました。",
    "explanation": "村人が広場に集まりました。\nDân làng tập trung ở quảng trường.\n村人: dân làng"
  },
  {
    "id": "tr_910",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Dân làng tập trung ở quảng trường.",
    "acceptedAnswers": [
      "村人が広場に集まりました。",
      "村人が広場に集まりました"
    ],
    "explanation": "村人が広場に集まりました。\n(むらびとがひろばにあつまりました。)\n村人: dân làng"
  },
  {
    "id": "mc_911",
    "type": "multiple_choice",
    "question": "平気 có nghĩa là gì?",
    "word": "平気",
    "reading": "へいき",
    "choices": [
      "không sao, không sợ/không bận tâm",
      "khu phố…",
      "mạnh dạn, lấy hết can đảm, quyết tâm làm",
      "nhiều màu sắc rực rỡ"
    ],
    "answer": "không sao, không sợ/không bận tâm",
    "explanation": "平気 (へいき): không sao, không sợ/không bận tâm"
  },
  {
    "id": "fb_912",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "私は寒さは",
    "sentenceSuffix": "です。",
    "choices": [
      "幸運",
      "平気",
      "平野",
      "太陽"
    ],
    "answer": "平気",
    "fullSentence": "私は寒さは平気です。",
    "explanation": "私は寒さは平気です。\nTôi không ngại lạnh.\n平気: không sao, không sợ/không bận tâm"
  },
  {
    "id": "tr_913",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi không ngại lạnh.",
    "acceptedAnswers": [
      "私は寒さは平気です。",
      "私は寒さは平気です"
    ],
    "explanation": "私は寒さは平気です。\n(わたしはさむさはへいきです。)\n平気: không sao, không sợ/không bận tâm"
  },
  {
    "id": "fb_914",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "彼は",
    "sentenceSuffix": "でうそをつきます。",
    "choices": [
      "黙る",
      "平気",
      "期待",
      "配布"
    ],
    "answer": "平気",
    "fullSentence": "彼は平気でうそをつきます。",
    "explanation": "彼は平気でうそをつきます。\nAnh ta thản nhiên nói dối.\n平気: không sao, không sợ/không bận tâm"
  },
  {
    "id": "tr_915",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Anh ta thản nhiên nói dối.",
    "acceptedAnswers": [
      "彼は平気でうそをつきます。",
      "彼は平気でうそをつきます"
    ],
    "explanation": "彼は平気でうそをつきます。\n(かれはへいきでうそをつきます。)\n平気: không sao, không sợ/không bận tâm"
  },
  {
    "id": "mc_916",
    "type": "multiple_choice",
    "question": "和尚 có nghĩa là gì?",
    "word": "和尚",
    "reading": "おしょう",
    "choices": [
      "mạnh dạn, lấy hết can đảm, quyết tâm làm",
      "nhà sư, hòa thượng",
      "bướng bỉnh, cứng đầu",
      "quãng đường đi bộ"
    ],
    "answer": "nhà sư, hòa thượng",
    "explanation": "和尚 (おしょう): nhà sư, hòa thượng"
  },
  {
    "id": "fb_917",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "村人は",
    "sentenceSuffix": "さんに相談しました。",
    "choices": [
      "再会",
      "セメント",
      "和尚",
      "揺れる"
    ],
    "answer": "和尚",
    "fullSentence": "村人は和尚さんに相談しました。",
    "explanation": "村人は和尚さんに相談しました。\nDân làng đã bàn chuyện với nhà sư.\n和尚: nhà sư, hòa thượng"
  },
  {
    "id": "tr_918",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Dân làng đã bàn chuyện với nhà sư.",
    "acceptedAnswers": [
      "村人は和尚さんに相談しました。",
      "村人は和尚さんに相談しました"
    ],
    "explanation": "村人は和尚さんに相談しました。\n(むらびとはおしょうさんにそうだんしました。)\n和尚: nhà sư, hòa thượng"
  },
  {
    "id": "mc_919",
    "type": "multiple_choice",
    "question": "わいわい có nghĩa là gì?",
    "word": "わいわい",
    "reading": "わいわい",
    "choices": [
      "ồn ào, rôm rả (nhiều người)",
      "bỏ/ngừng hút thuốc",
      "bữa tiệc tổ chức bất ngờ cho ai",
      "chó hỗ trợ người khuyết tật vận động"
    ],
    "answer": "ồn ào, rôm rả (nhiều người)",
    "explanation": "わいわい (わいわい): ồn ào, rôm rả (nhiều người)"
  },
  {
    "id": "fb_920",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "みんなで",
    "sentenceSuffix": "話しています。",
    "choices": [
      "暮らす",
      "全て",
      "全く",
      "わいわい"
    ],
    "answer": "わいわい",
    "fullSentence": "みんなでわいわい話しています。",
    "explanation": "みんなでわいわい話しています。\nMọi người đang trò chuyện rôm rả.\nわいわい: ồn ào, rôm rả (nhiều người)"
  },
  {
    "id": "tr_921",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Mọi người đang trò chuyện rôm rả.",
    "acceptedAnswers": [
      "みんなでわいわい話しています。",
      "みんなでわいわい話しています"
    ],
    "explanation": "みんなでわいわい話しています。\n(みんなでわいわいはなしています。)\nわいわい: ồn ào, rôm rả (nhiều người)"
  },
  {
    "id": "mc_922",
    "type": "multiple_choice",
    "question": "やって来る có nghĩa là gì?",
    "word": "やって来る",
    "reading": "やってくる",
    "choices": [
      "cái thang",
      "chiều vòng trong của tuyến vòng",
      "đến, xuất hiện ở chỗ người nói/điểm nhìn",
      "người nhận trả phí vận chuyển"
    ],
    "answer": "đến, xuất hiện ở chỗ người nói/điểm nhìn",
    "explanation": "やって来る (やってくる): đến, xuất hiện ở chỗ người nói/điểm nhìn"
  },
  {
    "id": "tr_923",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Bạn tôi đã đến nhà.",
    "acceptedAnswers": [
      "友達が家にやって来ました。",
      "友達が家にやって来ました"
    ],
    "explanation": "友達が家にやって来ました。\n(ともだちがいえにやってきました。)\nやって来る: đến, xuất hiện ở chỗ người nói/điểm nhìn"
  },
  {
    "id": "tr_924",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Mùa xuân sắp đến.",
    "acceptedAnswers": [
      "もうすぐ春がやって来ます。",
      "もうすぐ春がやって来ます"
    ],
    "explanation": "もうすぐ春がやって来ます。\n(もうすぐはるがやってきます。)\nやって来る: đến, xuất hiện ở chỗ người nói/điểm nhìn"
  },
  {
    "id": "mc_925",
    "type": "multiple_choice",
    "question": "口々に có nghĩa là gì?",
    "word": "口々に",
    "reading": "くちぐちに",
    "choices": [
      "mùa đông ấm hơn bình thường",
      "thừa nhận, công nhận; chấp nhận, cho phép",
      "cho phép",
      "mỗi người đều nói, người này người kia cùng nói"
    ],
    "answer": "mỗi người đều nói, người này người kia cùng nói",
    "explanation": "口々に (くちぐちに): mỗi người đều nói, người này người kia cùng nói"
  },
  {
    "id": "fb_926",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "子どもたちは",
    "sentenceSuffix": "お礼を言いました。",
    "choices": [
      "口々に",
      "彫る",
      "フリー切符",
      "ドレス"
    ],
    "answer": "口々に",
    "fullSentence": "子どもたちは口々にお礼を言いました。",
    "explanation": "子どもたちは口々にお礼を言いました。\nBọn trẻ ai nấy đều nói lời cảm ơn.\n口々に: mỗi người đều nói, người này người kia cùng nói"
  },
  {
    "id": "tr_927",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Bọn trẻ ai nấy đều nói lời cảm ơn.",
    "acceptedAnswers": [
      "子どもたちは口々にお礼を言いました。",
      "子どもたちは口々にお礼を言いました"
    ],
    "explanation": "子どもたちは口々にお礼を言いました。\n(こどもたちはくちぐちにおれいをいいました。)\n口々に: mỗi người đều nói, người này người kia cùng nói"
  },
  {
    "id": "mc_928",
    "type": "multiple_choice",
    "question": "裸 có nghĩa là gì?",
    "word": "裸",
    "reading": "はだか",
    "choices": [
      "trạng thái không mặc quần áo, trần truồng",
      "tên địa điểm, địa danh",
      "đốt, làm cháy",
      "lần đầu gặp mặt"
    ],
    "answer": "trạng thái không mặc quần áo, trần truồng",
    "explanation": "裸 (はだか): trạng thái không mặc quần áo, trần truồng"
  },
  {
    "id": "fb_929",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "温泉では",
    "sentenceSuffix": "になって入ります。",
    "choices": [
      "ハプニング",
      "男女",
      "裸",
      "女子高生"
    ],
    "answer": "裸",
    "fullSentence": "温泉では裸になって入ります。",
    "explanation": "温泉では裸になって入ります。\nỞ suối nước nóng, người ta cởi hết quần áo để vào tắm.\n裸: trạng thái không mặc quần áo, trần truồng"
  },
  {
    "id": "tr_930",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Ở suối nước nóng, người ta cởi hết quần áo để vào tắm.",
    "acceptedAnswers": [
      "温泉では裸になって入ります。",
      "温泉では裸になって入ります"
    ],
    "explanation": "温泉では裸になって入ります。\n(おんせんでははだかになってはいります。)\n裸: trạng thái không mặc quần áo, trần truồng"
  },
  {
    "id": "mc_931",
    "type": "multiple_choice",
    "question": "誤解 có nghĩa là gì?",
    "word": "誤解",
    "reading": "ごかい",
    "choices": [
      "điều chỉnh cho phù hợp; ghép, kết hợp",
      "đôi khi, cũng có lúc",
      "câu/chuỗi đọc xuôi và ngược giống nhau",
      "hiểu lầm"
    ],
    "answer": "hiểu lầm",
    "explanation": "誤解 (ごかい): hiểu lầm"
  },
  {
    "id": "fb_932",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "私の言葉を",
    "sentenceSuffix": "しないでください。",
    "choices": [
      "にぎわう",
      "森",
      "海岸",
      "誤解"
    ],
    "answer": "誤解",
    "fullSentence": "私の言葉を誤解しないでください。",
    "explanation": "私の言葉を誤解しないでください。\nĐừng hiểu lầm lời tôi nói.\n誤解: hiểu lầm"
  },
  {
    "id": "tr_933",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Đừng hiểu lầm lời tôi nói.",
    "acceptedAnswers": [
      "私の言葉を誤解しないでください。",
      "私の言葉を誤解しないでください"
    ],
    "explanation": "私の言葉を誤解しないでください。\n(わたしのことばをごかいしないでください。)\n誤解: hiểu lầm"
  },
  {
    "id": "fb_934",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "怒っていると",
    "sentenceSuffix": "されました。",
    "choices": [
      "努力",
      "石",
      "誤解",
      "イメージ"
    ],
    "answer": "誤解",
    "fullSentence": "怒っていると誤解されました。",
    "explanation": "怒っていると誤解されました。\nTôi bị hiểu lầm là đang tức giận.\n誤解: hiểu lầm"
  },
  {
    "id": "tr_935",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi bị hiểu lầm là đang tức giận.",
    "acceptedAnswers": [
      "怒っていると誤解されました。",
      "怒っていると誤解されました"
    ],
    "explanation": "怒っていると誤解されました。\n(おこっているとごかいされました。)\n誤解: hiểu lầm"
  },
  {
    "id": "mc_936",
    "type": "multiple_choice",
    "question": "文章 có nghĩa là gì?",
    "word": "文章",
    "reading": "ぶんしょう",
    "choices": [
      "câu chuyện về trải nghiệm thực tế",
      "đi lễ đền/chùa",
      "cây sugi, tuyết tùng Nhật Bản",
      "đoạn văn, bài văn, văn bản"
    ],
    "answer": "đoạn văn, bài văn, văn bản",
    "explanation": "文章 (ぶんしょう): đoạn văn, bài văn, văn bản"
  },
  {
    "id": "fb_937",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "短い",
    "sentenceSuffix": "を書いてください。",
    "choices": [
      "乗り降り",
      "文章",
      "割合",
      "思い浮かべる"
    ],
    "answer": "文章",
    "fullSentence": "短い文章を書いてください。",
    "explanation": "短い文章を書いてください。\nHãy viết một đoạn văn ngắn.\n文章: đoạn văn, bài văn, văn bản"
  },
  {
    "id": "tr_938",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Hãy viết một đoạn văn ngắn.",
    "acceptedAnswers": [
      "短い文章を書いてください。",
      "短い文章を書いてください"
    ],
    "explanation": "短い文章を書いてください。\n(みじかいぶんしょうをかいてください。)\n文章: đoạn văn, bài văn, văn bản"
  },
  {
    "id": "mc_939",
    "type": "multiple_choice",
    "question": "笑い出す có nghĩa là gì?",
    "word": "笑い出す",
    "reading": "わらいだす",
    "choices": [
      "tầm giờ này; giờ này rồi",
      "tuổi của cây",
      "doanh nghiệp, công ty",
      "bắt đầu bật cười"
    ],
    "answer": "bắt đầu bật cười",
    "explanation": "笑い出す (わらいだす): bắt đầu bật cười"
  },
  {
    "id": "tr_940",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Anh ấy đột nhiên bật cười.",
    "acceptedAnswers": [
      "彼は急に笑い出しました。",
      "彼は急に笑い出しました"
    ],
    "explanation": "彼は急に笑い出しました。\n(かれはきゅうにわらいだしました。)\n笑い出す: bắt đầu bật cười"
  },
  {
    "id": "mc_941",
    "type": "multiple_choice",
    "question": "訳 có nghĩa là gì?",
    "word": "訳",
    "reading": "わけ",
    "choices": [
      "tuyệt vời",
      "lý do, nguyên do; lẽ, kết luận",
      "chỗ ngồi, ghế ngồi",
      "đá, hòn đá"
    ],
    "answer": "lý do, nguyên do; lẽ, kết luận",
    "explanation": "訳 (わけ): lý do, nguyên do; lẽ, kết luận"
  },
  {
    "id": "fb_942",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "遅れた",
    "sentenceSuffix": "を聞きました。",
    "choices": [
      "ほっぺた",
      "訳",
      "あらかじめ",
      "トロッコ列車"
    ],
    "answer": "訳",
    "fullSentence": "遅れた訳を聞きました。",
    "explanation": "遅れた訳を聞きました。\nTôi hỏi lý do đến muộn.\n訳: lý do, nguyên do; lẽ, kết luận"
  },
  {
    "id": "tr_943",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi hỏi lý do đến muộn.",
    "acceptedAnswers": [
      "遅れた訳を聞きました。",
      "遅れた訳を聞きました"
    ],
    "explanation": "遅れた訳を聞きました。\n(おくれたわけをききました。)\n訳: lý do, nguyên do; lẽ, kết luận"
  },
  {
    "id": "tr_944",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Không phải tôi hiểu hết tiếng Nhật.",
    "acceptedAnswers": [
      "日本語が全部分かるわけではありません。",
      "日本語が全部分かるわけではありません"
    ],
    "explanation": "日本語が全部分かるわけではありません。\n(にほんごがぜんぶわかるわけではありません。)\n訳: lý do, nguyên do; lẽ, kết luận"
  },
  {
    "id": "tr_945",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Không thể nào nhớ hết chỉ trong một ngày.",
    "acceptedAnswers": [
      "一日で全部覚えられるわけがありません。",
      "一日で全部覚えられるわけがありません"
    ],
    "explanation": "一日で全部覚えられるわけがありません。\n(いちにちでぜんぶおぼえられるわけがありません。)\n訳: lý do, nguyên do; lẽ, kết luận"
  },
  {
    "id": "tr_946",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Bạn đã sống ở Nhật tận mười năm nhỉ. Thảo nào tiếng Nhật giỏi.",
    "acceptedAnswers": [
      "十年も日本に住んでいたんですね。日本語が上手なわけです。",
      "十年も日本に住んでいたんですね。日本語が上手なわけです"
    ],
    "explanation": "十年も日本に住んでいたんですね。日本語が上手なわけです。\n(じゅうねんもにほんにすんでいたんですね。にほんごがじょうずなわけです。)\n訳: lý do, nguyên do; lẽ, kết luận"
  },
  {
    "id": "mc_947",
    "type": "multiple_choice",
    "question": "早口言葉 có nghĩa là gì?",
    "word": "早口言葉",
    "reading": "はやくちことば",
    "choices": [
      "áo cardigan, áo khoác len mở phía trước",
      "xé, làm rách; phá vỡ/không giữ",
      "khí tượng, hiện tượng thời tiết",
      "câu nói líu lưỡi để luyện phát âm nhanh"
    ],
    "answer": "câu nói líu lưỡi để luyện phát âm nhanh",
    "explanation": "早口言葉 (はやくちことば): câu nói líu lưỡi để luyện phát âm nhanh"
  },
  {
    "id": "fb_948",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "を三回言ってください。",
    "choices": [
      "早口言葉",
      "モデル",
      "名付ける",
      "わざと"
    ],
    "answer": "早口言葉",
    "fullSentence": "早口言葉を三回言ってください。",
    "explanation": "早口言葉を三回言ってください。\nHãy đọc câu líu lưỡi ba lần.\n早口言葉: câu nói líu lưỡi để luyện phát âm nhanh"
  },
  {
    "id": "tr_949",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Hãy đọc câu líu lưỡi ba lần.",
    "acceptedAnswers": [
      "早口言葉を三回言ってください。",
      "早口言葉を三回言ってください"
    ],
    "explanation": "早口言葉を三回言ってください。\n(はやくちことばをさんかいいってください。)\n早口言葉: câu nói líu lưỡi để luyện phát âm nhanh"
  },
  {
    "id": "mc_950",
    "type": "multiple_choice",
    "question": "柿 có nghĩa là gì?",
    "word": "柿",
    "reading": "かき",
    "choices": [
      "quả hồng, cây hồng",
      "di sản thiên nhiên thế giới",
      "điểm; khía cạnh, mặt",
      "xe tải"
    ],
    "answer": "quả hồng, cây hồng",
    "explanation": "柿 (かき): quả hồng, cây hồng"
  },
  {
    "id": "fb_951",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "秋に甘い",
    "sentenceSuffix": "を食べます。",
    "choices": [
      "なぞなぞ",
      "柿",
      "村",
      "対等"
    ],
    "answer": "柿",
    "fullSentence": "秋に甘い柿を食べます。",
    "explanation": "秋に甘い柿を食べます。\nMùa thu tôi ăn hồng ngọt.\n柿: quả hồng, cây hồng"
  },
  {
    "id": "tr_952",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Mùa thu tôi ăn hồng ngọt.",
    "acceptedAnswers": [
      "秋に甘い柿を食べます。",
      "秋に甘い柿を食べます"
    ],
    "explanation": "秋に甘い柿を食べます。\n(あきにあまいかきをたべます。)\n柿: quả hồng, cây hồng"
  },
  {
    "id": "mc_953",
    "type": "multiple_choice",
    "question": "食う có nghĩa là gì?",
    "word": "食う",
    "reading": "くう",
    "choices": [
      "ăn (khẩu ngữ thô, suồng sã)",
      "cướp, lấy mất",
      "tuổi nghỉ hưu theo quy định",
      "hộp, thùng"
    ],
    "answer": "ăn (khẩu ngữ thô, suồng sã)",
    "explanation": "食う (くう): ăn (khẩu ngữ thô, suồng sã)"
  },
  {
    "id": "tr_954",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Đói rồi, ăn gì đó thôi.",
    "acceptedAnswers": [
      "腹が減ったから、何か食おう。",
      "腹が減ったから、何か食おう"
    ],
    "explanation": "腹が減ったから、何か食おう。\n(はらがへったから、なにかくおう。)\n食う: ăn (khẩu ngữ thô, suồng sã)"
  },
  {
    "id": "mc_955",
    "type": "multiple_choice",
    "question": "パジャマ có nghĩa là gì?",
    "word": "パジャマ",
    "reading": "パジャマ",
    "choices": [
      "ầm ầm, tiếng vang lớn kéo dài",
      "ngoài ra, xin nói thêm; vẫn còn",
      "điều thắc mắc, sự nghi ngờ",
      "đồ ngủ, pyjama"
    ],
    "answer": "đồ ngủ, pyjama",
    "explanation": "パジャマ (パジャマ): đồ ngủ, pyjama"
  },
  {
    "id": "fb_956",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "寝る前に",
    "sentenceSuffix": "に着替えます。",
    "choices": [
      "越える",
      "石垣",
      "箱",
      "パジャマ"
    ],
    "answer": "パジャマ",
    "fullSentence": "寝る前にパジャマに着替えます。",
    "explanation": "寝る前にパジャマに着替えます。\nTôi thay đồ ngủ trước khi đi ngủ.\nパジャマ: đồ ngủ, pyjama"
  },
  {
    "id": "tr_957",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi thay đồ ngủ trước khi đi ngủ.",
    "acceptedAnswers": [
      "寝る前にパジャマに着替えます。",
      "寝る前にパジャマに着替えます"
    ],
    "explanation": "寝る前にパジャマに着替えます。\n(ねるまえにパジャマにきがえます。)\nパジャマ: đồ ngủ, pyjama"
  },
  {
    "id": "mc_958",
    "type": "multiple_choice",
    "question": "カエル có nghĩa là gì?",
    "word": "カエル",
    "reading": "カエル",
    "choices": [
      "ếch",
      "bìa bọc sách",
      "cả… đều",
      "tổ chức (sự kiện)"
    ],
    "answer": "ếch",
    "explanation": "カエル (カエル): ếch"
  },
  {
    "id": "fb_959",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "田んぼで",
    "sentenceSuffix": "が鳴いています。",
    "choices": [
      "かみさん",
      "雲",
      "カエル",
      "出産"
    ],
    "answer": "カエル",
    "fullSentence": "田んぼでカエルが鳴いています。",
    "explanation": "田んぼでカエルが鳴いています。\nẾch đang kêu ngoài ruộng.\nカエル: ếch"
  },
  {
    "id": "tr_960",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Ếch đang kêu ngoài ruộng.",
    "acceptedAnswers": [
      "田んぼでカエルが鳴いています。",
      "田んぼでカエルが鳴いています"
    ],
    "explanation": "田んぼでカエルが鳴いています。\n(たんぼでカエルがないています。)\nカエル: ếch"
  },
  {
    "id": "mc_961",
    "type": "multiple_choice",
    "question": "ぴょこぴょこ có nghĩa là gì?",
    "word": "ぴょこぴょこ",
    "reading": "ぴょこぴょこ",
    "choices": [
      "nhấp nhô, nhảy những bước nhỏ liên tiếp",
      "chuột máy tính",
      "cách đọc phân số: mẫu số trước, tử số sau",
      "dáng vẻ, hình dáng; hình ảnh người/vật"
    ],
    "answer": "nhấp nhô, nhảy những bước nhỏ liên tiếp",
    "explanation": "ぴょこぴょこ (ぴょこぴょこ): nhấp nhô, nhảy những bước nhỏ liên tiếp"
  },
  {
    "id": "fb_962",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "カエルが",
    "sentenceSuffix": "跳んでいます。",
    "choices": [
      "退職",
      "努力",
      "ぴょこぴょこ",
      "企業"
    ],
    "answer": "ぴょこぴょこ",
    "fullSentence": "カエルがぴょこぴょこ跳んでいます。",
    "explanation": "カエルがぴょこぴょこ跳んでいます。\nCon ếch đang nhảy từng bước nhỏ.\nぴょこぴょこ: nhấp nhô, nhảy những bước nhỏ liên tiếp"
  },
  {
    "id": "tr_963",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Con ếch đang nhảy từng bước nhỏ.",
    "acceptedAnswers": [
      "カエルがぴょこぴょこ跳んでいます。",
      "カエルがぴょこぴょこ跳んでいます"
    ],
    "explanation": "カエルがぴょこぴょこ跳んでいます。\n(カエルがぴょこぴょことんでいます。)\nぴょこぴょこ: nhấp nhô, nhảy những bước nhỏ liên tiếp"
  },
  {
    "id": "mc_964",
    "type": "multiple_choice",
    "question": "なぞなぞ có nghĩa là gì?",
    "word": "なぞなぞ",
    "reading": "なぞなぞ",
    "choices": [
      "câu đố, trò đố vui",
      "thong thả, thư giãn",
      "dáng vẻ, hình dáng; hình ảnh người/vật",
      "lượng giáng thủy (mưa, tuyết… quy đổi ra nước)"
    ],
    "answer": "câu đố, trò đố vui",
    "explanation": "なぞなぞ (なぞなぞ): câu đố, trò đố vui"
  },
  {
    "id": "fb_965",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "子どもに",
    "sentenceSuffix": "を出しました。",
    "choices": [
      "揚げる",
      "言葉遣い",
      "なぞなぞ",
      "励ます"
    ],
    "answer": "なぞなぞ",
    "fullSentence": "子どもになぞなぞを出しました。",
    "explanation": "子どもになぞなぞを出しました。\nTôi ra câu đố cho đứa trẻ.\nなぞなぞ: câu đố, trò đố vui"
  },
  {
    "id": "tr_966",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi ra câu đố cho đứa trẻ.",
    "acceptedAnswers": [
      "子どもになぞなぞを出しました。",
      "子どもになぞなぞを出しました"
    ],
    "explanation": "子どもになぞなぞを出しました。\n(こどもになぞなぞをだしました。)\nなぞなぞ: câu đố, trò đố vui"
  },
  {
    "id": "mc_967",
    "type": "multiple_choice",
    "question": "回文 có nghĩa là gì?",
    "word": "回文",
    "reading": "かいぶん",
    "choices": [
      "tên địa điểm, địa danh",
      "câu/chuỗi đọc xuôi và ngược giống nhau",
      "dân số",
      "ngày tháng, thời gian trôi qua"
    ],
    "answer": "câu/chuỗi đọc xuôi và ngược giống nhau",
    "explanation": "回文 (かいぶん): câu/chuỗi đọc xuôi và ngược giống nhau"
  },
  {
    "id": "fb_968",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "「たけやぶやけた」は",
    "sentenceSuffix": "です。",
    "choices": [
      "雨水",
      "かける（リボンをかける）",
      "回文",
      "石炭"
    ],
    "answer": "回文",
    "fullSentence": "「たけやぶやけた」は回文です。",
    "explanation": "「たけやぶやけた」は回文です。\n“Takeyabu yaketa” là một câu đọc xuôi ngược giống nhau.\n回文: câu/chuỗi đọc xuôi và ngược giống nhau"
  },
  {
    "id": "tr_969",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "“Takeyabu yaketa” là một câu đọc xuôi ngược giống nhau.",
    "acceptedAnswers": [
      "「たけやぶやけた」は回文です。",
      "「たけやぶやけた」は回文です"
    ],
    "explanation": "「たけやぶやけた」は回文です。\n(「たけやぶやけた」はかいぶんです。)\n回文: câu/chuỗi đọc xuôi và ngược giống nhau"
  },
  {
    "id": "mc_970",
    "type": "multiple_choice",
    "question": "マウス có nghĩa là gì?",
    "word": "マウス",
    "reading": "マウス",
    "choices": [
      "ngày tháng, thời gian trôi qua",
      "chuột máy tính",
      "khí tượng, hiện tượng thời tiết",
      "xé, làm rách; phá vỡ/không giữ"
    ],
    "answer": "chuột máy tính",
    "explanation": "マウス (マウス): chuột máy tính"
  },
  {
    "id": "fb_971",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "を使って写真を選びます。",
    "choices": [
      "退職",
      "味わう",
      "マウス",
      "暖冬"
    ],
    "answer": "マウス",
    "fullSentence": "マウスを使って写真を選びます。",
    "explanation": "マウスを使って写真を選びます。\nTôi dùng chuột chọn ảnh.\nマウス: chuột máy tính"
  },
  {
    "id": "tr_972",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi dùng chuột chọn ảnh.",
    "acceptedAnswers": [
      "マウスを使って写真を選びます。",
      "マウスを使って写真を選びます"
    ],
    "explanation": "マウスを使って写真を選びます。\n(マウスをつかってしゃしんをえらびます。)\nマウス: chuột máy tính"
  },
  {
    "id": "mc_973",
    "type": "multiple_choice",
    "question": "崖 có nghĩa là gì?",
    "word": "崖",
    "reading": "がけ",
    "choices": [
      "vùng, miền; địa phương ngoài đô thị lớn",
      "háo hức, hồi hộp vui sướng",
      "bất ngờ, ngoài dự đoán",
      "vách đá dựng đứng"
    ],
    "answer": "vách đá dựng đứng",
    "explanation": "崖 (がけ): vách đá dựng đứng"
  },
  {
    "id": "fb_974",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "から落ちないように気を付けてください。",
    "choices": [
      "添える",
      "パジャマ",
      "うらやましい",
      "崖"
    ],
    "answer": "崖",
    "fullSentence": "崖から落ちないように気を付けてください。",
    "explanation": "崖から落ちないように気を付けてください。\nHãy cẩn thận để không rơi khỏi vách đá.\n崖: vách đá dựng đứng"
  },
  {
    "id": "tr_975",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Hãy cẩn thận để không rơi khỏi vách đá.",
    "acceptedAnswers": [
      "崖から落ちないように気を付けてください。",
      "崖から落ちないように気を付けてください"
    ],
    "explanation": "崖から落ちないように気を付けてください。\n(がけからおちないようにきをつけてください。)\n崖: vách đá dựng đứng"
  },
  {
    "id": "mc_976",
    "type": "multiple_choice",
    "question": "わ（けがしたわ） có nghĩa là gì?",
    "word": "わ（けがしたわ）",
    "reading": "わ（けがしたわ）",
    "choices": [
      "gây ra, làm cho (ai phiền)",
      "câu/chuỗi đọc xuôi và ngược giống nhau",
      "ngày hội mở cửa trường cho người muốn tìm hiểu/tuyển sinh",
      "trợ từ cuối câu thể hiện cảm xúc/nhấn nhẹ"
    ],
    "answer": "trợ từ cuối câu thể hiện cảm xúc/nhấn nhẹ",
    "explanation": "わ（けがしたわ） (わ（けがしたわ）): trợ từ cuối câu thể hiện cảm xúc/nhấn nhẹ"
  },
  {
    "id": "tr_977",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi ngã rồi bị thương mất rồi.",
    "acceptedAnswers": [
      "転んで、けがしたわ。",
      "転んで、けがしたわ"
    ],
    "explanation": "転んで、けがしたわ。\n(ころんで、けがしたわ。)\nわ（けがしたわ）: trợ từ cuối câu thể hiện cảm xúc/nhấn nhẹ"
  },
  {
    "id": "mc_978",
    "type": "multiple_choice",
    "question": "詩 có nghĩa là gì?",
    "word": "詩",
    "reading": "し",
    "choices": [
      "người có tuổi, lớn tuổi",
      "ầm ầm, tiếng vang lớn kéo dài",
      "thơ, bài thơ",
      "sự việc, chuyện xảy ra"
    ],
    "answer": "thơ, bài thơ",
    "explanation": "詩 (し): thơ, bài thơ"
  },
  {
    "id": "fb_979",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "日本語で短い",
    "sentenceSuffix": "を書きました。",
    "choices": [
      "オープンキャンパス",
      "早口言葉",
      "ショック",
      "詩"
    ],
    "answer": "詩",
    "fullSentence": "日本語で短い詩を書きました。",
    "explanation": "日本語で短い詩を書きました。\nTôi viết một bài thơ ngắn bằng tiếng Nhật.\n詩: thơ, bài thơ"
  },
  {
    "id": "tr_980",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi viết một bài thơ ngắn bằng tiếng Nhật.",
    "acceptedAnswers": [
      "日本語で短い詩を書きました。",
      "日本語で短い詩を書きました"
    ],
    "explanation": "日本語で短い詩を書きました。\n(にほんごでみじかいしをかきました。)\n詩: thơ, bài thơ"
  },
  {
    "id": "mc_981",
    "type": "multiple_choice",
    "question": "載る có nghĩa là gì?",
    "word": "載る",
    "reading": "のる",
    "choices": [
      "gói quà",
      "bồn/bệ rửa mặt",
      "được đăng, được in; nằm trên (vật mang)",
      "mẫu, hình mẫu; người mẫu"
    ],
    "answer": "được đăng, được in; nằm trên (vật mang)",
    "explanation": "載る (のる): được đăng, được in; nằm trên (vật mang)"
  },
  {
    "id": "tr_982",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Bài văn của tôi được đăng báo.",
    "acceptedAnswers": [
      "私の作文が新聞に載りました。",
      "私の作文が新聞に載りました"
    ],
    "explanation": "私の作文が新聞に載りました。\n(わたしのさくぶんがしんぶんにのりました。)\n載る: được đăng, được in; nằm trên (vật mang)"
  },
  {
    "id": "mc_983",
    "type": "multiple_choice",
    "question": "小鳥 có nghĩa là gì?",
    "word": "小鳥",
    "reading": "ことり",
    "choices": [
      "thời kỳ; nhóm tuổi, thế hệ",
      "chim nhỏ",
      "đối diện nhau, quay mặt vào nhau",
      "nhau, cả hai bên"
    ],
    "answer": "chim nhỏ",
    "explanation": "小鳥 (ことり): chim nhỏ"
  },
  {
    "id": "fb_984",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "庭で",
    "sentenceSuffix": "が鳴いています。",
    "choices": [
      "はらはら",
      "座席",
      "小鳥",
      "顔から火が出る"
    ],
    "answer": "小鳥",
    "fullSentence": "庭で小鳥が鳴いています。",
    "explanation": "庭で小鳥が鳴いています。\nChim nhỏ đang hót trong vườn.\n小鳥: chim nhỏ"
  },
  {
    "id": "tr_985",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Chim nhỏ đang hót trong vườn.",
    "acceptedAnswers": [
      "庭で小鳥が鳴いています。",
      "庭で小鳥が鳴いています"
    ],
    "explanation": "庭で小鳥が鳴いています。\n(にわでことりがないています。)\n小鳥: chim nhỏ"
  },
  {
    "id": "mc_986",
    "type": "multiple_choice",
    "question": "鈴 có nghĩa là gì?",
    "word": "鈴",
    "reading": "すず",
    "choices": [
      "giờ đây, hiện nay (khác với trước)",
      "chuông nhỏ, lục lạc",
      "tính cả, đưa vào, bao gồm vào",
      "rốt cuộc, không biết là… (nhấn câu hỏi)"
    ],
    "answer": "chuông nhỏ, lục lạc",
    "explanation": "鈴 (すず): chuông nhỏ, lục lạc"
  },
  {
    "id": "fb_987",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "猫が動くと",
    "sentenceSuffix": "が鳴ります。",
    "choices": [
      "顔が広い",
      "鈴",
      "現金",
      "列車"
    ],
    "answer": "鈴",
    "fullSentence": "猫が動くと鈴が鳴ります。",
    "explanation": "猫が動くと鈴が鳴ります。\nKhi con mèo cử động, chuông nhỏ kêu.\n鈴: chuông nhỏ, lục lạc"
  },
  {
    "id": "tr_988",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Khi con mèo cử động, chuông nhỏ kêu.",
    "acceptedAnswers": [
      "猫が動くと鈴が鳴ります。",
      "猫が動くと鈴が鳴ります"
    ],
    "explanation": "猫が動くと鈴が鳴ります。\n(ねこがうごくとすずがなります。)\n鈴: chuông nhỏ, lục lạc"
  },
  {
    "id": "mc_989",
    "type": "multiple_choice",
    "question": "両手 có nghĩa là gì?",
    "word": "両手",
    "reading": "りょうて",
    "choices": [
      "hai tay, cả hai tay",
      "truyện tranh bốn khung",
      "nhầm, hiểu sai",
      "một lời, vài lời ngắn gọn"
    ],
    "answer": "hai tay, cả hai tay",
    "explanation": "両手 (りょうて): hai tay, cả hai tay"
  },
  {
    "id": "fb_990",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "で箱を持ってください。",
    "choices": [
      "両手",
      "思い切って",
      "禁煙",
      "出店"
    ],
    "answer": "両手",
    "fullSentence": "両手で箱を持ってください。",
    "explanation": "両手で箱を持ってください。\nHãy cầm hộp bằng cả hai tay.\n両手: hai tay, cả hai tay"
  },
  {
    "id": "tr_991",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Hãy cầm hộp bằng cả hai tay.",
    "acceptedAnswers": [
      "両手で箱を持ってください。",
      "両手で箱を持ってください"
    ],
    "explanation": "両手で箱を持ってください。\n(りょうてではこをもってください。)\n両手: hai tay, cả hai tay"
  },
  {
    "id": "mc_992",
    "type": "multiple_choice",
    "question": "広げる có nghĩa là gì?",
    "word": "広げる",
    "reading": "ひろげる",
    "choices": [
      "sự việc bất ngờ, sự cố ngoài dự kiến",
      "mở rộng, trải ra",
      "điểm đáng xem, nét hấp dẫn",
      "những người cùng… với nhau"
    ],
    "answer": "mở rộng, trải ra",
    "explanation": "広げる (ひろげる): mở rộng, trải ra"
  },
  {
    "id": "tr_993",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi trải bản đồ lên bàn.",
    "acceptedAnswers": [
      "机の上に地図を広げます。",
      "机の上に地図を広げます"
    ],
    "explanation": "机の上に地図を広げます。\n(つくえのうえにちずをひろげます。)\n広げる: mở rộng, trải ra"
  },
  {
    "id": "tr_994",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi muốn mở rộng vòng bạn bè.",
    "acceptedAnswers": [
      "友達の輪を広げたいです。",
      "友達の輪を広げたいです"
    ],
    "explanation": "友達の輪を広げたいです。\n(ともだちのわをひろげたいです。)\n広げる: mở rộng, trải ra"
  },
  {
    "id": "mc_995",
    "type": "multiple_choice",
    "question": "空 có nghĩa là gì?",
    "word": "空",
    "reading": "そら",
    "choices": [
      "leng keng, tiếng chuông nhỏ",
      "đi qua, chạy qua; điện được dẫn đến",
      "bầu trời",
      "xe tải"
    ],
    "answer": "bầu trời",
    "explanation": "空 (そら): bầu trời"
  },
  {
    "id": "fb_996",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "夜の",
    "sentenceSuffix": "を見上げました。",
    "choices": [
      "今ごろ",
      "路面電車",
      "ペンション",
      "空"
    ],
    "answer": "空",
    "fullSentence": "夜の空を見上げました。",
    "explanation": "夜の空を見上げました。\nTôi ngước nhìn bầu trời đêm.\n空: bầu trời"
  },
  {
    "id": "tr_997",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi ngước nhìn bầu trời đêm.",
    "acceptedAnswers": [
      "夜の空を見上げました。",
      "夜の空を見上げました"
    ],
    "explanation": "夜の空を見上げました。\n(よるのそらをみあげました。)\n空: bầu trời"
  },
  {
    "id": "mc_998",
    "type": "multiple_choice",
    "question": "ちっとも có nghĩa là gì?",
    "word": "ちっとも",
    "reading": "ちっとも",
    "choices": [
      "sự nghiêm túc, thật lòng",
      "không… chút nào (khẩu ngữ)",
      "im lặng, ngừng nói",
      "cả đời, suốt đời"
    ],
    "answer": "không… chút nào (khẩu ngữ)",
    "explanation": "ちっとも (ちっとも): không… chút nào (khẩu ngữ)"
  },
  {
    "id": "fb_999",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この映画は",
    "sentenceSuffix": "怖くありません。",
    "choices": [
      "石炭",
      "世代",
      "～者",
      "ちっとも"
    ],
    "answer": "ちっとも",
    "fullSentence": "この映画はちっとも怖くありません。",
    "explanation": "この映画はちっとも怖くありません。\nBộ phim này không đáng sợ chút nào.\nちっとも: không… chút nào (khẩu ngữ)"
  },
  {
    "id": "tr_1000",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Bộ phim này không đáng sợ chút nào.",
    "acceptedAnswers": [
      "この映画はちっとも怖くありません。",
      "この映画はちっとも怖くありません"
    ],
    "explanation": "この映画はちっとも怖くありません。\n(このえいがはちっともこわくありません。)\nちっとも: không… chút nào (khẩu ngữ)"
  },
  {
    "id": "mc_1001",
    "type": "multiple_choice",
    "question": "地べた có nghĩa là gì?",
    "word": "地べた",
    "reading": "ぢべた",
    "choices": [
      "nối tiếp, trải thành dãy",
      "chuyến dã ngoại, thường do trường tổ chức",
      "trở nên phổ biến, được phổ cập",
      "mặt đất (cách nói đời thường)"
    ],
    "answer": "mặt đất (cách nói đời thường)",
    "explanation": "地べた (ぢべた): mặt đất (cách nói đời thường)"
  },
  {
    "id": "fb_1002",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "子どもが",
    "sentenceSuffix": "に座っています。",
    "choices": [
      "話題",
      "時刻",
      "要る",
      "地べた"
    ],
    "answer": "地べた",
    "fullSentence": "子どもが地べたに座っています。",
    "explanation": "子どもが地べたに座っています。\nĐứa trẻ đang ngồi bệt dưới đất.\n地べた: mặt đất (cách nói đời thường)"
  },
  {
    "id": "tr_1003",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Đứa trẻ đang ngồi bệt dưới đất.",
    "acceptedAnswers": [
      "子どもが地べたに座っています。",
      "子どもが地べたに座っています"
    ],
    "explanation": "子どもが地べたに座っています。\n(こどもがぢべたにすわっています。)\n地べた: mặt đất (cách nói đời thường)"
  },
  {
    "id": "mc_1004",
    "type": "multiple_choice",
    "question": "ゆする có nghĩa là gì?",
    "word": "ゆする",
    "reading": "ゆする",
    "choices": [
      "lay, rung, lắc",
      "vấn đề/chủ đề chính",
      "cốt thép",
      "nằm ở, tọa lạc"
    ],
    "answer": "lay, rung, lắc",
    "explanation": "ゆする (ゆする): lay, rung, lắc"
  },
  {
    "id": "tr_1005",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi lay vai đánh thức em trai.",
    "acceptedAnswers": [
      "弟の肩をゆすって起こしました。",
      "弟の肩をゆすって起こしました"
    ],
    "explanation": "弟の肩をゆすって起こしました。\n(おとうとのかたをゆすっておこしました。)\nゆする: lay, rung, lắc"
  },
  {
    "id": "mc_1006",
    "type": "multiple_choice",
    "question": "唄 có nghĩa là gì?",
    "word": "唄",
    "reading": "うた",
    "choices": [
      "mở rộng, trải ra",
      "bài hát, khúc hát (thường gặp với dân ca)",
      "hồi hộp lo lắng, thót tim",
      "màu vẽ, sơn vẽ"
    ],
    "answer": "bài hát, khúc hát (thường gặp với dân ca)",
    "explanation": "唄 (うた): bài hát, khúc hát (thường gặp với dân ca)"
  },
  {
    "id": "fb_1007",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "祖母は昔の",
    "sentenceSuffix": "を歌いました。",
    "choices": [
      "山の幸",
      "わざわざ",
      "唄",
      "飛び出す"
    ],
    "answer": "唄",
    "fullSentence": "祖母は昔の唄を歌いました。",
    "explanation": "祖母は昔の唄を歌いました。\nBà hát một khúc hát xưa.\n唄: bài hát, khúc hát (thường gặp với dân ca)"
  },
  {
    "id": "tr_1008",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Bà hát một khúc hát xưa.",
    "acceptedAnswers": [
      "祖母は昔の唄を歌いました。",
      "祖母は昔の唄を歌いました"
    ],
    "explanation": "祖母は昔の唄を歌いました。\n(そぼはむかしのうたをうたいました。)\n唄: bài hát, khúc hát (thường gặp với dân ca)"
  },
  {
    "id": "mc_1009",
    "type": "multiple_choice",
    "question": "暮らす có nghĩa là gì?",
    "word": "暮らす",
    "reading": "くらす",
    "choices": [
      "sản vật núi rừng như nấm, rau rừng",
      "mở rộng, trải ra",
      "làm vỡ; chia, chia nhỏ",
      "sống, sinh sống"
    ],
    "answer": "sống, sinh sống",
    "explanation": "暮らす (くらす): sống, sinh sống"
  },
  {
    "id": "tr_1010",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi sống với gia đình ở quê.",
    "acceptedAnswers": [
      "家族と田舎で暮らしています。",
      "家族と田舎で暮らしています"
    ],
    "explanation": "家族と田舎で暮らしています。\n(かぞくといなかでくらしています。)\n暮らす: sống, sinh sống"
  },
  {
    "id": "tr_1011",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi sống bằng tiền lương hưu.",
    "acceptedAnswers": [
      "年金で暮らしています。",
      "年金で暮らしています"
    ],
    "explanation": "年金で暮らしています。\n(ねんきんでくらしています。)\n暮らす: sống, sinh sống"
  },
  {
    "id": "mc_1012",
    "type": "multiple_choice",
    "question": "～後 có nghĩa là gì?",
    "word": "～後",
    "reading": "～ご",
    "choices": [
      "khá, tương đối",
      "du ký, bài ghi chép về chuyến du lịch",
      "sau…",
      "san lấp (biển, đầm…) để tạo đất"
    ],
    "answer": "sau…",
    "explanation": "～後 (～ご): sau…"
  },
  {
    "id": "tr_1013",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi tìm việc sau khi về nước.",
    "acceptedAnswers": [
      "帰国後に仕事を探します。",
      "帰国後に仕事を探します"
    ],
    "explanation": "帰国後に仕事を探します。\n(きこくごにしごとをさがします。)\n～後: sau…"
  },
  {
    "id": "mc_1014",
    "type": "multiple_choice",
    "question": "励ます có nghĩa là gì?",
    "word": "励ます",
    "reading": "はげます",
    "choices": [
      "chuyện có thật",
      "động viên, khích lệ",
      "nghỉ việc, về hưu tùy ngữ cảnh",
      "thành phố, đô thị"
    ],
    "answer": "động viên, khích lệ",
    "explanation": "励ます (はげます): động viên, khích lệ"
  },
  {
    "id": "tr_1015",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi động viên người bạn đang buồn.",
    "acceptedAnswers": [
      "落ち込んでいる友達を励ましました。",
      "落ち込んでいる友達を励ましました"
    ],
    "explanation": "落ち込んでいる友達を励ましました。\n(おちこんでいるともだちをはげましました。)\n励ます: động viên, khích lệ"
  },
  {
    "id": "mc_1016",
    "type": "multiple_choice",
    "question": "生きる có nghĩa là gì?",
    "word": "生きる",
    "reading": "いきる",
    "choices": [
      "một phần",
      "sống, tồn tại",
      "sự phong phú, giàu có",
      "điều thắc mắc, sự nghi ngờ"
    ],
    "answer": "sống, tồn tại",
    "explanation": "生きる (いきる): sống, tồn tại"
  },
  {
    "id": "tr_1017",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Cá sống trong nước.",
    "acceptedAnswers": [
      "魚は水の中で生きています。",
      "魚は水の中で生きています"
    ],
    "explanation": "魚は水の中で生きています。\n(さかなはみずのなかでいきています。)\n生きる: sống, tồn tại"
  },
  {
    "id": "tr_1018",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi mong ông sống lâu.",
    "acceptedAnswers": [
      "祖父には長く生きてほしいです。",
      "祖父には長く生きてほしいです"
    ],
    "explanation": "祖父には長く生きてほしいです。\n(そふにはながくいきてほしいです。)\n生きる: sống, tồn tại"
  },
  {
    "id": "mc_1019",
    "type": "multiple_choice",
    "question": "時代 có nghĩa là gì?",
    "word": "時代",
    "reading": "じだい",
    "choices": [
      "bờ biển, bãi biển",
      "ăn (khẩu ngữ thô, suồng sã)",
      "thời đại, thời kỳ",
      "vẻ lộng lẫy, sự xa hoa"
    ],
    "answer": "thời đại, thời kỳ",
    "explanation": "時代 (じだい): thời đại, thời kỳ"
  },
  {
    "id": "fb_1020",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "学生の",
    "sentenceSuffix": "によく旅行しました。",
    "choices": [
      "訪れる",
      "かけ間違い",
      "ございます",
      "時代"
    ],
    "answer": "時代",
    "fullSentence": "学生の時代によく旅行しました。",
    "explanation": "学生の時代によく旅行しました。\nThời sinh viên tôi thường đi du lịch.\n時代: thời đại, thời kỳ"
  },
  {
    "id": "tr_1021",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Thời sinh viên tôi thường đi du lịch.",
    "acceptedAnswers": [
      "学生の時代によく旅行しました。",
      "学生の時代によく旅行しました"
    ],
    "explanation": "学生の時代によく旅行しました。\n(がくせいのじだいによくりょこうしました。)\n時代: thời đại, thời kỳ"
  },
  {
    "id": "fb_1022",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "が変わっても、この歌は人気があります。",
    "choices": [
      "落ち込む",
      "時代",
      "かけ間違い",
      "平野"
    ],
    "answer": "時代",
    "fullSentence": "時代が変わっても、この歌は人気があります。",
    "explanation": "時代が変わっても、この歌は人気があります。\nDù thời đại thay đổi, bài hát này vẫn được yêu thích.\n時代: thời đại, thời kỳ"
  },
  {
    "id": "tr_1023",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Dù thời đại thay đổi, bài hát này vẫn được yêu thích.",
    "acceptedAnswers": [
      "時代が変わっても、この歌は人気があります。",
      "時代が変わっても、この歌は人気があります"
    ],
    "explanation": "時代が変わっても、この歌は人気があります。\n(じだいがかわっても、このうたはにんきがあります。)\n時代: thời đại, thời kỳ"
  },
  {
    "id": "mc_1024",
    "type": "multiple_choice",
    "question": "個性 có nghĩa là gì?",
    "word": "個性",
    "reading": "こせい",
    "choices": [
      "quý tộc",
      "cá tính, nét riêng",
      "áo cardigan, áo khoác len mở phía trước",
      "cướp, lấy mất"
    ],
    "answer": "cá tính, nét riêng",
    "explanation": "個性 (こせい): cá tính, nét riêng"
  },
  {
    "id": "fb_1025",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "一人一人の",
    "sentenceSuffix": "を大切にします。",
    "choices": [
      "かみさん",
      "個性",
      "人口",
      "デッキ"
    ],
    "answer": "個性",
    "fullSentence": "一人一人の個性を大切にします。",
    "explanation": "一人一人の個性を大切にします。\nChúng tôi trân trọng cá tính của từng người.\n個性: cá tính, nét riêng"
  },
  {
    "id": "tr_1026",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Chúng tôi trân trọng cá tính của từng người.",
    "acceptedAnswers": [
      "一人一人の個性を大切にします。",
      "一人一人の個性を大切にします"
    ],
    "explanation": "一人一人の個性を大切にします。\n(ひとりひとりのこせいをたいせつにします。)\n個性: cá tính, nét riêng"
  },
  {
    "id": "mc_1027",
    "type": "multiple_choice",
    "question": "～らしさ có nghĩa là gì?",
    "word": "～らしさ",
    "reading": "～らしさ",
    "choices": [
      "khắc, chạm, tạc",
      "nét đặc trưng, phẩm chất riêng của…",
      "được hưởng điều kiện tốt, may mắn có",
      "hối hận"
    ],
    "answer": "nét đặc trưng, phẩm chất riêng của…",
    "explanation": "～らしさ (～らしさ): nét đặc trưng, phẩm chất riêng của…"
  },
  {
    "id": "tr_1028",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi muốn trân trọng nét riêng của mình.",
    "acceptedAnswers": [
      "自分らしさを大切にしたいです。",
      "自分らしさを大切にしたいです"
    ],
    "explanation": "自分らしさを大切にしたいです。\n(じぶんらしさをたいせつにしたいです。)\n～らしさ: nét đặc trưng, phẩm chất riêng của…"
  },
  {
    "id": "mc_1029",
    "type": "multiple_choice",
    "question": "認める có nghĩa là gì?",
    "word": "認める",
    "reading": "みとめる",
    "choices": [
      "sắt",
      "cơ quan/trụ sở chính quyền cấp tỉnh của Nhật",
      "chiếu tatami",
      "thừa nhận, công nhận; chấp nhận, cho phép"
    ],
    "answer": "thừa nhận, công nhận; chấp nhận, cho phép",
    "explanation": "認める (みとめる): thừa nhận, công nhận; chấp nhận, cho phép"
  },
  {
    "id": "tr_1030",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi thừa nhận lỗi của mình.",
    "acceptedAnswers": [
      "自分の間違いを認めました。",
      "自分の間違いを認めました"
    ],
    "explanation": "自分の間違いを認めました。\n(じぶんのまちがいをみとめました。)\n認める: thừa nhận, công nhận; chấp nhận, cho phép"
  },
  {
    "id": "tr_1031",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Thầy cho phép dùng từ điển.",
    "acceptedAnswers": [
      "先生は辞書を使うことを認めました。",
      "先生は辞書を使うことを認めました"
    ],
    "explanation": "先生は辞書を使うことを認めました。\n(せんせいはじしょをつかうことをみとめました。)\n認める: thừa nhận, công nhận; chấp nhận, cho phép"
  },
  {
    "id": "mc_1032",
    "type": "multiple_choice",
    "question": "込める có nghĩa là gì?",
    "word": "込める",
    "reading": "込める",
    "choices": [
      "tuổi nghỉ hưu theo quy định",
      "cả đời, suốt đời",
      "đặt, gửi vào (tình cảm, tâm huyết)",
      "nước tắm còn lại trong bồn"
    ],
    "answer": "đặt, gửi vào (tình cảm, tâm huyết)",
    "explanation": "込める (込める): đặt, gửi vào (tình cảm, tâm huyết)"
  },
  {
    "id": "tr_1033",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi gửi lòng biết ơn vào lá thư.",
    "acceptedAnswers": [
      "手紙に感謝の気持ちを込めました。",
      "手紙に感謝の気持ちを込めました"
    ],
    "explanation": "手紙に感謝の気持ちを込めました。\n(てがみにかんしゃのきもちをこめました。)\n込める: đặt, gửi vào (tình cảm, tâm huyết)"
  },
  {
    "id": "tr_1034",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi nấu ăn bằng cả tấm lòng.",
    "acceptedAnswers": [
      "心を込めて料理を作ります。",
      "心を込めて料理を作ります"
    ],
    "explanation": "心を込めて料理を作ります。\n(こころをこめてりょうりをつくります。)\n込める: đặt, gửi vào (tình cảm, tâm huyết)"
  },
  {
    "id": "mc_1035",
    "type": "multiple_choice",
    "question": "許す có nghĩa là gì?",
    "word": "許す",
    "reading": "ゆるす",
    "choices": [
      "tha thứ; cho phép",
      "khu vực xung quanh…",
      "nối tiếp, trải thành dãy",
      "đỉnh (núi, vật cao)"
    ],
    "answer": "tha thứ; cho phép",
    "explanation": "許す (ゆるす): tha thứ; cho phép"
  },
  {
    "id": "tr_1036",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi tha thứ cho lỗi của bạn.",
    "acceptedAnswers": [
      "友達の間違いを許しました。",
      "友達の間違いを許しました"
    ],
    "explanation": "友達の間違いを許しました。\n(ともだちのまちがいをゆるしました。)\n許す: tha thứ; cho phép"
  },
  {
    "id": "tr_1037",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Bố mẹ cho phép tôi đi du lịch một mình.",
    "acceptedAnswers": [
      "両親は一人で旅行することを許してくれました。",
      "両親は一人で旅行することを許してくれました"
    ],
    "explanation": "両親は一人で旅行することを許してくれました。\n(りょうしんはひとりでりょこうすることをゆるしてくれました。)\n許す: tha thứ; cho phép"
  },
  {
    "id": "mc_1038",
    "type": "multiple_choice",
    "question": "消費 có nghĩa là gì?",
    "word": "消費",
    "reading": "しょうひ",
    "choices": [
      "mặt đất (cách nói đời thường)",
      "tiêu thụ, sử dụng hết",
      "shachihoko: tượng linh vật thân cá đầu thú trên nóc thành, đền…",
      "futsal, bóng đá sân nhỏ năm người"
    ],
    "answer": "tiêu thụ, sử dụng hết",
    "explanation": "消費 (しょうひ): tiêu thụ, sử dụng hết"
  },
  {
    "id": "fb_1039",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この機械は電気を多く",
    "sentenceSuffix": "します。",
    "choices": [
      "渓谷",
      "ときには",
      "消費",
      "石垣"
    ],
    "answer": "消費",
    "fullSentence": "この機械は電気を多く消費します。",
    "explanation": "この機械は電気を多く消費します。\nMáy này tiêu thụ nhiều điện.\n消費: tiêu thụ, sử dụng hết"
  },
  {
    "id": "tr_1040",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Máy này tiêu thụ nhiều điện.",
    "acceptedAnswers": [
      "この機械は電気を多く消費します。",
      "この機械は電気を多く消費します"
    ],
    "explanation": "この機械は電気を多く消費します。\n(このきかいはでんきをおおくしょうひします。)\n消費: tiêu thụ, sử dụng hết"
  },
  {
    "id": "mc_1041",
    "type": "multiple_choice",
    "question": "～者 có nghĩa là gì?",
    "word": "～者",
    "reading": "～しゃ",
    "choices": [
      "chó hỗ trợ người khuyết tật vận động",
      "ỉu xìu, buồn rầu",
      "cái thang",
      "người thực hiện/thuộc về…"
    ],
    "answer": "người thực hiện/thuộc về…",
    "explanation": "～者 (～しゃ): người thực hiện/thuộc về…"
  },
  {
    "id": "tr_1042",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Chúng tôi nghe ý kiến người tiêu dùng.",
    "acceptedAnswers": [
      "消費者の意見を聞きます。",
      "消費者の意見を聞きます"
    ],
    "explanation": "消費者の意見を聞きます。\n(しょうひしゃのいけんをききます。)\n～者: người thực hiện/thuộc về…"
  },
  {
    "id": "mc_1043",
    "type": "multiple_choice",
    "question": "開発 có nghĩa là gì?",
    "word": "開発",
    "reading": "かいはつ",
    "choices": [
      "đi bộ đường núi",
      "cháu (của ông bà)",
      "bản đồ du lịch",
      "phát triển, tạo sản phẩm/công nghệ mới"
    ],
    "answer": "phát triển, tạo sản phẩm/công nghệ mới",
    "explanation": "開発 (かいはつ): phát triển, tạo sản phẩm/công nghệ mới"
  },
  {
    "id": "fb_1044",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "新しい商品を",
    "sentenceSuffix": "しています。",
    "choices": [
      "鉄",
      "開発",
      "地名",
      "間違う"
    ],
    "answer": "開発",
    "fullSentence": "新しい商品を開発しています。",
    "explanation": "新しい商品を開発しています。\nChúng tôi đang phát triển sản phẩm mới.\n開発: phát triển, tạo sản phẩm/công nghệ mới"
  },
  {
    "id": "tr_1045",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Chúng tôi đang phát triển sản phẩm mới.",
    "acceptedAnswers": [
      "新しい商品を開発しています。",
      "新しい商品を開発しています"
    ],
    "explanation": "新しい商品を開発しています。\n(あたらしいしょうひんをかいはつしています。)\n開発: phát triển, tạo sản phẩm/công nghệ mới"
  },
  {
    "id": "mc_1046",
    "type": "multiple_choice",
    "question": "実話 có nghĩa là gì?",
    "word": "実話",
    "reading": "じつわ",
    "choices": [
      "thời kỳ; nhóm tuổi, thế hệ",
      "vẫn còn nhiều; còn lâu mới đạt",
      "chuyện có thật",
      "nỗ lực"
    ],
    "answer": "chuyện có thật",
    "explanation": "実話 (じつわ): chuyện có thật"
  },
  {
    "id": "fb_1047",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この映画は",
    "sentenceSuffix": "を映画にしたものです。",
    "choices": [
      "湿る",
      "話題",
      "実話",
      "一筆箋"
    ],
    "answer": "実話",
    "fullSentence": "この映画は実話を映画にしたものです。",
    "explanation": "この映画は実話を映画にしたものです。\nBộ phim này được làm từ một câu chuyện có thật.\n実話: chuyện có thật"
  },
  {
    "id": "tr_1048",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Bộ phim này được làm từ một câu chuyện có thật.",
    "acceptedAnswers": [
      "この映画は実話を映画にしたものです。",
      "この映画は実話を映画にしたものです"
    ],
    "explanation": "この映画は実話を映画にしたものです。\n(このえいがはじつわをえいがにしたものです。)\n実話: chuyện có thật"
  },
  {
    "id": "mc_1049",
    "type": "multiple_choice",
    "question": "コマーシャル có nghĩa là gì?",
    "word": "コマーシャル",
    "reading": "コマーシャル",
    "choices": [
      "in",
      "nam và nữ",
      "từ đếm nhà, cửa hàng, tòa nhà nhỏ",
      "quảng cáo, thường trên TV/radio"
    ],
    "answer": "quảng cáo, thường trên TV/radio",
    "explanation": "コマーシャル (コマーシャル): quảng cáo, thường trên TV/radio"
  },
  {
    "id": "fb_1050",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "テレビで新しい",
    "sentenceSuffix": "を見ました。",
    "choices": [
      "高価",
      "わ（けがしたわ）",
      "込める",
      "コマーシャル"
    ],
    "answer": "コマーシャル",
    "fullSentence": "テレビで新しいコマーシャルを見ました。",
    "explanation": "テレビで新しいコマーシャルを見ました。\nTôi xem một quảng cáo mới trên TV.\nコマーシャル: quảng cáo, thường trên TV/radio"
  },
  {
    "id": "tr_1051",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi xem một quảng cáo mới trên TV.",
    "acceptedAnswers": [
      "テレビで新しいコマーシャルを見ました。",
      "テレビで新しいコマーシャルを見ました"
    ],
    "explanation": "テレビで新しいコマーシャルを見ました。\n(テレビであたらしいコマーシャルをみました。)\nコマーシャル: quảng cáo, thường trên TV/radio"
  },
  {
    "id": "mc_1052",
    "type": "multiple_choice",
    "question": "フリーダイヤル có nghĩa là gì?",
    "word": "フリーダイヤル",
    "reading": "フリーダイヤル",
    "choices": [
      "số điện thoại miễn cước cho người gọi",
      "vô địch, giành giải nhất",
      "in",
      "mọi năm; năm bình thường làm mốc so sánh"
    ],
    "answer": "số điện thoại miễn cước cho người gọi",
    "explanation": "フリーダイヤル (フリーダイヤル): số điện thoại miễn cước cho người gọi"
  },
  {
    "id": "fb_1053",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "問い合わせは",
    "sentenceSuffix": "に電話してください。",
    "choices": [
      "ドレス",
      "フリーダイヤル",
      "通話",
      "全て"
    ],
    "answer": "フリーダイヤル",
    "fullSentence": "問い合わせはフリーダイヤルに電話してください。",
    "explanation": "問い合わせはフリーダイヤルに電話してください。\nNếu cần hỏi thông tin, hãy gọi số miễn cước.\nフリーダイヤル: số điện thoại miễn cước cho người gọi"
  },
  {
    "id": "tr_1054",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Nếu cần hỏi thông tin, hãy gọi số miễn cước.",
    "acceptedAnswers": [
      "問い合わせはフリーダイヤルに電話してください。",
      "問い合わせはフリーダイヤルに電話してください"
    ],
    "explanation": "問い合わせはフリーダイヤルに電話してください。\n(といあわせはフリーダイヤルにでんわしてください。)\nフリーダイヤル: số điện thoại miễn cước cho người gọi"
  },
  {
    "id": "mc_1055",
    "type": "multiple_choice",
    "question": "～製 có nghĩa là gì?",
    "word": "～製",
    "reading": "～せい",
    "choices": [
      "nằm ở, tọa lạc",
      "trung tâm đô thị lớn",
      "không được, không ổn, vô ích",
      "được làm bằng…; sản xuất tại…"
    ],
    "answer": "được làm bằng…; sản xuất tại…",
    "explanation": "～製 (～せい): được làm bằng…; sản xuất tại…"
  },
  {
    "id": "tr_1056",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi mua túi làm bằng da.",
    "acceptedAnswers": [
      "革製のかばんを買いました。",
      "革製のかばんを買いました"
    ],
    "explanation": "革製のかばんを買いました。\n(かわせいのかばんをかいました。)\n～製: được làm bằng…; sản xuất tại…"
  },
  {
    "id": "tr_1057",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Đây là đồng hồ sản xuất tại Nhật.",
    "acceptedAnswers": [
      "これは日本製の時計です。",
      "これは日本製の時計です"
    ],
    "explanation": "これは日本製の時計です。\n(これはにほんせいのとけいです。)\n～製: được làm bằng…; sản xuất tại…"
  },
  {
    "id": "mc_1058",
    "type": "multiple_choice",
    "question": "かけ間違い có nghĩa là gì?",
    "word": "かけ間違い",
    "reading": "かけまちがい",
    "choices": [
      "cảm thấy, có cảm giác rằng…",
      "việc gọi nhầm số điện thoại",
      "về nhà",
      "ếch"
    ],
    "answer": "việc gọi nhầm số điện thoại",
    "explanation": "かけ間違い (かけまちがい): việc gọi nhầm số điện thoại"
  },
  {
    "id": "fb_1059",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "すみません、電話の",
    "sentenceSuffix": "です。",
    "choices": [
      "朝日",
      "かけ間違い",
      "小鳥",
      "メッセージ"
    ],
    "answer": "かけ間違い",
    "fullSentence": "すみません、電話のかけ間違いです。",
    "explanation": "すみません、電話のかけ間違いです。\nXin lỗi, tôi gọi nhầm số.\nかけ間違い: việc gọi nhầm số điện thoại"
  },
  {
    "id": "tr_1060",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Xin lỗi, tôi gọi nhầm số.",
    "acceptedAnswers": [
      "すみません、電話のかけ間違いです。",
      "すみません、電話のかけ間違いです"
    ],
    "explanation": "すみません、電話のかけ間違いです。\n(すみません、でんわのかけまちがいです。)\nかけ間違い: việc gọi nhầm số điện thoại"
  },
  {
    "id": "mc_1061",
    "type": "multiple_choice",
    "question": "いったい có nghĩa là gì?",
    "word": "いったい",
    "reading": "いったい",
    "choices": [
      "rốt cuộc, không biết là… (nhấn câu hỏi)",
      "dân số",
      "mẫu, hình mẫu; người mẫu",
      "đầy ấn tượng mạnh, rất hùng tráng/ngoạn mục"
    ],
    "answer": "rốt cuộc, không biết là… (nhấn câu hỏi)",
    "explanation": "いったい (いったい): rốt cuộc, không biết là… (nhấn câu hỏi)"
  },
  {
    "id": "fb_1062",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "何があったんですか。",
    "choices": [
      "いったい",
      "近況",
      "薦める",
      "瓦"
    ],
    "answer": "いったい",
    "fullSentence": "いったい何があったんですか。",
    "explanation": "いったい何があったんですか。\nRốt cuộc đã xảy ra chuyện gì vậy?\nいったい: rốt cuộc, không biết là… (nhấn câu hỏi)"
  },
  {
    "id": "tr_1063",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Rốt cuộc đã xảy ra chuyện gì vậy?",
    "acceptedAnswers": [
      "いったい何があったんですか。",
      "いったい何があったんですか"
    ],
    "explanation": "いったい何があったんですか。\n(いったいなにがあったんですか。)\nいったい: rốt cuộc, không biết là… (nhấn câu hỏi)"
  },
  {
    "id": "mc_1064",
    "type": "multiple_choice",
    "question": "文字 có nghĩa là gì?",
    "word": "文字",
    "reading": "もじ",
    "choices": [
      "thế hệ",
      "làm xong, giải quyết xong; làm cho qua bằng…",
      "chữ, ký tự",
      "khu vườn nổi tiếng, đẹp"
    ],
    "answer": "chữ, ký tự",
    "explanation": "文字 (もじ): chữ, ký tự"
  },
  {
    "id": "fb_1065",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この",
    "sentenceSuffix": "は小さくて読めません。",
    "choices": [
      "カラフル",
      "文字",
      "太陽",
      "トレッキング"
    ],
    "answer": "文字",
    "fullSentence": "この文字は小さくて読めません。",
    "explanation": "この文字は小さくて読めません。\nChữ này nhỏ quá nên tôi không đọc được.\n文字: chữ, ký tự"
  },
  {
    "id": "tr_1066",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Chữ này nhỏ quá nên tôi không đọc được.",
    "acceptedAnswers": [
      "この文字は小さくて読めません。",
      "この文字は小さくて読めません"
    ],
    "explanation": "この文字は小さくて読めません。\n(このもじはちいさくてよめません。)\n文字: chữ, ký tự"
  },
  {
    "id": "mc_1067",
    "type": "multiple_choice",
    "question": "イメージ có nghĩa là gì?",
    "word": "イメージ",
    "reading": "イメージ",
    "choices": [
      "hình dung, tưởng tượng",
      "im lặng, ngừng nói",
      "xe tải",
      "cây sugi, tuyết tùng Nhật Bản"
    ],
    "answer": "hình dung, tưởng tượng",
    "explanation": "イメージ (イメージ): hình dung, tưởng tượng"
  },
  {
    "id": "fb_1068",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "将来の生活を",
    "sentenceSuffix": "します。",
    "choices": [
      "もう少しで",
      "村人",
      "カラフル",
      "イメージ"
    ],
    "answer": "イメージ",
    "fullSentence": "将来の生活をイメージします。",
    "explanation": "将来の生活をイメージします。\nTôi hình dung cuộc sống tương lai.\nイメージ: hình dung, tưởng tượng"
  },
  {
    "id": "tr_1069",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi hình dung cuộc sống tương lai.",
    "acceptedAnswers": [
      "将来の生活をイメージします。",
      "将来の生活をイメージします"
    ],
    "explanation": "将来の生活をイメージします。\n(しょうらいのせいかつをイメージします。)\nイメージ: hình dung, tưởng tượng"
  },
  {
    "id": "fb_1070",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "日本にどんな",
    "sentenceSuffix": "がありますか。",
    "choices": [
      "イメージ",
      "グリーン車",
      "ドレス",
      "雲"
    ],
    "answer": "イメージ",
    "fullSentence": "日本にどんなイメージがありますか。",
    "explanation": "日本にどんなイメージがありますか。\nBạn có ấn tượng như thế nào về Nhật Bản?\nイメージ: hình dung, tưởng tượng"
  },
  {
    "id": "tr_1071",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Bạn có ấn tượng như thế nào về Nhật Bản?",
    "acceptedAnswers": [
      "日本にどんなイメージがありますか。",
      "日本にどんなイメージがありますか"
    ],
    "explanation": "日本にどんなイメージがありますか。\n(にほんにどんなイメージがありますか。)\nイメージ: hình dung, tưởng tượng"
  },
  {
    "id": "mc_1072",
    "type": "multiple_choice",
    "question": "数える có nghĩa là gì?",
    "word": "数える",
    "reading": "かぞえる",
    "choices": [
      "đếm",
      "cách nói suồng sã, ngang hàng, không dùng kính ngữ",
      "treo, mắc lên",
      "tin nhắn, lời nhắn, thông điệp"
    ],
    "answer": "đếm",
    "explanation": "数える (かぞえる): đếm"
  },
  {
    "id": "tr_1073",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đếm số sinh viên.",
    "acceptedAnswers": [
      "学生の数を数えます。",
      "学生の数を数えます"
    ],
    "explanation": "学生の数を数えます。\n(がくせいのかずをかぞえます。)\n数える: đếm"
  },
  {
    "id": "tr_1074",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Hãy đếm từ một đến mười.",
    "acceptedAnswers": [
      "一から十まで数えてください。",
      "一から十まで数えてください"
    ],
    "explanation": "一から十まで数えてください。\n(いちからじゅうまでかぞえてください。)\n数える: đếm"
  },
  {
    "id": "mc_1075",
    "type": "multiple_choice",
    "question": "遠足 có nghĩa là gì?",
    "word": "遠足",
    "reading": "えんそく",
    "choices": [
      "chiều dọc",
      "thác nước",
      "chuyến dã ngoại, thường do trường tổ chức",
      "người có tuổi, lớn tuổi"
    ],
    "answer": "chuyến dã ngoại, thường do trường tổ chức",
    "explanation": "遠足 (えんそく): chuyến dã ngoại, thường do trường tổ chức"
  },
  {
    "id": "fb_1076",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "明日は学校の",
    "sentenceSuffix": "に行きます。",
    "choices": [
      "～末",
      "わざわざ",
      "彫る",
      "遠足"
    ],
    "answer": "遠足",
    "fullSentence": "明日は学校の遠足に行きます。",
    "explanation": "明日は学校の遠足に行きます。\nNgày mai tôi đi dã ngoại cùng trường.\n遠足: chuyến dã ngoại, thường do trường tổ chức"
  },
  {
    "id": "tr_1077",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Ngày mai tôi đi dã ngoại cùng trường.",
    "acceptedAnswers": [
      "明日は学校の遠足に行きます。",
      "明日は学校の遠足に行きます"
    ],
    "explanation": "明日は学校の遠足に行きます。\n(あしたはがっこうのえんそくにいきます。)\n遠足: chuyến dã ngoại, thường do trường tổ chức"
  },
  {
    "id": "mc_1078",
    "type": "multiple_choice",
    "question": "作家 có nghĩa là gì?",
    "word": "作家",
    "reading": "さっか",
    "choices": [
      "bạn bè, người bạn",
      "tinh ý, chu đáo, biết ý",
      "tổ chức (sự kiện)",
      "nhà văn; người sáng tác"
    ],
    "answer": "nhà văn; người sáng tác",
    "explanation": "作家 (さっか): nhà văn; người sáng tác"
  },
  {
    "id": "fb_1079",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "将来は",
    "sentenceSuffix": "になりたいです。",
    "choices": [
      "名産品",
      "より～",
      "訳",
      "作家"
    ],
    "answer": "作家",
    "fullSentence": "将来は作家になりたいです。",
    "explanation": "将来は作家になりたいです。\nTương lai tôi muốn trở thành nhà văn.\n作家: nhà văn; người sáng tác"
  },
  {
    "id": "tr_1080",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tương lai tôi muốn trở thành nhà văn.",
    "acceptedAnswers": [
      "将来は作家になりたいです。",
      "将来は作家になりたいです"
    ],
    "explanation": "将来は作家になりたいです。\n(しょうらいはさっかになりたいです。)\n作家: nhà văn; người sáng tác"
  },
  {
    "id": "mc_1081",
    "type": "multiple_choice",
    "question": "４こま漫画 có nghĩa là gì?",
    "word": "４こま漫画",
    "reading": "よんこままんが",
    "choices": [
      "truyện tranh bốn khung",
      "bình đẳng, ngang hàng",
      "giấy nhỏ dài để viết vài dòng nhắn gửi",
      "trạng thái không mặc quần áo, trần truồng"
    ],
    "answer": "truyện tranh bốn khung",
    "explanation": "４こま漫画 (よんこままんが): truyện tranh bốn khung"
  },
  {
    "id": "fb_1082",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "新聞の",
    "sentenceSuffix": "を読みます。",
    "choices": [
      "姿",
      "４こま漫画",
      "はしご",
      "石炭"
    ],
    "answer": "４こま漫画",
    "fullSentence": "新聞の４こま漫画を読みます。",
    "explanation": "新聞の４こま漫画を読みます。\nTôi đọc truyện tranh bốn khung trên báo.\n４こま漫画: truyện tranh bốn khung"
  },
  {
    "id": "tr_1083",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đọc truyện tranh bốn khung trên báo.",
    "acceptedAnswers": [
      "新聞の４こま漫画を読みます。",
      "新聞の４こま漫画を読みます"
    ],
    "explanation": "新聞の４こま漫画を読みます。\n(しんぶんのよんこままんがをよみます。)\n４こま漫画: truyện tranh bốn khung"
  },
  {
    "id": "mc_1084",
    "type": "multiple_choice",
    "question": "せりふ có nghĩa là gì?",
    "word": "せりふ",
    "reading": "せりふ",
    "choices": [
      "cách đọc phân số: mẫu số trước, tử số sau",
      "lời thoại",
      "chuột máy tính",
      "quý tộc"
    ],
    "answer": "lời thoại",
    "explanation": "せりふ (せりふ): lời thoại"
  },
  {
    "id": "fb_1085",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "劇の",
    "sentenceSuffix": "を覚えます。",
    "choices": [
      "心より",
      "現金",
      "後悔",
      "せりふ"
    ],
    "answer": "せりふ",
    "fullSentence": "劇のせりふを覚えます。",
    "explanation": "劇のせりふを覚えます。\nTôi học thuộc lời thoại của vở kịch.\nせりふ: lời thoại"
  },
  {
    "id": "tr_1086",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi học thuộc lời thoại của vở kịch.",
    "acceptedAnswers": [
      "劇のせりふを覚えます。",
      "劇のせりふを覚えます"
    ],
    "explanation": "劇のせりふを覚えます。\n(げきのせりふをおぼえます。)\nせりふ: lời thoại"
  },
  {
    "id": "mc_1087",
    "type": "multiple_choice",
    "question": "登場人物 có nghĩa là gì?",
    "word": "登場人物",
    "reading": "とうじょうじんぶつ",
    "choices": [
      "ngay, lập tức bắt tay làm",
      "nhân vật trong truyện, phim…",
      "chiều vòng trong của tuyến vòng",
      "phía, bên…"
    ],
    "answer": "nhân vật trong truyện, phim…",
    "explanation": "登場人物 (とうじょうじんぶつ): nhân vật trong truyện, phim…"
  },
  {
    "id": "fb_1088",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "物語の",
    "sentenceSuffix": "を紹介します。",
    "choices": [
      "～代",
      "中古品",
      "梅雨",
      "登場人物"
    ],
    "answer": "登場人物",
    "fullSentence": "物語の登場人物を紹介します。",
    "explanation": "物語の登場人物を紹介します。\nTôi giới thiệu nhân vật trong truyện.\n登場人物: nhân vật trong truyện, phim…"
  },
  {
    "id": "tr_1089",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi giới thiệu nhân vật trong truyện.",
    "acceptedAnswers": [
      "物語の登場人物を紹介します。",
      "物語の登場人物を紹介します"
    ],
    "explanation": "物語の登場人物を紹介します。\n(ものがたりのとうじょうじんぶつをしょうかいします。)\n登場人物: nhân vật trong truyện, phim…"
  },
  {
    "id": "mc_1090",
    "type": "multiple_choice",
    "question": "はしご có nghĩa là gì?",
    "word": "はしご",
    "reading": "はしご",
    "choices": [
      "cái thang",
      "cảm thấy, có cảm giác rằng…",
      "để lộ, phơi ra; ngâm/phơi để tẩy trắng",
      "đón người; đón một thời điểm, giai đoạn"
    ],
    "answer": "cái thang",
    "explanation": "はしご (はしご): cái thang"
  },
  {
    "id": "fb_1091",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "を登って屋根に上がります。",
    "choices": [
      "目上",
      "名園",
      "はしご",
      "合わせる"
    ],
    "answer": "はしご",
    "fullSentence": "はしごを登って屋根に上がります。",
    "explanation": "はしごを登って屋根に上がります。\nTôi leo thang lên mái nhà.\nはしご: cái thang"
  },
  {
    "id": "tr_1092",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi leo thang lên mái nhà.",
    "acceptedAnswers": [
      "はしごを登って屋根に上がります。",
      "はしごを登って屋根に上がります"
    ],
    "explanation": "はしごを登って屋根に上がります。\n(はしごをのぼってやねにあがります。)\nはしご: cái thang"
  },
  {
    "id": "mc_1093",
    "type": "multiple_choice",
    "question": "わくわく có nghĩa là gì?",
    "word": "わくわく",
    "reading": "わくわく",
    "choices": [
      "blog, nhật ký trên mạng",
      "chỉ định, quy định",
      "háo hức, hồi hộp vui sướng",
      "bài hát, khúc hát (thường gặp với dân ca)"
    ],
    "answer": "háo hức, hồi hộp vui sướng",
    "explanation": "わくわく (わくわく): háo hức, hồi hộp vui sướng"
  },
  {
    "id": "fb_1094",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "明日の旅行に",
    "sentenceSuffix": "しています。",
    "choices": [
      "さらす",
      "わくわく",
      "ハプニング",
      "セメント"
    ],
    "answer": "わくわく",
    "fullSentence": "明日の旅行にわくわくしています。",
    "explanation": "明日の旅行にわくわくしています。\nTôi đang háo hức về chuyến đi ngày mai.\nわくわく: háo hức, hồi hộp vui sướng"
  },
  {
    "id": "tr_1095",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đang háo hức về chuyến đi ngày mai.",
    "acceptedAnswers": [
      "明日の旅行にわくわくしています。",
      "明日の旅行にわくわくしています"
    ],
    "explanation": "明日の旅行にわくわくしています。\n(あしたのりょこうにわくわくしています。)\nわくわく: háo hức, hồi hộp vui sướng"
  },
  {
    "id": "mc_1096",
    "type": "multiple_choice",
    "question": "はらはら có nghĩa là gì?",
    "word": "はらはら",
    "reading": "はらはら",
    "choices": [
      "hồi hộp lo lắng, thót tim",
      "thung lũng hẹp có sông/suối, hẻm núi",
      "cửa sổ tàu/xe; cảnh nhìn qua cửa sổ",
      "trở nên phổ biến, được phổ cập"
    ],
    "answer": "hồi hộp lo lắng, thót tim",
    "explanation": "はらはら (はらはら): hồi hộp lo lắng, thót tim"
  },
  {
    "id": "fb_1097",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "子どもが木に登るのを見て、",
    "sentenceSuffix": "しました。",
    "choices": [
      "はらはら",
      "地元",
      "カエル",
      "優勝"
    ],
    "answer": "はらはら",
    "fullSentence": "子どもが木に登るのを見て、はらはらしました。",
    "explanation": "子どもが木に登るのを見て、はらはらしました。\nTôi thót tim khi nhìn đứa trẻ leo cây.\nはらはら: hồi hộp lo lắng, thót tim"
  },
  {
    "id": "tr_1098",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi thót tim khi nhìn đứa trẻ leo cây.",
    "acceptedAnswers": [
      "子どもが木に登るのを見て、はらはらしました。",
      "子どもが木に登るのを見て、はらはらしました"
    ],
    "explanation": "子どもが木に登るのを見て、はらはらしました。\n(こどもがきにのぼるのをみて、はらはらしました。)\nはらはら: hồi hộp lo lắng, thót tim"
  },
  {
    "id": "mc_1099",
    "type": "multiple_choice",
    "question": "しょんぼり có nghĩa là gì?",
    "word": "しょんぼり",
    "reading": "しょんぼり",
    "choices": [
      "cất công, đặc biệt dành công sức để làm",
      "nam và nữ",
      "đẹp, đẹp đẽ",
      "ỉu xìu, buồn rầu"
    ],
    "answer": "ỉu xìu, buồn rầu",
    "explanation": "しょんぼり (しょんぼり): ỉu xìu, buồn rầu"
  },
  {
    "id": "fb_1100",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "試合に負けて、",
    "sentenceSuffix": "しています。",
    "choices": [
      "受ける（誘いを受ける）",
      "返る",
      "しょんぼり",
      "許可"
    ],
    "answer": "しょんぼり",
    "fullSentence": "試合に負けて、しょんぼりしています。",
    "explanation": "試合に負けて、しょんぼりしています。\nTôi đang buồn rầu vì thua trận.\nしょんぼり: ỉu xìu, buồn rầu"
  },
  {
    "id": "tr_1101",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đang buồn rầu vì thua trận.",
    "acceptedAnswers": [
      "試合に負けて、しょんぼりしています。",
      "試合に負けて、しょんぼりしています"
    ],
    "explanation": "試合に負けて、しょんぼりしています。\n(しあいにまけて、しょんぼりしています。)\nしょんぼり: ỉu xìu, buồn rầu"
  },
  {
    "id": "mc_1102",
    "type": "multiple_choice",
    "question": "駄目 có nghĩa là gì?",
    "word": "駄目",
    "reading": "だめ",
    "choices": [
      "nam và nữ",
      "sắt",
      "làm bẩn",
      "không được, không ổn, vô ích"
    ],
    "answer": "không được, không ổn, vô ích",
    "explanation": "駄目 (だめ): không được, không ổn, vô ích"
  },
  {
    "id": "fb_1103",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "ここに車を止めては",
    "sentenceSuffix": "です。",
    "choices": [
      "まく",
      "体調",
      "駄目",
      "タメ口"
    ],
    "answer": "駄目",
    "fullSentence": "ここに車を止めては駄目です。",
    "explanation": "ここに車を止めては駄目です。\nKhông được đỗ xe ở đây.\n駄目: không được, không ổn, vô ích"
  },
  {
    "id": "tr_1104",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Không được đỗ xe ở đây.",
    "acceptedAnswers": [
      "ここに車を止めては駄目です。",
      "ここに車を止めては駄目です"
    ],
    "explanation": "ここに車を止めては駄目です。\n(ここにくるまをとめてはだめです。)\n駄目: không được, không ổn, vô ích"
  },
  {
    "id": "fb_1105",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "何度やっても",
    "sentenceSuffix": "でした。",
    "choices": [
      "～金",
      "文字",
      "合わせる",
      "駄目"
    ],
    "answer": "駄目",
    "fullSentence": "何度やっても駄目でした。",
    "explanation": "何度やっても駄目でした。\nLàm bao nhiêu lần cũng không được.\n駄目: không được, không ổn, vô ích"
  },
  {
    "id": "tr_1106",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Làm bao nhiêu lần cũng không được.",
    "acceptedAnswers": [
      "何度やっても駄目でした。",
      "何度やっても駄目でした"
    ],
    "explanation": "何度やっても駄目でした。\n(なんどやってもだめでした。)\n駄目: không được, không ổn, vô ích"
  },
  {
    "id": "mc_1107",
    "type": "multiple_choice",
    "question": "だって có nghĩa là gì?",
    "word": "だって",
    "reading": "だって",
    "choices": [
      "khá, tương đối",
      "ngoài ra, xin nói thêm; vẫn còn",
      "vì mà…; ngay cả… cũng… (khẩu ngữ)",
      "cả đời, suốt đời"
    ],
    "answer": "vì mà…; ngay cả… cũng… (khẩu ngữ)",
    "explanation": "だって (だって): vì mà…; ngay cả… cũng… (khẩu ngữ)"
  },
  {
    "id": "fb_1108",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "、時間がなかったんです。",
    "choices": [
      "停車",
      "だって",
      "景気",
      "タイミング"
    ],
    "answer": "だって",
    "fullSentence": "だって、時間がなかったんです。",
    "explanation": "だって、時間がなかったんです。\nVì tôi không có thời gian mà.\nだって: vì mà…; ngay cả… cũng… (khẩu ngữ)"
  },
  {
    "id": "tr_1109",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Vì tôi không có thời gian mà.",
    "acceptedAnswers": [
      "だって、時間がなかったんです。",
      "だって、時間がなかったんです"
    ],
    "explanation": "だって、時間がなかったんです。\n(だって、じかんがなかったんです。)\nだって: vì mà…; ngay cả… cũng… (khẩu ngữ)"
  },
  {
    "id": "fb_1110",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "私",
    "sentenceSuffix": "できます。",
    "choices": [
      "裸",
      "だって",
      "倒す",
      "マーク"
    ],
    "answer": "だって",
    "fullSentence": "私だってできます。",
    "explanation": "私だってできます。\nNgay cả tôi cũng làm được.\nだって: vì mà…; ngay cả… cũng… (khẩu ngữ)"
  },
  {
    "id": "tr_1111",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Ngay cả tôi cũng làm được.",
    "acceptedAnswers": [
      "私だってできます。",
      "私だってできます"
    ],
    "explanation": "私だってできます。\n(わたしだってできます。)\nだって: vì mà…; ngay cả… cũng… (khẩu ngữ)"
  },
  {
    "id": "mc_1112",
    "type": "multiple_choice",
    "question": "勘違い có nghĩa là gì?",
    "word": "勘違い",
    "reading": "かんちがい",
    "choices": [
      "nhầm, hiểu sai",
      "bây giờ thì mới/đúng là… nhưng trước đây…",
      "rừng",
      "vẻ lộng lẫy, sự xa hoa"
    ],
    "answer": "nhầm, hiểu sai",
    "explanation": "勘違い (かんちがい): nhầm, hiểu sai"
  },
  {
    "id": "fb_1113",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "日曜日を土曜日と",
    "sentenceSuffix": "しました。",
    "choices": [
      "落ち込む",
      "～周辺",
      "許す",
      "勘違い"
    ],
    "answer": "勘違い",
    "fullSentence": "日曜日を土曜日と勘違いしました。",
    "explanation": "日曜日を土曜日と勘違いしました。\nTôi nhầm chủ nhật là thứ bảy.\n勘違い: nhầm, hiểu sai"
  },
  {
    "id": "tr_1114",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi nhầm chủ nhật là thứ bảy.",
    "acceptedAnswers": [
      "日曜日を土曜日と勘違いしました。",
      "日曜日を土曜日と勘違いしました"
    ],
    "explanation": "日曜日を土曜日と勘違いしました。\n(にちようびをどようびとかんちがいしました。)\n勘違い: nhầm, hiểu sai"
  },
  {
    "id": "fb_1115",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "休みだと",
    "sentenceSuffix": "していました。",
    "choices": [
      "勘違い",
      "迫力満点",
      "タワー",
      "意外"
    ],
    "answer": "勘違い",
    "fullSentence": "休みだと勘違いしていました。",
    "explanation": "休みだと勘違いしていました。\nTôi đã nhầm tưởng là ngày nghỉ.\n勘違い: nhầm, hiểu sai"
  },
  {
    "id": "tr_1116",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đã nhầm tưởng là ngày nghỉ.",
    "acceptedAnswers": [
      "休みだと勘違いしていました。",
      "休みだと勘違いしていました"
    ],
    "explanation": "休みだと勘違いしていました。\n(やすみだとかんちがいしていました。)\n勘違い: nhầm, hiểu sai"
  },
  {
    "id": "mc_1117",
    "type": "multiple_choice",
    "question": "顔が広い có nghĩa là gì?",
    "word": "顔が広い",
    "reading": "かおがひろい",
    "choices": [
      "than đá",
      "cú sốc, sự bàng hoàng",
      "gói, bao bọc",
      "quen biết rộng"
    ],
    "answer": "quen biết rộng",
    "explanation": "顔が広い (かおがひろい): quen biết rộng"
  },
  {
    "id": "fb_1118",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "父はこの町で",
    "sentenceSuffix": "です。",
    "choices": [
      "なんか",
      "顔が広い",
      "イメージ",
      "縦"
    ],
    "answer": "顔が広い",
    "fullSentence": "父はこの町で顔が広いです。",
    "explanation": "父はこの町で顔が広いです。\nBố tôi quen biết rộng ở thị trấn này.\n顔が広い: quen biết rộng"
  },
  {
    "id": "tr_1119",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Bố tôi quen biết rộng ở thị trấn này.",
    "acceptedAnswers": [
      "父はこの町で顔が広いです。",
      "父はこの町で顔が広いです"
    ],
    "explanation": "父はこの町で顔が広いです。\n(ちちはこのまちでかおがひろいです。)\n顔が広い: quen biết rộng"
  },
  {
    "id": "mc_1120",
    "type": "multiple_choice",
    "question": "顔から火が出る có nghĩa là gì?",
    "word": "顔から火が出る",
    "reading": "かおからひがでる",
    "choices": [
      "xấu hổ đến nóng bừng mặt",
      "phong cảnh",
      "được sản xuất/trồng/đánh bắt tại…",
      "váy đầm, lễ phục nữ"
    ],
    "answer": "xấu hổ đến nóng bừng mặt",
    "explanation": "顔から火が出る (かおからひがでる): xấu hổ đến nóng bừng mặt"
  },
  {
    "id": "fb_1121",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "名前を間違えて、",
    "sentenceSuffix": "ほど恥ずかしかったです。",
    "choices": [
      "開発",
      "顔から火が出る",
      "渋滞",
      "便箋"
    ],
    "answer": "顔から火が出る",
    "fullSentence": "名前を間違えて、顔から火が出るほど恥ずかしかったです。",
    "explanation": "名前を間違えて、顔から火が出るほど恥ずかしかったです。\nTôi gọi nhầm tên và xấu hổ đến nóng bừng mặt.\n顔から火が出る: xấu hổ đến nóng bừng mặt"
  },
  {
    "id": "tr_1122",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi gọi nhầm tên và xấu hổ đến nóng bừng mặt.",
    "acceptedAnswers": [
      "名前を間違えて、顔から火が出るほど恥ずかしかったです。",
      "名前を間違えて、顔から火が出るほど恥ずかしかったです"
    ],
    "explanation": "名前を間違えて、顔から火が出るほど恥ずかしかったです。\n(なまえをまちがえて、かおからひがでるほどはずかしかったです。)\n顔から火が出る: xấu hổ đến nóng bừng mặt"
  },
  {
    "id": "mc_1123",
    "type": "multiple_choice",
    "question": "表現 có nghĩa là gì?",
    "word": "表現",
    "reading": "ひょうげん",
    "choices": [
      "diễn đạt, thể hiện",
      "khoảnh khắc",
      "ngoài…, trừ…",
      "mạnh dạn, lấy hết can đảm, quyết tâm làm"
    ],
    "answer": "diễn đạt, thể hiện",
    "explanation": "表現 (ひょうげん): diễn đạt, thể hiện"
  },
  {
    "id": "fb_1124",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "絵で気持ちを",
    "sentenceSuffix": "します。",
    "choices": [
      "割る",
      "女",
      "４こま漫画",
      "表現"
    ],
    "answer": "表現",
    "fullSentence": "絵で気持ちを表現します。",
    "explanation": "絵で気持ちを表現します。\nTôi thể hiện cảm xúc qua tranh.\n表現: diễn đạt, thể hiện"
  },
  {
    "id": "tr_1125",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi thể hiện cảm xúc qua tranh.",
    "acceptedAnswers": [
      "絵で気持ちを表現します。",
      "絵で気持ちを表現します"
    ],
    "explanation": "絵で気持ちを表現します。\n(えできもちをひょうげんします。)\n表現: diễn đạt, thể hiện"
  },
  {
    "id": "fb_1126",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "感謝を言葉で",
    "sentenceSuffix": "しました。",
    "choices": [
      "温帯",
      "県庁",
      "神秘的",
      "表現"
    ],
    "answer": "表現",
    "fullSentence": "感謝を言葉で表現しました。",
    "explanation": "感謝を言葉で表現しました。\nTôi bày tỏ lòng biết ơn bằng lời.\n表現: diễn đạt, thể hiện"
  },
  {
    "id": "tr_1127",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi bày tỏ lòng biết ơn bằng lời.",
    "acceptedAnswers": [
      "感謝を言葉で表現しました。",
      "感謝を言葉で表現しました"
    ],
    "explanation": "感謝を言葉で表現しました。\n(かんしゃをことばでひょうげんしました。)\n表現: diễn đạt, thể hiện"
  },
  {
    "id": "mc_1128",
    "type": "multiple_choice",
    "question": "黙る có nghĩa là gì?",
    "word": "黙る",
    "reading": "だまる",
    "choices": [
      "nhấp nhô, nhảy những bước nhỏ liên tiếp",
      "nước tắm còn lại trong bồn",
      "im lặng, ngừng nói",
      "bản đồ du lịch"
    ],
    "answer": "im lặng, ngừng nói",
    "explanation": "黙る (だまる): im lặng, ngừng nói"
  },
  {
    "id": "tr_1129",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Anh ấy im lặng nghe chuyện.",
    "acceptedAnswers": [
      "彼は黙って話を聞いていました。",
      "彼は黙って話を聞いていました"
    ],
    "explanation": "彼は黙って話を聞いていました。\n(かれはだまってはなしをきいていました。)\n黙る: im lặng, ngừng nói"
  },
  {
    "id": "mc_1130",
    "type": "multiple_choice",
    "question": "必死 có nghĩa là gì?",
    "word": "必死",
    "reading": "ひっし",
    "choices": [
      "giấy nhỏ dài để viết vài dòng nhắn gửi",
      "dáng vẻ, hình dáng; hình ảnh người/vật",
      "hết sức, liều mình, hết lòng cố gắng",
      "địa hình"
    ],
    "answer": "hết sức, liều mình, hết lòng cố gắng",
    "explanation": "必死 (ひっし): hết sức, liều mình, hết lòng cố gắng"
  },
  {
    "id": "fb_1131",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "電車に間に合うように",
    "sentenceSuffix": "に走りました。",
    "choices": [
      "気がする",
      "雲",
      "必死",
      "化石"
    ],
    "answer": "必死",
    "fullSentence": "電車に間に合うように必死に走りました。",
    "explanation": "電車に間に合うように必死に走りました。\nTôi chạy hết sức để kịp tàu.\n必死: hết sức, liều mình, hết lòng cố gắng"
  },
  {
    "id": "tr_1132",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi chạy hết sức để kịp tàu.",
    "acceptedAnswers": [
      "電車に間に合うように必死に走りました。",
      "電車に間に合うように必死に走りました"
    ],
    "explanation": "電車に間に合うように必死に走りました。\n(でんしゃにまにあうようにひっしにはしりました。)\n必死: hết sức, liều mình, hết lòng cố gắng"
  },
  {
    "id": "mc_1133",
    "type": "multiple_choice",
    "question": "あはは có nghĩa là gì?",
    "word": "あはは",
    "reading": "あはは",
    "choices": [
      "khuyên, đưa ra lời khuyên",
      "sắt",
      "rung, lắc, đung đưa",
      "ha ha, tiếng cười lớn"
    ],
    "answer": "ha ha, tiếng cười lớn",
    "explanation": "あはは (あはは): ha ha, tiếng cười lớn"
  },
  {
    "id": "fb_1134",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "彼は「",
    "sentenceSuffix": "」と笑いました。",
    "choices": [
      "現在",
      "あはは",
      "森",
      "食材"
    ],
    "answer": "あはは",
    "fullSentence": "彼は「あはは」と笑いました。",
    "explanation": "彼は「あはは」と笑いました。\nAnh ấy cười ha ha.\nあはは: ha ha, tiếng cười lớn"
  },
  {
    "id": "tr_1135",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Anh ấy cười ha ha.",
    "acceptedAnswers": [
      "彼は「あはは」と笑いました。",
      "彼は「あはは」と笑いました"
    ],
    "explanation": "彼は「あはは」と笑いました。\n(かれは「あはは」とわらいました。)\nあはは: ha ha, tiếng cười lớn"
  },
  {
    "id": "mc_1136",
    "type": "multiple_choice",
    "question": "もう少しで có nghĩa là gì?",
    "word": "もう少しで",
    "reading": "もうすこしで",
    "choices": [
      "mùa mưa ở Nhật",
      "ùn tắc",
      "chỉ chút nữa là…; suýt…",
      "trạng thái không mặc quần áo, trần truồng"
    ],
    "answer": "chỉ chút nữa là…; suýt…",
    "explanation": "もう少しで (もうすこしで): chỉ chút nữa là…; suýt…"
  },
  {
    "id": "fb_1137",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "駅に着きます。",
    "choices": [
      "もう少しで",
      "伝わる",
      "サプライズパーティー",
      "埋め立てる"
    ],
    "answer": "もう少しで",
    "fullSentence": "もう少しで駅に着きます。",
    "explanation": "もう少しで駅に着きます。\nChỉ chút nữa là đến ga.\nもう少しで: chỉ chút nữa là…; suýt…"
  },
  {
    "id": "tr_1138",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Chỉ chút nữa là đến ga.",
    "acceptedAnswers": [
      "もう少しで駅に着きます。",
      "もう少しで駅に着きます"
    ],
    "explanation": "もう少しで駅に着きます。\n(もうすこしでえきにつきます。)\nもう少しで: chỉ chút nữa là…; suýt…"
  },
  {
    "id": "fb_1139",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "転ぶところでした。",
    "choices": [
      "訳",
      "あるいは",
      "イメージ",
      "もう少しで"
    ],
    "answer": "もう少しで",
    "fullSentence": "もう少しで転ぶところでした。",
    "explanation": "もう少しで転ぶところでした。\nTôi suýt nữa thì ngã.\nもう少しで: chỉ chút nữa là…; suýt…"
  },
  {
    "id": "tr_1140",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi suýt nữa thì ngã.",
    "acceptedAnswers": [
      "もう少しで転ぶところでした。",
      "もう少しで転ぶところでした"
    ],
    "explanation": "もう少しで転ぶところでした。\n(もうすこしでころぶところでした。)\nもう少しで: chỉ chút nữa là…; suýt…"
  },
  {
    "id": "mc_1141",
    "type": "multiple_choice",
    "question": "優勝 có nghĩa là gì?",
    "word": "優勝",
    "reading": "ゆうしょう",
    "choices": [
      "vô địch, giành giải nhất",
      "rung, lắc, đung đưa",
      "mạnh dạn, lấy hết can đảm, quyết tâm làm",
      "chịu đựng, nhịn"
    ],
    "answer": "vô địch, giành giải nhất",
    "explanation": "優勝 (ゆうしょう): vô địch, giành giải nhất"
  },
  {
    "id": "fb_1142",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "私たちのチームは大会で",
    "sentenceSuffix": "しました。",
    "choices": [
      "～らしさ",
      "だって",
      "都市",
      "優勝"
    ],
    "answer": "優勝",
    "fullSentence": "私たちのチームは大会で優勝しました。",
    "explanation": "私たちのチームは大会で優勝しました。\nĐội chúng tôi đã vô địch giải đấu.\n優勝: vô địch, giành giải nhất"
  },
  {
    "id": "tr_1143",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Đội chúng tôi đã vô địch giải đấu.",
    "acceptedAnswers": [
      "私たちのチームは大会で優勝しました。",
      "私たちのチームは大会で優勝しました"
    ],
    "explanation": "私たちのチームは大会で優勝しました。\n(わたしたちのチームはたいかいでゆうしょうしました。)\n優勝: vô địch, giành giải nhất"
  },
  {
    "id": "mc_1144",
    "type": "multiple_choice",
    "question": "飛び上がる có nghĩa là gì?",
    "word": "飛び上がる",
    "reading": "とびあがる",
    "choices": [
      "nhảy bật lên, bay lên",
      "gói, bao bọc",
      "khoang cửa/đầu toa tàu; boong tàu thủy",
      "sắt"
    ],
    "answer": "nhảy bật lên, bay lên",
    "explanation": "飛び上がる (とびあがる): nhảy bật lên, bay lên"
  },
  {
    "id": "tr_1145",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi giật mình nhảy dựng vì tiếng động lớn.",
    "acceptedAnswers": [
      "大きな音に驚いて飛び上がりました。",
      "大きな音に驚いて飛び上がりました"
    ],
    "explanation": "大きな音に驚いて飛び上がりました。\n(おおきなおとにおどろいてとびあがりました。)\n飛び上がる: nhảy bật lên, bay lên"
  },
  {
    "id": "mc_1146",
    "type": "multiple_choice",
    "question": "ほっぺた có nghĩa là gì?",
    "word": "ほっぺた",
    "reading": "ほっぺた",
    "choices": [
      "từ tận đáy lòng, chân thành (trang trọng)",
      "má (khẩu ngữ)",
      "tầm giờ này; giờ này rồi",
      "blog, nhật ký trên mạng"
    ],
    "answer": "má (khẩu ngữ)",
    "explanation": "ほっぺた (ほっぺた): má (khẩu ngữ)"
  },
  {
    "id": "fb_1147",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "子どもの",
    "sentenceSuffix": "が赤いです。",
    "choices": [
      "あるいは",
      "ほっぺた",
      "まだまだ",
      "～発"
    ],
    "answer": "ほっぺた",
    "fullSentence": "子どものほっぺたが赤いです。",
    "explanation": "子どものほっぺたが赤いです。\nMá đứa trẻ đỏ hồng.\nほっぺた: má (khẩu ngữ)"
  },
  {
    "id": "tr_1148",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Má đứa trẻ đỏ hồng.",
    "acceptedAnswers": [
      "子どものほっぺたが赤いです。",
      "子どものほっぺたが赤いです"
    ],
    "explanation": "子どものほっぺたが赤いです。\n(こどものほっぺたがあかいです。)\nほっぺた: má (khẩu ngữ)"
  },
  {
    "id": "mc_1149",
    "type": "multiple_choice",
    "question": "飛び出す có nghĩa là gì?",
    "word": "飛び出す",
    "reading": "とびだす",
    "choices": [
      "bình quân, tính trung bình",
      "vẫn như trước, không thay đổi",
      "lao ra, nhảy ra, bất ngờ xuất hiện",
      "ánh nắng chiếu xuống"
    ],
    "answer": "lao ra, nhảy ra, bất ngờ xuất hiện",
    "explanation": "飛び出す (とびだす): lao ra, nhảy ra, bất ngờ xuất hiện"
  },
  {
    "id": "tr_1150",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Con mèo lao ra khỏi phòng.",
    "acceptedAnswers": [
      "猫が部屋から飛び出しました。",
      "猫が部屋から飛び出しました"
    ],
    "explanation": "猫が部屋から飛び出しました。\n(ねこがへやからとびだしました。)\n飛び出す: lao ra, nhảy ra, bất ngờ xuất hiện"
  },
  {
    "id": "tr_1151",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Không được bất ngờ lao ra đường.",
    "acceptedAnswers": [
      "急に道路に飛び出してはいけません。",
      "急に道路に飛び出してはいけません"
    ],
    "explanation": "急に道路に飛び出してはいけません。\n(きゅうにどうろにとびだしてはいけません。)\n飛び出す: lao ra, nhảy ra, bất ngờ xuất hiện"
  },
  {
    "id": "mc_1152",
    "type": "multiple_choice",
    "question": "疑問 có nghĩa là gì?",
    "word": "疑問",
    "reading": "ぎもん",
    "choices": [
      "không được, không ổn, vô ích",
      "điều thắc mắc, sự nghi ngờ",
      "không ngờ tới, bất ngờ",
      "đi lại hai chiều"
    ],
    "answer": "điều thắc mắc, sự nghi ngờ",
    "explanation": "疑問 (ぎもん): điều thắc mắc, sự nghi ngờ"
  },
  {
    "id": "fb_1153",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "その説明に",
    "sentenceSuffix": "を持ちました。",
    "choices": [
      "電子マネー",
      "～後",
      "疑問",
      "石"
    ],
    "answer": "疑問",
    "fullSentence": "その説明に疑問を持ちました。",
    "explanation": "その説明に疑問を持ちました。\nTôi có nghi vấn về lời giải thích đó.\n疑問: điều thắc mắc, sự nghi ngờ"
  },
  {
    "id": "tr_1154",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi có nghi vấn về lời giải thích đó.",
    "acceptedAnswers": [
      "その説明に疑問を持ちました。",
      "その説明に疑問を持ちました"
    ],
    "explanation": "その説明に疑問を持ちました。\n(そのせつめいにぎもんをもちました。)\n疑問: điều thắc mắc, sự nghi ngờ"
  },
  {
    "id": "fb_1155",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "なぜなのか",
    "sentenceSuffix": "に思いました。",
    "choices": [
      "渋滞",
      "疑問",
      "再び",
      "満足"
    ],
    "answer": "疑問",
    "fullSentence": "なぜなのか疑問に思いました。",
    "explanation": "なぜなのか疑問に思いました。\nTôi tự hỏi vì sao lại như vậy.\n疑問: điều thắc mắc, sự nghi ngờ"
  },
  {
    "id": "tr_1156",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi tự hỏi vì sao lại như vậy.",
    "acceptedAnswers": [
      "なぜなのか疑問に思いました。",
      "なぜなのか疑問に思いました"
    ],
    "explanation": "なぜなのか疑問に思いました。\n(なぜなのかぎもんにおもいました。)\n疑問: điều thắc mắc, sự nghi ngờ"
  },
  {
    "id": "mc_1157",
    "type": "multiple_choice",
    "question": "女子高生 có nghĩa là gì?",
    "word": "女子高生",
    "reading": "じょしこうせい",
    "choices": [
      "hơn hẳn; mạnh một cái, dồn sức",
      "nữ sinh trung học phổ thông",
      "tiêu thụ, sử dụng hết",
      "quý tộc"
    ],
    "answer": "nữ sinh trung học phổ thông",
    "explanation": "女子高生 (じょしこうせい): nữ sinh trung học phổ thông"
  },
  {
    "id": "fb_1158",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "妹は",
    "sentenceSuffix": "です。",
    "choices": [
      "女子高生",
      "風力",
      "受ける（誘いを受ける）",
      "気がする"
    ],
    "answer": "女子高生",
    "fullSentence": "妹は女子高生です。",
    "explanation": "妹は女子高生です。\nEm gái tôi là nữ sinh trung học phổ thông.\n女子高生: nữ sinh trung học phổ thông"
  },
  {
    "id": "tr_1159",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Em gái tôi là nữ sinh trung học phổ thông.",
    "acceptedAnswers": [
      "妹は女子高生です。",
      "妹は女子高生です"
    ],
    "explanation": "妹は女子高生です。\n(いもうとはじょしこうせいです。)\n女子高生: nữ sinh trung học phổ thông"
  },
  {
    "id": "mc_1160",
    "type": "multiple_choice",
    "question": "男 có nghĩa là gì?",
    "word": "男",
    "reading": "おとこ",
    "choices": [
      "vé đi không giới hạn trong phạm vi và thời hạn quy định",
      "rung, lắc, đung đưa",
      "nam, đàn ông, con trai",
      "buộc, choàng, gắn (ruy băng lên vật)"
    ],
    "answer": "nam, đàn ông, con trai",
    "explanation": "男 (おとこ): nam, đàn ông, con trai"
  },
  {
    "id": "fb_1161",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "あの",
    "sentenceSuffix": "の人は先生です。",
    "choices": [
      "南北",
      "～分の～",
      "まるで",
      "男"
    ],
    "answer": "男",
    "fullSentence": "あの男の人は先生です。",
    "explanation": "あの男の人は先生です。\nNgười đàn ông kia là giáo viên.\n男: nam, đàn ông, con trai"
  },
  {
    "id": "tr_1162",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Người đàn ông kia là giáo viên.",
    "acceptedAnswers": [
      "あの男の人は先生です。",
      "あの男の人は先生です"
    ],
    "explanation": "あの男の人は先生です。\n(あのおとこのひとはせんせいです。)\n男: nam, đàn ông, con trai"
  },
  {
    "id": "mc_1163",
    "type": "multiple_choice",
    "question": "女 có nghĩa là gì?",
    "word": "女",
    "reading": "おんな",
    "choices": [
      "họp",
      "quà tặng",
      "shachihoko: tượng linh vật thân cá đầu thú trên nóc thành, đền…",
      "nữ, phụ nữ, con gái"
    ],
    "answer": "nữ, phụ nữ, con gái",
    "explanation": "女 (おんな): nữ, phụ nữ, con gái"
  },
  {
    "id": "fb_1164",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "あの",
    "sentenceSuffix": "の人は医者です。",
    "choices": [
      "発展",
      "女",
      "～周辺",
      "～金"
    ],
    "answer": "女",
    "fullSentence": "あの女の人は医者です。",
    "explanation": "あの女の人は医者です。\nNgười phụ nữ kia là bác sĩ.\n女: nữ, phụ nữ, con gái"
  },
  {
    "id": "tr_1165",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Người phụ nữ kia là bác sĩ.",
    "acceptedAnswers": [
      "あの女の人は医者です。",
      "あの女の人は医者です"
    ],
    "explanation": "あの女の人は医者です。\n(あのおんなのひとはいしゃです。)\n女: nữ, phụ nữ, con gái"
  },
  {
    "id": "mc_1166",
    "type": "multiple_choice",
    "question": "男女 có nghĩa là gì?",
    "word": "男女",
    "reading": "だんじょ",
    "choices": [
      "đầy ấn tượng mạnh, rất hùng tráng/ngoạn mục",
      "nói chuyện điện thoại",
      "được hưởng điều kiện tốt, may mắn có",
      "nam và nữ"
    ],
    "answer": "nam và nữ",
    "explanation": "男女 (だんじょ): nam và nữ"
  },
  {
    "id": "fb_1167",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "の言葉遣いについて話しました。",
    "choices": [
      "男女",
      "トラック",
      "快適",
      "セメント"
    ],
    "answer": "男女",
    "fullSentence": "男女の言葉遣いについて話しました。",
    "explanation": "男女の言葉遣いについて話しました。\nChúng tôi nói về cách dùng từ của nam và nữ.\n男女: nam và nữ"
  },
  {
    "id": "tr_1168",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Chúng tôi nói về cách dùng từ của nam và nữ.",
    "acceptedAnswers": [
      "男女の言葉遣いについて話しました。",
      "男女の言葉遣いについて話しました"
    ],
    "explanation": "男女の言葉遣いについて話しました。\n(だんじょのことばづかいについてはなしました。)\n男女: nam và nữ"
  },
  {
    "id": "mc_1169",
    "type": "multiple_choice",
    "question": "目上 có nghĩa là gì?",
    "word": "目上",
    "reading": "めうえ",
    "choices": [
      "thổi (gió; nhạc cụ hơi)",
      "chỉ chút nữa là…; suýt…",
      "người lớn tuổi/cấp bậc cao hơn",
      "tường xây bằng đá"
    ],
    "answer": "người lớn tuổi/cấp bậc cao hơn",
    "explanation": "目上 (めうえ): người lớn tuổi/cấp bậc cao hơn"
  },
  {
    "id": "fb_1170",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "の人には敬語を使います。",
    "choices": [
      "今でこそ",
      "共通",
      "目上",
      "同年代"
    ],
    "answer": "目上",
    "fullSentence": "目上の人には敬語を使います。",
    "explanation": "目上の人には敬語を使います。\nTôi dùng kính ngữ với người bề trên.\n目上: người lớn tuổi/cấp bậc cao hơn"
  },
  {
    "id": "tr_1171",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi dùng kính ngữ với người bề trên.",
    "acceptedAnswers": [
      "目上の人には敬語を使います。",
      "目上の人には敬語を使います"
    ],
    "explanation": "目上の人には敬語を使います。\n(めうえのひとにはけいごをつかいます。)\n目上: người lớn tuổi/cấp bậc cao hơn"
  },
  {
    "id": "mc_1172",
    "type": "multiple_choice",
    "question": "使い分ける có nghĩa là gì?",
    "word": "使い分ける",
    "reading": "つかいわける",
    "choices": [
      "chọn dùng khác nhau tùy tình huống",
      "cứng, chắc; cứng nhắc, trang trọng quá",
      "bãi biển cát",
      "bướng bỉnh, cứng đầu"
    ],
    "answer": "chọn dùng khác nhau tùy tình huống",
    "explanation": "使い分ける (つかいわける): chọn dùng khác nhau tùy tình huống"
  },
  {
    "id": "tr_1173",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi chọn dùng lời lịch sự hoặc thông thường tùy lúc.",
    "acceptedAnswers": [
      "丁寧な言葉と普通の言葉を使い分けます。",
      "丁寧な言葉と普通の言葉を使い分けます"
    ],
    "explanation": "丁寧な言葉と普通の言葉を使い分けます。\n(ていねいなことばとふつうのことばをつかいわけます。)\n使い分ける: chọn dùng khác nhau tùy tình huống"
  },
  {
    "id": "tr_1174",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi chọn cách nói tùy người đối thoại.",
    "acceptedAnswers": [
      "相手に合わせて言葉を使い分けます。",
      "相手に合わせて言葉を使い分けます"
    ],
    "explanation": "相手に合わせて言葉を使い分けます。\n(あいてにあわせてことばをつかいわけます。)\n使い分ける: chọn dùng khác nhau tùy tình huống"
  },
  {
    "id": "mc_1175",
    "type": "multiple_choice",
    "question": "若者 có nghĩa là gì?",
    "word": "若者",
    "reading": "わかもの",
    "choices": [
      "tiếng hô, tiếng gọi để cổ vũ/phối hợp",
      "đắt tiền, có giá trị cao",
      "rảy nước xuống đất cho mát",
      "người trẻ, giới trẻ"
    ],
    "answer": "người trẻ, giới trẻ",
    "explanation": "若者 (わかもの): người trẻ, giới trẻ"
  },
  {
    "id": "fb_1176",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この店は",
    "sentenceSuffix": "に人気があります。",
    "choices": [
      "包装",
      "若者",
      "揺れる",
      "空"
    ],
    "answer": "若者",
    "fullSentence": "この店は若者に人気があります。",
    "explanation": "この店は若者に人気があります。\nCửa hàng này được giới trẻ yêu thích.\n若者: người trẻ, giới trẻ"
  },
  {
    "id": "tr_1177",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Cửa hàng này được giới trẻ yêu thích.",
    "acceptedAnswers": [
      "この店は若者に人気があります。",
      "この店は若者に人気があります"
    ],
    "explanation": "この店は若者に人気があります。\n(このみせはわかものににんきがあります。)\n若者: người trẻ, giới trẻ"
  },
  {
    "id": "mc_1178",
    "type": "multiple_choice",
    "question": "我慢 có nghĩa là gì?",
    "word": "我慢",
    "reading": "がまん",
    "choices": [
      "nhóm tuổi…; khoảng số…",
      "chịu đựng, nhịn",
      "làm hỏng; làm tổn hại sức khỏe",
      "sản vật từ biển, hải sản"
    ],
    "answer": "chịu đựng, nhịn",
    "explanation": "我慢 (がまん): chịu đựng, nhịn"
  },
  {
    "id": "fb_1179",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "痛みを",
    "sentenceSuffix": "しました。",
    "choices": [
      "一生",
      "恵まれる",
      "我慢",
      "人口"
    ],
    "answer": "我慢",
    "fullSentence": "痛みを我慢しました。",
    "explanation": "痛みを我慢しました。\nTôi đã chịu đựng cơn đau.\n我慢: chịu đựng, nhịn"
  },
  {
    "id": "tr_1180",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đã chịu đựng cơn đau.",
    "acceptedAnswers": [
      "痛みを我慢しました。",
      "痛みを我慢しました"
    ],
    "explanation": "痛みを我慢しました。\n(いたみをがまんしました。)\n我慢: chịu đựng, nhịn"
  },
  {
    "id": "fb_1181",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "今日は安い弁当で",
    "sentenceSuffix": "します。",
    "choices": [
      "表れ",
      "国宝",
      "我慢",
      "あるいは"
    ],
    "answer": "我慢",
    "fullSentence": "今日は安い弁当で我慢します。",
    "explanation": "今日は安い弁当で我慢します。\nHôm nay tôi đành ăn tạm hộp cơm rẻ.\n我慢: chịu đựng, nhịn"
  },
  {
    "id": "tr_1182",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Hôm nay tôi đành ăn tạm hộp cơm rẻ.",
    "acceptedAnswers": [
      "今日は安い弁当で我慢します。",
      "今日は安い弁当で我慢します"
    ],
    "explanation": "今日は安い弁当で我慢します。\n(きょうはやすいべんとうでがまんします。)\n我慢: chịu đựng, nhịn"
  },
  {
    "id": "mc_1183",
    "type": "multiple_choice",
    "question": "のんびり có nghĩa là gì?",
    "word": "のんびり",
    "reading": "のんびり",
    "choices": [
      "futsal, bóng đá sân nhỏ năm người",
      "ếch",
      "làm vỡ; chia, chia nhỏ",
      "thong thả, thư giãn"
    ],
    "answer": "thong thả, thư giãn",
    "explanation": "のんびり (のんびり): thong thả, thư giãn"
  },
  {
    "id": "fb_1184",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "休日は家で",
    "sentenceSuffix": "過ごします。",
    "choices": [
      "庭",
      "のんびり",
      "愚痴",
      "勘違い"
    ],
    "answer": "のんびり",
    "fullSentence": "休日は家でのんびり過ごします。",
    "explanation": "休日は家でのんびり過ごします。\nNgày nghỉ tôi thong thả ở nhà.\nのんびり: thong thả, thư giãn"
  },
  {
    "id": "tr_1185",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Ngày nghỉ tôi thong thả ở nhà.",
    "acceptedAnswers": [
      "休日は家でのんびり過ごします。",
      "休日は家でのんびり過ごします"
    ],
    "explanation": "休日は家でのんびり過ごします。\n(きゅうじつはいえでのんびりすごします。)\nのんびり: thong thả, thư giãn"
  },
  {
    "id": "fb_1186",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "温泉で",
    "sentenceSuffix": "しました。",
    "choices": [
      "うらやましい",
      "手書き",
      "～側",
      "のんびり"
    ],
    "answer": "のんびり",
    "fullSentence": "温泉でのんびりしました。",
    "explanation": "温泉でのんびりしました。\nTôi thư giãn ở suối nước nóng.\nのんびり: thong thả, thư giãn"
  },
  {
    "id": "tr_1187",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi thư giãn ở suối nước nóng.",
    "acceptedAnswers": [
      "温泉でのんびりしました。",
      "温泉でのんびりしました"
    ],
    "explanation": "温泉でのんびりしました。\n(おんせんでのんびりしました。)\nのんびり: thong thả, thư giãn"
  },
  {
    "id": "mc_1188",
    "type": "multiple_choice",
    "question": "海岸線 có nghĩa là gì?",
    "word": "海岸線",
    "reading": "かいがんせん",
    "choices": [
      "đường bờ biển",
      "hình dung, gợi nhớ trong đầu",
      "biết đâu, có lẽ",
      "bất ngờ, ngoài dự đoán"
    ],
    "answer": "đường bờ biển",
    "explanation": "海岸線 (かいがんせん): đường bờ biển"
  },
  {
    "id": "fb_1189",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "列車は",
    "sentenceSuffix": "に沿って走ります。",
    "choices": [
      "わいわい",
      "～街",
      "畳",
      "海岸線"
    ],
    "answer": "海岸線",
    "fullSentence": "列車は海岸線に沿って走ります。",
    "explanation": "列車は海岸線に沿って走ります。\nTàu chạy dọc theo đường bờ biển.\n海岸線: đường bờ biển"
  },
  {
    "id": "tr_1190",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tàu chạy dọc theo đường bờ biển.",
    "acceptedAnswers": [
      "列車は海岸線に沿って走ります。",
      "列車は海岸線に沿って走ります"
    ],
    "explanation": "列車は海岸線に沿って走ります。\n(れっしゃはかいがんせんにそってはしります。)\n海岸線: đường bờ biển"
  },
  {
    "id": "mc_1191",
    "type": "multiple_choice",
    "question": "渓谷 có nghĩa là gì?",
    "word": "渓谷",
    "reading": "けいこく",
    "choices": [
      "thời kỳ; nhóm tuổi, thế hệ",
      "chịu, nhận tác động (cú sốc)",
      "hôm trước, ít ngày trước",
      "thung lũng hẹp có sông/suối, hẻm núi"
    ],
    "answer": "thung lũng hẹp có sông/suối, hẻm núi",
    "explanation": "渓谷 (けいこく): thung lũng hẹp có sông/suối, hẻm núi"
  },
  {
    "id": "fb_1192",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "を流れる川がきれいです。",
    "choices": [
      "内回り",
      "４こま漫画",
      "～街",
      "渓谷"
    ],
    "answer": "渓谷",
    "fullSentence": "渓谷を流れる川がきれいです。",
    "explanation": "渓谷を流れる川がきれいです。\nCon sông chảy qua hẻm núi rất đẹp.\n渓谷: thung lũng hẹp có sông/suối, hẻm núi"
  },
  {
    "id": "tr_1193",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Con sông chảy qua hẻm núi rất đẹp.",
    "acceptedAnswers": [
      "渓谷を流れる川がきれいです。",
      "渓谷を流れる川がきれいです"
    ],
    "explanation": "渓谷を流れる川がきれいです。\n(けいこくをながれるかわがきれいです。)\n渓谷: thung lũng hẹp có sông/suối, hẻm núi"
  },
  {
    "id": "mc_1194",
    "type": "multiple_choice",
    "question": "トロッコ列車 có nghĩa là gì?",
    "word": "トロッコ列車",
    "reading": "トロッコれっしゃ",
    "choices": [
      "tính cả, đưa vào, bao gồm vào",
      "được nướng chín; bị cháy; bị rám nắng",
      "chiều lên; chiều tàu đi về đầu mối/trung tâm của tuyến",
      "tàu kiểu xe goòng, thường dùng ngắm cảnh du lịch"
    ],
    "answer": "tàu kiểu xe goòng, thường dùng ngắm cảnh du lịch",
    "explanation": "トロッコ列車 (トロッコれっしゃ): tàu kiểu xe goòng, thường dùng ngắm cảnh du lịch"
  },
  {
    "id": "fb_1195",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "に乗って景色を楽しみます。",
    "choices": [
      "ラストオーダー",
      "気候",
      "タメ口",
      "トロッコ列車"
    ],
    "answer": "トロッコ列車",
    "fullSentence": "トロッコ列車に乗って景色を楽しみます。",
    "explanation": "トロッコ列車に乗って景色を楽しみます。\nTôi đi tàu kiểu xe goòng để ngắm cảnh.\nトロッコ列車: tàu kiểu xe goòng, thường dùng ngắm cảnh du lịch"
  },
  {
    "id": "tr_1196",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đi tàu kiểu xe goòng để ngắm cảnh.",
    "acceptedAnswers": [
      "トロッコ列車に乗って景色を楽しみます。",
      "トロッコ列車に乗って景色を楽しみます"
    ],
    "explanation": "トロッコ列車に乗って景色を楽しみます。\n(トロッコれっしゃにのってけしきをたのしみます。)\nトロッコ列車: tàu kiểu xe goòng, thường dùng ngắm cảnh du lịch"
  },
  {
    "id": "mc_1197",
    "type": "multiple_choice",
    "question": "SL có nghĩa là gì?",
    "word": "SL",
    "reading": "SL",
    "choices": [
      "đầu máy/tàu hơi nước; viết tắt Steam Locomotive",
      "chuông nhỏ, lục lạc",
      "truyện tranh bốn khung",
      "tường xây bằng đá"
    ],
    "answer": "đầu máy/tàu hơi nước; viết tắt Steam Locomotive",
    "explanation": "SL (SL): đầu máy/tàu hơi nước; viết tắt Steam Locomotive"
  },
  {
    "id": "fb_1198",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "初めて",
    "sentenceSuffix": "に乗りました。",
    "choices": [
      "港",
      "我慢",
      "思い切って",
      "SL"
    ],
    "answer": "SL",
    "fullSentence": "初めてSLに乗りました。",
    "explanation": "初めてSLに乗りました。\nLần đầu tiên tôi đi tàu hơi nước.\nSL: đầu máy/tàu hơi nước; viết tắt Steam Locomotive"
  },
  {
    "id": "tr_1199",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Lần đầu tiên tôi đi tàu hơi nước.",
    "acceptedAnswers": [
      "初めてSLに乗りました。",
      "初めてSLに乗りました"
    ],
    "explanation": "初めてSLに乗りました。\n(はじめてエスエルにのりました。)\nSL: đầu máy/tàu hơi nước; viết tắt Steam Locomotive"
  },
  {
    "id": "mc_1200",
    "type": "multiple_choice",
    "question": "製造 có nghĩa là gì?",
    "word": "製造",
    "reading": "せいぞう",
    "choices": [
      "bia tươi",
      "đồ nhắm ăn cùng rượu bia",
      "hiện tại, hiện nay",
      "sản xuất, chế tạo"
    ],
    "answer": "sản xuất, chế tạo",
    "explanation": "製造 (せいぞう): sản xuất, chế tạo"
  },
  {
    "id": "fb_1201",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この工場では車を",
    "sentenceSuffix": "しています。",
    "choices": [
      "帰宅",
      "製造",
      "のんびり",
      "追加"
    ],
    "answer": "製造",
    "fullSentence": "この工場では車を製造しています。",
    "explanation": "この工場では車を製造しています。\nNhà máy này sản xuất ô tô.\n製造: sản xuất, chế tạo"
  },
  {
    "id": "tr_1202",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Nhà máy này sản xuất ô tô.",
    "acceptedAnswers": [
      "この工場では車を製造しています。",
      "この工場では車を製造しています"
    ],
    "explanation": "この工場では車を製造しています。\n(このこうじょうではくるまをせいぞうしています。)\n製造: sản xuất, chế tạo"
  },
  {
    "id": "mc_1203",
    "type": "multiple_choice",
    "question": "鉄 có nghĩa là gì?",
    "word": "鉄",
    "reading": "てつ",
    "choices": [
      "bê tông",
      "bãi biển cát",
      "sắt",
      "xuất phát từ…; khởi hành lúc…"
    ],
    "answer": "sắt",
    "explanation": "鉄 (てつ): sắt"
  },
  {
    "id": "fb_1204",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この橋は",
    "sentenceSuffix": "でできています。",
    "choices": [
      "いたす",
      "もしかしたら",
      "フローリング",
      "鉄"
    ],
    "answer": "鉄",
    "fullSentence": "この橋は鉄でできています。",
    "explanation": "この橋は鉄でできています。\nCây cầu này được làm bằng sắt.\n鉄: sắt"
  },
  {
    "id": "tr_1205",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Cây cầu này được làm bằng sắt.",
    "acceptedAnswers": [
      "この橋は鉄でできています。",
      "この橋は鉄でできています"
    ],
    "explanation": "この橋は鉄でできています。\n(このはしはてつでできています。)\n鉄: sắt"
  },
  {
    "id": "mc_1206",
    "type": "multiple_choice",
    "question": "扇風機 có nghĩa là gì?",
    "word": "扇風機",
    "reading": "せんぷうき",
    "choices": [
      "người có tuổi, lớn tuổi",
      "chiều dọc",
      "làm hỏng; làm tổn hại sức khỏe",
      "quạt điện"
    ],
    "answer": "quạt điện",
    "explanation": "扇風機 (せんぷうき): quạt điện"
  },
  {
    "id": "fb_1207",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "暑いので",
    "sentenceSuffix": "をつけます。",
    "choices": [
      "発展",
      "神秘的",
      "扇風機",
      "久しぶり"
    ],
    "answer": "扇風機",
    "fullSentence": "暑いので扇風機をつけます。",
    "explanation": "暑いので扇風機をつけます。\nVì nóng nên tôi bật quạt.\n扇風機: quạt điện"
  },
  {
    "id": "tr_1208",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Vì nóng nên tôi bật quạt.",
    "acceptedAnswers": [
      "暑いので扇風機をつけます。",
      "暑いので扇風機をつけます"
    ],
    "explanation": "暑いので扇風機をつけます。\n(あついのでせんぷうきをつけます。)\n扇風機: quạt điện"
  },
  {
    "id": "mc_1209",
    "type": "multiple_choice",
    "question": "石炭 có nghĩa là gì?",
    "word": "石炭",
    "reading": "せきたん",
    "choices": [
      "thoải mái, dễ chịu",
      "tâm tư, suy nghĩ, tình cảm",
      "chỉ; tuy nhiên, có điều",
      "than đá"
    ],
    "answer": "than đá",
    "explanation": "石炭 (せきたん): than đá"
  },
  {
    "id": "fb_1210",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "昔の列車は",
    "sentenceSuffix": "を燃やして走りました。",
    "choices": [
      "ときには",
      "親孝行",
      "名付ける",
      "石炭"
    ],
    "answer": "石炭",
    "fullSentence": "昔の列車は石炭を燃やして走りました。",
    "explanation": "昔の列車は石炭を燃やして走りました。\nTàu thời xưa chạy bằng cách đốt than đá.\n石炭: than đá"
  },
  {
    "id": "tr_1211",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tàu thời xưa chạy bằng cách đốt than đá.",
    "acceptedAnswers": [
      "昔の列車は石炭を燃やして走りました。",
      "昔の列車は石炭を燃やして走りました"
    ],
    "explanation": "昔の列車は石炭を燃やして走りました。\n(むかしのれっしゃはせきたんをもやしてはしりました。)\n石炭: than đá"
  },
  {
    "id": "mc_1212",
    "type": "multiple_choice",
    "question": "燃やす có nghĩa là gì?",
    "word": "燃やす",
    "reading": "もやす",
    "choices": [
      "đốt, làm cháy",
      "gây ra, làm cho (ai phiền)",
      "khuyên, đưa ra lời khuyên",
      "giấy viết thư"
    ],
    "answer": "đốt, làm cháy",
    "explanation": "燃やす (もやす): đốt, làm cháy"
  },
  {
    "id": "tr_1213",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Không được đốt rác ở đây.",
    "acceptedAnswers": [
      "ここでごみを燃やしてはいけません。",
      "ここでごみを燃やしてはいけません"
    ],
    "explanation": "ここでごみを燃やしてはいけません。\n(ここでごみをもやしてはいけません。)\n燃やす: đốt, làm cháy"
  },
  {
    "id": "mc_1214",
    "type": "multiple_choice",
    "question": "入り込む có nghĩa là gì?",
    "word": "入り込む",
    "reading": "はいりこむ",
    "choices": [
      "đồ nhắm ăn cùng rượu bia",
      "lọt vào, đi sâu vào bên trong",
      "nhau, cả hai bên",
      "váy đầm, lễ phục nữ"
    ],
    "answer": "lọt vào, đi sâu vào bên trong",
    "explanation": "入り込む (はいりこむ): lọt vào, đi sâu vào bên trong"
  },
  {
    "id": "tr_1215",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Côn trùng lọt vào phòng qua cửa sổ.",
    "acceptedAnswers": [
      "窓から虫が部屋に入り込みました。",
      "窓から虫が部屋に入り込みました"
    ],
    "explanation": "窓から虫が部屋に入り込みました。\n(まどからむしがへやにはいりこみました。)\n入り込む: lọt vào, đi sâu vào bên trong"
  },
  {
    "id": "mc_1216",
    "type": "multiple_choice",
    "question": "揺れる có nghĩa là gì?",
    "word": "揺れる",
    "reading": "ゆれる",
    "choices": [
      "vợ, bà xã (khẩu ngữ)",
      "rung, lắc, đung đưa",
      "toa xe, phương tiện đường bộ/đường sắt",
      "quà tặng"
    ],
    "answer": "rung, lắc, đung đưa",
    "explanation": "揺れる (ゆれる): rung, lắc, đung đưa"
  },
  {
    "id": "tr_1217",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Cây đang đung đưa trong gió.",
    "acceptedAnswers": [
      "風で木が揺れています。",
      "風で木が揺れています"
    ],
    "explanation": "風で木が揺れています。\n(かぜできがゆれています。)\n揺れる: rung, lắc, đung đưa"
  },
  {
    "id": "mc_1218",
    "type": "multiple_choice",
    "question": "～産 có nghĩa là gì?",
    "word": "～産",
    "reading": "～さん",
    "choices": [
      "xé, làm rách; phá vỡ/không giữ",
      "được sản xuất/trồng/đánh bắt tại…",
      "gặp lại sau thời gian xa cách",
      "làng"
    ],
    "answer": "được sản xuất/trồng/đánh bắt tại…",
    "explanation": "～産 (～さん): được sản xuất/trồng/đánh bắt tại…"
  },
  {
    "id": "tr_1219",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi mua trà sản xuất ở tỉnh Shizuoka.",
    "acceptedAnswers": [
      "静岡県産のお茶を買いました。",
      "静岡県産のお茶を買いました"
    ],
    "explanation": "静岡県産のお茶を買いました。\n(しずおかけんさんのおちゃをかいました。)\n～産: được sản xuất/trồng/đánh bắt tại…"
  },
  {
    "id": "mc_1220",
    "type": "multiple_choice",
    "question": "車窓 có nghĩa là gì?",
    "word": "車窓",
    "reading": "しゃそう",
    "choices": [
      "nuôi dưỡng, đào tạo",
      "hành khách trên phương tiện",
      "hoặc, hoặc là",
      "cửa sổ tàu/xe; cảnh nhìn qua cửa sổ"
    ],
    "answer": "cửa sổ tàu/xe; cảnh nhìn qua cửa sổ",
    "explanation": "車窓 (しゃそう): cửa sổ tàu/xe; cảnh nhìn qua cửa sổ"
  },
  {
    "id": "fb_1221",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "から海が見えます。",
    "choices": [
      "お世話になっています",
      "胸",
      "海の幸",
      "車窓"
    ],
    "answer": "車窓",
    "fullSentence": "車窓から海が見えます。",
    "explanation": "車窓から海が見えます。\nTừ cửa sổ tàu có thể thấy biển.\n車窓: cửa sổ tàu/xe; cảnh nhìn qua cửa sổ"
  },
  {
    "id": "tr_1222",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Từ cửa sổ tàu có thể thấy biển.",
    "acceptedAnswers": [
      "車窓から海が見えます。",
      "車窓から海が見えます"
    ],
    "explanation": "車窓から海が見えます。\n(しゃそうからうみがみえます。)\n車窓: cửa sổ tàu/xe; cảnh nhìn qua cửa sổ"
  },
  {
    "id": "mc_1223",
    "type": "multiple_choice",
    "question": "目を向ける có nghĩa là gì?",
    "word": "目を向ける",
    "reading": "めをむける",
    "choices": [
      "đưa mắt nhìn; chú ý đến",
      "phát triển, tạo sản phẩm/công nghệ mới",
      "đường bờ biển",
      "thả/đưa lên cao; chiên ngập dầu"
    ],
    "answer": "đưa mắt nhìn; chú ý đến",
    "explanation": "目を向ける (めをむける): đưa mắt nhìn; chú ý đến"
  },
  {
    "id": "tr_1224",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đưa mắt nhìn ra ngoài cửa sổ.",
    "acceptedAnswers": [
      "窓の外に目を向けました。",
      "窓の外に目を向けました"
    ],
    "explanation": "窓の外に目を向けました。\n(まどのそとにめをむけました。)\n目を向ける: đưa mắt nhìn; chú ý đến"
  },
  {
    "id": "tr_1225",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Hãy chú ý đến vấn đề môi trường.",
    "acceptedAnswers": [
      "環境問題に目を向けましょう。",
      "環境問題に目を向けましょう"
    ],
    "explanation": "環境問題に目を向けましょう。\n(かんきょうもんだいにめをむけましょう。)\n目を向ける: đưa mắt nhìn; chú ý đến"
  },
  {
    "id": "mc_1226",
    "type": "multiple_choice",
    "question": "通り過ぎる có nghĩa là gì?",
    "word": "通り過ぎる",
    "reading": "とおりすぎる",
    "choices": [
      "đầy ấn tượng mạnh, rất hùng tráng/ngoạn mục",
      "bây giờ thì mới/đúng là… nhưng trước đây…",
      "đi ngang qua, đi quá",
      "đếm"
    ],
    "answer": "đi ngang qua, đi quá",
    "explanation": "通り過ぎる (とおりすぎる): đi ngang qua, đi quá"
  },
  {
    "id": "tr_1227",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Xe buýt đi ngang qua trước mắt tôi.",
    "acceptedAnswers": [
      "バスが目の前を通り過ぎました。",
      "バスが目の前を通り過ぎました"
    ],
    "explanation": "バスが目の前を通り過ぎました。\n(バスがめのまえをとおりすぎました。)\n通り過ぎる: đi ngang qua, đi quá"
  },
  {
    "id": "mc_1228",
    "type": "multiple_choice",
    "question": "車掌 có nghĩa là gì?",
    "word": "車掌",
    "reading": "しゃしょう",
    "choices": [
      "diễn đạt, thể hiện",
      "nhân viên phụ trách trên tàu, soát vé/hướng dẫn hành khách",
      "biểu hiện, dấu hiệu thể hiện",
      "đắt tiền, có giá trị cao"
    ],
    "answer": "nhân viên phụ trách trên tàu, soát vé/hướng dẫn hành khách",
    "explanation": "車掌 (しゃしょう): nhân viên phụ trách trên tàu, soát vé/hướng dẫn hành khách"
  },
  {
    "id": "fb_1229",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "に乗り換えについて聞きました。",
    "choices": [
      "車掌",
      "尋ねる",
      "乗客",
      "お互い"
    ],
    "answer": "車掌",
    "fullSentence": "車掌に乗り換えについて聞きました。",
    "explanation": "車掌に乗り換えについて聞きました。\nTôi hỏi nhân viên tàu về việc chuyển tàu.\n車掌: nhân viên phụ trách trên tàu, soát vé/hướng dẫn hành khách"
  },
  {
    "id": "tr_1230",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi hỏi nhân viên tàu về việc chuyển tàu.",
    "acceptedAnswers": [
      "車掌に乗り換えについて聞きました。",
      "車掌に乗り換えについて聞きました"
    ],
    "explanation": "車掌に乗り換えについて聞きました。\n(しゃしょうにのりかえについてききました。)\n車掌: nhân viên phụ trách trên tàu, soát vé/hướng dẫn hành khách"
  },
  {
    "id": "mc_1231",
    "type": "multiple_choice",
    "question": "土地 có nghĩa là gì?",
    "word": "土地",
    "reading": "とち",
    "choices": [
      "đất, khu đất; vùng đất, địa phương",
      "vùng, miền; địa phương ngoài đô thị lớn",
      "… xăng-ti-mét (cm)",
      "không được, không ổn, vô ích"
    ],
    "answer": "đất, khu đất; vùng đất, địa phương",
    "explanation": "土地 (とち): đất, khu đất; vùng đất, địa phương"
  },
  {
    "id": "fb_1232",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "家を建てるために",
    "sentenceSuffix": "を買いました。",
    "choices": [
      "タイミング",
      "にぎわう",
      "トラック",
      "土地"
    ],
    "answer": "土地",
    "fullSentence": "家を建てるために土地を買いました。",
    "explanation": "家を建てるために土地を買いました。\nTôi mua đất để xây nhà.\n土地: đất, khu đất; vùng đất, địa phương"
  },
  {
    "id": "tr_1233",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi mua đất để xây nhà.",
    "acceptedAnswers": [
      "家を建てるために土地を買いました。",
      "家を建てるために土地を買いました"
    ],
    "explanation": "家を建てるために土地を買いました。\n(いえをたてるためにとちをかいました。)\n土地: đất, khu đất; vùng đất, địa phương"
  },
  {
    "id": "fb_1234",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "その",
    "sentenceSuffix": "の料理を食べたいです。",
    "choices": [
      "メンバー",
      "県庁",
      "もう少しで",
      "土地"
    ],
    "answer": "土地",
    "fullSentence": "その土地の料理を食べたいです。",
    "explanation": "その土地の料理を食べたいです。\nTôi muốn ăn món ăn của vùng đó.\n土地: đất, khu đất; vùng đất, địa phương"
  },
  {
    "id": "tr_1235",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi muốn ăn món ăn của vùng đó.",
    "acceptedAnswers": [
      "その土地の料理を食べたいです。",
      "その土地の料理を食べたいです"
    ],
    "explanation": "その土地の料理を食べたいです。\n(そのとちのりょうりをたべたいです。)\n土地: đất, khu đất; vùng đất, địa phương"
  },
  {
    "id": "mc_1236",
    "type": "multiple_choice",
    "question": "ハーモニカ có nghĩa là gì?",
    "word": "ハーモニカ",
    "reading": "ハーモニカ",
    "choices": [
      "sống, sinh sống",
      "kèn harmonica",
      "dịch vụ chuyển phát tận nhà; kiện gửi qua dịch vụ đó",
      "tạm về nước"
    ],
    "answer": "kèn harmonica",
    "explanation": "ハーモニカ (ハーモニカ): kèn harmonica"
  },
  {
    "id": "fb_1237",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "祖父は",
    "sentenceSuffix": "を吹くのが好きです。",
    "choices": [
      "～とも",
      "かける（迷惑をかける）",
      "ハーモニカ",
      "うらやましい"
    ],
    "answer": "ハーモニカ",
    "fullSentence": "祖父はハーモニカを吹くのが好きです。",
    "explanation": "祖父はハーモニカを吹くのが好きです。\nÔng tôi thích thổi harmonica.\nハーモニカ: kèn harmonica"
  },
  {
    "id": "tr_1238",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Ông tôi thích thổi harmonica.",
    "acceptedAnswers": [
      "祖父はハーモニカを吹くのが好きです。",
      "祖父はハーモニカを吹くのが好きです"
    ],
    "explanation": "祖父はハーモニカを吹くのが好きです。\n(そふはハーモニカをふくのがすきです。)\nハーモニカ: kèn harmonica"
  },
  {
    "id": "mc_1239",
    "type": "multiple_choice",
    "question": "乗客 có nghĩa là gì?",
    "word": "乗客",
    "reading": "じょうきゃく",
    "choices": [
      "hành khách trên phương tiện",
      "ruy băng, dây nơ",
      "giấy gói hàng/quà",
      "sự may mắn; may mắn"
    ],
    "answer": "hành khách trên phương tiện",
    "explanation": "乗客 (じょうきゃく): hành khách trên phương tiện"
  },
  {
    "id": "fb_1240",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "駅で多くの",
    "sentenceSuffix": "が降りました。",
    "choices": [
      "乗客",
      "あらかじめ",
      "口々に",
      "売り上げ"
    ],
    "answer": "乗客",
    "fullSentence": "駅で多くの乗客が降りました。",
    "explanation": "駅で多くの乗客が降りました。\nNhiều hành khách xuống tại ga.\n乗客: hành khách trên phương tiện"
  },
  {
    "id": "tr_1241",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Nhiều hành khách xuống tại ga.",
    "acceptedAnswers": [
      "駅で多くの乗客が降りました。",
      "駅で多くの乗客が降りました"
    ],
    "explanation": "駅で多くの乗客が降りました。\n(えきでおおくのじょうきゃくがおりました。)\n乗客: hành khách trên phương tiện"
  },
  {
    "id": "mc_1242",
    "type": "multiple_choice",
    "question": "ハプニング có nghĩa là gì?",
    "word": "ハプニング",
    "reading": "ハプニング",
    "choices": [
      "dân số",
      "sự việc bất ngờ, sự cố ngoài dự kiến",
      "về nước mình",
      "lễ hội trường"
    ],
    "answer": "sự việc bất ngờ, sự cố ngoài dự kiến",
    "explanation": "ハプニング (ハプニング): sự việc bất ngờ, sự cố ngoài dự kiến"
  },
  {
    "id": "fb_1243",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "旅行中に思わぬ",
    "sentenceSuffix": "が起こりました。",
    "choices": [
      "フリーダイヤル",
      "若者",
      "ただ",
      "ハプニング"
    ],
    "answer": "ハプニング",
    "fullSentence": "旅行中に思わぬハプニングが起こりました。",
    "explanation": "旅行中に思わぬハプニングが起こりました。\nTrong chuyến đi đã có sự cố bất ngờ.\nハプニング: sự việc bất ngờ, sự cố ngoài dự kiến"
  },
  {
    "id": "tr_1244",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Trong chuyến đi đã có sự cố bất ngờ.",
    "acceptedAnswers": [
      "旅行中に思わぬハプニングが起こりました。",
      "旅行中に思わぬハプニングが起こりました"
    ],
    "explanation": "旅行中に思わぬハプニングが起こりました。\n(りょこうちゅうにおもわぬハプニングがおこりました。)\nハプニング: sự việc bất ngờ, sự cố ngoài dự kiến"
  },
  {
    "id": "mc_1245",
    "type": "multiple_choice",
    "question": "思いがけない có nghĩa là gì?",
    "word": "思いがけない",
    "reading": "おもいがけない",
    "choices": [
      "thung lũng hẹp có sông/suối, hẻm núi",
      "xe tải",
      "lâu rồi mới lại…; lâu không gặp/làm",
      "không ngờ tới, bất ngờ"
    ],
    "answer": "không ngờ tới, bất ngờ",
    "explanation": "思いがけない (おもいがけない): không ngờ tới, bất ngờ"
  },
  {
    "id": "fb_1246",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "プレゼントをもらいました。",
    "choices": [
      "あはは",
      "思いがけない",
      "包装",
      "崖"
    ],
    "answer": "思いがけない",
    "fullSentence": "思いがけないプレゼントをもらいました。",
    "explanation": "思いがけないプレゼントをもらいました。\nTôi nhận được món quà bất ngờ.\n思いがけない: không ngờ tới, bất ngờ"
  },
  {
    "id": "tr_1247",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi nhận được món quà bất ngờ.",
    "acceptedAnswers": [
      "思いがけないプレゼントをもらいました。",
      "思いがけないプレゼントをもらいました"
    ],
    "explanation": "思いがけないプレゼントをもらいました。\n(おもいがけないプレゼントをもらいました。)\n思いがけない: không ngờ tới, bất ngờ"
  },
  {
    "id": "mc_1248",
    "type": "multiple_choice",
    "question": "出来事 có nghĩa là gì?",
    "word": "出来事",
    "reading": "できごと",
    "choices": [
      "sự việc, chuyện xảy ra",
      "dân số",
      "khí hậu",
      "cách nói suồng sã, ngang hàng, không dùng kính ngữ"
    ],
    "answer": "sự việc, chuyện xảy ra",
    "explanation": "出来事 (できごと): sự việc, chuyện xảy ra"
  },
  {
    "id": "fb_1249",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "今日の",
    "sentenceSuffix": "について話しました。",
    "choices": [
      "通る（電気が通る）",
      "世代",
      "出来事",
      "庭"
    ],
    "answer": "出来事",
    "fullSentence": "今日の出来事について話しました。",
    "explanation": "今日の出来事について話しました。\nTôi kể về những chuyện xảy ra hôm nay.\n出来事: sự việc, chuyện xảy ra"
  },
  {
    "id": "tr_1250",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi kể về những chuyện xảy ra hôm nay.",
    "acceptedAnswers": [
      "今日の出来事について話しました。",
      "今日の出来事について話しました"
    ],
    "explanation": "今日の出来事について話しました。\n(きょうのできごとについてはなしました。)\n出来事: sự việc, chuyện xảy ra"
  },
  {
    "id": "mc_1251",
    "type": "multiple_choice",
    "question": "向かい合う có nghĩa là gì?",
    "word": "向かい合う",
    "reading": "むかいあう",
    "choices": [
      "đối diện nhau, quay mặt vào nhau",
      "địa phương nơi mình sống/xuất thân; vùng sở tại",
      "đi lễ đền/chùa",
      "cháu (của ông bà)"
    ],
    "answer": "đối diện nhau, quay mặt vào nhau",
    "explanation": "向かい合う (むかいあう): đối diện nhau, quay mặt vào nhau"
  },
  {
    "id": "tr_1252",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi ngồi đối diện bạn.",
    "acceptedAnswers": [
      "友達と向かい合って座りました。",
      "友達と向かい合って座りました"
    ],
    "explanation": "友達と向かい合って座りました。\n(ともだちとむかいあってすわりました。)\n向かい合う: đối diện nhau, quay mặt vào nhau"
  },
  {
    "id": "mc_1253",
    "type": "multiple_choice",
    "question": "フリー切符 có nghĩa là gì?",
    "word": "フリー切符",
    "reading": "フリーきっぷ",
    "choices": [
      "nữ sinh trung học phổ thông",
      "tin nhắn, lời nhắn, thông điệp",
      "cứng, chắc; cứng nhắc, trang trọng quá",
      "vé đi không giới hạn trong phạm vi và thời hạn quy định"
    ],
    "answer": "vé đi không giới hạn trong phạm vi và thời hạn quy định",
    "explanation": "フリー切符 (フリーきっぷ): vé đi không giới hạn trong phạm vi và thời hạn quy định"
  },
  {
    "id": "fb_1254",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "で何度も電車に乗れます。",
    "choices": [
      "～産",
      "石炭",
      "フリー切符",
      "いたす"
    ],
    "answer": "フリー切符",
    "fullSentence": "フリー切符で何度も電車に乗れます。",
    "explanation": "フリー切符で何度も電車に乗れます。\nVới vé trọn gói có thể đi tàu nhiều lần.\nフリー切符: vé đi không giới hạn trong phạm vi và thời hạn quy định"
  },
  {
    "id": "tr_1255",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Với vé trọn gói có thể đi tàu nhiều lần.",
    "acceptedAnswers": [
      "フリー切符で何度も電車に乗れます。",
      "フリー切符で何度も電車に乗れます"
    ],
    "explanation": "フリー切符で何度も電車に乗れます。\n(フリーきっぷでなんどもでんしゃにのれます。)\nフリー切符: vé đi không giới hạn trong phạm vi và thời hạn quy định"
  },
  {
    "id": "mc_1256",
    "type": "multiple_choice",
    "question": "乗り降り có nghĩa là gì?",
    "word": "乗り降り",
    "reading": "のりおり",
    "choices": [
      "đồng bằng",
      "sàn gỗ, sàn lát ván",
      "bán hàng",
      "lên xuống phương tiện"
    ],
    "answer": "lên xuống phương tiện",
    "explanation": "乗り降り (のりおり): lên xuống phương tiện"
  },
  {
    "id": "fb_1257",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この切符なら自由に",
    "sentenceSuffix": "できます。",
    "choices": [
      "マーク",
      "トンネル",
      "景気",
      "乗り降り"
    ],
    "answer": "乗り降り",
    "fullSentence": "この切符なら自由に乗り降りできます。",
    "explanation": "この切符なら自由に乗り降りできます。\nVới vé này có thể tự do lên xuống.\n乗り降り: lên xuống phương tiện"
  },
  {
    "id": "tr_1258",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Với vé này có thể tự do lên xuống.",
    "acceptedAnswers": [
      "この切符なら自由に乗り降りできます。",
      "この切符なら自由に乗り降りできます"
    ],
    "explanation": "この切符なら自由に乗り降りできます。\n(このきっぷならじゆうにのりおりできます。)\n乗り降り: lên xuống phương tiện"
  },
  {
    "id": "fb_1259",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "の際は足元に気を付けてください。",
    "choices": [
      "国宝",
      "展望台",
      "乗り降り",
      "平均"
    ],
    "answer": "乗り降り",
    "fullSentence": "乗り降りの際は足元に気を付けてください。",
    "explanation": "乗り降りの際は足元に気を付けてください。\nHãy chú ý dưới chân khi lên xuống.\n乗り降り: lên xuống phương tiện"
  },
  {
    "id": "tr_1260",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Hãy chú ý dưới chân khi lên xuống.",
    "acceptedAnswers": [
      "乗り降りの際は足元に気を付けてください。",
      "乗り降りの際は足元に気を付けてください"
    ],
    "explanation": "乗り降りの際は足元に気を付けてください。\n(のりおりのさいはあしもとにきをつけてください。)\n乗り降り: lên xuống phương tiện"
  },
  {
    "id": "mc_1261",
    "type": "multiple_choice",
    "question": "配布 có nghĩa là gì?",
    "word": "配布",
    "reading": "はいふ",
    "choices": [
      "sản vật núi rừng như nấm, rau rừng",
      "tiền điện tử dùng thanh toán",
      "tên địa điểm, địa danh",
      "phân phát"
    ],
    "answer": "phân phát",
    "explanation": "配布 (はいふ): phân phát"
  },
  {
    "id": "fb_1262",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "学生に資料を",
    "sentenceSuffix": "します。",
    "choices": [
      "お世話になっています",
      "～分け",
      "にぎわう",
      "配布"
    ],
    "answer": "配布",
    "fullSentence": "学生に資料を配布します。",
    "explanation": "学生に資料を配布します。\nTôi phát tài liệu cho sinh viên.\n配布: phân phát"
  },
  {
    "id": "tr_1263",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi phát tài liệu cho sinh viên.",
    "acceptedAnswers": [
      "学生に資料を配布します。",
      "学生に資料を配布します"
    ],
    "explanation": "学生に資料を配布します。\n(がくせいにしりょうをはいふします。)\n配布: phân phát"
  },
  {
    "id": "mc_1264",
    "type": "multiple_choice",
    "question": "観光マップ có nghĩa là gì?",
    "word": "観光マップ",
    "reading": "かんこうマップ",
    "choices": [
      "thời gian cần để hoàn thành hành trình/công việc",
      "bản đồ du lịch",
      "tính cả, đưa vào, bao gồm vào",
      "kín chỗ, hết ghế trống"
    ],
    "answer": "bản đồ du lịch",
    "explanation": "観光マップ (かんこうマップ): bản đồ du lịch"
  },
  {
    "id": "fb_1265",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "駅で",
    "sentenceSuffix": "をもらいました。",
    "choices": [
      "観光マップ",
      "迎える",
      "頂上",
      "雲"
    ],
    "answer": "観光マップ",
    "fullSentence": "駅で観光マップをもらいました。",
    "explanation": "駅で観光マップをもらいました。\nTôi lấy bản đồ du lịch ở ga.\n観光マップ: bản đồ du lịch"
  },
  {
    "id": "tr_1266",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi lấy bản đồ du lịch ở ga.",
    "acceptedAnswers": [
      "駅で観光マップをもらいました。",
      "駅で観光マップをもらいました"
    ],
    "explanation": "駅で観光マップをもらいました。\n(えきでかんこうマップをもらいました。)\n観光マップ: bản đồ du lịch"
  },
  {
    "id": "mc_1267",
    "type": "multiple_choice",
    "question": "書き込む có nghĩa là gì?",
    "word": "書き込む",
    "reading": "かきこむ",
    "choices": [
      "viết thêm vào, điền vào; đăng nội dung",
      "thổi (gió; nhạc cụ hơi)",
      "dáng vẻ, hình dáng; hình ảnh người/vật",
      "sự may mắn; may mắn"
    ],
    "answer": "viết thêm vào, điền vào; đăng nội dung",
    "explanation": "書き込む (かきこむ): viết thêm vào, điền vào; đăng nội dung"
  },
  {
    "id": "tr_1268",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi ghi tên cửa hàng vào bản đồ.",
    "acceptedAnswers": [
      "地図に店の名前を書き込みます。",
      "地図に店の名前を書き込みます"
    ],
    "explanation": "地図に店の名前を書き込みます。\n(ちずにみせのなまえをかきこみます。)\n書き込む: viết thêm vào, điền vào; đăng nội dung"
  },
  {
    "id": "tr_1269",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đăng cảm nghĩ lên diễn đàn.",
    "acceptedAnswers": [
      "掲示板に感想を書き込みました。",
      "掲示板に感想を書き込みました"
    ],
    "explanation": "掲示板に感想を書き込みました。\n(けいじばんにかんそうをかきこみました。)\n書き込む: viết thêm vào, điền vào; đăng nội dung"
  },
  {
    "id": "mc_1270",
    "type": "multiple_choice",
    "question": "ときには có nghĩa là gì?",
    "word": "ときには",
    "reading": "ときには",
    "choices": [
      "lượng giáng thủy (mưa, tuyết… quy đổi ra nước)",
      "đôi khi, cũng có lúc",
      "phần mái chìa, mái hiên",
      "chuyện có thật"
    ],
    "answer": "đôi khi, cũng có lúc",
    "explanation": "ときには (ときには): đôi khi, cũng có lúc"
  },
  {
    "id": "fb_1271",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "一人で旅行します。",
    "choices": [
      "一言",
      "ときには",
      "目を向ける",
      "地名"
    ],
    "answer": "ときには",
    "fullSentence": "ときには一人で旅行します。",
    "explanation": "ときには一人で旅行します。\nĐôi khi tôi đi du lịch một mình.\nときには: đôi khi, cũng có lúc"
  },
  {
    "id": "tr_1272",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Đôi khi tôi đi du lịch một mình.",
    "acceptedAnswers": [
      "ときには一人で旅行します。",
      "ときには一人で旅行します"
    ],
    "explanation": "ときには一人で旅行します。\n(ときにはひとりでりょこうします。)\nときには: đôi khi, cũng có lúc"
  },
  {
    "id": "mc_1273",
    "type": "multiple_choice",
    "question": "薦める có nghĩa là gì?",
    "word": "薦める",
    "reading": "すすめる",
    "choices": [
      "phát triển mạnh, sôi nổi, thịnh hành",
      "làm bẩn",
      "giới thiệu, đề cử, khuyên chọn",
      "lý do, nguyên do; lẽ, kết luận"
    ],
    "answer": "giới thiệu, đề cử, khuyên chọn",
    "explanation": "薦める (すすめる): giới thiệu, đề cử, khuyên chọn"
  },
  {
    "id": "tr_1274",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi giới thiệu cuốn sách này cho bạn.",
    "acceptedAnswers": [
      "友人にこの本を薦めました。",
      "友人にこの本を薦めました"
    ],
    "explanation": "友人にこの本を薦めました。\n(ゆうじんにこのほんをすすめました。)\n薦める: giới thiệu, đề cử, khuyên chọn"
  },
  {
    "id": "mc_1275",
    "type": "multiple_choice",
    "question": "世界自然遺産 có nghĩa là gì?",
    "word": "世界自然遺産",
    "reading": "せかいしぜんいさん",
    "choices": [
      "di sản thiên nhiên thế giới",
      "ngoài…, trừ…",
      "bên trong xe/tàu",
      "chiếu tatami"
    ],
    "answer": "di sản thiên nhiên thế giới",
    "explanation": "世界自然遺産 (せかいしぜんいさん): di sản thiên nhiên thế giới"
  },
  {
    "id": "fb_1276",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この島は",
    "sentenceSuffix": "に登録されています。",
    "choices": [
      "世界自然遺産",
      "再会",
      "作戦",
      "表現"
    ],
    "answer": "世界自然遺産",
    "fullSentence": "この島は世界自然遺産に登録されています。",
    "explanation": "この島は世界自然遺産に登録されています。\nĐảo này được ghi danh di sản thiên nhiên thế giới.\n世界自然遺産: di sản thiên nhiên thế giới"
  },
  {
    "id": "tr_1277",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Đảo này được ghi danh di sản thiên nhiên thế giới.",
    "acceptedAnswers": [
      "この島は世界自然遺産に登録されています。",
      "この島は世界自然遺産に登録されています"
    ],
    "explanation": "この島は世界自然遺産に登録されています。\n(このしまはせかいしぜんいさんにとうろくされています。)\n世界自然遺産: di sản thiên nhiên thế giới"
  },
  {
    "id": "mc_1278",
    "type": "multiple_choice",
    "question": "～発 có nghĩa là gì?",
    "word": "～発",
    "reading": "～はつ",
    "choices": [
      "vợ, bà xã (khẩu ngữ)",
      "đặc sản địa phương",
      "gói, bao bọc",
      "xuất phát từ…; khởi hành lúc…"
    ],
    "answer": "xuất phát từ…; khởi hành lúc…",
    "explanation": "～発 (～はつ): xuất phát từ…; khởi hành lúc…"
  },
  {
    "id": "tr_1279",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đi chuyến tàu xuất phát từ Tokyo.",
    "acceptedAnswers": [
      "東京発の列車に乗ります。",
      "東京発の列車に乗ります"
    ],
    "explanation": "東京発の列車に乗ります。\n(とうきょうはつのれっしゃにのります。)\n～発: xuất phát từ…; khởi hành lúc…"
  },
  {
    "id": "tr_1280",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đặt chuyến xe buýt khởi hành lúc chín giờ.",
    "acceptedAnswers": [
      "九時発のバスを予約しました。",
      "九時発のバスを予約しました"
    ],
    "explanation": "九時発のバスを予約しました。\n(くじはつのバスをよやくしました。)\n～発: xuất phát từ…; khởi hành lúc…"
  },
  {
    "id": "mc_1281",
    "type": "multiple_choice",
    "question": "地元 có nghĩa là gì?",
    "word": "地元",
    "reading": "じもと",
    "choices": [
      "diễn tả bằng lời",
      "vườn, sân vườn",
      "san lấp (biển, đầm…) để tạo đất",
      "địa phương nơi mình sống/xuất thân; vùng sở tại"
    ],
    "answer": "địa phương nơi mình sống/xuất thân; vùng sở tại",
    "explanation": "地元 (じもと): địa phương nơi mình sống/xuất thân; vùng sở tại"
  },
  {
    "id": "fb_1282",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "の人に道を聞きました。",
    "choices": [
      "砂浜",
      "国宝",
      "ドレス",
      "地元"
    ],
    "answer": "地元",
    "fullSentence": "地元の人に道を聞きました。",
    "explanation": "地元の人に道を聞きました。\nTôi hỏi đường người địa phương.\n地元: địa phương nơi mình sống/xuất thân; vùng sở tại"
  },
  {
    "id": "tr_1283",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi hỏi đường người địa phương.",
    "acceptedAnswers": [
      "地元の人に道を聞きました。",
      "地元の人に道を聞きました"
    ],
    "explanation": "地元の人に道を聞きました。\n(じもとのひとにみちをききました。)\n地元: địa phương nơi mình sống/xuất thân; vùng sở tại"
  },
  {
    "id": "mc_1284",
    "type": "multiple_choice",
    "question": "豊かさ có nghĩa là gì?",
    "word": "豊かさ",
    "reading": "ゆたかさ",
    "choices": [
      "điều chỉnh cho phù hợp; ghép, kết hợp",
      "bê tông",
      "sự phong phú, giàu có",
      "bản đồ du lịch"
    ],
    "answer": "sự phong phú, giàu có",
    "explanation": "豊かさ (ゆたかさ): sự phong phú, giàu có"
  },
  {
    "id": "fb_1285",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "自然の",
    "sentenceSuffix": "を感じました。",
    "choices": [
      "返る",
      "豊かさ",
      "個性",
      "姿"
    ],
    "answer": "豊かさ",
    "fullSentence": "自然の豊かさを感じました。",
    "explanation": "自然の豊かさを感じました。\nTôi cảm nhận sự phong phú của thiên nhiên.\n豊かさ: sự phong phú, giàu có"
  },
  {
    "id": "tr_1286",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi cảm nhận sự phong phú của thiên nhiên.",
    "acceptedAnswers": [
      "自然の豊かさを感じました。",
      "自然の豊かさを感じました"
    ],
    "explanation": "自然の豊かさを感じました。\n(しぜんのゆたかさをかんじました。)\n豊かさ: sự phong phú, giàu có"
  },
  {
    "id": "mc_1287",
    "type": "multiple_choice",
    "question": "見どころ có nghĩa là gì?",
    "word": "見どころ",
    "reading": "みどころ",
    "choices": [
      "buộc, choàng, gắn (ruy băng lên vật)",
      "cố ý, có chủ đích",
      "điểm đáng xem, nét hấp dẫn",
      "nhỏ, nho nhỏ, không lớn"
    ],
    "answer": "điểm đáng xem, nét hấp dẫn",
    "explanation": "見どころ (みどころ): điểm đáng xem, nét hấp dẫn"
  },
  {
    "id": "fb_1288",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この町は",
    "sentenceSuffix": "が多いです。",
    "choices": [
      "数える",
      "見どころ",
      "埋め立てる",
      "売り上げ"
    ],
    "answer": "見どころ",
    "fullSentence": "この町は見どころが多いです。",
    "explanation": "この町は見どころが多いです。\nThị trấn này có nhiều điểm đáng xem.\n見どころ: điểm đáng xem, nét hấp dẫn"
  },
  {
    "id": "tr_1289",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Thị trấn này có nhiều điểm đáng xem.",
    "acceptedAnswers": [
      "この町は見どころが多いです。",
      "この町は見どころが多いです"
    ],
    "explanation": "この町は見どころが多いです。\n(このまちはみどころがおおいです。)\n見どころ: điểm đáng xem, nét hấp dẫn"
  },
  {
    "id": "mc_1290",
    "type": "multiple_choice",
    "question": "杉 có nghĩa là gì?",
    "word": "杉",
    "reading": "すぎ",
    "choices": [
      "bãi biển cát",
      "cây sugi, tuyết tùng Nhật Bản",
      "nhà văn; người sáng tác",
      "cho phép"
    ],
    "answer": "cây sugi, tuyết tùng Nhật Bản",
    "explanation": "杉 (すぎ): cây sugi, tuyết tùng Nhật Bản"
  },
  {
    "id": "fb_1291",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "神社の近くに大きな",
    "sentenceSuffix": "の木があります。",
    "choices": [
      "杉",
      "村人",
      "魔除け",
      "往復"
    ],
    "answer": "杉",
    "fullSentence": "神社の近くに大きな杉の木があります。",
    "explanation": "神社の近くに大きな杉の木があります。\nGần đền có cây sugi lớn.\n杉: cây sugi, tuyết tùng Nhật Bản"
  },
  {
    "id": "tr_1292",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Gần đền có cây sugi lớn.",
    "acceptedAnswers": [
      "神社の近くに大きな杉の木があります。",
      "神社の近くに大きな杉の木があります"
    ],
    "explanation": "神社の近くに大きな杉の木があります。\n(じんじゃのちかくにおおきなすぎのきがあります。)\n杉: cây sugi, tuyết tùng Nhật Bản"
  },
  {
    "id": "mc_1293",
    "type": "multiple_choice",
    "question": "トレッキング có nghĩa là gì?",
    "word": "トレッキング",
    "reading": "トレッキング",
    "choices": [
      "phần mái chìa, mái hiên",
      "đi bộ đường núi",
      "được làm bằng…; sản xuất tại…",
      "ghé thăm; (mùa, thời điểm) đến"
    ],
    "answer": "đi bộ đường núi",
    "explanation": "トレッキング (トレッキング): đi bộ đường núi"
  },
  {
    "id": "fb_1294",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "週末は山で",
    "sentenceSuffix": "をします。",
    "choices": [
      "分野",
      "誤解",
      "数える",
      "トレッキング"
    ],
    "answer": "トレッキング",
    "fullSentence": "週末は山でトレッキングをします。",
    "explanation": "週末は山でトレッキングをします。\nCuối tuần tôi đi bộ đường núi.\nトレッキング: đi bộ đường núi"
  },
  {
    "id": "tr_1295",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Cuối tuần tôi đi bộ đường núi.",
    "acceptedAnswers": [
      "週末は山でトレッキングをします。",
      "週末は山でトレッキングをします"
    ],
    "explanation": "週末は山でトレッキングをします。\n(しゅうまつはやまでトレッキングをします。)\nトレッキング: đi bộ đường núi"
  },
  {
    "id": "mc_1296",
    "type": "multiple_choice",
    "question": "所要時間 có nghĩa là gì?",
    "word": "所要時間",
    "reading": "しょようじかん",
    "choices": [
      "câu nói líu lưỡi để luyện phát âm nhanh",
      "đảo",
      "thời gian cần để hoàn thành hành trình/công việc",
      "đương nhiên, tất nhiên"
    ],
    "answer": "thời gian cần để hoàn thành hành trình/công việc",
    "explanation": "所要時間 (しょようじかん): thời gian cần để hoàn thành hành trình/công việc"
  },
  {
    "id": "fb_1297",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "駅までの",
    "sentenceSuffix": "は十分です。",
    "choices": [
      "生物",
      "グッズ",
      "所要時間",
      "タイミング"
    ],
    "answer": "所要時間",
    "fullSentence": "駅までの所要時間は十分です。",
    "explanation": "駅までの所要時間は十分です。\nThời gian cần để đến ga là mười phút.\n所要時間: thời gian cần để hoàn thành hành trình/công việc"
  },
  {
    "id": "tr_1298",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Thời gian cần để đến ga là mười phút.",
    "acceptedAnswers": [
      "駅までの所要時間は十分です。",
      "駅までの所要時間は十分です"
    ],
    "explanation": "駅までの所要時間は十分です。\n(えきまでのしょようじかんはじゅっぷんです。)\n所要時間: thời gian cần để hoàn thành hành trình/công việc"
  },
  {
    "id": "mc_1299",
    "type": "multiple_choice",
    "question": "歩行距離 có nghĩa là gì?",
    "word": "歩行距離",
    "reading": "ほこうきょり",
    "choices": [
      "ghé thăm; (mùa, thời điểm) đến",
      "hình dung, tưởng tượng",
      "vượt qua ranh giới, núi; trải qua thời kỳ",
      "quãng đường đi bộ"
    ],
    "answer": "quãng đường đi bộ",
    "explanation": "歩行距離 (ほこうきょり): quãng đường đi bộ"
  },
  {
    "id": "fb_1300",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "今日の",
    "sentenceSuffix": "は五キロです。",
    "choices": [
      "ちょっとした",
      "済ませる",
      "歩行距離",
      "ラストオーダー"
    ],
    "answer": "歩行距離",
    "fullSentence": "今日の歩行距離は五キロです。",
    "explanation": "今日の歩行距離は五キロです。\nQuãng đường đi bộ hôm nay là năm ki-lô-mét.\n歩行距離: quãng đường đi bộ"
  },
  {
    "id": "tr_1301",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Quãng đường đi bộ hôm nay là năm ki-lô-mét.",
    "acceptedAnswers": [
      "今日の歩行距離は五キロです。",
      "今日の歩行距離は五キロです"
    ],
    "explanation": "今日の歩行距離は五キロです。\n(きょうのほこうきょりはごキロです。)\n歩行距離: quãng đường đi bộ"
  },
  {
    "id": "mc_1302",
    "type": "multiple_choice",
    "question": "往復 có nghĩa là gì?",
    "word": "往復",
    "reading": "おうふく",
    "choices": [
      "nhiều màu sắc rực rỡ",
      "nguyên liệu nấu ăn",
      "đi lại hai chiều",
      "phát triển"
    ],
    "answer": "đi lại hai chiều",
    "explanation": "往復 (おうふく): đi lại hai chiều"
  },
  {
    "id": "fb_1303",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "毎日、家と会社を",
    "sentenceSuffix": "しています。",
    "choices": [
      "姿",
      "努力",
      "小論文",
      "往復"
    ],
    "answer": "往復",
    "fullSentence": "毎日、家と会社を往復しています。",
    "explanation": "毎日、家と会社を往復しています。\nMỗi ngày tôi đi lại giữa nhà và công ty.\n往復: đi lại hai chiều"
  },
  {
    "id": "tr_1304",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Mỗi ngày tôi đi lại giữa nhà và công ty.",
    "acceptedAnswers": [
      "毎日、家と会社を往復しています。",
      "毎日、家と会社を往復しています"
    ],
    "explanation": "毎日、家と会社を往復しています。\n(まいにち、いえとかいしゃをおうふくしています。)\n往復: đi lại hai chiều"
  },
  {
    "id": "fb_1305",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "で二時間かかります。",
    "choices": [
      "まるで",
      "往復",
      "裸",
      "禁煙"
    ],
    "answer": "往復",
    "fullSentence": "往復で二時間かかります。",
    "explanation": "往復で二時間かかります。\nCả đi lẫn về mất hai giờ.\n往復: đi lại hai chiều"
  },
  {
    "id": "tr_1306",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Cả đi lẫn về mất hai giờ.",
    "acceptedAnswers": [
      "往復で二時間かかります。",
      "往復で二時間かかります"
    ],
    "explanation": "往復で二時間かかります。\n(おうふくでにじかんかかります。)\n往復: đi lại hai chiều"
  },
  {
    "id": "mc_1307",
    "type": "multiple_choice",
    "question": "樹齢 có nghĩa là gì?",
    "word": "樹齢",
    "reading": "じゅれい",
    "choices": [
      "sống, sinh sống",
      "số điện thoại miễn cước cho người gọi",
      "tuổi của cây",
      "mây"
    ],
    "answer": "tuổi của cây",
    "explanation": "樹齢 (じゅれい): tuổi của cây"
  },
  {
    "id": "fb_1308",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この杉は",
    "sentenceSuffix": "三百年です。",
    "choices": [
      "山の幸",
      "樹齢",
      "太陽",
      "ほっぺた"
    ],
    "answer": "樹齢",
    "fullSentence": "この杉は樹齢三百年です。",
    "explanation": "この杉は樹齢三百年です。\nCây sugi này ba trăm tuổi.\n樹齢: tuổi của cây"
  },
  {
    "id": "tr_1309",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Cây sugi này ba trăm tuổi.",
    "acceptedAnswers": [
      "この杉は樹齢三百年です。",
      "この杉は樹齢三百年です"
    ],
    "explanation": "この杉は樹齢三百年です。\n(このすぎはじゅれいさんびゃくねんです。)\n樹齢: tuổi của cây"
  },
  {
    "id": "mc_1310",
    "type": "multiple_choice",
    "question": "神秘的 có nghĩa là gì?",
    "word": "神秘的",
    "reading": "しんぴてき",
    "choices": [
      "trạng thái không mặc quần áo, trần truồng",
      "thoải mái, dễ chịu",
      "tin nhắn, lời nhắn, thông điệp",
      "thần bí, huyền bí"
    ],
    "answer": "thần bí, huyền bí",
    "explanation": "神秘的 (しんぴてき): thần bí, huyền bí"
  },
  {
    "id": "fb_1311",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "湖は",
    "sentenceSuffix": "な雰囲気でした。",
    "choices": [
      "都市",
      "通る（電気が通る）",
      "神秘的",
      "～センチ"
    ],
    "answer": "神秘的",
    "fullSentence": "湖は神秘的な雰囲気でした。",
    "explanation": "湖は神秘的な雰囲気でした。\nHồ mang không khí huyền bí.\n神秘的: thần bí, huyền bí"
  },
  {
    "id": "tr_1312",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Hồ mang không khí huyền bí.",
    "acceptedAnswers": [
      "湖は神秘的な雰囲気でした。",
      "湖は神秘的な雰囲気でした"
    ],
    "explanation": "湖は神秘的な雰囲気でした。\n(みずうみはしんぴてきなふんいきでした。)\n神秘的: thần bí, huyền bí"
  },
  {
    "id": "mc_1313",
    "type": "multiple_choice",
    "question": "姿 có nghĩa là gì?",
    "word": "姿",
    "reading": "すがた",
    "choices": [
      "dáng vẻ, hình dáng; hình ảnh người/vật",
      "tầm giờ này; giờ này rồi",
      "mây",
      "ngực; lòng, tâm trạng"
    ],
    "answer": "dáng vẻ, hình dáng; hình ảnh người/vật",
    "explanation": "姿 (すがた): dáng vẻ, hình dáng; hình ảnh người/vật"
  },
  {
    "id": "fb_1314",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "遠くに友人の",
    "sentenceSuffix": "が見えました。",
    "choices": [
      "カーディガン",
      "姿",
      "土地",
      "体調"
    ],
    "answer": "姿",
    "fullSentence": "遠くに友人の姿が見えました。",
    "explanation": "遠くに友人の姿が見えました。\nTôi nhìn thấy bóng bạn từ xa.\n姿: dáng vẻ, hình dáng; hình ảnh người/vật"
  },
  {
    "id": "tr_1315",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi nhìn thấy bóng bạn từ xa.",
    "acceptedAnswers": [
      "遠くに友人の姿が見えました。",
      "遠くに友人の姿が見えました"
    ],
    "explanation": "遠くに友人の姿が見えました。\n(とおくにゆうじんのすがたがみえました。)\n姿: dáng vẻ, hình dáng; hình ảnh người/vật"
  },
  {
    "id": "fb_1316",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "彼はしばらく",
    "sentenceSuffix": "を見せませんでした。",
    "choices": [
      "姿",
      "チームプレー",
      "使い分ける",
      "風景"
    ],
    "answer": "姿",
    "fullSentence": "彼はしばらく姿を見せませんでした。",
    "explanation": "彼はしばらく姿を見せませんでした。\nAnh ấy không xuất hiện một thời gian.\n姿: dáng vẻ, hình dáng; hình ảnh người/vật"
  },
  {
    "id": "tr_1317",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Anh ấy không xuất hiện một thời gian.",
    "acceptedAnswers": [
      "彼はしばらく姿を見せませんでした。",
      "彼はしばらく姿を見せませんでした"
    ],
    "explanation": "彼はしばらく姿を見せませんでした。\n(かれはしばらくすがたをみせませんでした。)\n姿: dáng vẻ, hình dáng; hình ảnh người/vật"
  },
  {
    "id": "mc_1318",
    "type": "multiple_choice",
    "question": "言い表す có nghĩa là gì?",
    "word": "言い表す",
    "reading": "いいあらわす",
    "choices": [
      "đoạn văn, bài văn, văn bản",
      "ẩm, bị ẩm",
      "diễn tả bằng lời",
      "vùng, miền; địa phương ngoài đô thị lớn"
    ],
    "answer": "diễn tả bằng lời",
    "explanation": "言い表す (いいあらわす): diễn tả bằng lời"
  },
  {
    "id": "tr_1319",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi không thể diễn tả cảm xúc này bằng lời.",
    "acceptedAnswers": [
      "この気持ちは言葉で言い表せません。",
      "この気持ちは言葉で言い表せません"
    ],
    "explanation": "この気持ちは言葉で言い表せません。\n(このきもちはことばでいいあらわせません。)\n言い表す: diễn tả bằng lời"
  },
  {
    "id": "mc_1320",
    "type": "multiple_choice",
    "question": "モデル có nghĩa là gì?",
    "word": "モデル",
    "reading": "モデル",
    "choices": [
      "đoàn thể, tổ chức, nhóm",
      "mẫu, hình mẫu; người mẫu",
      "phát triển, tạo sản phẩm/công nghệ mới",
      "thơ, bài thơ"
    ],
    "answer": "mẫu, hình mẫu; người mẫu",
    "explanation": "モデル (モデル): mẫu, hình mẫu; người mẫu"
  },
  {
    "id": "fb_1321",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この町は映画の",
    "sentenceSuffix": "になりました。",
    "choices": [
      "全体",
      "文字",
      "配布",
      "モデル"
    ],
    "answer": "モデル",
    "fullSentence": "この町は映画のモデルになりました。",
    "explanation": "この町は映画のモデルになりました。\nThị trấn này đã làm hình mẫu cho bộ phim.\nモデル: mẫu, hình mẫu; người mẫu"
  },
  {
    "id": "tr_1322",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Thị trấn này đã làm hình mẫu cho bộ phim.",
    "acceptedAnswers": [
      "この町は映画のモデルになりました。",
      "この町は映画のモデルになりました"
    ],
    "explanation": "この町は映画のモデルになりました。\n(このまちはえいがのモデルになりました。)\nモデル: mẫu, hình mẫu; người mẫu"
  },
  {
    "id": "fb_1323",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "姉は",
    "sentenceSuffix": "として働いています。",
    "choices": [
      "モデル",
      "満席",
      "～周辺",
      "再会"
    ],
    "answer": "モデル",
    "fullSentence": "姉はモデルとして働いています。",
    "explanation": "姉はモデルとして働いています。\nChị tôi làm người mẫu.\nモデル: mẫu, hình mẫu; người mẫu"
  },
  {
    "id": "tr_1324",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Chị tôi làm người mẫu.",
    "acceptedAnswers": [
      "姉はモデルとして働いています。",
      "姉はモデルとして働いています"
    ],
    "explanation": "姉はモデルとして働いています。\n(あねはモデルとしてはたらいています。)\nモデル: mẫu, hình mẫu; người mẫu"
  },
  {
    "id": "mc_1325",
    "type": "multiple_choice",
    "question": "森 có nghĩa là gì?",
    "word": "森",
    "reading": "もり",
    "choices": [
      "rừng",
      "giờ đây, hiện nay (khác với trước)",
      "mặt đất",
      "chiều vòng trong của tuyến vòng"
    ],
    "answer": "rừng",
    "explanation": "森 (もり): rừng"
  },
  {
    "id": "fb_1326",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "朝、",
    "sentenceSuffix": "の中を歩きました。",
    "choices": [
      "女",
      "グッズ",
      "割る",
      "森"
    ],
    "answer": "森",
    "fullSentence": "朝、森の中を歩きました。",
    "explanation": "朝、森の中を歩きました。\nBuổi sáng tôi đi bộ trong rừng.\n森: rừng"
  },
  {
    "id": "tr_1327",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Buổi sáng tôi đi bộ trong rừng.",
    "acceptedAnswers": [
      "朝、森の中を歩きました。",
      "朝、森の中を歩きました"
    ],
    "explanation": "朝、森の中を歩きました。\n(あさ、もりのなかをあるきました。)\n森: rừng"
  },
  {
    "id": "mc_1328",
    "type": "multiple_choice",
    "question": "日常 có nghĩa là gì?",
    "word": "日常",
    "reading": "にちじょう",
    "choices": [
      "đời sống hằng ngày, thường nhật",
      "trợ từ cuối câu thể hiện cảm xúc/nhấn nhẹ",
      "đặt tên",
      "đầu máy/tàu hơi nước; viết tắt Steam Locomotive"
    ],
    "answer": "đời sống hằng ngày, thường nhật",
    "explanation": "日常 (にちじょう): đời sống hằng ngày, thường nhật"
  },
  {
    "id": "fb_1329",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "生活で日本語を使います。",
    "choices": [
      "ミーティング",
      "日常",
      "気象庁",
      "せりふ"
    ],
    "answer": "日常",
    "fullSentence": "日常生活で日本語を使います。",
    "explanation": "日常生活で日本語を使います。\nTôi dùng tiếng Nhật trong sinh hoạt hằng ngày.\n日常: đời sống hằng ngày, thường nhật"
  },
  {
    "id": "tr_1330",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi dùng tiếng Nhật trong sinh hoạt hằng ngày.",
    "acceptedAnswers": [
      "日常生活で日本語を使います。",
      "日常生活で日本語を使います"
    ],
    "explanation": "日常生活で日本語を使います。\n(にちじょうせいかつでにほんごをつかいます。)\n日常: đời sống hằng ngày, thường nhật"
  },
  {
    "id": "mc_1331",
    "type": "multiple_choice",
    "question": "海の幸 có nghĩa là gì?",
    "word": "海の幸",
    "reading": "うみのさち",
    "choices": [
      "sản vật từ biển, hải sản",
      "quả hồng, cây hồng",
      "lúc đó, thời ấy",
      "kéo dài, mở rộng; bị dời lại"
    ],
    "answer": "sản vật từ biển, hải sản",
    "explanation": "海の幸 (うみのさち): sản vật từ biển, hải sản"
  },
  {
    "id": "fb_1332",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この町では新鮮な",
    "sentenceSuffix": "を味わえます。",
    "choices": [
      "地方",
      "合わせる",
      "カラフル",
      "海の幸"
    ],
    "answer": "海の幸",
    "fullSentence": "この町では新鮮な海の幸を味わえます。",
    "explanation": "この町では新鮮な海の幸を味わえます。\nỞ thị trấn này có thể thưởng thức hải sản tươi.\n海の幸: sản vật từ biển, hải sản"
  },
  {
    "id": "tr_1333",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Ở thị trấn này có thể thưởng thức hải sản tươi.",
    "acceptedAnswers": [
      "この町では新鮮な海の幸を味わえます。",
      "この町では新鮮な海の幸を味わえます"
    ],
    "explanation": "この町では新鮮な海の幸を味わえます。\n(このまちではしんせんなうみのさちをあじわえます。)\n海の幸: sản vật từ biển, hải sản"
  },
  {
    "id": "mc_1334",
    "type": "multiple_choice",
    "question": "山の幸 có nghĩa là gì?",
    "word": "山の幸",
    "reading": "やまのさち",
    "choices": [
      "bản đồ du lịch",
      "sản vật núi rừng như nấm, rau rừng",
      "bình đẳng, ngang hàng",
      "mạnh dạn, lấy hết can đảm, quyết tâm làm"
    ],
    "answer": "sản vật núi rừng như nấm, rau rừng",
    "explanation": "山の幸 (やまのさち): sản vật núi rừng như nấm, rau rừng"
  },
  {
    "id": "fb_1335",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "秋にはきのこなどの",
    "sentenceSuffix": "を楽しみます。",
    "choices": [
      "柿",
      "奪う",
      "山の幸",
      "鉄筋"
    ],
    "answer": "山の幸",
    "fullSentence": "秋にはきのこなどの山の幸を楽しみます。",
    "explanation": "秋にはきのこなどの山の幸を楽しみます。\nMùa thu tôi thưởng thức sản vật núi rừng như nấm.\n山の幸: sản vật núi rừng như nấm, rau rừng"
  },
  {
    "id": "tr_1336",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Mùa thu tôi thưởng thức sản vật núi rừng như nấm.",
    "acceptedAnswers": [
      "秋にはきのこなどの山の幸を楽しみます。",
      "秋にはきのこなどの山の幸を楽しみます"
    ],
    "explanation": "秋にはきのこなどの山の幸を楽しみます。\n(あきにはきのこなどのやまのさちをたのしみます。)\n山の幸: sản vật núi rừng như nấm, rau rừng"
  },
  {
    "id": "mc_1337",
    "type": "multiple_choice",
    "question": "民宿 có nghĩa là gì?",
    "word": "民宿",
    "reading": "みんしゅく",
    "choices": [
      "lại, một lần nữa",
      "ngày tháng, thời gian trôi qua",
      "mặt trời/ánh nắng buổi sáng",
      "nhà trọ gia đình, minshuku"
    ],
    "answer": "nhà trọ gia đình, minshuku",
    "explanation": "民宿 (みんしゅく): nhà trọ gia đình, minshuku"
  },
  {
    "id": "fb_1338",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "海の近くの",
    "sentenceSuffix": "に泊まりました。",
    "choices": [
      "文字",
      "門",
      "駄目",
      "民宿"
    ],
    "answer": "民宿",
    "fullSentence": "海の近くの民宿に泊まりました。",
    "explanation": "海の近くの民宿に泊まりました。\nTôi ở nhà trọ gia đình gần biển.\n民宿: nhà trọ gia đình, minshuku"
  },
  {
    "id": "tr_1339",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi ở nhà trọ gia đình gần biển.",
    "acceptedAnswers": [
      "海の近くの民宿に泊まりました。",
      "海の近くの民宿に泊まりました"
    ],
    "explanation": "海の近くの民宿に泊まりました。\n(うみのちかくのみんしゅくにとまりました。)\n民宿: nhà trọ gia đình, minshuku"
  },
  {
    "id": "mc_1340",
    "type": "multiple_choice",
    "question": "味わう có nghĩa là gì?",
    "word": "味わう",
    "reading": "あじわう",
    "choices": [
      "nếm, thưởng thức; trải nghiệm cảm giác",
      "má (khẩu ngữ)",
      "về nhà",
      "nam và bắc; chiều bắc–nam"
    ],
    "answer": "nếm, thưởng thức; trải nghiệm cảm giác",
    "explanation": "味わう (あじわう): nếm, thưởng thức; trải nghiệm cảm giác"
  },
  {
    "id": "tr_1341",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi thong thả thưởng thức món ăn địa phương.",
    "acceptedAnswers": [
      "地元の料理をゆっくり味わいます。",
      "地元の料理をゆっくり味わいます"
    ],
    "explanation": "地元の料理をゆっくり味わいます。\n(じもとのりょうりをゆっくりあじわいます。)\n味わう: nếm, thưởng thức; trải nghiệm cảm giác"
  },
  {
    "id": "tr_1342",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đã nếm trải niềm vui vô địch.",
    "acceptedAnswers": [
      "優勝の喜びを味わいました。",
      "優勝の喜びを味わいました"
    ],
    "explanation": "優勝の喜びを味わいました。\n(ゆうしょうのよろこびをあじわいました。)\n味わう: nếm, thưởng thức; trải nghiệm cảm giác"
  },
  {
    "id": "mc_1343",
    "type": "multiple_choice",
    "question": "頂上 có nghĩa là gì?",
    "word": "頂上",
    "reading": "ちょうじょう",
    "choices": [
      "ếch",
      "di sản thiên nhiên thế giới",
      "đỉnh (núi, vật cao)",
      "xé, làm rách; phá vỡ/không giữ"
    ],
    "answer": "đỉnh (núi, vật cao)",
    "explanation": "頂上 (ちょうじょう): đỉnh (núi, vật cao)"
  },
  {
    "id": "fb_1344",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "昼ごろ山の",
    "sentenceSuffix": "に着きました。",
    "choices": [
      "手書き",
      "SL",
      "頂上",
      "モデル"
    ],
    "answer": "頂上",
    "fullSentence": "昼ごろ山の頂上に着きました。",
    "explanation": "昼ごろ山の頂上に着きました。\nKhoảng trưa tôi đến đỉnh núi.\n頂上: đỉnh (núi, vật cao)"
  },
  {
    "id": "tr_1345",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Khoảng trưa tôi đến đỉnh núi.",
    "acceptedAnswers": [
      "昼ごろ山の頂上に着きました。",
      "昼ごろ山の頂上に着きました"
    ],
    "explanation": "昼ごろ山の頂上に着きました。\n(ひるごろやまのちょうじょうにつきました。)\n頂上: đỉnh (núi, vật cao)"
  },
  {
    "id": "mc_1346",
    "type": "multiple_choice",
    "question": "朝日 có nghĩa là gì?",
    "word": "朝日",
    "reading": "あさひ",
    "choices": [
      "ngành sản xuất, ngành kinh tế",
      "lượt/giờ nhận gọi món cuối cùng",
      "mặt trời/ánh nắng buổi sáng",
      "làm bẩn"
    ],
    "answer": "mặt trời/ánh nắng buổi sáng",
    "explanation": "朝日 (あさひ): mặt trời/ánh nắng buổi sáng"
  },
  {
    "id": "fb_1347",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "海から",
    "sentenceSuffix": "が昇りました。",
    "choices": [
      "山林",
      "朝日",
      "期待",
      "わざわざ"
    ],
    "answer": "朝日",
    "fullSentence": "海から朝日が昇りました。",
    "explanation": "海から朝日が昇りました。\nMặt trời buổi sáng mọc lên từ phía biển.\n朝日: mặt trời/ánh nắng buổi sáng"
  },
  {
    "id": "tr_1348",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Mặt trời buổi sáng mọc lên từ phía biển.",
    "acceptedAnswers": [
      "海から朝日が昇りました。",
      "海から朝日が昇りました"
    ],
    "explanation": "海から朝日が昇りました。\n(うみからあさひがのぼりました。)\n朝日: mặt trời/ánh nắng buổi sáng"
  },
  {
    "id": "mc_1349",
    "type": "multiple_choice",
    "question": "積もる có nghĩa là gì?",
    "word": "積もる",
    "reading": "つもる",
    "choices": [
      "hình dung, gợi nhớ trong đầu",
      "đẹp, đẹp đẽ",
      "chuyến dã ngoại, thường do trường tổ chức",
      "tích tụ, chất lên (tuyết, bụi…)"
    ],
    "answer": "tích tụ, chất lên (tuyết, bụi…)",
    "explanation": "積もる (つもる): tích tụ, chất lên (tuyết, bụi…)"
  },
  {
    "id": "tr_1350",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tuyết đang chất trên mái nhà.",
    "acceptedAnswers": [
      "屋根に雪が積もっています。",
      "屋根に雪が積もっています"
    ],
    "explanation": "屋根に雪が積もっています。\n(やねにゆきがつもっています。)\n積もる: tích tụ, chất lên (tuyết, bụi…)"
  },
  {
    "id": "mc_1351",
    "type": "multiple_choice",
    "question": "おやつ có nghĩa là gì?",
    "word": "おやつ",
    "reading": "おやつ",
    "choices": [
      "biểu hiện, dấu hiệu thể hiện",
      "đồ ăn bữa phụ, đồ ăn vặt",
      "câu/chuỗi đọc xuôi và ngược giống nhau",
      "xúc động, cảm động"
    ],
    "answer": "đồ ăn bữa phụ, đồ ăn vặt",
    "explanation": "おやつ (おやつ): đồ ăn bữa phụ, đồ ăn vặt"
  },
  {
    "id": "fb_1352",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "三時に",
    "sentenceSuffix": "を食べます。",
    "choices": [
      "おやつ",
      "堅い",
      "固める",
      "ブックカバー"
    ],
    "answer": "おやつ",
    "fullSentence": "三時におやつを食べます。",
    "explanation": "三時におやつを食べます。\nTôi ăn bữa phụ lúc ba giờ.\nおやつ: đồ ăn bữa phụ, đồ ăn vặt"
  },
  {
    "id": "tr_1353",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi ăn bữa phụ lúc ba giờ.",
    "acceptedAnswers": [
      "三時におやつを食べます。",
      "三時におやつを食べます"
    ],
    "explanation": "三時におやつを食べます。\n(さんじにおやつをたべます。)\nおやつ: đồ ăn bữa phụ, đồ ăn vặt"
  },
  {
    "id": "mc_1354",
    "type": "multiple_choice",
    "question": "おつまみ có nghĩa là gì?",
    "word": "おつまみ",
    "reading": "おつまみ",
    "choices": [
      "đẹp, đẹp đẽ",
      "lĩnh vực",
      "sống, tồn tại",
      "đồ nhắm ăn cùng rượu bia"
    ],
    "answer": "đồ nhắm ăn cùng rượu bia",
    "explanation": "おつまみ (おつまみ): đồ nhắm ăn cùng rượu bia"
  },
  {
    "id": "fb_1355",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "ビールと",
    "sentenceSuffix": "を注文しました。",
    "choices": [
      "やって来る",
      "民宿",
      "おつまみ",
      "雲"
    ],
    "answer": "おつまみ",
    "fullSentence": "ビールとおつまみを注文しました。",
    "explanation": "ビールとおつまみを注文しました。\nTôi gọi bia và đồ nhắm.\nおつまみ: đồ nhắm ăn cùng rượu bia"
  },
  {
    "id": "tr_1356",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi gọi bia và đồ nhắm.",
    "acceptedAnswers": [
      "ビールとおつまみを注文しました。",
      "ビールとおつまみを注文しました"
    ],
    "explanation": "ビールとおつまみを注文しました。\n(ビールとおつまみをちゅうもんしました。)\nおつまみ: đồ nhắm ăn cùng rượu bia"
  },
  {
    "id": "mc_1357",
    "type": "multiple_choice",
    "question": "通る（電気が通る） có nghĩa là gì?",
    "word": "通る（電気が通る）",
    "reading": "とおる（でんきがとおる）",
    "choices": [
      "lọt vào, đi sâu vào bên trong",
      "được nướng chín; bị cháy; bị rám nắng",
      "đi qua, chạy qua; điện được dẫn đến",
      "mặt trời"
    ],
    "answer": "đi qua, chạy qua; điện được dẫn đến",
    "explanation": "通る（電気が通る） (とおる（でんきがとおる）): đi qua, chạy qua; điện được dẫn đến"
  },
  {
    "id": "tr_1358",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Căn nhà trên núi này chưa có điện.",
    "acceptedAnswers": [
      "この山小屋には電気が通っていません。",
      "この山小屋には電気が通っていません"
    ],
    "explanation": "この山小屋には電気が通っていません。\n(このやまごやにはでんきがとおっていません。)\n通る（電気が通る）: đi qua, chạy qua; điện được dẫn đến"
  },
  {
    "id": "tr_1359",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Khi đến trường, tôi đi qua công viên.",
    "acceptedAnswers": [
      "学校へ行くとき、公園を通ります。",
      "学校へ行くとき、公園を通ります"
    ],
    "explanation": "学校へ行くとき、公園を通ります。\n(がっこうへいくとき、こうえんをとおります。)\n通る（電気が通る）: đi qua, chạy qua; điện được dẫn đến"
  },
  {
    "id": "mc_1360",
    "type": "multiple_choice",
    "question": "日帰り có nghĩa là gì?",
    "word": "日帰り",
    "reading": "ひがえり",
    "choices": [
      "đại diện, tiêu biểu cho",
      "đi và về trong ngày",
      "hơn hẳn; mạnh một cái, dồn sức",
      "nhà nghỉ nhỏ kiểu phương Tây, thường do gia đình quản lý"
    ],
    "answer": "đi và về trong ngày",
    "explanation": "日帰り (ひがえり): đi và về trong ngày"
  },
  {
    "id": "fb_1361",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "で京都へ行きます。",
    "choices": [
      "日帰り",
      "産業",
      "倒す",
      "チリンチリン"
    ],
    "answer": "日帰り",
    "fullSentence": "日帰りで京都へ行きます。",
    "explanation": "日帰りで京都へ行きます。\nTôi đi Kyoto rồi về trong ngày.\n日帰り: đi và về trong ngày"
  },
  {
    "id": "tr_1362",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đi Kyoto rồi về trong ngày.",
    "acceptedAnswers": [
      "日帰りで京都へ行きます。",
      "日帰りで京都へ行きます"
    ],
    "explanation": "日帰りで京都へ行きます。\n(ひがえりできょうとへいきます。)\n日帰り: đi và về trong ngày"
  },
  {
    "id": "fb_1363",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "今回は泊まらずに",
    "sentenceSuffix": "します。",
    "choices": [
      "通る（電気が通る）",
      "～者",
      "チームプレー",
      "日帰り"
    ],
    "answer": "日帰り",
    "fullSentence": "今回は泊まらずに日帰りします。",
    "explanation": "今回は泊まらずに日帰りします。\nLần này tôi không ở lại mà về trong ngày.\n日帰り: đi và về trong ngày"
  },
  {
    "id": "tr_1364",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Lần này tôi không ở lại mà về trong ngày.",
    "acceptedAnswers": [
      "今回は泊まらずに日帰りします。",
      "今回は泊まらずに日帰りします"
    ],
    "explanation": "今回は泊まらずに日帰りします。\n(こんかいはとまらずにひがえりします。)\n日帰り: đi và về trong ngày"
  },
  {
    "id": "mc_1365",
    "type": "multiple_choice",
    "question": "滝 có nghĩa là gì?",
    "word": "滝",
    "reading": "たき",
    "choices": [
      "chọn dùng khác nhau tùy tình huống",
      "trả lời (câu hỏi, khảo sát)",
      "thong thả, thư giãn",
      "thác nước"
    ],
    "answer": "thác nước",
    "explanation": "滝 (たき): thác nước"
  },
  {
    "id": "fb_1366",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "山の中の",
    "sentenceSuffix": "を見に行きました。",
    "choices": [
      "フットサル",
      "ネット",
      "滝",
      "小論文"
    ],
    "answer": "滝",
    "fullSentence": "山の中の滝を見に行きました。",
    "explanation": "山の中の滝を見に行きました。\nTôi đi xem thác trong núi.\n滝: thác nước"
  },
  {
    "id": "tr_1367",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đi xem thác trong núi.",
    "acceptedAnswers": [
      "山の中の滝を見に行きました。",
      "山の中の滝を見に行きました"
    ],
    "explanation": "山の中の滝を見に行きました。\n(やまのなかのたきをみにいきました。)\n滝: thác nước"
  },
  {
    "id": "mc_1368",
    "type": "multiple_choice",
    "question": "食材 có nghĩa là gì?",
    "word": "食材",
    "reading": "しょくざい",
    "choices": [
      "ghé thăm; (mùa, thời điểm) đến",
      "số điện thoại miễn cước cho người gọi",
      "nguyên liệu nấu ăn",
      "một mạch, một hơi, trong một lần"
    ],
    "answer": "nguyên liệu nấu ăn",
    "explanation": "食材 (しょくざい): nguyên liệu nấu ăn"
  },
  {
    "id": "fb_1369",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "新鮮な",
    "sentenceSuffix": "を使って料理します。",
    "choices": [
      "当時",
      "コマーシャル",
      "いつか",
      "食材"
    ],
    "answer": "食材",
    "fullSentence": "新鮮な食材を使って料理します。",
    "explanation": "新鮮な食材を使って料理します。\nTôi nấu ăn bằng nguyên liệu tươi.\n食材: nguyên liệu nấu ăn"
  },
  {
    "id": "tr_1370",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi nấu ăn bằng nguyên liệu tươi.",
    "acceptedAnswers": [
      "新鮮な食材を使って料理します。",
      "新鮮な食材を使って料理します"
    ],
    "explanation": "新鮮な食材を使って料理します。\n(しんせんなしょくざいをつかってりょうりします。)\n食材: nguyên liệu nấu ăn"
  },
  {
    "id": "mc_1371",
    "type": "multiple_choice",
    "question": "門 có nghĩa là gì?",
    "word": "門",
    "reading": "もん",
    "choices": [
      "cổng",
      "hoặc, hoặc là",
      "sút/ném để ghi bàn",
      "đại diện, tiêu biểu cho"
    ],
    "answer": "cổng",
    "explanation": "門 (もん): cổng"
  },
  {
    "id": "fb_1372",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "大きな",
    "sentenceSuffix": "を通って中に入ります。",
    "choices": [
      "門",
      "通る（電気が通る）",
      "縦",
      "うらやましい"
    ],
    "answer": "門",
    "fullSentence": "大きな門を通って中に入ります。",
    "explanation": "大きな門を通って中に入ります。\nTôi đi qua cổng lớn vào bên trong.\n門: cổng"
  },
  {
    "id": "tr_1373",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đi qua cổng lớn vào bên trong.",
    "acceptedAnswers": [
      "大きな門を通って中に入ります。",
      "大きな門を通って中に入ります"
    ],
    "explanation": "大きな門を通って中に入ります。\n(おおきなもんをとおってなかにはいります。)\n門: cổng"
  },
  {
    "id": "mc_1374",
    "type": "multiple_choice",
    "question": "国宝 có nghĩa là gì?",
    "word": "国宝",
    "reading": "こくほう",
    "choices": [
      "cố ý, có chủ đích",
      "tiến hành chiến tranh",
      "bảo vật quốc gia; danh hiệu bảo tồn văn hóa của Nhật",
      "phần mái chìa, mái hiên"
    ],
    "answer": "bảo vật quốc gia; danh hiệu bảo tồn văn hóa của Nhật",
    "explanation": "国宝 (こくほう): bảo vật quốc gia; danh hiệu bảo tồn văn hóa của Nhật"
  },
  {
    "id": "fb_1375",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この建物は",
    "sentenceSuffix": "に指定されています。",
    "choices": [
      "国宝",
      "近年",
      "空っ風",
      "意外"
    ],
    "answer": "国宝",
    "fullSentence": "この建物は国宝に指定されています。",
    "explanation": "この建物は国宝に指定されています。\nTòa nhà này được công nhận là quốc bảo.\n国宝: bảo vật quốc gia; danh hiệu bảo tồn văn hóa của Nhật"
  },
  {
    "id": "tr_1376",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tòa nhà này được công nhận là quốc bảo.",
    "acceptedAnswers": [
      "この建物は国宝に指定されています。",
      "この建物は国宝に指定されています"
    ],
    "explanation": "この建物は国宝に指定されています。\n(このたてものはこくほうにしていされています。)\n国宝: bảo vật quốc gia; danh hiệu bảo tồn văn hóa của Nhật"
  },
  {
    "id": "mc_1377",
    "type": "multiple_choice",
    "question": "指定 có nghĩa là gì?",
    "word": "指定",
    "reading": "してい",
    "choices": [
      "mặt đất",
      "chỉ định, quy định",
      "bồn/bệ rửa mặt",
      "trẻ trung, đầy sức sống"
    ],
    "answer": "chỉ định, quy định",
    "explanation": "指定 (してい): chỉ định, quy định"
  },
  {
    "id": "fb_1378",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "集合時間を",
    "sentenceSuffix": "してください。",
    "choices": [
      "指定",
      "時刻",
      "マーク",
      "女"
    ],
    "answer": "指定",
    "fullSentence": "集合時間を指定してください。",
    "explanation": "集合時間を指定してください。\nHãy chỉ định giờ tập trung.\n指定: chỉ định, quy định"
  },
  {
    "id": "tr_1379",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Hãy chỉ định giờ tập trung.",
    "acceptedAnswers": [
      "集合時間を指定してください。",
      "集合時間を指定してください"
    ],
    "explanation": "集合時間を指定してください。\n(しゅうごうじかんをしていしてください。)\n指定: chỉ định, quy định"
  },
  {
    "id": "fb_1380",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この部屋を会議室に",
    "sentenceSuffix": "しました。",
    "choices": [
      "観光マップ",
      "トラック",
      "指定",
      "食う"
    ],
    "answer": "指定",
    "fullSentence": "この部屋を会議室に指定しました。",
    "explanation": "この部屋を会議室に指定しました。\nChúng tôi chỉ định phòng này làm phòng họp.\n指定: chỉ định, quy định"
  },
  {
    "id": "tr_1381",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Chúng tôi chỉ định phòng này làm phòng họp.",
    "acceptedAnswers": [
      "この部屋を会議室に指定しました。",
      "この部屋を会議室に指定しました"
    ],
    "explanation": "この部屋を会議室に指定しました。\n(このへやをかいぎしつにしていしました。)\n指定: chỉ định, quy định"
  },
  {
    "id": "mc_1382",
    "type": "multiple_choice",
    "question": "全体 có nghĩa là gì?",
    "word": "全体",
    "reading": "ぜんたい",
    "choices": [
      "tuổi nghỉ hưu theo quy định",
      "toàn bộ, tổng thể",
      "tháp chính cao trong thành Nhật",
      "háo hức, hồi hộp vui sướng"
    ],
    "answer": "toàn bộ, tổng thể",
    "explanation": "全体 (ぜんたい): toàn bộ, tổng thể"
  },
  {
    "id": "fb_1383",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "町",
    "sentenceSuffix": "が静かです。",
    "choices": [
      "樹齢",
      "～軒",
      "全体",
      "～年代"
    ],
    "answer": "全体",
    "fullSentence": "町全体が静かです。",
    "explanation": "町全体が静かです。\nCả thị trấn yên tĩnh.\n全体: toàn bộ, tổng thể"
  },
  {
    "id": "tr_1384",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Cả thị trấn yên tĩnh.",
    "acceptedAnswers": [
      "町全体が静かです。",
      "町全体が静かです"
    ],
    "explanation": "町全体が静かです。\n(まちぜんたいがしずかです。)\n全体: toàn bộ, tổng thể"
  },
  {
    "id": "fb_1385",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "参加者は",
    "sentenceSuffix": "で百人です。",
    "choices": [
      "港",
      "吹く",
      "全体",
      "通話"
    ],
    "answer": "全体",
    "fullSentence": "参加者は全体で百人です。",
    "explanation": "参加者は全体で百人です。\nTổng cộng có một trăm người tham gia.\n全体: toàn bộ, tổng thể"
  },
  {
    "id": "tr_1386",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tổng cộng có một trăm người tham gia.",
    "acceptedAnswers": [
      "参加者は全体で百人です。",
      "参加者は全体で百人です"
    ],
    "explanation": "参加者は全体で百人です。\n(さんかしゃはぜんたいでひゃくにんです。)\n全体: toàn bộ, tổng thể"
  },
  {
    "id": "mc_1387",
    "type": "multiple_choice",
    "question": "彫刻 có nghĩa là gì?",
    "word": "彫刻",
    "reading": "ちょうこく",
    "choices": [
      "chiều vòng trong của tuyến vòng",
      "vé đi không giới hạn trong phạm vi và thời hạn quy định",
      "tha thứ; cho phép",
      "điêu khắc"
    ],
    "answer": "điêu khắc",
    "explanation": "彫刻 (ちょうこく): điêu khắc"
  },
  {
    "id": "fb_1388",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "木に花の模様を",
    "sentenceSuffix": "します。",
    "choices": [
      "生物",
      "地名",
      "彫刻",
      "特産物"
    ],
    "answer": "彫刻",
    "fullSentence": "木に花の模様を彫刻します。",
    "explanation": "木に花の模様を彫刻します。\nTôi khắc hoa văn hoa trên gỗ.\n彫刻: điêu khắc"
  },
  {
    "id": "tr_1389",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi khắc hoa văn hoa trên gỗ.",
    "acceptedAnswers": [
      "木に花の模様を彫刻します。",
      "木に花の模様を彫刻します"
    ],
    "explanation": "木に花の模様を彫刻します。\n(きにはなのもようをちょうこくします。)\n彫刻: điêu khắc"
  },
  {
    "id": "fb_1390",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "美術館で",
    "sentenceSuffix": "を見ました。",
    "choices": [
      "～街",
      "込める",
      "時代",
      "彫刻"
    ],
    "answer": "彫刻",
    "fullSentence": "美術館で彫刻を見ました。",
    "explanation": "美術館で彫刻を見ました。\nTôi xem tác phẩm điêu khắc ở bảo tàng mỹ thuật.\n彫刻: điêu khắc"
  },
  {
    "id": "tr_1391",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi xem tác phẩm điêu khắc ở bảo tàng mỹ thuật.",
    "acceptedAnswers": [
      "美術館で彫刻を見ました。",
      "美術館で彫刻を見ました"
    ],
    "explanation": "美術館で彫刻を見ました。\n(びじゅつかんでちょうこくをみました。)\n彫刻: điêu khắc"
  },
  {
    "id": "mc_1392",
    "type": "multiple_choice",
    "question": "彫る có nghĩa là gì?",
    "word": "彫る",
    "reading": "ほる",
    "choices": [
      "nữ, phụ nữ, con gái",
      "hộp, thùng",
      "cây sugi, tuyết tùng Nhật Bản",
      "khắc, chạm, tạc"
    ],
    "answer": "khắc, chạm, tạc",
    "explanation": "彫る (ほる): khắc, chạm, tạc"
  },
  {
    "id": "tr_1393",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi khắc tên lên đá.",
    "acceptedAnswers": [
      "石に名前を彫ります。",
      "石に名前を彫ります"
    ],
    "explanation": "石に名前を彫ります。\n(いしになまえをほります。)\n彫る: khắc, chạm, tạc"
  },
  {
    "id": "tr_1394",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi tạc búp bê bằng gỗ.",
    "acceptedAnswers": [
      "木で人形を彫ります。",
      "木で人形を彫ります"
    ],
    "explanation": "木で人形を彫ります。\n(きでにんぎょうをほります。)\n彫る: khắc, chạm, tạc"
  },
  {
    "id": "mc_1395",
    "type": "multiple_choice",
    "question": "豪華さ có nghĩa là gì?",
    "word": "豪華さ",
    "reading": "ごうかさ",
    "choices": [
      "được truyền đến, được hiểu",
      "ùn tắc",
      "không… chút nào (khẩu ngữ)",
      "vẻ lộng lẫy, sự xa hoa"
    ],
    "answer": "vẻ lộng lẫy, sự xa hoa",
    "explanation": "豪華さ (ごうかさ): vẻ lộng lẫy, sự xa hoa"
  },
  {
    "id": "fb_1396",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "建物の",
    "sentenceSuffix": "に驚きました。",
    "choices": [
      "着払い",
      "豪華さ",
      "機械",
      "メンバー"
    ],
    "answer": "豪華さ",
    "fullSentence": "建物の豪華さに驚きました。",
    "explanation": "建物の豪華さに驚きました。\nTôi ngạc nhiên trước vẻ lộng lẫy của tòa nhà.\n豪華さ: vẻ lộng lẫy, sự xa hoa"
  },
  {
    "id": "tr_1397",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi ngạc nhiên trước vẻ lộng lẫy của tòa nhà.",
    "acceptedAnswers": [
      "建物の豪華さに驚きました。",
      "建物の豪華さに驚きました"
    ],
    "explanation": "建物の豪華さに驚きました。\n(たてもののごうかさにおどろきました。)\n豪華さ: vẻ lộng lẫy, sự xa hoa"
  },
  {
    "id": "mc_1398",
    "type": "multiple_choice",
    "question": "名所 có nghĩa là gì?",
    "word": "名所",
    "reading": "めいしょ",
    "choices": [
      "quả là, đúng là (như tiếng tăm/kỳ vọng)",
      "địa điểm nổi tiếng, thắng cảnh",
      "khá, tương đối",
      "hộp, thùng"
    ],
    "answer": "địa điểm nổi tiếng, thắng cảnh",
    "explanation": "名所 (めいしょ): địa điểm nổi tiếng, thắng cảnh"
  },
  {
    "id": "fb_1399",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "ここは桜の",
    "sentenceSuffix": "です。",
    "choices": [
      "奪う",
      "なぞなぞ",
      "名所",
      "彫刻"
    ],
    "answer": "名所",
    "fullSentence": "ここは桜の名所です。",
    "explanation": "ここは桜の名所です。\nĐây là nơi nổi tiếng để ngắm hoa anh đào.\n名所: địa điểm nổi tiếng, thắng cảnh"
  },
  {
    "id": "tr_1400",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Đây là nơi nổi tiếng để ngắm hoa anh đào.",
    "acceptedAnswers": [
      "ここは桜の名所です。",
      "ここは桜の名所です"
    ],
    "explanation": "ここは桜の名所です。\n(ここはさくらのめいしょです。)\n名所: địa điểm nổi tiếng, thắng cảnh"
  },
  {
    "id": "mc_1401",
    "type": "multiple_choice",
    "question": "まるで có nghĩa là gì?",
    "word": "まるで",
    "reading": "まるで",
    "choices": [
      "cứ như, giống hệt; hoàn toàn (với phủ định)",
      "ánh nắng chiếu xuống",
      "sản vật núi rừng như nấm, rau rừng",
      "ngay, lập tức bắt tay làm"
    ],
    "answer": "cứ như, giống hệt; hoàn toàn (với phủ định)",
    "explanation": "まるで (まるで): cứ như, giống hệt; hoàn toàn (với phủ định)"
  },
  {
    "id": "fb_1402",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "絵のような景色です。",
    "choices": [
      "配布",
      "まるで",
      "名付ける",
      "気象"
    ],
    "answer": "まるで",
    "fullSentence": "まるで絵のような景色です。",
    "explanation": "まるで絵のような景色です。\nPhong cảnh cứ như một bức tranh.\nまるで: cứ như, giống hệt; hoàn toàn (với phủ định)"
  },
  {
    "id": "tr_1403",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Phong cảnh cứ như một bức tranh.",
    "acceptedAnswers": [
      "まるで絵のような景色です。",
      "まるで絵のような景色です"
    ],
    "explanation": "まるで絵のような景色です。\n(まるでえのようなけしきです。)\nまるで: cứ như, giống hệt; hoàn toàn (với phủ định)"
  },
  {
    "id": "fb_1404",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "説明を聞いても、",
    "sentenceSuffix": "分かりません。",
    "choices": [
      "な（頑張ろうな）",
      "～分け",
      "個性",
      "まるで"
    ],
    "answer": "まるで",
    "fullSentence": "説明を聞いても、まるで分かりません。",
    "explanation": "説明を聞いても、まるで分かりません。\nDù nghe giải thích, tôi vẫn hoàn toàn không hiểu.\nまるで: cứ như, giống hệt; hoàn toàn (với phủ định)"
  },
  {
    "id": "tr_1405",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Dù nghe giải thích, tôi vẫn hoàn toàn không hiểu.",
    "acceptedAnswers": [
      "説明を聞いても、まるで分かりません。",
      "説明を聞いても、まるで分かりません"
    ],
    "explanation": "説明を聞いても、まるで分かりません。\n(せつめいをきいても、まるでわかりません。)\nまるで: cứ như, giống hệt; hoàn toàn (với phủ định)"
  },
  {
    "id": "mc_1406",
    "type": "multiple_choice",
    "question": "絵の具 có nghĩa là gì?",
    "word": "絵の具",
    "reading": "えのぐ",
    "choices": [
      "sự chia, phân loại theo…",
      "màu vẽ, sơn vẽ",
      "mở rộng, trải ra",
      "được tập hợp; đi đến thống nhất; hoàn chỉnh"
    ],
    "answer": "màu vẽ, sơn vẽ",
    "explanation": "絵の具 (えのぐ): màu vẽ, sơn vẽ"
  },
  {
    "id": "fb_1407",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "で花を描きます。",
    "choices": [
      "先日",
      "絵の具",
      "名所",
      "迫力満点"
    ],
    "answer": "絵の具",
    "fullSentence": "絵の具で花を描きます。",
    "explanation": "絵の具で花を描きます。\nTôi vẽ hoa bằng màu vẽ.\n絵の具: màu vẽ, sơn vẽ"
  },
  {
    "id": "tr_1408",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi vẽ hoa bằng màu vẽ.",
    "acceptedAnswers": [
      "絵の具で花を描きます。",
      "絵の具で花を描きます"
    ],
    "explanation": "絵の具で花を描きます。\n(えのぐではなをえがきます。)\n絵の具: màu vẽ, sơn vẽ"
  },
  {
    "id": "mc_1409",
    "type": "multiple_choice",
    "question": "カラフル có nghĩa là gì?",
    "word": "カラフル",
    "reading": "カラフル",
    "choices": [
      "thành thật xin lỗi (lịch sự)",
      "nhiều màu sắc rực rỡ",
      "không hiểu sao, có vẻ; như…, chẳng hạn… (khẩu ngữ)",
      "thành viên"
    ],
    "answer": "nhiều màu sắc rực rỡ",
    "explanation": "カラフル (カラフル): nhiều màu sắc rực rỡ"
  },
  {
    "id": "fb_1410",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "な絵の具を使います。",
    "choices": [
      "～末",
      "降水量",
      "カラフル",
      "ラッピング"
    ],
    "answer": "カラフル",
    "fullSentence": "カラフルな絵の具を使います。",
    "explanation": "カラフルな絵の具を使います。\nTôi dùng màu vẽ rực rỡ.\nカラフル: nhiều màu sắc rực rỡ"
  },
  {
    "id": "tr_1411",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi dùng màu vẽ rực rỡ.",
    "acceptedAnswers": [
      "カラフルな絵の具を使います。",
      "カラフルな絵の具を使います"
    ],
    "explanation": "カラフルな絵の具を使います。\n(カラフルなえのぐをつかいます。)\nカラフル: nhiều màu sắc rực rỡ"
  },
  {
    "id": "mc_1412",
    "type": "multiple_choice",
    "question": "トンネル có nghĩa là gì?",
    "word": "トンネル",
    "reading": "トンネル",
    "choices": [
      "đường hầm",
      "bầu trời",
      "cái thang",
      "xuất phát từ…; khởi hành lúc…"
    ],
    "answer": "đường hầm",
    "explanation": "トンネル (トンネル): đường hầm"
  },
  {
    "id": "fb_1413",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "列車が長い",
    "sentenceSuffix": "を通ります。",
    "choices": [
      "トンネル",
      "今ごろ",
      "ちょっとした",
      "わくわく"
    ],
    "answer": "トンネル",
    "fullSentence": "列車が長いトンネルを通ります。",
    "explanation": "列車が長いトンネルを通ります。\nTàu đi qua đường hầm dài.\nトンネル: đường hầm"
  },
  {
    "id": "tr_1414",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tàu đi qua đường hầm dài.",
    "acceptedAnswers": [
      "列車が長いトンネルを通ります。",
      "列車が長いトンネルを通ります"
    ],
    "explanation": "列車が長いトンネルを通ります。\n(れっしゃがながいトンネルをとおります。)\nトンネル: đường hầm"
  },
  {
    "id": "mc_1415",
    "type": "multiple_choice",
    "question": "一気に có nghĩa là gì?",
    "word": "一気に",
    "reading": "いっきに",
    "choices": [
      "đánh dấu",
      "vữa vôi dùng trát tường",
      "trước, sẵn từ trước",
      "một mạch, một hơi, trong một lần"
    ],
    "answer": "một mạch, một hơi, trong một lần",
    "explanation": "一気に (いっきに): một mạch, một hơi, trong một lần"
  },
  {
    "id": "fb_1416",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この本を",
    "sentenceSuffix": "読みました。",
    "choices": [
      "本題",
      "包装",
      "一気に",
      "感動"
    ],
    "answer": "一気に",
    "fullSentence": "この本を一気に読みました。",
    "explanation": "この本を一気に読みました。\nTôi đọc một mạch hết cuốn sách này.\n一気に: một mạch, một hơi, trong một lần"
  },
  {
    "id": "tr_1417",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đọc một mạch hết cuốn sách này.",
    "acceptedAnswers": [
      "この本を一気に読みました。",
      "この本を一気に読みました"
    ],
    "explanation": "この本を一気に読みました。\n(このほんをいっきによみました。)\n一気に: một mạch, một hơi, trong một lần"
  },
  {
    "id": "mc_1418",
    "type": "multiple_choice",
    "question": "流れ落ちる có nghĩa là gì?",
    "word": "流れ落ちる",
    "reading": "ながれおちる",
    "choices": [
      "chảy xuống, tuôn xuống",
      "shachihoko: tượng linh vật thân cá đầu thú trên nóc thành, đền…",
      "bảo vật quốc gia; danh hiệu bảo tồn văn hóa của Nhật",
      "chỉ; tuy nhiên, có điều"
    ],
    "answer": "chảy xuống, tuôn xuống",
    "explanation": "流れ落ちる (ながれおちる): chảy xuống, tuôn xuống"
  },
  {
    "id": "tr_1419",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Nước đang chảy xuống từ trên cao.",
    "acceptedAnswers": [
      "高い所から水が流れ落ちています。",
      "高い所から水が流れ落ちています"
    ],
    "explanation": "高い所から水が流れ落ちています。\n(たかいところからみずがながれおちています。)\n流れ落ちる: chảy xuống, tuôn xuống"
  },
  {
    "id": "mc_1420",
    "type": "multiple_choice",
    "question": "迫力満点 có nghĩa là gì?",
    "word": "迫力満点",
    "reading": "はくりょくまんてん",
    "choices": [
      "thong thả, thư giãn",
      "đầy ấn tượng mạnh, rất hùng tráng/ngoạn mục",
      "tiến hành chiến tranh",
      "chỗ ngồi, ghế ngồi"
    ],
    "answer": "đầy ấn tượng mạnh, rất hùng tráng/ngoạn mục",
    "explanation": "迫力満点 (はくりょくまんてん): đầy ấn tượng mạnh, rất hùng tráng/ngoạn mục"
  },
  {
    "id": "fb_1421",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "の滝を見ました。",
    "choices": [
      "神秘的",
      "香り",
      "迫力満点",
      "チリンチリン"
    ],
    "answer": "迫力満点",
    "fullSentence": "迫力満点の滝を見ました。",
    "explanation": "迫力満点の滝を見ました。\nTôi đã xem thác nước vô cùng hùng vĩ.\n迫力満点: đầy ấn tượng mạnh, rất hùng tráng/ngoạn mục"
  },
  {
    "id": "tr_1422",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đã xem thác nước vô cùng hùng vĩ.",
    "acceptedAnswers": [
      "迫力満点の滝を見ました。",
      "迫力満点の滝を見ました"
    ],
    "explanation": "迫力満点の滝を見ました。\n(はくりょくまんてんのたきをみました。)\n迫力満点: đầy ấn tượng mạnh, rất hùng tráng/ngoạn mục"
  },
  {
    "id": "mc_1423",
    "type": "multiple_choice",
    "question": "ごうごう có nghĩa là gì?",
    "word": "ごうごう",
    "reading": "ごうごう",
    "choices": [
      "hành khách trên phương tiện",
      "dáng vẻ, hình dáng; hình ảnh người/vật",
      "ầm ầm, tiếng vang lớn kéo dài",
      "bê tông"
    ],
    "answer": "ầm ầm, tiếng vang lớn kéo dài",
    "explanation": "ごうごう (ごうごう): ầm ầm, tiếng vang lớn kéo dài"
  },
  {
    "id": "fb_1424",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "滝の水が",
    "sentenceSuffix": "と流れています。",
    "choices": [
      "まるで",
      "一気に",
      "ごうごう",
      "滝"
    ],
    "answer": "ごうごう",
    "fullSentence": "滝の水がごうごうと流れています。",
    "explanation": "滝の水がごうごうと流れています。\nNước thác đang chảy ầm ầm.\nごうごう: ầm ầm, tiếng vang lớn kéo dài"
  },
  {
    "id": "tr_1425",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Nước thác đang chảy ầm ầm.",
    "acceptedAnswers": [
      "滝の水がごうごうと流れています。",
      "滝の水がごうごうと流れています"
    ],
    "explanation": "滝の水がごうごうと流れています。\n(たきのみずがごうごうとながれています。)\nごうごう: ầm ầm, tiếng vang lớn kéo dài"
  },
  {
    "id": "mc_1426",
    "type": "multiple_choice",
    "question": "鯱 có nghĩa là gì?",
    "word": "鯱",
    "reading": "鯱",
    "choices": [
      "shachihoko: tượng linh vật thân cá đầu thú trên nóc thành, đền…",
      "hóa thạch",
      "làm xong, giải quyết xong; làm cho qua bằng…",
      "phát triển thịnh vượng"
    ],
    "answer": "shachihoko: tượng linh vật thân cá đầu thú trên nóc thành, đền…",
    "explanation": "鯱 (鯱): shachihoko: tượng linh vật thân cá đầu thú trên nóc thành, đền…"
  },
  {
    "id": "fb_1427",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "城の屋根の上に",
    "sentenceSuffix": "があります。",
    "choices": [
      "路面電車",
      "鯱",
      "山林",
      "車内"
    ],
    "answer": "鯱",
    "fullSentence": "城の屋根の上に鯱があります。",
    "explanation": "城の屋根の上に鯱があります。\nTrên mái thành có tượng shachihoko.\n鯱: shachihoko: tượng linh vật thân cá đầu thú trên nóc thành, đền…"
  },
  {
    "id": "tr_1428",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Trên mái thành có tượng shachihoko.",
    "acceptedAnswers": [
      "城の屋根の上に鯱があります。",
      "城の屋根の上に鯱があります"
    ],
    "explanation": "城の屋根の上に鯱があります。\n(しろのやねのうえにしゃちほこがあります。)\n鯱: shachihoko: tượng linh vật thân cá đầu thú trên nóc thành, đền…"
  },
  {
    "id": "mc_1429",
    "type": "multiple_choice",
    "question": "～世紀 có nghĩa là gì?",
    "word": "～世紀",
    "reading": "～せいき",
    "choices": [
      "cá tính, nét riêng",
      "viết thêm vào, điền vào; đăng nội dung",
      "thế kỷ…",
      "đồ ngủ, pyjama"
    ],
    "answer": "thế kỷ…",
    "explanation": "～世紀 (～せいき): thế kỷ…"
  },
  {
    "id": "tr_1430",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Thành này được xây vào thế kỷ mười bảy.",
    "acceptedAnswers": [
      "この城は十七世紀に建てられました。",
      "この城は十七世紀に建てられました"
    ],
    "explanation": "この城は十七世紀に建てられました。\n(このしろはじゅうななせいきにたてられました。)\n～世紀: thế kỷ…"
  },
  {
    "id": "mc_1431",
    "type": "multiple_choice",
    "question": "代表 có nghĩa là gì?",
    "word": "代表",
    "reading": "だいひょう",
    "choices": [
      "nhỏ, nho nhỏ, không lớn",
      "thoải mái, dễ chịu",
      "đại diện, tiêu biểu cho",
      "màu xám"
    ],
    "answer": "đại diện, tiêu biểu cho",
    "explanation": "代表 (だいひょう): đại diện, tiêu biểu cho"
  },
  {
    "id": "fb_1432",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "彼は学校を",
    "sentenceSuffix": "して話しました。",
    "choices": [
      "口々に",
      "代表",
      "黙る",
      "今では"
    ],
    "answer": "代表",
    "fullSentence": "彼は学校を代表して話しました。",
    "explanation": "彼は学校を代表して話しました。\nAnh ấy phát biểu đại diện cho trường.\n代表: đại diện, tiêu biểu cho"
  },
  {
    "id": "tr_1433",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Anh ấy phát biểu đại diện cho trường.",
    "acceptedAnswers": [
      "彼は学校を代表して話しました。",
      "彼は学校を代表して話しました"
    ],
    "explanation": "彼は学校を代表して話しました。\n(かれはがっこうをだいひょうしてはなしました。)\n代表: đại diện, tiêu biểu cho"
  },
  {
    "id": "fb_1434",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "クラスの",
    "sentenceSuffix": "を選びます。",
    "choices": [
      "合わせる",
      "代表",
      "県庁",
      "夢中"
    ],
    "answer": "代表",
    "fullSentence": "クラスの代表を選びます。",
    "explanation": "クラスの代表を選びます。\nChúng tôi chọn đại diện lớp.\n代表: đại diện, tiêu biểu cho"
  },
  {
    "id": "tr_1435",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Chúng tôi chọn đại diện lớp.",
    "acceptedAnswers": [
      "クラスの代表を選びます。",
      "クラスの代表を選びます"
    ],
    "explanation": "クラスの代表を選びます。\n(クラスのだいひょうをえらびます。)\n代表: đại diện, tiêu biểu cho"
  },
  {
    "id": "mc_1436",
    "type": "multiple_choice",
    "question": "誇り có nghĩa là gì?",
    "word": "誇り",
    "reading": "ほこり",
    "choices": [
      "tàu điện chạy trên đường phố, tram",
      "nhà văn; người sáng tác",
      "bánh kẹo truyền thống Nhật Bản",
      "niềm tự hào"
    ],
    "answer": "niềm tự hào",
    "explanation": "誇り (ほこり): niềm tự hào"
  },
  {
    "id": "fb_1437",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "自分の仕事を",
    "sentenceSuffix": "に思っています。",
    "choices": [
      "誇り",
      "帰宅",
      "渓谷",
      "車掌"
    ],
    "answer": "誇り",
    "fullSentence": "自分の仕事を誇りに思っています。",
    "explanation": "自分の仕事を誇りに思っています。\nTôi tự hào về công việc của mình.\n誇り: niềm tự hào"
  },
  {
    "id": "tr_1438",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi tự hào về công việc của mình.",
    "acceptedAnswers": [
      "自分の仕事を誇りに思っています。",
      "自分の仕事を誇りに思っています"
    ],
    "explanation": "自分の仕事を誇りに思っています。\n(じぶんのしごとをほこりにおもっています。)\n誇り: niềm tự hào"
  },
  {
    "id": "fb_1439",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "地元の文化に",
    "sentenceSuffix": "を持っています。",
    "choices": [
      "当然",
      "誇り",
      "頂上",
      "久しぶり"
    ],
    "answer": "誇り",
    "fullSentence": "地元の文化に誇りを持っています。",
    "explanation": "地元の文化に誇りを持っています。\nTôi tự hào về văn hóa quê mình.\n誇り: niềm tự hào"
  },
  {
    "id": "tr_1440",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi tự hào về văn hóa quê mình.",
    "acceptedAnswers": [
      "地元の文化に誇りを持っています。",
      "地元の文化に誇りを持っています"
    ],
    "explanation": "地元の文化に誇りを持っています。\n(じもとのぶんかにほこりをもっています。)\n誇り: niềm tự hào"
  },
  {
    "id": "mc_1441",
    "type": "multiple_choice",
    "question": "戦争 có nghĩa là gì?",
    "word": "戦争",
    "reading": "せんそう",
    "choices": [
      "chó hỗ trợ người khuyết tật vận động",
      "đường bờ biển",
      "số điện thoại miễn cước cho người gọi",
      "tiến hành chiến tranh"
    ],
    "answer": "tiến hành chiến tranh",
    "explanation": "戦争 (せんそう): tiến hành chiến tranh"
  },
  {
    "id": "fb_1442",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "二つの国の間で",
    "sentenceSuffix": "が起こりました。",
    "choices": [
      "消費",
      "ミーティング",
      "込める",
      "戦争"
    ],
    "answer": "戦争",
    "fullSentence": "二つの国の間で戦争が起こりました。",
    "explanation": "二つの国の間で戦争が起こりました。\nChiến tranh đã nổ ra giữa hai nước.\n戦争: tiến hành chiến tranh"
  },
  {
    "id": "tr_1443",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Chiến tranh đã nổ ra giữa hai nước.",
    "acceptedAnswers": [
      "二つの国の間で戦争が起こりました。",
      "二つの国の間で戦争が起こりました"
    ],
    "explanation": "二つの国の間で戦争が起こりました。\n(ふたつのくにのあいだでせんそうがおこりました。)\n戦争: tiến hành chiến tranh"
  },
  {
    "id": "fb_1444",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "隣の国と",
    "sentenceSuffix": "してはいけません。",
    "choices": [
      "戦争",
      "着払い",
      "苦しむ",
      "同年代"
    ],
    "answer": "戦争",
    "fullSentence": "隣の国と戦争してはいけません。",
    "explanation": "隣の国と戦争してはいけません。\nKhông được gây chiến với nước láng giềng.\n戦争: tiến hành chiến tranh"
  },
  {
    "id": "tr_1445",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Không được gây chiến với nước láng giềng.",
    "acceptedAnswers": [
      "隣の国と戦争してはいけません。",
      "隣の国と戦争してはいけません"
    ],
    "explanation": "隣の国と戦争してはいけません。\n(となりのくにとせんそうしてはいけません。)\n戦争: tiến hành chiến tranh"
  },
  {
    "id": "mc_1446",
    "type": "multiple_choice",
    "question": "天守閣 có nghĩa là gì?",
    "word": "天守閣",
    "reading": "てんしゅかく",
    "choices": [
      "đường bờ biển",
      "tháp chính cao trong thành Nhật",
      "vấn đề/chủ đề chính",
      "ăn (khẩu ngữ thô, suồng sã)"
    ],
    "answer": "tháp chính cao trong thành Nhật",
    "explanation": "天守閣 (てんしゅかく): tháp chính cao trong thành Nhật"
  },
  {
    "id": "fb_1447",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "に上って町を見ました。",
    "choices": [
      "扇風機",
      "あるいは",
      "天守閣",
      "追加"
    ],
    "answer": "天守閣",
    "fullSentence": "天守閣に上って町を見ました。",
    "explanation": "天守閣に上って町を見ました。\nTôi lên tháp chính ngắm thị trấn.\n天守閣: tháp chính cao trong thành Nhật"
  },
  {
    "id": "tr_1448",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi lên tháp chính ngắm thị trấn.",
    "acceptedAnswers": [
      "天守閣に上って町を見ました。",
      "天守閣に上って町を見ました"
    ],
    "explanation": "天守閣に上って町を見ました。\n(てんしゅかくにのぼってまちをみました。)\n天守閣: tháp chính cao trong thành Nhật"
  },
  {
    "id": "mc_1449",
    "type": "multiple_choice",
    "question": "再び có nghĩa là gì?",
    "word": "再び",
    "reading": "ふたたび",
    "choices": [
      "thế kỷ…",
      "lại, một lần nữa",
      "đại diện, tiêu biểu cho",
      "chữ, ký tự"
    ],
    "answer": "lại, một lần nữa",
    "explanation": "再び (ふたたび): lại, một lần nữa"
  },
  {
    "id": "fb_1450",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "いつか",
    "sentenceSuffix": "この町を訪れたいです。",
    "choices": [
      "～発",
      "再び",
      "地区",
      "平気"
    ],
    "answer": "再び",
    "fullSentence": "いつか再びこの町を訪れたいです。",
    "explanation": "いつか再びこの町を訪れたいです。\nMột ngày nào đó tôi muốn lại thăm thị trấn này.\n再び: lại, một lần nữa"
  },
  {
    "id": "tr_1451",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Một ngày nào đó tôi muốn lại thăm thị trấn này.",
    "acceptedAnswers": [
      "いつか再びこの町を訪れたいです。",
      "いつか再びこの町を訪れたいです"
    ],
    "explanation": "いつか再びこの町を訪れたいです。\n(いつかふたたびこのまちをおとずれたいです。)\n再び: lại, một lần nữa"
  },
  {
    "id": "mc_1452",
    "type": "multiple_choice",
    "question": "金 có nghĩa là gì?",
    "word": "金",
    "reading": "きん",
    "choices": [
      "futsal, bóng đá sân nhỏ năm người",
      "bỏ/ngừng hút thuốc",
      "người có tuổi, lớn tuổi",
      "vàng (kim loại)"
    ],
    "answer": "vàng (kim loại)",
    "explanation": "金 (きん): vàng (kim loại)"
  },
  {
    "id": "fb_1453",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この指輪は",
    "sentenceSuffix": "でできています。",
    "choices": [
      "再び",
      "日帰り",
      "金",
      "製造"
    ],
    "answer": "金",
    "fullSentence": "この指輪は金でできています。",
    "explanation": "この指輪は金でできています。\nChiếc nhẫn này làm bằng vàng.\n金: vàng (kim loại)"
  },
  {
    "id": "tr_1454",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Chiếc nhẫn này làm bằng vàng.",
    "acceptedAnswers": [
      "この指輪は金でできています。",
      "この指輪は金でできています"
    ],
    "explanation": "この指輪は金でできています。\n(このゆびわはきんでできています。)\n金: vàng (kim loại)"
  },
  {
    "id": "mc_1455",
    "type": "multiple_choice",
    "question": "上り có nghĩa là gì?",
    "word": "上り",
    "reading": "のぼり",
    "choices": [
      "chiều lên; chiều tàu đi về đầu mối/trung tâm của tuyến",
      "đau khổ, chịu khổ, chật vật",
      "thời kỳ; nhóm tuổi, thế hệ",
      "dừng xe/tàu"
    ],
    "answer": "chiều lên; chiều tàu đi về đầu mối/trung tâm của tuyến",
    "explanation": "上り (のぼり): chiều lên; chiều tàu đi về đầu mối/trung tâm của tuyến"
  },
  {
    "id": "fb_1456",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "の列車は二番線から出ます。",
    "choices": [
      "メッセージ",
      "カエル",
      "乗客",
      "上り"
    ],
    "answer": "上り",
    "fullSentence": "上りの列車は二番線から出ます。",
    "explanation": "上りの列車は二番線から出ます。\nTàu chiều lên xuất phát từ đường ray số hai.\n上り: chiều lên; chiều tàu đi về đầu mối/trung tâm của tuyến"
  },
  {
    "id": "tr_1457",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tàu chiều lên xuất phát từ đường ray số hai.",
    "acceptedAnswers": [
      "上りの列車は二番線から出ます。",
      "上りの列車は二番線から出ます"
    ],
    "explanation": "上りの列車は二番線から出ます。\n(のぼりのれっしゃはにばんせんからでます。)\n上り: chiều lên; chiều tàu đi về đầu mối/trung tâm của tuyến"
  },
  {
    "id": "mc_1458",
    "type": "multiple_choice",
    "question": "列車 có nghĩa là gì?",
    "word": "列車",
    "reading": "れっしゃ",
    "choices": [
      "nhảy bật lên, bay lên",
      "thoải mái, dễ chịu",
      "cất công, đặc biệt dành công sức để làm",
      "đoàn tàu"
    ],
    "answer": "đoàn tàu",
    "explanation": "列車 (れっしゃ): đoàn tàu"
  },
  {
    "id": "fb_1459",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "次の",
    "sentenceSuffix": "に乗りましょう。",
    "choices": [
      "幸運",
      "列車",
      "まるで",
      "飛び上がる"
    ],
    "answer": "列車",
    "fullSentence": "次の列車に乗りましょう。",
    "explanation": "次の列車に乗りましょう。\nHãy đi chuyến tàu tiếp theo.\n列車: đoàn tàu"
  },
  {
    "id": "tr_1460",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Hãy đi chuyến tàu tiếp theo.",
    "acceptedAnswers": [
      "次の列車に乗りましょう。",
      "次の列車に乗りましょう"
    ],
    "explanation": "次の列車に乗りましょう。\n(つぎのれっしゃにのりましょう。)\n列車: đoàn tàu"
  },
  {
    "id": "mc_1461",
    "type": "multiple_choice",
    "question": "発車 có nghĩa là gì?",
    "word": "発車",
    "reading": "はっしゃ",
    "choices": [
      "hiện tại, hiện nay",
      "lao ra, nhảy ra, bất ngờ xuất hiện",
      "người nhận trả phí vận chuyển",
      "khởi hành"
    ],
    "answer": "khởi hành",
    "explanation": "発車 (はっしゃ): khởi hành"
  },
  {
    "id": "fb_1462",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "列車は九時に",
    "sentenceSuffix": "します。",
    "choices": [
      "発車",
      "あるいは",
      "～ぶりに",
      "和尚"
    ],
    "answer": "発車",
    "fullSentence": "列車は九時に発車します。",
    "explanation": "列車は九時に発車します。\nTàu khởi hành lúc chín giờ.\n発車: khởi hành"
  },
  {
    "id": "tr_1463",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tàu khởi hành lúc chín giờ.",
    "acceptedAnswers": [
      "列車は九時に発車します。",
      "列車は九時に発車します"
    ],
    "explanation": "列車は九時に発車します。\n(れっしゃはくじにはっしゃします。)\n発車: khởi hành"
  },
  {
    "id": "fb_1464",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "バスが駅前を",
    "sentenceSuffix": "しました。",
    "choices": [
      "地元",
      "おやつ",
      "孫",
      "発車"
    ],
    "answer": "発車",
    "fullSentence": "バスが駅前を発車しました。",
    "explanation": "バスが駅前を発車しました。\nXe buýt đã rời điểm trước ga.\n発車: khởi hành"
  },
  {
    "id": "tr_1465",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Xe buýt đã rời điểm trước ga.",
    "acceptedAnswers": [
      "バスが駅前を発車しました。",
      "バスが駅前を発車しました"
    ],
    "explanation": "バスが駅前を発車しました。\n(バスがえきまえをはっしゃしました。)\n発車: khởi hành"
  },
  {
    "id": "mc_1466",
    "type": "multiple_choice",
    "question": "カーディガン có nghĩa là gì?",
    "word": "カーディガン",
    "reading": "カーディガン",
    "choices": [
      "làng",
      "áo cardigan, áo khoác len mở phía trước",
      "chỉ; tuy nhiên, có điều",
      "hiểu lầm"
    ],
    "answer": "áo cardigan, áo khoác len mở phía trước",
    "explanation": "カーディガン (カーディガン): áo cardigan, áo khoác len mở phía trước"
  },
  {
    "id": "fb_1467",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "寒いので",
    "sentenceSuffix": "を着ます。",
    "choices": [
      "積もる",
      "禁煙",
      "カーディガン",
      "後悔"
    ],
    "answer": "カーディガン",
    "fullSentence": "寒いのでカーディガンを着ます。",
    "explanation": "寒いのでカーディガンを着ます。\nVì lạnh nên tôi mặc cardigan.\nカーディガン: áo cardigan, áo khoác len mở phía trước"
  },
  {
    "id": "tr_1468",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Vì lạnh nên tôi mặc cardigan.",
    "acceptedAnswers": [
      "寒いのでカーディガンを着ます。",
      "寒いのでカーディガンを着ます"
    ],
    "explanation": "寒いのでカーディガンを着ます。\n(さむいのでカーディガンをきます。)\nカーディガン: áo cardigan, áo khoác len mở phía trước"
  },
  {
    "id": "mc_1469",
    "type": "multiple_choice",
    "question": "奥 có nghĩa là gì?",
    "word": "奥",
    "reading": "おく",
    "choices": [
      "nhà nghỉ nhỏ kiểu phương Tây, thường do gia đình quản lý",
      "một phần",
      "máy móc",
      "phía trong sâu, phía cuối"
    ],
    "answer": "phía trong sâu, phía cuối",
    "explanation": "奥 (おく): phía trong sâu, phía cuối"
  },
  {
    "id": "fb_1470",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "店の",
    "sentenceSuffix": "にトイレがあります。",
    "choices": [
      "奥",
      "若々しい",
      "フリーダイヤル",
      "仕方"
    ],
    "answer": "奥",
    "fullSentence": "店の奥にトイレがあります。",
    "explanation": "店の奥にトイレがあります。\nNhà vệ sinh ở phía trong cùng cửa hàng.\n奥: phía trong sâu, phía cuối"
  },
  {
    "id": "tr_1471",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Nhà vệ sinh ở phía trong cùng cửa hàng.",
    "acceptedAnswers": [
      "店の奥にトイレがあります。",
      "店の奥にトイレがあります"
    ],
    "explanation": "店の奥にトイレがあります。\n(みせのおくにトイレがあります。)\n奥: phía trong sâu, phía cuối"
  },
  {
    "id": "mc_1472",
    "type": "multiple_choice",
    "question": "もしかしたら có nghĩa là gì?",
    "word": "もしかしたら",
    "reading": "もしかしたら",
    "choices": [
      "giấy nhỏ dài để viết vài dòng nhắn gửi",
      "biết đâu, có lẽ",
      "hối hận",
      "điểm đáng xem, nét hấp dẫn"
    ],
    "answer": "biết đâu, có lẽ",
    "explanation": "もしかしたら (もしかしたら): biết đâu, có lẽ"
  },
  {
    "id": "fb_1473",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "電車に忘れたかもしれません。",
    "choices": [
      "小鳥",
      "固める",
      "もしかしたら",
      "トラック"
    ],
    "answer": "もしかしたら",
    "fullSentence": "もしかしたら電車に忘れたかもしれません。",
    "explanation": "もしかしたら電車に忘れたかもしれません。\nBiết đâu tôi đã để quên trên tàu.\nもしかしたら: biết đâu, có lẽ"
  },
  {
    "id": "tr_1474",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Biết đâu tôi đã để quên trên tàu.",
    "acceptedAnswers": [
      "もしかしたら電車に忘れたかもしれません。",
      "もしかしたら電車に忘れたかもしれません"
    ],
    "explanation": "もしかしたら電車に忘れたかもしれません。\n(もしかしたらでんしゃにわすれたかもしれません。)\nもしかしたら: biết đâu, có lẽ"
  },
  {
    "id": "mc_1475",
    "type": "multiple_choice",
    "question": "ございます có nghĩa là gì?",
    "word": "ございます",
    "reading": "ございます",
    "choices": [
      "câu đố, trò đố vui",
      "cảm ơn vì luôn giúp đỡ/chiếu cố (lời chào trong quan hệ thường xuyên)",
      "có, tồn tại (cách nói lịch sự của あります)",
      "kỳ vọng, mong đợi"
    ],
    "answer": "có, tồn tại (cách nói lịch sự của あります)",
    "explanation": "ございます (ございます): có, tồn tại (cách nói lịch sự của あります)"
  },
  {
    "id": "fb_1476",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "奥に席が",
    "sentenceSuffix": "。",
    "choices": [
      "黙る",
      "マウス",
      "～軒",
      "ございます"
    ],
    "answer": "ございます",
    "fullSentence": "奥に席がございます。",
    "explanation": "奥に席がございます。\nPhía trong còn chỗ ngồi ạ.\nございます: có, tồn tại (cách nói lịch sự của あります)"
  },
  {
    "id": "tr_1477",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Phía trong còn chỗ ngồi ạ.",
    "acceptedAnswers": [
      "奥に席がございます。",
      "奥に席がございます"
    ],
    "explanation": "奥に席がございます。\n(おくにせきがございます。)\nございます: có, tồn tại (cách nói lịch sự của あります)"
  },
  {
    "id": "fb_1478",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "こちらが出口で",
    "sentenceSuffix": "。",
    "choices": [
      "ございます",
      "受ける（誘いを受ける）",
      "しょんぼり",
      "置き場"
    ],
    "answer": "ございます",
    "fullSentence": "こちらが出口でございます。",
    "explanation": "こちらが出口でございます。\nĐây là lối ra ạ.\nございます: có, tồn tại (cách nói lịch sự của あります)"
  },
  {
    "id": "tr_1479",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Đây là lối ra ạ.",
    "acceptedAnswers": [
      "こちらが出口でございます。",
      "こちらが出口でございます"
    ],
    "explanation": "こちらが出口でございます。\n(こちらがでぐちでございます。)\nございます: có, tồn tại (cách nói lịch sự của あります)"
  },
  {
    "id": "mc_1480",
    "type": "multiple_choice",
    "question": "着払い có nghĩa là gì?",
    "word": "着払い",
    "reading": "ちゃくばらい",
    "choices": [
      "nếm, thưởng thức; trải nghiệm cảm giác",
      "người nhận trả phí vận chuyển",
      "đặt tên",
      "cháu (của ông bà)"
    ],
    "answer": "người nhận trả phí vận chuyển",
    "explanation": "着払い (ちゃくばらい): người nhận trả phí vận chuyển"
  },
  {
    "id": "fb_1481",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "荷物は",
    "sentenceSuffix": "で送ってください。",
    "choices": [
      "着払い",
      "味わう",
      "頂上",
      "～後"
    ],
    "answer": "着払い",
    "fullSentence": "荷物は着払いで送ってください。",
    "explanation": "荷物は着払いで送ってください。\nXin gửi hành lý với cước vận chuyển do người nhận trả.\n着払い: người nhận trả phí vận chuyển"
  },
  {
    "id": "tr_1482",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Xin gửi hành lý với cước vận chuyển do người nhận trả.",
    "acceptedAnswers": [
      "荷物は着払いで送ってください。",
      "荷物は着払いで送ってください"
    ],
    "explanation": "荷物は着払いで送ってください。\n(にもつはちゃくばらいでおくってください。)\n着払い: người nhận trả phí vận chuyển"
  },
  {
    "id": "mc_1483",
    "type": "multiple_choice",
    "question": "宅配便 có nghĩa là gì?",
    "word": "宅配便",
    "reading": "たくはいびん",
    "choices": [
      "dịch vụ chuyển phát tận nhà; kiện gửi qua dịch vụ đó",
      "ngày tháng, thời gian trôi qua",
      "được truyền đến, được hiểu",
      "chịu đựng, nhịn"
    ],
    "answer": "dịch vụ chuyển phát tận nhà; kiện gửi qua dịch vụ đó",
    "explanation": "宅配便 (たくはいびん): dịch vụ chuyển phát tận nhà; kiện gửi qua dịch vụ đó"
  },
  {
    "id": "fb_1484",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "お土産を",
    "sentenceSuffix": "で送りました。",
    "choices": [
      "宅配便",
      "ブログ",
      "アドバイス",
      "～末"
    ],
    "answer": "宅配便",
    "fullSentence": "お土産を宅配便で送りました。",
    "explanation": "お土産を宅配便で送りました。\nTôi gửi quà bằng dịch vụ chuyển phát tận nhà.\n宅配便: dịch vụ chuyển phát tận nhà; kiện gửi qua dịch vụ đó"
  },
  {
    "id": "tr_1485",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi gửi quà bằng dịch vụ chuyển phát tận nhà.",
    "acceptedAnswers": [
      "お土産を宅配便で送りました。",
      "お土産を宅配便で送りました"
    ],
    "explanation": "お土産を宅配便で送りました。\n(おみやげをたくはいびんでおくりました。)\n宅配便: dịch vụ chuyển phát tận nhà; kiện gửi qua dịch vụ đó"
  },
  {
    "id": "mc_1486",
    "type": "multiple_choice",
    "question": "グレー có nghĩa là gì?",
    "word": "グレー",
    "reading": "グレー",
    "choices": [
      "việc viết tay, chữ viết tay",
      "giấy nhỏ dài để viết vài dòng nhắn gửi",
      "sinh con",
      "màu xám"
    ],
    "answer": "màu xám",
    "explanation": "グレー (グレー): màu xám"
  },
  {
    "id": "fb_1487",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "のカーディガンを探しています。",
    "choices": [
      "特産物",
      "グレー",
      "モデル",
      "早口言葉"
    ],
    "answer": "グレー",
    "fullSentence": "グレーのカーディガンを探しています。",
    "explanation": "グレーのカーディガンを探しています。\nTôi đang tìm áo cardigan màu xám.\nグレー: màu xám"
  },
  {
    "id": "tr_1488",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đang tìm áo cardigan màu xám.",
    "acceptedAnswers": [
      "グレーのカーディガンを探しています。",
      "グレーのカーディガンを探しています"
    ],
    "explanation": "グレーのカーディガンを探しています。\n(グレーのカーディガンをさがしています。)\nグレー: màu xám"
  },
  {
    "id": "mc_1489",
    "type": "multiple_choice",
    "question": "胸 có nghĩa là gì?",
    "word": "胸",
    "reading": "むね",
    "choices": [
      "thế kỷ…",
      "ngực; lòng, tâm trạng",
      "điều chỉnh cho phù hợp; ghép, kết hợp",
      "buộc, choàng, gắn (ruy băng lên vật)"
    ],
    "answer": "ngực; lòng, tâm trạng",
    "explanation": "胸 (むね): ngực; lòng, tâm trạng"
  },
  {
    "id": "fb_1490",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "このシャツは",
    "sentenceSuffix": "にポケットがあります。",
    "choices": [
      "表れ",
      "胸",
      "期待",
      "タワー"
    ],
    "answer": "胸",
    "fullSentence": "このシャツは胸にポケットがあります。",
    "explanation": "このシャツは胸にポケットがあります。\nÁo này có túi ở ngực.\n胸: ngực; lòng, tâm trạng"
  },
  {
    "id": "tr_1491",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Áo này có túi ở ngực.",
    "acceptedAnswers": [
      "このシャツは胸にポケットがあります。",
      "このシャツは胸にポケットがあります"
    ],
    "explanation": "このシャツは胸にポケットがあります。\n(このシャツはむねにポケットがあります。)\n胸: ngực; lòng, tâm trạng"
  },
  {
    "id": "fb_1492",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "感動して",
    "sentenceSuffix": "がいっぱいになりました。",
    "choices": [
      "若者",
      "かけ間違い",
      "胸",
      "石"
    ],
    "answer": "胸",
    "fullSentence": "感動して胸がいっぱいになりました。",
    "explanation": "感動して胸がいっぱいになりました。\nTôi xúc động đến tràn ngập trong lòng.\n胸: ngực; lòng, tâm trạng"
  },
  {
    "id": "tr_1493",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi xúc động đến tràn ngập trong lòng.",
    "acceptedAnswers": [
      "感動して胸がいっぱいになりました。",
      "感動して胸がいっぱいになりました"
    ],
    "explanation": "感動して胸がいっぱいになりました。\n(かんどうしてむねがいっぱいになりました。)\n胸: ngực; lòng, tâm trạng"
  },
  {
    "id": "mc_1494",
    "type": "multiple_choice",
    "question": "マーク có nghĩa là gì?",
    "word": "マーク",
    "reading": "マーク",
    "choices": [
      "đánh dấu",
      "nhận (lời mời, lời đề nghị)",
      "phát triển mạnh, sôi nổi, thịnh hành",
      "hình dung, gợi nhớ trong đầu"
    ],
    "answer": "đánh dấu",
    "explanation": "マーク (マーク): đánh dấu"
  },
  {
    "id": "fb_1495",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "大切な所に",
    "sentenceSuffix": "を付けます。",
    "choices": [
      "リボン",
      "マーク",
      "夢中",
      "職人"
    ],
    "answer": "マーク",
    "fullSentence": "大切な所にマークを付けます。",
    "explanation": "大切な所にマークを付けます。\nTôi đánh dấu chỗ quan trọng.\nマーク: đánh dấu"
  },
  {
    "id": "tr_1496",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đánh dấu chỗ quan trọng.",
    "acceptedAnswers": [
      "大切な所にマークを付けます。",
      "大切な所にマークを付けます"
    ],
    "explanation": "大切な所にマークを付けます。\n(たいせつなところにマークをつけます。)\nマーク: đánh dấu"
  },
  {
    "id": "fb_1497",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "正しい答えを",
    "sentenceSuffix": "してください。",
    "choices": [
      "気象",
      "マーク",
      "奥",
      "請求"
    ],
    "answer": "マーク",
    "fullSentence": "正しい答えをマークしてください。",
    "explanation": "正しい答えをマークしてください。\nHãy đánh dấu câu trả lời đúng.\nマーク: đánh dấu"
  },
  {
    "id": "tr_1498",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Hãy đánh dấu câu trả lời đúng.",
    "acceptedAnswers": [
      "正しい答えをマークしてください。",
      "正しい答えをマークしてください"
    ],
    "explanation": "正しい答えをマークしてください。\n(ただしいこたえをマークしてください。)\nマーク: đánh dấu"
  },
  {
    "id": "mc_1499",
    "type": "multiple_choice",
    "question": "まだまだ có nghĩa là gì?",
    "word": "まだまだ",
    "reading": "まだまだ",
    "choices": [
      "nhầm, hiểu sai",
      "kỳ vọng, mong đợi",
      "chiều lên; chiều tàu đi về đầu mối/trung tâm của tuyến",
      "vẫn còn nhiều; còn lâu mới đạt"
    ],
    "answer": "vẫn còn nhiều; còn lâu mới đạt",
    "explanation": "まだまだ (まだまだ): vẫn còn nhiều; còn lâu mới đạt"
  },
  {
    "id": "fb_1500",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "時間は",
    "sentenceSuffix": "あります。",
    "choices": [
      "まだまだ",
      "音声",
      "代表",
      "現金"
    ],
    "answer": "まだまだ",
    "fullSentence": "時間はまだまだあります。",
    "explanation": "時間はまだまだあります。\nVẫn còn nhiều thời gian.\nまだまだ: vẫn còn nhiều; còn lâu mới đạt"
  },
  {
    "id": "tr_1501",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Vẫn còn nhiều thời gian.",
    "acceptedAnswers": [
      "時間はまだまだあります。",
      "時間はまだまだあります"
    ],
    "explanation": "時間はまだまだあります。\n(じかんはまだまだあります。)\nまだまだ: vẫn còn nhiều; còn lâu mới đạt"
  },
  {
    "id": "fb_1502",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "日本語は",
    "sentenceSuffix": "です。",
    "choices": [
      "まだまだ",
      "彫る",
      "言葉遣い",
      "流れ落ちる"
    ],
    "answer": "まだまだ",
    "fullSentence": "日本語はまだまだです。",
    "explanation": "日本語はまだまだです。\nTiếng Nhật của tôi còn phải cố gắng nhiều.\nまだまだ: vẫn còn nhiều; còn lâu mới đạt"
  },
  {
    "id": "tr_1503",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tiếng Nhật của tôi còn phải cố gắng nhiều.",
    "acceptedAnswers": [
      "日本語はまだまだです。",
      "日本語はまだまだです"
    ],
    "explanation": "日本語はまだまだです。\n(にほんごはまだまだです。)\nまだまだ: vẫn còn nhiều; còn lâu mới đạt"
  },
  {
    "id": "mc_1504",
    "type": "multiple_choice",
    "question": "請求 có nghĩa là gì?",
    "word": "請求",
    "reading": "せいきゅう",
    "choices": [
      "nhảy bật lên, bay lên",
      "sức gió, năng lượng gió",
      "yêu cầu thanh toán/cung cấp",
      "khu vực xung quanh…"
    ],
    "answer": "yêu cầu thanh toán/cung cấp",
    "explanation": "請求 (せいきゅう): yêu cầu thanh toán/cung cấp"
  },
  {
    "id": "fb_1505",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "店は客に送料を",
    "sentenceSuffix": "しました。",
    "choices": [
      "～年代",
      "畳",
      "請求",
      "鉄筋"
    ],
    "answer": "請求",
    "fullSentence": "店は客に送料を請求しました。",
    "explanation": "店は客に送料を請求しました。\nCửa hàng yêu cầu khách trả phí vận chuyển.\n請求: yêu cầu thanh toán/cung cấp"
  },
  {
    "id": "tr_1506",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Cửa hàng yêu cầu khách trả phí vận chuyển.",
    "acceptedAnswers": [
      "店は客に送料を請求しました。",
      "店は客に送料を請求しました"
    ],
    "explanation": "店は客に送料を請求しました。\n(みせはきゃくにそうりょうをせいきゅうしました。)\n請求: yêu cầu thanh toán/cung cấp"
  },
  {
    "id": "fb_1507",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "大学の資料を",
    "sentenceSuffix": "しました。",
    "choices": [
      "鯱",
      "請求",
      "路面電車",
      "必死"
    ],
    "answer": "請求",
    "fullSentence": "大学の資料を請求しました。",
    "explanation": "大学の資料を請求しました。\nTôi yêu cầu trường đại học gửi tài liệu.\n請求: yêu cầu thanh toán/cung cấp"
  },
  {
    "id": "tr_1508",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi yêu cầu trường đại học gửi tài liệu.",
    "acceptedAnswers": [
      "大学の資料を請求しました。",
      "大学の資料を請求しました"
    ],
    "explanation": "大学の資料を請求しました。\n(だいがくのしりょうをせいきゅうしました。)\n請求: yêu cầu thanh toán/cung cấp"
  },
  {
    "id": "mc_1509",
    "type": "multiple_choice",
    "question": "洗面台 có nghĩa là gì?",
    "word": "洗面台",
    "reading": "せんめんだい",
    "choices": [
      "đẹp, đẹp đẽ",
      "một lời, vài lời ngắn gọn",
      "nhóm tuổi…; khoảng số…",
      "bồn/bệ rửa mặt"
    ],
    "answer": "bồn/bệ rửa mặt",
    "explanation": "洗面台 (せんめんだい): bồn/bệ rửa mặt"
  },
  {
    "id": "fb_1510",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "で顔を洗います。",
    "choices": [
      "駄目",
      "洗面台",
      "滝",
      "ラストオーダー"
    ],
    "answer": "洗面台",
    "fullSentence": "洗面台で顔を洗います。",
    "explanation": "洗面台で顔を洗います。\nTôi rửa mặt ở bồn rửa mặt.\n洗面台: bồn/bệ rửa mặt"
  },
  {
    "id": "tr_1511",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi rửa mặt ở bồn rửa mặt.",
    "acceptedAnswers": [
      "洗面台で顔を洗います。",
      "洗面台で顔を洗います"
    ],
    "explanation": "洗面台で顔を洗います。\n(せんめんだいでかおをあらいます。)\n洗面台: bồn/bệ rửa mặt"
  },
  {
    "id": "mc_1512",
    "type": "multiple_choice",
    "question": "車内 có nghĩa là gì?",
    "word": "車内",
    "reading": "しゃない",
    "choices": [
      "cảm ơn vì luôn giúp đỡ/chiếu cố (lời chào trong quan hệ thường xuyên)",
      "thành thật xin lỗi (lịch sự)",
      "bên trong xe/tàu",
      "cháu (của ông bà)"
    ],
    "answer": "bên trong xe/tàu",
    "explanation": "車内 (しゃない): bên trong xe/tàu"
  },
  {
    "id": "fb_1513",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "では静かにしてください。",
    "choices": [
      "車内",
      "近年",
      "迎える",
      "香り"
    ],
    "answer": "車内",
    "fullSentence": "車内では静かにしてください。",
    "explanation": "車内では静かにしてください。\nHãy giữ yên lặng trong tàu.\n車内: bên trong xe/tàu"
  },
  {
    "id": "tr_1514",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Hãy giữ yên lặng trong tàu.",
    "acceptedAnswers": [
      "車内では静かにしてください。",
      "車内では静かにしてください"
    ],
    "explanation": "車内では静かにしてください。\n(しゃないではしずかにしてください。)\n車内: bên trong xe/tàu"
  },
  {
    "id": "mc_1515",
    "type": "multiple_choice",
    "question": "座席 có nghĩa là gì?",
    "word": "座席",
    "reading": "ざせき",
    "choices": [
      "chỗ ngồi, ghế ngồi",
      "xé, làm rách; phá vỡ/không giữ",
      "nguyên liệu nấu ăn",
      "sàn gỗ, sàn lát ván"
    ],
    "answer": "chỗ ngồi, ghế ngồi",
    "explanation": "座席 (ざせき): chỗ ngồi, ghế ngồi"
  },
  {
    "id": "fb_1516",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "窓側の",
    "sentenceSuffix": "を予約しました。",
    "choices": [
      "座席",
      "香り",
      "迫力満点",
      "トロッコ列車"
    ],
    "answer": "座席",
    "fullSentence": "窓側の座席を予約しました。",
    "explanation": "窓側の座席を予約しました。\nTôi đặt ghế cạnh cửa sổ.\n座席: chỗ ngồi, ghế ngồi"
  },
  {
    "id": "tr_1517",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đặt ghế cạnh cửa sổ.",
    "acceptedAnswers": [
      "窓側の座席を予約しました。",
      "窓側の座席を予約しました"
    ],
    "explanation": "窓側の座席を予約しました。\n(まどがわのざせきをよやくしました。)\n座席: chỗ ngồi, ghế ngồi"
  },
  {
    "id": "mc_1518",
    "type": "multiple_choice",
    "question": "鉄道 có nghĩa là gì?",
    "word": "鉄道",
    "reading": "てつどう",
    "choices": [
      "sự việc bất ngờ, sự cố ngoài dự kiến",
      "đường sắt",
      "vùng ôn đới",
      "cứng, chắc; cứng nhắc, trang trọng quá"
    ],
    "answer": "đường sắt",
    "explanation": "鉄道 (てつどう): đường sắt"
  },
  {
    "id": "fb_1519",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "通勤に",
    "sentenceSuffix": "を利用しています。",
    "choices": [
      "鉄道",
      "残り湯",
      "鉄",
      "かけ間違い"
    ],
    "answer": "鉄道",
    "fullSentence": "通勤に鉄道を利用しています。",
    "explanation": "通勤に鉄道を利用しています。\nTôi đi làm bằng đường sắt.\n鉄道: đường sắt"
  },
  {
    "id": "tr_1520",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đi làm bằng đường sắt.",
    "acceptedAnswers": [
      "通勤に鉄道を利用しています。",
      "通勤に鉄道を利用しています"
    ],
    "explanation": "通勤に鉄道を利用しています。\n(つうきんにてつどうをりようしています。)\n鉄道: đường sắt"
  },
  {
    "id": "mc_1521",
    "type": "multiple_choice",
    "question": "グリーン車 có nghĩa là gì?",
    "word": "グリーン車",
    "reading": "グリーンしゃ",
    "choices": [
      "di sản thiên nhiên thế giới",
      "toa Green, hạng ghế cao cấp hơn toa thường ở Nhật",
      "truyện tranh bốn khung",
      "tháp chính cao trong thành Nhật"
    ],
    "answer": "toa Green, hạng ghế cao cấp hơn toa thường ở Nhật",
    "explanation": "グリーン車 (グリーンしゃ): toa Green, hạng ghế cao cấp hơn toa thường ở Nhật"
  },
  {
    "id": "fb_1522",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "今回は",
    "sentenceSuffix": "に乗ります。",
    "choices": [
      "グリーン車",
      "尋ねる",
      "SL",
      "～同士"
    ],
    "answer": "グリーン車",
    "fullSentence": "今回はグリーン車に乗ります。",
    "explanation": "今回はグリーン車に乗ります。\nLần này tôi đi toa Green.\nグリーン車: toa Green, hạng ghế cao cấp hơn toa thường ở Nhật"
  },
  {
    "id": "tr_1523",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Lần này tôi đi toa Green.",
    "acceptedAnswers": [
      "今回はグリーン車に乗ります。",
      "今回はグリーン車に乗ります"
    ],
    "explanation": "今回はグリーン車に乗ります。\n(こんかいはグリーンしゃにのります。)\nグリーン車: toa Green, hạng ghế cao cấp hơn toa thường ở Nhật"
  },
  {
    "id": "mc_1524",
    "type": "multiple_choice",
    "question": "販売 có nghĩa là gì?",
    "word": "販売",
    "reading": "はんばい",
    "choices": [
      "khu phố…",
      "mẫu, hình mẫu; người mẫu",
      "bán hàng",
      "thả/đưa lên cao; chiên ngập dầu"
    ],
    "answer": "bán hàng",
    "explanation": "販売 (はんばい): bán hàng"
  },
  {
    "id": "fb_1525",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "車内で飲み物を",
    "sentenceSuffix": "しています。",
    "choices": [
      "販売",
      "ハイタッチ",
      "言葉遣い",
      "訪れる"
    ],
    "answer": "販売",
    "fullSentence": "車内で飲み物を販売しています。",
    "explanation": "車内で飲み物を販売しています。\nTrên tàu có bán đồ uống.\n販売: bán hàng"
  },
  {
    "id": "tr_1526",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Trên tàu có bán đồ uống.",
    "acceptedAnswers": [
      "車内で飲み物を販売しています。",
      "車内で飲み物を販売しています"
    ],
    "explanation": "車内で飲み物を販売しています。\n(しゃないでのみものをはんばいしています。)\n販売: bán hàng"
  },
  {
    "id": "mc_1527",
    "type": "multiple_choice",
    "question": "停車 có nghĩa là gì?",
    "word": "停車",
    "reading": "ていしゃ",
    "choices": [
      "dừng xe/tàu",
      "shachihoko: tượng linh vật thân cá đầu thú trên nóc thành, đền…",
      "futsal, bóng đá sân nhỏ năm người",
      "cửa sổ tàu/xe; cảnh nhìn qua cửa sổ"
    ],
    "answer": "dừng xe/tàu",
    "explanation": "停車 (ていしゃ): dừng xe/tàu"
  },
  {
    "id": "fb_1528",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この列車は次の駅に",
    "sentenceSuffix": "します。",
    "choices": [
      "夢中",
      "停車",
      "縦",
      "指定"
    ],
    "answer": "停車",
    "fullSentence": "この列車は次の駅に停車します。",
    "explanation": "この列車は次の駅に停車します。\nTàu này dừng ở ga tiếp theo.\n停車: dừng xe/tàu"
  },
  {
    "id": "tr_1529",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tàu này dừng ở ga tiếp theo.",
    "acceptedAnswers": [
      "この列車は次の駅に停車します。",
      "この列車は次の駅に停車します"
    ],
    "explanation": "この列車は次の駅に停車します。\n(このれっしゃはつぎのえきにていしゃします。)\n停車: dừng xe/tàu"
  },
  {
    "id": "fb_1530",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "ここで五分間",
    "sentenceSuffix": "します。",
    "choices": [
      "停車",
      "彫る",
      "包装紙",
      "意外"
    ],
    "answer": "停車",
    "fullSentence": "ここで五分間停車します。",
    "explanation": "ここで五分間停車します。\nTàu dừng ở đây năm phút.\n停車: dừng xe/tàu"
  },
  {
    "id": "tr_1531",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tàu dừng ở đây năm phút.",
    "acceptedAnswers": [
      "ここで五分間停車します。",
      "ここで五分間停車します"
    ],
    "explanation": "ここで五分間停車します。\n(ここでごふんかんていしゃします。)\n停車: dừng xe/tàu"
  },
  {
    "id": "mc_1532",
    "type": "multiple_choice",
    "question": "時刻 có nghĩa là gì?",
    "word": "時刻",
    "reading": "じこく",
    "choices": [
      "làm vỡ; chia, chia nhỏ",
      "giờ, thời điểm chính xác",
      "đặt tên",
      "doanh thu, số tiền bán hàng thu được"
    ],
    "answer": "giờ, thời điểm chính xác",
    "explanation": "時刻 (じこく): giờ, thời điểm chính xác"
  },
  {
    "id": "fb_1533",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "列車の発車",
    "sentenceSuffix": "を確認します。",
    "choices": [
      "森",
      "時刻",
      "開発",
      "あるいは"
    ],
    "answer": "時刻",
    "fullSentence": "列車の発車時刻を確認します。",
    "explanation": "列車の発車時刻を確認します。\nTôi kiểm tra giờ tàu khởi hành.\n時刻: giờ, thời điểm chính xác"
  },
  {
    "id": "tr_1534",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi kiểm tra giờ tàu khởi hành.",
    "acceptedAnswers": [
      "列車の発車時刻を確認します。",
      "列車の発車時刻を確認します"
    ],
    "explanation": "列車の発車時刻を確認します。\n(れっしゃのはっしゃじこくをかくにんします。)\n時刻: giờ, thời điểm chính xác"
  },
  {
    "id": "mc_1535",
    "type": "multiple_choice",
    "question": "禁煙 có nghĩa là gì?",
    "word": "禁煙",
    "reading": "きんえん",
    "choices": [
      "sàn gỗ, sàn lát ván",
      "tiêu đề, tên tác phẩm",
      "truyện tranh bốn khung",
      "bỏ/ngừng hút thuốc"
    ],
    "answer": "bỏ/ngừng hút thuốc",
    "explanation": "禁煙 (きんえん): bỏ/ngừng hút thuốc"
  },
  {
    "id": "fb_1536",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "父は去年から",
    "sentenceSuffix": "しています。",
    "choices": [
      "禁煙",
      "向かい合う",
      "車内",
      "先日"
    ],
    "answer": "禁煙",
    "fullSentence": "父は去年から禁煙しています。",
    "explanation": "父は去年から禁煙しています。\nBố tôi bỏ hút thuốc từ năm ngoái.\n禁煙: bỏ/ngừng hút thuốc"
  },
  {
    "id": "tr_1537",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Bố tôi bỏ hút thuốc từ năm ngoái.",
    "acceptedAnswers": [
      "父は去年から禁煙しています。",
      "父は去年から禁煙しています"
    ],
    "explanation": "父は去年から禁煙しています。\n(ちちはきょねんからきんえんしています。)\n禁煙: bỏ/ngừng hút thuốc"
  },
  {
    "id": "fb_1538",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "車内は",
    "sentenceSuffix": "です。",
    "choices": [
      "座席",
      "扇風機",
      "禁煙",
      "瞬間"
    ],
    "answer": "禁煙",
    "fullSentence": "車内は禁煙です。",
    "explanation": "車内は禁煙です。\nTrong tàu cấm hút thuốc.\n禁煙: bỏ/ngừng hút thuốc"
  },
  {
    "id": "tr_1539",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Trong tàu cấm hút thuốc.",
    "acceptedAnswers": [
      "車内は禁煙です。",
      "車内は禁煙です"
    ],
    "explanation": "車内は禁煙です。\n(しゃないはきんえんです。)\n禁煙: bỏ/ngừng hút thuốc"
  },
  {
    "id": "mc_1540",
    "type": "multiple_choice",
    "question": "デッキ có nghĩa là gì?",
    "word": "デッキ",
    "reading": "デッキ",
    "choices": [
      "nhé, nhỉ (trợ từ cuối câu thân mật)",
      "mạng Internet (viết tắt của インターネット)",
      "khoang cửa/đầu toa tàu; boong tàu thủy",
      "người có tuổi, lớn tuổi"
    ],
    "answer": "khoang cửa/đầu toa tàu; boong tàu thủy",
    "explanation": "デッキ (デッキ): khoang cửa/đầu toa tàu; boong tàu thủy"
  },
  {
    "id": "fb_1541",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "通話は",
    "sentenceSuffix": "でお願いします。",
    "choices": [
      "デッキ",
      "頂上",
      "吹く",
      "扇風機"
    ],
    "answer": "デッキ",
    "fullSentence": "通話はデッキでお願いします。",
    "explanation": "通話はデッキでお願いします。\nXin gọi điện ở khoang cửa toa.\nデッキ: khoang cửa/đầu toa tàu; boong tàu thủy"
  },
  {
    "id": "tr_1542",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Xin gọi điện ở khoang cửa toa.",
    "acceptedAnswers": [
      "通話はデッキでお願いします。",
      "通話はデッキでお願いします"
    ],
    "explanation": "通話はデッキでお願いします。\n(つうわはデッキでおねがいします。)\nデッキ: khoang cửa/đầu toa tàu; boong tàu thủy"
  },
  {
    "id": "mc_1543",
    "type": "multiple_choice",
    "question": "通話 có nghĩa là gì?",
    "word": "通話",
    "reading": "つうわ",
    "choices": [
      "đồ nhắm ăn cùng rượu bia",
      "thác nước",
      "nói chuyện điện thoại",
      "niềm tự hào"
    ],
    "answer": "nói chuyện điện thoại",
    "explanation": "通話 (つうわ): nói chuyện điện thoại"
  },
  {
    "id": "fb_1544",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "家族と",
    "sentenceSuffix": "しています。",
    "choices": [
      "親孝行",
      "コンクリート",
      "村人",
      "通話"
    ],
    "answer": "通話",
    "fullSentence": "家族と通話しています。",
    "explanation": "家族と通話しています。\nTôi đang nói chuyện điện thoại với gia đình.\n通話: nói chuyện điện thoại"
  },
  {
    "id": "tr_1545",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đang nói chuyện điện thoại với gia đình.",
    "acceptedAnswers": [
      "家族と通話しています。",
      "家族と通話しています"
    ],
    "explanation": "家族と通話しています。\n(かぞくとつうわしています。)\n通話: nói chuyện điện thoại"
  },
  {
    "id": "mc_1546",
    "type": "multiple_choice",
    "question": "なお có nghĩa là gì?",
    "word": "なお",
    "reading": "なお",
    "choices": [
      "bên trong xe/tàu",
      "truyện tranh bốn khung",
      "đặt, gửi vào (tình cảm, tâm huyết)",
      "ngoài ra, xin nói thêm; vẫn còn"
    ],
    "answer": "ngoài ra, xin nói thêm; vẫn còn",
    "explanation": "なお (なお): ngoài ra, xin nói thêm; vẫn còn"
  },
  {
    "id": "fb_1547",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "、車内は禁煙です。",
    "choices": [
      "砂浜",
      "ショック",
      "一部",
      "なお"
    ],
    "answer": "なお",
    "fullSentence": "なお、車内は禁煙です。",
    "explanation": "なお、車内は禁煙です。\nNgoài ra, trong tàu cấm hút thuốc.\nなお: ngoài ra, xin nói thêm; vẫn còn"
  },
  {
    "id": "tr_1548",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Ngoài ra, trong tàu cấm hút thuốc.",
    "acceptedAnswers": [
      "なお、車内は禁煙です。",
      "なお、車内は禁煙です"
    ],
    "explanation": "なお、車内は禁煙です。\n(なお、しゃないはきんえんです。)\nなお: ngoài ra, xin nói thêm; vẫn còn"
  },
  {
    "id": "fb_1549",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "今も",
    "sentenceSuffix": "、この歌は人気があります。",
    "choices": [
      "海岸",
      "なお",
      "SL",
      "思いがけない"
    ],
    "answer": "なお",
    "fullSentence": "今もなお、この歌は人気があります。",
    "explanation": "今もなお、この歌は人気があります。\nĐến nay bài hát này vẫn được yêu thích.\nなお: ngoài ra, xin nói thêm; vẫn còn"
  },
  {
    "id": "tr_1550",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Đến nay bài hát này vẫn được yêu thích.",
    "acceptedAnswers": [
      "今もなお、この歌は人気があります。",
      "今もなお、この歌は人気があります"
    ],
    "explanation": "今もなお、この歌は人気があります。\n(いまもなお、このうたはにんきがあります。)\nなお: ngoài ra, xin nói thêm; vẫn còn"
  },
  {
    "id": "mc_1551",
    "type": "multiple_choice",
    "question": "満席 có nghĩa là gì?",
    "word": "満席",
    "reading": "まんせき",
    "choices": [
      "mặt đất",
      "kín chỗ, hết ghế trống",
      "lên xuống phương tiện",
      "tàu kiểu xe goòng, thường dùng ngắm cảnh du lịch"
    ],
    "answer": "kín chỗ, hết ghế trống",
    "explanation": "満席 (まんせき): kín chỗ, hết ghế trống"
  },
  {
    "id": "fb_1552",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "週末の列車は",
    "sentenceSuffix": "になりました。",
    "choices": [
      "禁煙",
      "満席",
      "持ち上げる",
      "パジャマ"
    ],
    "answer": "満席",
    "fullSentence": "週末の列車は満席になりました。",
    "explanation": "週末の列車は満席になりました。\nChuyến tàu cuối tuần đã kín chỗ.\n満席: kín chỗ, hết ghế trống"
  },
  {
    "id": "tr_1553",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Chuyến tàu cuối tuần đã kín chỗ.",
    "acceptedAnswers": [
      "週末の列車は満席になりました。",
      "週末の列車は満席になりました"
    ],
    "explanation": "週末の列車は満席になりました。\n(しゅうまつのれっしゃはまんせきになりました。)\n満席: kín chỗ, hết ghế trống"
  },
  {
    "id": "mc_1554",
    "type": "multiple_choice",
    "question": "いたす có nghĩa là gì?",
    "word": "いたす",
    "reading": "いたす",
    "choices": [
      "làm (cách nói khiêm nhường/lịch sự của する)",
      "xấu hổ đến nóng bừng mặt",
      "xe tải",
      "quý tộc"
    ],
    "answer": "làm (cách nói khiêm nhường/lịch sự của する)",
    "explanation": "いたす (いたす): làm (cách nói khiêm nhường/lịch sự của する)"
  },
  {
    "id": "tr_1555",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi xin hướng dẫn quý khách.",
    "acceptedAnswers": [
      "私がご案内いたします。",
      "私がご案内いたします"
    ],
    "explanation": "私がご案内いたします。\n(わたしがごあんないいたします。)\nいたす: làm (cách nói khiêm nhường/lịch sự của する)"
  },
  {
    "id": "tr_1556",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Rất mong được anh/chị giúp đỡ.",
    "acceptedAnswers": [
      "よろしくお願いいたします。",
      "よろしくお願いいたします"
    ],
    "explanation": "よろしくお願いいたします。\n(よろしくおねがいいたします。)\nいたす: làm (cách nói khiêm nhường/lịch sự của する)"
  },
  {
    "id": "mc_1557",
    "type": "multiple_choice",
    "question": "あらかじめ có nghĩa là gì?",
    "word": "あらかじめ",
    "reading": "あらかじめ",
    "choices": [
      "tạm về nước",
      "chuyến dã ngoại, thường do trường tổ chức",
      "vữa vôi dùng trát tường",
      "trước, sẵn từ trước"
    ],
    "answer": "trước, sẵn từ trước",
    "explanation": "あらかじめ (あらかじめ): trước, sẵn từ trước"
  },
  {
    "id": "fb_1558",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "切符を買っておきます。",
    "choices": [
      "目を向ける",
      "両手",
      "あらかじめ",
      "もしかしたら"
    ],
    "answer": "あらかじめ",
    "fullSentence": "あらかじめ切符を買っておきます。",
    "explanation": "あらかじめ切符を買っておきます。\nTôi mua vé sẵn từ trước.\nあらかじめ: trước, sẵn từ trước"
  },
  {
    "id": "tr_1559",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi mua vé sẵn từ trước.",
    "acceptedAnswers": [
      "あらかじめ切符を買っておきます。",
      "あらかじめ切符を買っておきます"
    ],
    "explanation": "あらかじめ切符を買っておきます。\n(あらかじめきっぷをかっておきます。)\nあらかじめ: trước, sẵn từ trước"
  },
  {
    "id": "mc_1560",
    "type": "multiple_choice",
    "question": "了承 có nghĩa là gì?",
    "word": "了承",
    "reading": "りょうしょう",
    "choices": [
      "rụt rè trước người lạ",
      "thơ, bài thơ",
      "xi măng",
      "hiểu, chấp thuận"
    ],
    "answer": "hiểu, chấp thuận",
    "explanation": "了承 (りょうしょう): hiểu, chấp thuận"
  },
  {
    "id": "fb_1561",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "変更を",
    "sentenceSuffix": "しました。",
    "choices": [
      "了承",
      "生ビール",
      "返る",
      "柿"
    ],
    "answer": "了承",
    "fullSentence": "変更を了承しました。",
    "explanation": "変更を了承しました。\nTôi đã chấp thuận thay đổi.\n了承: hiểu, chấp thuận"
  },
  {
    "id": "tr_1562",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đã chấp thuận thay đổi.",
    "acceptedAnswers": [
      "変更を了承しました。",
      "変更を了承しました"
    ],
    "explanation": "変更を了承しました。\n(へんこうをりょうしょうしました。)\n了承: hiểu, chấp thuận"
  },
  {
    "id": "fb_1563",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "時間が変わる場合がありますので、ご",
    "sentenceSuffix": "ください。",
    "choices": [
      "了承",
      "凧揚げ",
      "滝",
      "帰国"
    ],
    "answer": "了承",
    "fullSentence": "時間が変わる場合がありますので、ご了承ください。",
    "explanation": "時間が変わる場合がありますので、ご了承ください。\nGiờ có thể thay đổi, mong quý khách thông cảm.\n了承: hiểu, chấp thuận"
  },
  {
    "id": "tr_1564",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Giờ có thể thay đổi, mong quý khách thông cảm.",
    "acceptedAnswers": [
      "時間が変わる場合がありますので、ご了承ください。",
      "時間が変わる場合がありますので、ご了承ください"
    ],
    "explanation": "時間が変わる場合がありますので、ご了承ください。\n(じかんがかわるばあいがありますので、ごりょうしょうください。)\n了承: hiểu, chấp thuận"
  },
  {
    "id": "mc_1565",
    "type": "multiple_choice",
    "question": "心より có nghĩa là gì?",
    "word": "心より",
    "reading": "こころより",
    "choices": [
      "đoàn tàu",
      "trước, sẵn từ trước",
      "từ tận đáy lòng, chân thành (trang trọng)",
      "màu xám"
    ],
    "answer": "từ tận đáy lòng, chân thành (trang trọng)",
    "explanation": "心より (こころより): từ tận đáy lòng, chân thành (trang trọng)"
  },
  {
    "id": "fb_1566",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "お礼を申し上げます。",
    "choices": [
      "誇り",
      "車窓",
      "縦",
      "心より"
    ],
    "answer": "心より",
    "fullSentence": "心よりお礼を申し上げます。",
    "explanation": "心よりお礼を申し上げます。\nTôi xin chân thành cảm ơn.\n心より: từ tận đáy lòng, chân thành (trang trọng)"
  },
  {
    "id": "tr_1567",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi xin chân thành cảm ơn.",
    "acceptedAnswers": [
      "心よりお礼を申し上げます。",
      "心よりお礼を申し上げます"
    ],
    "explanation": "心よりお礼を申し上げます。\n(こころよりおれいをもうしあげます。)\n心より: từ tận đáy lòng, chân thành (trang trọng)"
  },
  {
    "id": "mc_1568",
    "type": "multiple_choice",
    "question": "車両 có nghĩa là gì?",
    "word": "車両",
    "reading": "しゃりょう",
    "choices": [
      "quảng cáo, thường trên TV/radio",
      "màu vẽ, sơn vẽ",
      "nhà nghỉ nhỏ kiểu phương Tây, thường do gia đình quản lý",
      "toa xe, phương tiện đường bộ/đường sắt"
    ],
    "answer": "toa xe, phương tiện đường bộ/đường sắt",
    "explanation": "車両 (しゃりょう): toa xe, phương tiện đường bộ/đường sắt"
  },
  {
    "id": "fb_1569",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "前の",
    "sentenceSuffix": "に移動してください。",
    "choices": [
      "車両",
      "往復",
      "我慢",
      "唄"
    ],
    "answer": "車両",
    "fullSentence": "前の車両に移動してください。",
    "explanation": "前の車両に移動してください。\nXin di chuyển sang toa phía trước.\n車両: toa xe, phương tiện đường bộ/đường sắt"
  },
  {
    "id": "tr_1570",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Xin di chuyển sang toa phía trước.",
    "acceptedAnswers": [
      "前の車両に移動してください。",
      "前の車両に移動してください"
    ],
    "explanation": "前の車両に移動してください。\n(まえのしゃりょうにいどうしてください。)\n車両: toa xe, phương tiện đường bộ/đường sắt"
  },
  {
    "id": "mc_1571",
    "type": "multiple_choice",
    "question": "内回り có nghĩa là gì?",
    "word": "内回り",
    "reading": "うちまわり",
    "choices": [
      "chiều vòng trong của tuyến vòng",
      "tuổi của cây",
      "góc, khu vực dành cho một mục đích",
      "trần nhà"
    ],
    "answer": "chiều vòng trong của tuyến vòng",
    "explanation": "内回り (うちまわり): chiều vòng trong của tuyến vòng"
  },
  {
    "id": "fb_1572",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "の電車に乗ります。",
    "choices": [
      "ドレス",
      "わくわく",
      "豊かさ",
      "内回り"
    ],
    "answer": "内回り",
    "fullSentence": "内回りの電車に乗ります。",
    "explanation": "内回りの電車に乗ります。\nTôi đi tàu chiều vòng trong.\n内回り: chiều vòng trong của tuyến vòng"
  },
  {
    "id": "tr_1573",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đi tàu chiều vòng trong.",
    "acceptedAnswers": [
      "内回りの電車に乗ります。",
      "内回りの電車に乗ります"
    ],
    "explanation": "内回りの電車に乗ります。\n(うちまわりのでんしゃにのります。)\n内回り: chiều vòng trong của tuyến vòng"
  },
  {
    "id": "mc_1574",
    "type": "multiple_choice",
    "question": "見合わせる có nghĩa là gì?",
    "word": "見合わせる",
    "reading": "みあわせる",
    "choices": [
      "tính cả, đưa vào, bao gồm vào",
      "tạm hoãn/tạm ngừng; nhìn nhau",
      "đồng bằng",
      "điểm; khía cạnh, mặt"
    ],
    "answer": "tạm hoãn/tạm ngừng; nhìn nhau",
    "explanation": "見合わせる (みあわせる): tạm hoãn/tạm ngừng; nhìn nhau"
  },
  {
    "id": "tr_1575",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Do mưa lớn, tàu đang tạm ngừng chạy.",
    "acceptedAnswers": [
      "大雨のため、列車の運転を見合わせています。",
      "大雨のため、列車の運転を見合わせています"
    ],
    "explanation": "大雨のため、列車の運転を見合わせています。\n(おおあめのため、れっしゃのうんてんをみあわせています。)\n見合わせる: tạm hoãn/tạm ngừng; nhìn nhau"
  },
  {
    "id": "tr_1576",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Hai người ngạc nhiên nhìn nhau.",
    "acceptedAnswers": [
      "二人は驚いて顔を見合わせました。",
      "二人は驚いて顔を見合わせました"
    ],
    "explanation": "二人は驚いて顔を見合わせました。\n(ふたりはおどろいてかおをみあわせました。)\n見合わせる: tạm hoãn/tạm ngừng; nhìn nhau"
  },
  {
    "id": "mc_1577",
    "type": "multiple_choice",
    "question": "尋ねる có nghĩa là gì?",
    "word": "尋ねる",
    "reading": "たずねる",
    "choices": [
      "khởi hành",
      "du ký, bài ghi chép về chuyến du lịch",
      "đưa mắt nhìn; chú ý đến",
      "hỏi, hỏi thăm thông tin"
    ],
    "answer": "hỏi, hỏi thăm thông tin",
    "explanation": "尋ねる (たずねる): hỏi, hỏi thăm thông tin"
  },
  {
    "id": "tr_1578",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi hỏi đường nhân viên ga.",
    "acceptedAnswers": [
      "駅員に道を尋ねました。",
      "駅員に道を尋ねました"
    ],
    "explanation": "駅員に道を尋ねました。\n(えきいんにみちをたずねました。)\n尋ねる: hỏi, hỏi thăm thông tin"
  },
  {
    "id": "tr_1579",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi hỏi mấy giờ khởi hành.",
    "acceptedAnswers": [
      "何時に出発するか尋ねました。",
      "何時に出発するか尋ねました"
    ],
    "explanation": "何時に出発するか尋ねました。\n(なんじにしゅっぱつするかたずねました。)\n尋ねる: hỏi, hỏi thăm thông tin"
  },
  {
    "id": "mc_1580",
    "type": "multiple_choice",
    "question": "幸運 có nghĩa là gì?",
    "word": "幸運",
    "reading": "こううん",
    "choices": [
      "về nhà",
      "chiếu tatami",
      "sự may mắn; may mắn",
      "thon dài, dài và hẹp"
    ],
    "answer": "sự may mắn; may mắn",
    "explanation": "幸運 (こううん): sự may mắn; may mắn"
  },
  {
    "id": "fb_1581",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "私は",
    "sentenceSuffix": "な人だと思います。",
    "choices": [
      "フリー切符",
      "幸運",
      "渓谷",
      "香り"
    ],
    "answer": "幸運",
    "fullSentence": "私は幸運な人だと思います。",
    "explanation": "私は幸運な人だと思います。\nTôi nghĩ mình là người may mắn.\n幸運: sự may mắn; may mắn"
  },
  {
    "id": "tr_1582",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi nghĩ mình là người may mắn.",
    "acceptedAnswers": [
      "私は幸運な人だと思います。",
      "私は幸運な人だと思います"
    ],
    "explanation": "私は幸運な人だと思います。\n(わたしはこううんなひとだとおもいます。)\n幸運: sự may mắn; may mắn"
  },
  {
    "id": "fb_1583",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "あなたの",
    "sentenceSuffix": "を祈っています。",
    "choices": [
      "着払い",
      "ラストオーダー",
      "幸運",
      "箱"
    ],
    "answer": "幸運",
    "fullSentence": "あなたの幸運を祈っています。",
    "explanation": "あなたの幸運を祈っています。\nTôi cầu chúc bạn may mắn.\n幸運: sự may mắn; may mắn"
  },
  {
    "id": "tr_1584",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi cầu chúc bạn may mắn.",
    "acceptedAnswers": [
      "あなたの幸運を祈っています。",
      "あなたの幸運を祈っています"
    ],
    "explanation": "あなたの幸運を祈っています。\n(あなたのこううんをいのっています。)\n幸運: sự may mắn; may mắn"
  },
  {
    "id": "mc_1585",
    "type": "multiple_choice",
    "question": "雲 có nghĩa là gì?",
    "word": "雲",
    "reading": "くも",
    "choices": [
      "cây sugi, tuyết tùng Nhật Bản",
      "mây",
      "ỉu xìu, buồn rầu",
      "màu xám"
    ],
    "answer": "mây",
    "explanation": "雲 (くも): mây"
  },
  {
    "id": "fb_1586",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "午後から",
    "sentenceSuffix": "が出てきました。",
    "choices": [
      "だって",
      "雲",
      "再会",
      "普及"
    ],
    "answer": "雲",
    "fullSentence": "午後から雲が出てきました。",
    "explanation": "午後から雲が出てきました。\nTừ chiều trời bắt đầu có mây.\n雲: mây"
  },
  {
    "id": "tr_1587",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Từ chiều trời bắt đầu có mây.",
    "acceptedAnswers": [
      "午後から雲が出てきました。",
      "午後から雲が出てきました"
    ],
    "explanation": "午後から雲が出てきました。\n(ごごからくもがでてきました。)\n雲: mây"
  },
  {
    "id": "mc_1588",
    "type": "multiple_choice",
    "question": "早速 có nghĩa là gì?",
    "word": "早速",
    "reading": "さっそく",
    "choices": [
      "ngay, lập tức bắt tay làm",
      "đối diện nhau, quay mặt vào nhau",
      "tha thứ; cho phép",
      "lâu rồi mới lại…; lâu không gặp/làm"
    ],
    "answer": "ngay, lập tức bắt tay làm",
    "explanation": "早速 (さっそく): ngay, lập tức bắt tay làm"
  },
  {
    "id": "fb_1589",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "本を買って、",
    "sentenceSuffix": "読み始めました。",
    "choices": [
      "観光マップ",
      "再会",
      "～らしさ",
      "早速"
    ],
    "answer": "早速",
    "fullSentence": "本を買って、早速読み始めました。",
    "explanation": "本を買って、早速読み始めました。\nMua sách xong, tôi bắt đầu đọc ngay.\n早速: ngay, lập tức bắt tay làm"
  },
  {
    "id": "tr_1590",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Mua sách xong, tôi bắt đầu đọc ngay.",
    "acceptedAnswers": [
      "本を買って、早速読み始めました。",
      "本を買って、早速読み始めました"
    ],
    "explanation": "本を買って、早速読み始めました。\n(ほんをかって、さっそくよみはじめました。)\n早速: ngay, lập tức bắt tay làm"
  },
  {
    "id": "mc_1591",
    "type": "multiple_choice",
    "question": "路面電車 có nghĩa là gì?",
    "word": "路面電車",
    "reading": "ろめんでんしゃ",
    "choices": [
      "tình hình gần đây của một người",
      "tàu điện chạy trên đường phố, tram",
      "phát triển thịnh vượng",
      "bình đẳng, ngang hàng"
    ],
    "answer": "tàu điện chạy trên đường phố, tram",
    "explanation": "路面電車 (ろめんでんしゃ): tàu điện chạy trên đường phố, tram"
  },
  {
    "id": "fb_1592",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "に乗って町を回りました。",
    "choices": [
      "わくわく",
      "路面電車",
      "あらかじめ",
      "洗面台"
    ],
    "answer": "路面電車",
    "fullSentence": "路面電車に乗って町を回りました。",
    "explanation": "路面電車に乗って町を回りました。\nTôi đi tram tham quan quanh thành phố.\n路面電車: tàu điện chạy trên đường phố, tram"
  },
  {
    "id": "tr_1593",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi đi tram tham quan quanh thành phố.",
    "acceptedAnswers": [
      "路面電車に乗って町を回りました。",
      "路面電車に乗って町を回りました"
    ],
    "explanation": "路面電車に乗って町を回りました。\n(ろめんでんしゃにのってまちをまわりました。)\n路面電車: tàu điện chạy trên đường phố, tram"
  },
  {
    "id": "mc_1594",
    "type": "multiple_choice",
    "question": "天井 có nghĩa là gì?",
    "word": "天井",
    "reading": "てんじょう",
    "choices": [
      "trần nhà",
      "để lộ, phơi ra; ngâm/phơi để tẩy trắng",
      "cổng",
      "hôm trước, ít ngày trước"
    ],
    "answer": "trần nhà",
    "explanation": "天井 (てんじょう): trần nhà"
  },
  {
    "id": "fb_1595",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "この部屋は",
    "sentenceSuffix": "が高いです。",
    "choices": [
      "焼ける",
      "県庁",
      "天井",
      "～センチ"
    ],
    "answer": "天井",
    "fullSentence": "この部屋は天井が高いです。",
    "explanation": "この部屋は天井が高いです。\nPhòng này có trần cao.\n天井: trần nhà"
  },
  {
    "id": "tr_1596",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Phòng này có trần cao.",
    "acceptedAnswers": [
      "この部屋は天井が高いです。",
      "この部屋は天井が高いです"
    ],
    "explanation": "この部屋は天井が高いです。\n(このへやはてんじょうがたかいです。)\n天井: trần nhà"
  },
  {
    "id": "mc_1597",
    "type": "multiple_choice",
    "question": "満足 có nghĩa là gì?",
    "word": "満足",
    "reading": "まんぞく",
    "choices": [
      "không sao, không sợ/không bận tâm",
      "thỏa đáng, đầy đủ; hài lòng",
      "ngói",
      "hơn, càng… hơn"
    ],
    "answer": "thỏa đáng, đầy đủ; hài lòng",
    "explanation": "満足 (まんぞく): thỏa đáng, đầy đủ; hài lòng"
  },
  {
    "id": "fb_1598",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "旅行の内容に",
    "sentenceSuffix": "しています。",
    "choices": [
      "対等",
      "グッズ",
      "なんだか",
      "満足"
    ],
    "answer": "満足",
    "fullSentence": "旅行の内容に満足しています。",
    "explanation": "旅行の内容に満足しています。\nTôi hài lòng với nội dung chuyến đi.\n満足: thỏa đáng, đầy đủ; hài lòng"
  },
  {
    "id": "tr_1599",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi hài lòng với nội dung chuyến đi.",
    "acceptedAnswers": [
      "旅行の内容に満足しています。",
      "旅行の内容に満足しています"
    ],
    "explanation": "旅行の内容に満足しています。\n(りょこうのないようにまんぞくしています。)\n満足: thỏa đáng, đầy đủ; hài lòng"
  },
  {
    "id": "fb_1600",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "忙しくて",
    "sentenceSuffix": "な食事ができませんでした。",
    "choices": [
      "にぎわう",
      "満足",
      "包装",
      "渓谷"
    ],
    "answer": "満足",
    "fullSentence": "忙しくて満足な食事ができませんでした。",
    "explanation": "忙しくて満足な食事ができませんでした。\nVì bận nên tôi không ăn uống tử tế được.\n満足: thỏa đáng, đầy đủ; hài lòng"
  },
  {
    "id": "tr_1601",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Vì bận nên tôi không ăn uống tử tế được.",
    "acceptedAnswers": [
      "忙しくて満足な食事ができませんでした。",
      "忙しくて満足な食事ができませんでした"
    ],
    "explanation": "忙しくて満足な食事ができませんでした。\n(いそがしくてまんぞくなしょくじができませんでした。)\n満足: thỏa đáng, đầy đủ; hài lòng"
  },
  {
    "id": "mc_1602",
    "type": "multiple_choice",
    "question": "～ぶりに có nghĩa là gì?",
    "word": "～ぶりに",
    "reading": "～ぶりに",
    "choices": [
      "sau… mới lại làm, lần đầu sau khoảng…",
      "thấy ưng ý, thích sau khi tiếp xúc",
      "bây giờ thì mới/đúng là… nhưng trước đây…",
      "bánh kẹo truyền thống Nhật Bản"
    ],
    "answer": "sau… mới lại làm, lần đầu sau khoảng…",
    "explanation": "～ぶりに (～ぶりに): sau… mới lại làm, lần đầu sau khoảng…"
  },
  {
    "id": "tr_1603",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Sau mười năm tôi mới gặp lại bạn.",
    "acceptedAnswers": [
      "十年ぶりに友人に会いました。",
      "十年ぶりに友人に会いました"
    ],
    "explanation": "十年ぶりに友人に会いました。\n(じゅうねんぶりにゆうじんにあいました。)\n～ぶりに: sau… mới lại làm, lần đầu sau khoảng…"
  },
  {
    "id": "mc_1604",
    "type": "multiple_choice",
    "question": "再会 có nghĩa là gì?",
    "word": "再会",
    "reading": "さいかい",
    "choices": [
      "gặp lại sau thời gian xa cách",
      "lao ra, nhảy ra, bất ngờ xuất hiện",
      "chỗ để, nơi đặt đồ",
      "ánh nắng chiếu xuống"
    ],
    "answer": "gặp lại sau thời gian xa cách",
    "explanation": "再会 (さいかい): gặp lại sau thời gian xa cách"
  },
  {
    "id": "fb_1605",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "駅で昔の友人と",
    "sentenceSuffix": "しました。",
    "choices": [
      "やって来る",
      "～側",
      "世界自然遺産",
      "再会"
    ],
    "answer": "再会",
    "fullSentence": "駅で昔の友人と再会しました。",
    "explanation": "駅で昔の友人と再会しました。\nTôi gặp lại bạn cũ ở ga.\n再会: gặp lại sau thời gian xa cách"
  },
  {
    "id": "tr_1606",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Tôi gặp lại bạn cũ ở ga.",
    "acceptedAnswers": [
      "駅で昔の友人と再会しました。",
      "駅で昔の友人と再会しました"
    ],
    "explanation": "駅で昔の友人と再会しました。\n(えきでむかしのゆうじんとさいかいしました。)\n再会: gặp lại sau thời gian xa cách"
  },
  {
    "id": "mc_1607",
    "type": "multiple_choice",
    "question": "さすが có nghĩa là gì?",
    "word": "さすが",
    "reading": "さすが",
    "choices": [
      "khu vườn nổi tiếng, đẹp",
      "quả là, đúng là (như tiếng tăm/kỳ vọng)",
      "một ngày nào đó, lúc nào đó",
      "các món đồ, sản phẩm theo chủ đề"
    ],
    "answer": "quả là, đúng là (như tiếng tăm/kỳ vọng)",
    "explanation": "さすが (さすが): quả là, đúng là (như tiếng tăm/kỳ vọng)"
  },
  {
    "id": "fb_1608",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "",
    "sentenceSuffix": "先生ですね。説明が分かりやすいです。",
    "choices": [
      "コンクリート",
      "さすが",
      "頂上",
      "全く"
    ],
    "answer": "さすが",
    "fullSentence": "さすが先生ですね。説明が分かりやすいです。",
    "explanation": "さすが先生ですね。説明が分かりやすいです。\nĐúng là thầy có khác. Giải thích thật dễ hiểu.\nさすが: quả là, đúng là (như tiếng tăm/kỳ vọng)"
  },
  {
    "id": "tr_1609",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Đúng là thầy có khác. Giải thích thật dễ hiểu.",
    "acceptedAnswers": [
      "さすが先生ですね。説明が分かりやすいです。",
      "さすが先生ですね。説明が分かりやすいです"
    ],
    "explanation": "さすが先生ですね。説明が分かりやすいです。\n(さすがせんせいですね。せつめいがわかりやすいです。)\nさすが: quả là, đúng là (như tiếng tăm/kỳ vọng)"
  },
  {
    "id": "fb_1610",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "三時間歩いて、",
    "sentenceSuffix": "に疲れました。",
    "choices": [
      "雲",
      "今では",
      "さすが",
      "チリンチリン"
    ],
    "answer": "さすが",
    "fullSentence": "三時間歩いて、さすがに疲れました。",
    "explanation": "三時間歩いて、さすがに疲れました。\nĐi bộ ba tiếng thì quả thực tôi cũng mệt.\nさすが: quả là, đúng là (như tiếng tăm/kỳ vọng)"
  },
  {
    "id": "tr_1611",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Đi bộ ba tiếng thì quả thực tôi cũng mệt.",
    "acceptedAnswers": [
      "三時間歩いて、さすがに疲れました。",
      "三時間歩いて、さすがに疲れました"
    ],
    "explanation": "三時間歩いて、さすがに疲れました。\n(さんじかんあるいて、さすがにつかれました。)\nさすが: quả là, đúng là (như tiếng tăm/kỳ vọng)"
  },
  {
    "id": "mc_1612",
    "type": "multiple_choice",
    "question": "香り có nghĩa là gì?",
    "word": "香り",
    "reading": "かおり",
    "choices": [
      "vô địch, giành giải nhất",
      "nam, đàn ông, con trai",
      "làm xong, giải quyết xong; làm cho qua bằng…",
      "hương thơm, mùi dễ chịu"
    ],
    "answer": "hương thơm, mùi dễ chịu",
    "explanation": "香り (かおり): hương thơm, mùi dễ chịu"
  },
  {
    "id": "fb_1613",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "お茶のいい",
    "sentenceSuffix": "がします。",
    "choices": [
      "努力",
      "香り",
      "オープンキャンパス",
      "黙る"
    ],
    "answer": "香り",
    "fullSentence": "お茶のいい香りがします。",
    "explanation": "お茶のいい香りがします。\nCó hương trà thơm dễ chịu.\n香り: hương thơm, mùi dễ chịu"
  },
  {
    "id": "tr_1614",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Có hương trà thơm dễ chịu.",
    "acceptedAnswers": [
      "お茶のいい香りがします。",
      "お茶のいい香りがします"
    ],
    "explanation": "お茶のいい香りがします。\n(おちゃのいいかおりがします。)\n香り: hương thơm, mùi dễ chịu"
  },
  {
    "id": "mc_1615",
    "type": "multiple_choice",
    "question": "旅行記 có nghĩa là gì?",
    "word": "旅行記",
    "reading": "りょこうき",
    "choices": [
      "du ký, bài ghi chép về chuyến du lịch",
      "lay, rung, lắc",
      "chiều lên; chiều tàu đi về đầu mối/trung tâm của tuyến",
      "phía, bên…"
    ],
    "answer": "du ký, bài ghi chép về chuyến du lịch",
    "explanation": "旅行記 (りょこうき): du ký, bài ghi chép về chuyến du lịch"
  },
  {
    "id": "fb_1616",
    "type": "fill_blank",
    "question": "Điền vào chỗ trống",
    "sentencePrefix": "旅の後で",
    "sentenceSuffix": "を書きました。",
    "choices": [
      "旅行記",
      "立派",
      "朝礼",
      "山林"
    ],
    "answer": "旅行記",
    "fullSentence": "旅の後で旅行記を書きました。",
    "explanation": "旅の後で旅行記を書きました。\nSau chuyến đi, tôi viết du ký.\n旅行記: du ký, bài ghi chép về chuyến du lịch"
  },
  {
    "id": "tr_1617",
    "type": "translation",
    "question": "Dịch sang tiếng Nhật",
    "prompt": "Sau chuyến đi, tôi viết du ký.",
    "acceptedAnswers": [
      "旅の後で旅行記を書きました。",
      "旅の後で旅行記を書きました"
    ],
    "explanation": "旅の後で旅行記を書きました。\n(たびのあとでりょこうきをかきました。)\n旅行記: du ký, bài ghi chép về chuyến du lịch"
  },
  {
    "id": "ma_1618",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "快適",
        "right": "thoải mái, dễ chịu"
      },
      {
        "id": "p2",
        "left": "梅雨",
        "right": "mùa mưa ở Nhật"
      },
      {
        "id": "p3",
        "left": "焼ける",
        "right": "được nướng chín; bị cháy; bị rám nắng"
      },
      {
        "id": "p4",
        "left": "太陽",
        "right": "mặt trời"
      }
    ],
    "explanation": "快適 (thoải mái, dễ chịu), 梅雨 (mùa mưa ở Nhật), 焼ける (được nướng chín; bị cháy; bị rám nắng), 太陽 (mặt trời)"
  },
  {
    "id": "ma_1619",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "今でこそ",
        "right": "bây giờ thì mới/đúng là… nhưng trước đây…"
      },
      {
        "id": "p2",
        "left": "普及",
        "right": "trở nên phổ biến, được phổ cập"
      },
      {
        "id": "p3",
        "left": "しのぐ",
        "right": "chịu đựng, vượt qua (nóng, lạnh, khó khăn)"
      },
      {
        "id": "p4",
        "left": "つるす",
        "right": "treo, mắc lên"
      }
    ],
    "explanation": "今でこそ (bây giờ thì mới/đúng là… nhưng trước đây…), 普及 (trở nên phổ biến, được phổ cập), しのぐ (chịu đựng, vượt qua (nóng, lạnh, khó khăn)), つるす (treo, mắc lên)"
  },
  {
    "id": "ma_1620",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "チリンチリン",
        "right": "leng keng, tiếng chuông nhỏ"
      },
      {
        "id": "p2",
        "left": "魔除け",
        "right": "vật/phép xua đuổi điều xấu, trừ tà"
      },
      {
        "id": "p3",
        "left": "打ち水",
        "right": "rảy nước xuống đất cho mát"
      },
      {
        "id": "p4",
        "left": "地面",
        "right": "mặt đất"
      }
    ],
    "explanation": "チリンチリン (leng keng, tiếng chuông nhỏ), 魔除け (vật/phép xua đuổi điều xấu, trừ tà), 打ち水 (rảy nước xuống đất cho mát), 地面 (mặt đất)"
  },
  {
    "id": "ma_1621",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "まく",
        "right": "rải, rắc; tưới/rảy (nước)"
      },
      {
        "id": "p2",
        "left": "光景",
        "right": "cảnh tượng trước mắt"
      },
      {
        "id": "p3",
        "left": "蒸発",
        "right": "bay hơi"
      },
      {
        "id": "p4",
        "left": "奪う",
        "right": "cướp, lấy mất"
      }
    ],
    "explanation": "まく (rải, rắc; tưới/rảy (nước)), 光景 (cảnh tượng trước mắt), 蒸発 (bay hơi), 奪う (cướp, lấy mất)"
  },
  {
    "id": "ma_1622",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "近年",
        "right": "những năm gần đây"
      },
      {
        "id": "p2",
        "left": "作戦",
        "right": "kế hoạch hành động, chiến thuật"
      },
      {
        "id": "p3",
        "left": "開催",
        "right": "tổ chức (sự kiện)"
      },
      {
        "id": "p4",
        "left": "水道水",
        "right": "nước máy"
      }
    ],
    "explanation": "近年 (những năm gần đây), 作戦 (kế hoạch hành động, chiến thuật), 開催 (tổ chức (sự kiện)), 水道水 (nước máy)"
  },
  {
    "id": "ma_1623",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "残り湯",
        "right": "nước tắm còn lại trong bồn"
      },
      {
        "id": "p2",
        "left": "雨水",
        "right": "nước mưa"
      },
      {
        "id": "p3",
        "left": "平均",
        "right": "bình quân, tính trung bình"
      },
      {
        "id": "p4",
        "left": "降水量",
        "right": "lượng giáng thủy (mưa, tuyết… quy đổi ra nước)"
      }
    ],
    "explanation": "残り湯 (nước tắm còn lại trong bồn), 雨水 (nước mưa), 平均 (bình quân, tính trung bình), 降水量 (lượng giáng thủy (mưa, tuyết… quy đổi ra nước))"
  },
  {
    "id": "ma_1624",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "気候",
        "right": "khí hậu"
      },
      {
        "id": "p2",
        "left": "コーナー",
        "right": "góc, khu vực dành cho một mục đích"
      },
      {
        "id": "p3",
        "left": "南北",
        "right": "nam và bắc; chiều bắc–nam"
      },
      {
        "id": "p4",
        "left": "島",
        "right": "đảo"
      }
    ],
    "explanation": "気候 (khí hậu), コーナー (góc, khu vực dành cho một mục đích), 南北 (nam và bắc; chiều bắc–nam), 島 (đảo)"
  },
  {
    "id": "ma_1625",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "山林",
        "right": "rừng núi; đất rừng"
      },
      {
        "id": "p2",
        "left": "～分の～",
        "right": "cách đọc phân số: mẫu số trước, tử số sau"
      },
      {
        "id": "p3",
        "left": "地形",
        "right": "địa hình"
      },
      {
        "id": "p4",
        "left": "温帯",
        "right": "vùng ôn đới"
      }
    ],
    "explanation": "山林 (rừng núi; đất rừng), ～分の～ (cách đọc phân số: mẫu số trước, tử số sau), 地形 (địa hình), 温帯 (vùng ôn đới)"
  },
  {
    "id": "ma_1626",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "位置",
        "right": "nằm ở, tọa lạc"
      },
      {
        "id": "p2",
        "left": "蒸し暑い",
        "right": "oi bức, nóng và ẩm"
      },
      {
        "id": "p3",
        "left": "～側",
        "right": "phía, bên…"
      },
      {
        "id": "p4",
        "left": "ペンション",
        "right": "nhà nghỉ nhỏ kiểu phương Tây, thường do gia đình quản lý"
      }
    ],
    "explanation": "位置 (nằm ở, tọa lạc), 蒸し暑い (oi bức, nóng và ẩm), ～側 (phía, bên…), ペンション (nhà nghỉ nhỏ kiểu phương Tây, thường do gia đình quản lý)"
  },
  {
    "id": "ma_1627",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "割合",
        "right": "khá, tương đối"
      },
      {
        "id": "p2",
        "left": "例年",
        "right": "mọi năm; năm bình thường làm mốc so sánh"
      },
      {
        "id": "p3",
        "left": "連なる",
        "right": "nối tiếp, trải thành dãy"
      },
      {
        "id": "p4",
        "left": "恵まれる",
        "right": "được hưởng điều kiện tốt, may mắn có"
      }
    ],
    "explanation": "割合 (khá, tương đối), 例年 (mọi năm; năm bình thường làm mốc so sánh), 連なる (nối tiếp, trải thành dãy), 恵まれる (được hưởng điều kiện tốt, may mắn có)"
  },
  {
    "id": "ma_1628",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "展望台",
        "right": "đài quan sát, điểm ngắm toàn cảnh"
      },
      {
        "id": "p2",
        "left": "美しい",
        "right": "đẹp, đẹp đẽ"
      },
      {
        "id": "p3",
        "left": "平野",
        "right": "đồng bằng"
      },
      {
        "id": "p4",
        "left": "庭",
        "right": "vườn, sân vườn"
      }
    ],
    "explanation": "展望台 (đài quan sát, điểm ngắm toàn cảnh), 美しい (đẹp, đẹp đẽ), 平野 (đồng bằng), 庭 (vườn, sân vườn)"
  },
  {
    "id": "ma_1629",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "石垣",
        "right": "tường xây bằng đá"
      },
      {
        "id": "p2",
        "left": "名園",
        "right": "khu vườn nổi tiếng, đẹp"
      },
      {
        "id": "p3",
        "left": "音声",
        "right": "giọng nói, âm thanh lời nói"
      },
      {
        "id": "p4",
        "left": "瓦",
        "right": "ngói"
      }
    ],
    "explanation": "石垣 (tường xây bằng đá), 名園 (khu vườn nổi tiếng, đẹp), 音声 (giọng nói, âm thanh lời nói), 瓦 (ngói)"
  },
  {
    "id": "ma_1630",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "軒",
        "right": "phần mái chìa, mái hiên"
      },
      {
        "id": "p2",
        "left": "塀",
        "right": "tường rào"
      },
      {
        "id": "p3",
        "left": "石",
        "right": "đá, hòn đá"
      },
      {
        "id": "p4",
        "left": "ふるさと",
        "right": "quê hương"
      }
    ],
    "explanation": "軒 (phần mái chìa, mái hiên), 塀 (tường rào), 石 (đá, hòn đá), ふるさと (quê hương)"
  },
  {
    "id": "ma_1631",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "合わせる",
        "right": "điều chỉnh cho phù hợp; ghép, kết hợp"
      },
      {
        "id": "p2",
        "left": "日差し",
        "right": "ánh nắng chiếu xuống"
      },
      {
        "id": "p3",
        "left": "しっくい",
        "right": "vữa vôi dùng trát tường"
      },
      {
        "id": "p4",
        "left": "セメント",
        "right": "xi măng"
      }
    ],
    "explanation": "合わせる (điều chỉnh cho phù hợp; ghép, kết hợp), 日差し (ánh nắng chiếu xuống), しっくい (vữa vôi dùng trát tường), セメント (xi măng)"
  },
  {
    "id": "ma_1632",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "固める",
        "right": "làm cứng, làm đông; củng cố"
      },
      {
        "id": "p2",
        "left": "鉄筋",
        "right": "cốt thép"
      },
      {
        "id": "p3",
        "left": "コンクリート",
        "right": "bê tông"
      },
      {
        "id": "p4",
        "left": "気象",
        "right": "khí tượng, hiện tượng thời tiết"
      }
    ],
    "explanation": "固める (làm cứng, làm đông; củng cố), 鉄筋 (cốt thép), コンクリート (bê tông), 気象 (khí tượng, hiện tượng thời tiết)"
  },
  {
    "id": "ma_1633",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "小論文",
        "right": "bài luận ngắn"
      },
      {
        "id": "p2",
        "left": "畳",
        "right": "chiếu tatami"
      },
      {
        "id": "p3",
        "left": "フローリング",
        "right": "sàn gỗ, sàn lát ván"
      },
      {
        "id": "p4",
        "left": "現金",
        "right": "tiền mặt"
      }
    ],
    "explanation": "小論文 (bài luận ngắn), 畳 (chiếu tatami), フローリング (sàn gỗ, sàn lát ván), 現金 (tiền mặt)"
  },
  {
    "id": "ma_1634",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "電子マネー",
        "right": "tiền điện tử dùng thanh toán"
      },
      {
        "id": "p2",
        "left": "アドバイス",
        "right": "khuyên, đưa ra lời khuyên"
      },
      {
        "id": "p3",
        "left": "体調",
        "right": "tình trạng sức khỏe"
      },
      {
        "id": "p4",
        "left": "なんだか",
        "right": "không hiểu sao, có cảm giác…"
      }
    ],
    "explanation": "電子マネー (tiền điện tử dùng thanh toán), アドバイス (khuyên, đưa ra lời khuyên), 体調 (tình trạng sức khỏe), なんだか (không hiểu sao, có cảm giác…)"
  },
  {
    "id": "ma_1635",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "和菓子",
        "right": "bánh kẹo truyền thống Nhật Bản"
      },
      {
        "id": "p2",
        "left": "港",
        "right": "cảng, bến cảng"
      },
      {
        "id": "p3",
        "left": "栄える",
        "right": "phát triển thịnh vượng"
      },
      {
        "id": "p4",
        "left": "現在",
        "right": "hiện tại, hiện nay"
      }
    ],
    "explanation": "和菓子 (bánh kẹo truyền thống Nhật Bản), 港 (cảng, bến cảng), 栄える (phát triển thịnh vượng), 現在 (hiện tại, hiện nay)"
  },
  {
    "id": "ma_1636",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "人口",
        "right": "dân số"
      },
      {
        "id": "p2",
        "left": "都市",
        "right": "thành phố, đô thị"
      },
      {
        "id": "p3",
        "left": "県庁",
        "right": "cơ quan/trụ sở chính quyền cấp tỉnh của Nhật"
      },
      {
        "id": "p4",
        "left": "～周辺",
        "right": "khu vực xung quanh…"
      }
    ],
    "explanation": "人口 (dân số), 都市 (thành phố, đô thị), 県庁 (cơ quan/trụ sở chính quyền cấp tỉnh của Nhật), ～周辺 (khu vực xung quanh…)"
  },
  {
    "id": "ma_1637",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "地区",
        "right": "khu vực, địa bàn"
      },
      {
        "id": "p2",
        "left": "商業",
        "right": "thương mại"
      },
      {
        "id": "p3",
        "left": "砂浜",
        "right": "bãi biển cát"
      },
      {
        "id": "p4",
        "left": "～年代",
        "right": "những năm…; giai đoạn…"
      }
    ],
    "explanation": "地区 (khu vực, địa bàn), 商業 (thương mại), 砂浜 (bãi biển cát), ～年代 (những năm…; giai đoạn…)"
  },
  {
    "id": "ma_1638",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "～街",
        "right": "khu phố…"
      },
      {
        "id": "p2",
        "left": "タワー",
        "right": "tháp"
      },
      {
        "id": "p3",
        "left": "今では",
        "right": "giờ đây, hiện nay (khác với trước)"
      },
      {
        "id": "p4",
        "left": "訪れる",
        "right": "ghé thăm; (mùa, thời điểm) đến"
      }
    ],
    "explanation": "～街 (khu phố…), タワー (tháp), 今では (giờ đây, hiện nay (khác với trước)), 訪れる (ghé thăm; (mùa, thời điểm) đến)"
  },
  {
    "id": "ma_1639",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "延びる",
        "right": "kéo dài, mở rộng; bị dời lại"
      },
      {
        "id": "p2",
        "left": "名付ける",
        "right": "đặt tên"
      },
      {
        "id": "p3",
        "left": "村",
        "right": "làng"
      },
      {
        "id": "p4",
        "left": "埋め立てる",
        "right": "san lấp (biển, đầm…) để tạo đất"
      }
    ],
    "explanation": "延びる (kéo dài, mở rộng; bị dời lại), 名付ける (đặt tên), 村 (làng), 埋め立てる (san lấp (biển, đầm…) để tạo đất)"
  },
  {
    "id": "ma_1640",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "浜",
        "right": "bờ biển, bãi biển"
      },
      {
        "id": "p2",
        "left": "地名",
        "right": "tên địa điểm, địa danh"
      },
      {
        "id": "p3",
        "left": "風景",
        "right": "phong cảnh"
      },
      {
        "id": "p4",
        "left": "まとまる",
        "right": "được tập hợp; đi đến thống nhất; hoàn chỉnh"
      }
    ],
    "explanation": "浜 (bờ biển, bãi biển), 地名 (tên địa điểm, địa danh), 風景 (phong cảnh), まとまる (được tập hợp; đi đến thống nhất; hoàn chỉnh)"
  },
  {
    "id": "ma_1641",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "地方",
        "right": "vùng, miền; địa phương ngoài đô thị lớn"
      },
      {
        "id": "p2",
        "left": "名産品",
        "right": "sản phẩm nổi tiếng của địa phương"
      },
      {
        "id": "p3",
        "left": "にぎわう",
        "right": "đông đúc, nhộn nhịp"
      },
      {
        "id": "p4",
        "left": "一生",
        "right": "cả đời, suốt đời"
      }
    ],
    "explanation": "地方 (vùng, miền; địa phương ngoài đô thị lớn), 名産品 (sản phẩm nổi tiếng của địa phương), にぎわう (đông đúc, nhộn nhịp), 一生 (cả đời, suốt đời)"
  },
  {
    "id": "ma_1642",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "頑固",
        "right": "bướng bỉnh, cứng đầu"
      },
      {
        "id": "p2",
        "left": "職人",
        "right": "thợ thủ công có tay nghề"
      },
      {
        "id": "p3",
        "left": "海洋",
        "right": "biển và đại dương"
      },
      {
        "id": "p4",
        "left": "生物",
        "right": "sinh vật"
      }
    ],
    "explanation": "頑固 (bướng bỉnh, cứng đầu), 職人 (thợ thủ công có tay nghề), 海洋 (biển và đại dương), 生物 (sinh vật)"
  },
  {
    "id": "ma_1643",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "化石",
        "right": "hóa thạch"
      },
      {
        "id": "p2",
        "left": "辺り",
        "right": "khu vực xung quanh, gần…"
      },
      {
        "id": "p3",
        "left": "産業",
        "right": "ngành sản xuất, ngành kinh tế"
      },
      {
        "id": "p4",
        "left": "盛ん",
        "right": "phát triển mạnh, sôi nổi, thịnh hành"
      }
    ],
    "explanation": "化石 (hóa thạch), 辺り (khu vực xung quanh, gần…), 産業 (ngành sản xuất, ngành kinh tế), 盛ん (phát triển mạnh, sôi nổi, thịnh hành)"
  },
  {
    "id": "ma_1644",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "企業",
        "right": "doanh nghiệp, công ty"
      },
      {
        "id": "p2",
        "left": "発展",
        "right": "phát triển"
      },
      {
        "id": "p3",
        "left": "特産物",
        "right": "đặc sản địa phương"
      },
      {
        "id": "p4",
        "left": "空っ風",
        "right": "gió lạnh, khô và mạnh, thường vào mùa đông"
      }
    ],
    "explanation": "企業 (doanh nghiệp, công ty), 発展 (phát triển), 特産物 (đặc sản địa phương), 空っ風 (gió lạnh, khô và mạnh, thường vào mùa đông)"
  },
  {
    "id": "ma_1645",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "吹く",
        "right": "thổi (gió; nhạc cụ hơi)"
      },
      {
        "id": "p2",
        "left": "湿る",
        "right": "ẩm, bị ẩm"
      },
      {
        "id": "p3",
        "left": "越える",
        "right": "vượt qua ranh giới, núi; trải qua thời kỳ"
      },
      {
        "id": "p4",
        "left": "風力",
        "right": "sức gió, năng lượng gió"
      }
    ],
    "explanation": "吹く (thổi (gió; nhạc cụ hơi)), 湿る (ẩm, bị ẩm), 越える (vượt qua ranh giới, núi; trải qua thời kỳ), 風力 (sức gió, năng lượng gió)"
  },
  {
    "id": "ma_1646",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "凧揚げ",
        "right": "việc thả diều"
      },
      {
        "id": "p2",
        "left": "揚げる",
        "right": "thả/đưa lên cao; chiên ngập dầu"
      },
      {
        "id": "p3",
        "left": "思い浮かべる",
        "right": "hình dung, gợi nhớ trong đầu"
      },
      {
        "id": "p4",
        "left": "同年代",
        "right": "cùng thế hệ, cùng khoảng tuổi"
      }
    ],
    "explanation": "凧揚げ (việc thả diều), 揚げる (thả/đưa lên cao; chiên ngập dầu), 思い浮かべる (hình dung, gợi nhớ trong đầu), 同年代 (cùng thế hệ, cùng khoảng tuổi)"
  },
  {
    "id": "ma_1647",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "すると",
        "right": "thế rồi, khi đó thì; nếu vậy thì"
      },
      {
        "id": "p2",
        "left": "返る",
        "right": "trở lại, được trả lại"
      },
      {
        "id": "p3",
        "left": "タメ口",
        "right": "cách nói suồng sã, ngang hàng, không dùng kính ngữ"
      },
      {
        "id": "p4",
        "left": "違和感",
        "right": "cảm giác không tự nhiên, không phù hợp"
      }
    ],
    "explanation": "すると (thế rồi, khi đó thì; nếu vậy thì), 返る (trở lại, được trả lại), タメ口 (cách nói suồng sã, ngang hàng, không dùng kính ngữ), 違和感 (cảm giác không tự nhiên, không phù hợp)"
  },
  {
    "id": "ma_1648",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "共通",
        "right": "có điểm chung"
      },
      {
        "id": "p2",
        "left": "友人",
        "right": "bạn bè, người bạn"
      },
      {
        "id": "p3",
        "left": "対等",
        "right": "bình đẳng, ngang hàng"
      },
      {
        "id": "p4",
        "left": "回答",
        "right": "trả lời (câu hỏi, khảo sát)"
      }
    ],
    "explanation": "共通 (có điểm chung), 友人 (bạn bè, người bạn), 対等 (bình đẳng, ngang hàng), 回答 (trả lời (câu hỏi, khảo sát))"
  },
  {
    "id": "ma_1649",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "初対面",
        "right": "lần đầu gặp mặt"
      },
      {
        "id": "p2",
        "left": "タイミング",
        "right": "thời điểm thích hợp, lúc thực hiện"
      },
      {
        "id": "p3",
        "left": "話題",
        "right": "chủ đề trò chuyện; đề tài được chú ý"
      },
      {
        "id": "p4",
        "left": "分野",
        "right": "lĩnh vực"
      }
    ],
    "explanation": "初対面 (lần đầu gặp mặt), タイミング (thời điểm thích hợp, lúc thực hiện), 話題 (chủ đề trò chuyện; đề tài được chú ý), 分野 (lĩnh vực)"
  },
  {
    "id": "ma_1650",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "より～",
        "right": "hơn, càng… hơn"
      },
      {
        "id": "p2",
        "left": "判断",
        "right": "phán đoán, quyết định dựa trên thông tin"
      },
      {
        "id": "p3",
        "left": "思い切って",
        "right": "mạnh dạn, lấy hết can đảm, quyết tâm làm"
      },
      {
        "id": "p4",
        "left": "体験談",
        "right": "câu chuyện về trải nghiệm thực tế"
      }
    ],
    "explanation": "より～ (hơn, càng… hơn), 判断 (phán đoán, quyết định dựa trên thông tin), 思い切って (mạnh dạn, lấy hết can đảm, quyết tâm làm), 体験談 (câu chuyện về trải nghiệm thực tế)"
  },
  {
    "id": "ma_1651",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "海岸",
        "right": "bờ biển"
      },
      {
        "id": "p2",
        "left": "年代",
        "right": "thời kỳ; nhóm tuổi, thế hệ"
      },
      {
        "id": "p3",
        "left": "～分け",
        "right": "sự chia, phân loại theo…"
      },
      {
        "id": "p4",
        "left": "年配",
        "right": "người có tuổi, lớn tuổi"
      }
    ],
    "explanation": "海岸 (bờ biển), 年代 (thời kỳ; nhóm tuổi, thế hệ), ～分け (sự chia, phân loại theo…), 年配 (người có tuổi, lớn tuổi)"
  },
  {
    "id": "ma_1652",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "要る",
        "right": "cần"
      },
      {
        "id": "p2",
        "left": "～以外",
        "right": "ngoài…, trừ…"
      },
      {
        "id": "p3",
        "left": "景気",
        "right": "tình hình kinh tế, tình hình làm ăn"
      },
      {
        "id": "p4",
        "left": "都心",
        "right": "trung tâm đô thị lớn"
      }
    ],
    "explanation": "要る (cần), ～以外 (ngoài…, trừ…), 景気 (tình hình kinh tế, tình hình làm ăn), 都心 (trung tâm đô thị lớn)"
  },
  {
    "id": "ma_1653",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "ドレス",
        "right": "váy đầm, lễ phục nữ"
      },
      {
        "id": "p2",
        "left": "努力",
        "right": "nỗ lực"
      },
      {
        "id": "p3",
        "left": "当然",
        "right": "đương nhiên, tất nhiên"
      },
      {
        "id": "p4",
        "left": "ブログ",
        "right": "blog, nhật ký trên mạng"
      }
    ],
    "explanation": "ドレス (váy đầm, lễ phục nữ), 努力 (nỗ lực), 当然 (đương nhiên, tất nhiên), ブログ (blog, nhật ký trên mạng)"
  },
  {
    "id": "ma_1654",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "フットサル",
        "right": "futsal, bóng đá sân nhỏ năm người"
      },
      {
        "id": "p2",
        "left": "ネット",
        "right": "mạng Internet (viết tắt của インターネット)"
      },
      {
        "id": "p3",
        "left": "メンバー",
        "right": "thành viên"
      },
      {
        "id": "p4",
        "left": "数",
        "right": "số lượng"
      }
    ],
    "explanation": "フットサル (futsal, bóng đá sân nhỏ năm người), ネット (mạng Internet (viết tắt của インターネット)), メンバー (thành viên), 数 (số lượng)"
  },
  {
    "id": "ma_1655",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "～代",
        "right": "nhóm tuổi…; khoảng số…"
      },
      {
        "id": "p2",
        "left": "シュート",
        "right": "sút/ném để ghi bàn"
      },
      {
        "id": "p3",
        "left": "お互い",
        "right": "nhau, cả hai bên"
      },
      {
        "id": "p4",
        "left": "チームプレー",
        "right": "lối chơi phối hợp đồng đội"
      }
    ],
    "explanation": "～代 (nhóm tuổi…; khoảng số…), シュート (sút/ném để ghi bàn), お互い (nhau, cả hai bên), チームプレー (lối chơi phối hợp đồng đội)"
  },
  {
    "id": "ma_1656",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "気がする",
        "right": "cảm thấy, có cảm giác rằng…"
      },
      {
        "id": "p2",
        "left": "掛け声",
        "right": "tiếng hô, tiếng gọi để cổ vũ/phối hợp"
      },
      {
        "id": "p3",
        "left": "瞬間",
        "right": "khoảnh khắc"
      },
      {
        "id": "p4",
        "left": "ハイタッチ",
        "right": "đập tay chúc mừng"
      }
    ],
    "explanation": "気がする (cảm thấy, có cảm giác rằng…), 掛け声 (tiếng hô, tiếng gọi để cổ vũ/phối hợp), 瞬間 (khoảnh khắc), ハイタッチ (đập tay chúc mừng)"
  },
  {
    "id": "ma_1657",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "意外",
        "right": "bất ngờ, ngoài dự đoán"
      },
      {
        "id": "p2",
        "left": "出会い",
        "right": "cuộc gặp gỡ, cơ duyên gặp"
      },
      {
        "id": "p3",
        "left": "出店",
        "right": "mở cửa hàng, đặt gian hàng"
      },
      {
        "id": "p4",
        "left": "中古品",
        "right": "đồ đã qua sử dụng"
      }
    ],
    "explanation": "意外 (bất ngờ, ngoài dự đoán), 出会い (cuộc gặp gỡ, cơ duyên gặp), 出店 (mở cửa hàng, đặt gian hàng), 中古品 (đồ đã qua sử dụng)"
  },
  {
    "id": "ma_1658",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "介助犬",
        "right": "chó hỗ trợ người khuyết tật vận động"
      },
      {
        "id": "p2",
        "left": "育成",
        "right": "nuôi dưỡng, đào tạo"
      },
      {
        "id": "p3",
        "left": "寄付",
        "right": "quyên góp, ủng hộ"
      },
      {
        "id": "p4",
        "left": "～金",
        "right": "khoản tiền…"
      }
    ],
    "explanation": "介助犬 (chó hỗ trợ người khuyết tật vận động), 育成 (nuôi dưỡng, đào tạo), 寄付 (quyên góp, ủng hộ), ～金 (khoản tiền…)"
  },
  {
    "id": "ma_1659",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "受ける（誘いを受ける）",
        "right": "nhận (lời mời, lời đề nghị)"
      },
      {
        "id": "p2",
        "left": "売り上げ",
        "right": "doanh thu, số tiền bán hàng thu được"
      },
      {
        "id": "p3",
        "left": "一部",
        "right": "một phần"
      },
      {
        "id": "p4",
        "left": "今ごろ",
        "right": "tầm giờ này; giờ này rồi"
      }
    ],
    "explanation": "受ける（誘いを受ける） (nhận (lời mời, lời đề nghị)), 売り上げ (doanh thu, số tiền bán hàng thu được), 一部 (một phần), 今ごろ (tầm giờ này; giờ này rồi)"
  },
  {
    "id": "ma_1660",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "点",
        "right": "điểm; khía cạnh, mặt"
      },
      {
        "id": "p2",
        "left": "たまたま",
        "right": "tình cờ, ngẫu nhiên"
      },
      {
        "id": "p3",
        "left": "団体",
        "right": "đoàn thể, tổ chức, nhóm"
      },
      {
        "id": "p4",
        "left": "学園祭",
        "right": "lễ hội trường"
      }
    ],
    "explanation": "点 (điểm; khía cạnh, mặt), たまたま (tình cờ, ngẫu nhiên), 団体 (đoàn thể, tổ chức, nhóm), 学園祭 (lễ hội trường)"
  },
  {
    "id": "ma_1661",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "全て",
        "right": "tất cả, toàn bộ"
      },
      {
        "id": "p2",
        "left": "苦しむ",
        "right": "đau khổ, chịu khổ, chật vật"
      },
      {
        "id": "p3",
        "left": "世代",
        "right": "thế hệ"
      },
      {
        "id": "p4",
        "left": "ミーティング",
        "right": "họp"
      }
    ],
    "explanation": "全て (tất cả, toàn bộ), 苦しむ (đau khổ, chịu khổ, chật vật), 世代 (thế hệ), ミーティング (họp)"
  },
  {
    "id": "ma_1662",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "定年",
        "right": "tuổi nghỉ hưu theo quy định"
      },
      {
        "id": "p2",
        "left": "退職",
        "right": "nghỉ việc, về hưu tùy ngữ cảnh"
      },
      {
        "id": "p3",
        "left": "～とも",
        "right": "cả… đều"
      },
      {
        "id": "p4",
        "left": "ただ",
        "right": "chỉ; tuy nhiên, có điều"
      }
    ],
    "explanation": "定年 (tuổi nghỉ hưu theo quy định), 退職 (nghỉ việc, về hưu tùy ngữ cảnh), ～とも (cả… đều), ただ (chỉ; tuy nhiên, có điều)"
  },
  {
    "id": "ma_1663",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "かみさん",
        "right": "vợ, bà xã (khẩu ngữ)"
      },
      {
        "id": "p2",
        "left": "うらやましい",
        "right": "thấy người khác có điều tốt mà mình cũng muốn, ghen tị"
      },
      {
        "id": "p3",
        "left": "人見知り",
        "right": "rụt rè trước người lạ"
      },
      {
        "id": "p4",
        "left": "～同士",
        "right": "những người cùng… với nhau"
      }
    ],
    "explanation": "かみさん (vợ, bà xã (khẩu ngữ)), うらやましい (thấy người khác có điều tốt mà mình cũng muốn, ghen tị), 人見知り (rụt rè trước người lạ), ～同士 (những người cùng… với nhau)"
  },
  {
    "id": "ma_1664",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "な（頑張ろうな）",
        "right": "nhé, nhỉ (trợ từ cuối câu thân mật)"
      },
      {
        "id": "p2",
        "left": "素晴らしい",
        "right": "tuyệt vời"
      },
      {
        "id": "p3",
        "left": "いつか",
        "right": "một ngày nào đó, lúc nào đó"
      },
      {
        "id": "p4",
        "left": "月日",
        "right": "ngày tháng, thời gian trôi qua"
      }
    ],
    "explanation": "な（頑張ろうな） (nhé, nhỉ (trợ từ cuối câu thân mật)), 素晴らしい (tuyệt vời), いつか (một ngày nào đó, lúc nào đó), 月日 (ngày tháng, thời gian trôi qua)"
  },
  {
    "id": "ma_1665",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "夢中",
        "right": "say mê, mải mê"
      },
      {
        "id": "p2",
        "left": "迎える",
        "right": "đón người; đón một thời điểm, giai đoạn"
      },
      {
        "id": "p3",
        "left": "感動",
        "right": "xúc động, cảm động"
      },
      {
        "id": "p4",
        "left": "若々しい",
        "right": "trẻ trung, đầy sức sống"
      }
    ],
    "explanation": "夢中 (say mê, mải mê), 迎える (đón người; đón một thời điểm, giai đoạn), 感動 (xúc động, cảm động), 若々しい (trẻ trung, đầy sức sống)"
  },
  {
    "id": "ma_1666",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "持ち上げる",
        "right": "nhấc lên, nâng lên"
      },
      {
        "id": "p2",
        "left": "トラック",
        "right": "xe tải"
      },
      {
        "id": "p3",
        "left": "孫",
        "right": "cháu (của ông bà)"
      },
      {
        "id": "p4",
        "left": "気象庁",
        "right": "Cơ quan Khí tượng Nhật Bản"
      }
    ],
    "explanation": "持ち上げる (nhấc lên, nâng lên), トラック (xe tải), 孫 (cháu (của ông bà)), 気象庁 (Cơ quan Khí tượng Nhật Bản)"
  },
  {
    "id": "ma_1667",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "暖冬",
        "right": "mùa đông ấm hơn bình thường"
      },
      {
        "id": "p2",
        "left": "期待",
        "right": "kỳ vọng, mong đợi"
      },
      {
        "id": "p3",
        "left": "親孝行",
        "right": "hiếu thảo, báo hiếu"
      },
      {
        "id": "p4",
        "left": "タイトル",
        "right": "tiêu đề, tên tác phẩm"
      }
    ],
    "explanation": "暖冬 (mùa đông ấm hơn bình thường), 期待 (kỳ vọng, mong đợi), 親孝行 (hiếu thảo, báo hiếu), タイトル (tiêu đề, tên tác phẩm)"
  },
  {
    "id": "ma_1668",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "立派",
        "right": "đáng khâm phục, xuất sắc; to đẹp, bề thế"
      },
      {
        "id": "p2",
        "left": "包装",
        "right": "gói, bao bọc"
      },
      {
        "id": "p3",
        "left": "仕方",
        "right": "cách làm; cách giải quyết"
      },
      {
        "id": "p4",
        "left": "任せる",
        "right": "giao phó, để ai lo"
      }
    ],
    "explanation": "立派 (đáng khâm phục, xuất sắc; to đẹp, bề thế), 包装 (gói, bao bọc), 仕方 (cách làm; cách giải quyết), 任せる (giao phó, để ai lo)"
  },
  {
    "id": "ma_1669",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "箱",
        "right": "hộp, thùng"
      },
      {
        "id": "p2",
        "left": "包装紙",
        "right": "giấy gói hàng/quà"
      },
      {
        "id": "p3",
        "left": "リボン",
        "right": "ruy băng, dây nơ"
      },
      {
        "id": "p4",
        "left": "かける（リボンをかける）",
        "right": "buộc, choàng, gắn (ruy băng lên vật)"
      }
    ],
    "explanation": "箱 (hộp, thùng), 包装紙 (giấy gói hàng/quà), リボン (ruy băng, dây nơ), かける（リボンをかける） (buộc, choàng, gắn (ruy băng lên vật))"
  },
  {
    "id": "ma_1670",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "ラッピング",
        "right": "gói quà"
      },
      {
        "id": "p2",
        "left": "グッズ",
        "right": "các món đồ, sản phẩm theo chủ đề"
      },
      {
        "id": "p3",
        "left": "貴族",
        "right": "quý tộc"
      },
      {
        "id": "p4",
        "left": "さらす",
        "right": "để lộ, phơi ra; ngâm/phơi để tẩy trắng"
      }
    ],
    "explanation": "ラッピング (gói quà), グッズ (các món đồ, sản phẩm theo chủ đề), 貴族 (quý tộc), さらす (để lộ, phơi ra; ngâm/phơi để tẩy trắng)"
  },
  {
    "id": "ma_1671",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "当時",
        "right": "lúc đó, thời ấy"
      },
      {
        "id": "p2",
        "left": "高価",
        "right": "đắt tiền, có giá trị cao"
      },
      {
        "id": "p3",
        "left": "表れ",
        "right": "biểu hiện, dấu hiệu thể hiện"
      },
      {
        "id": "p4",
        "left": "破る",
        "right": "xé, làm rách; phá vỡ/không giữ"
      }
    ],
    "explanation": "当時 (lúc đó, thời ấy), 高価 (đắt tiền, có giá trị cao), 表れ (biểu hiện, dấu hiệu thể hiện), 破る (xé, làm rách; phá vỡ/không giữ)"
  },
  {
    "id": "ma_1672",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "ブックカバー",
        "right": "bìa bọc sách"
      },
      {
        "id": "p2",
        "left": "あるいは",
        "right": "hoặc, hoặc là"
      },
      {
        "id": "p3",
        "left": "含める",
        "right": "tính cả, đưa vào, bao gồm vào"
      },
      {
        "id": "p4",
        "left": "ぐっと",
        "right": "hơn hẳn; mạnh một cái, dồn sức"
      }
    ],
    "explanation": "ブックカバー (bìa bọc sách), あるいは (hoặc, hoặc là), 含める (tính cả, đưa vào, bao gồm vào), ぐっと (hơn hẳn; mạnh một cái, dồn sức)"
  },
  {
    "id": "ma_1673",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "許可",
        "right": "cho phép"
      },
      {
        "id": "p2",
        "left": "～末",
        "right": "cuối (tháng, năm…)"
      },
      {
        "id": "p3",
        "left": "全く",
        "right": "hoàn toàn; hoàn toàn không (với phủ định)"
      },
      {
        "id": "p4",
        "left": "同僚",
        "right": "đồng nghiệp"
      }
    ],
    "explanation": "許可 (cho phép), ～末 (cuối (tháng, năm…)), 全く (hoàn toàn; hoàn toàn không (với phủ định)), 同僚 (đồng nghiệp)"
  },
  {
    "id": "ma_1674",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "かける（迷惑をかける）",
        "right": "gây ra, làm cho (ai phiền)"
      },
      {
        "id": "p2",
        "left": "回収",
        "right": "thu gom, thu hồi"
      },
      {
        "id": "p3",
        "left": "置き場",
        "right": "chỗ để, nơi đặt đồ"
      },
      {
        "id": "p4",
        "left": "色違い",
        "right": "khác màu, phiên bản màu khác"
      }
    ],
    "explanation": "かける（迷惑をかける） (gây ra, làm cho (ai phiền)), 回収 (thu gom, thu hồi), 置き場 (chỗ để, nơi đặt đồ), 色違い (khác màu, phiên bản màu khác)"
  },
  {
    "id": "ma_1675",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "申し訳ありません",
        "right": "thành thật xin lỗi (lịch sự)"
      },
      {
        "id": "p2",
        "left": "朝礼",
        "right": "buổi tập trung/họp đầu giờ sáng"
      },
      {
        "id": "p3",
        "left": "オープンキャンパス",
        "right": "ngày hội mở cửa trường cho người muốn tìm hiểu/tuyển sinh"
      },
      {
        "id": "p4",
        "left": "一時帰国",
        "right": "tạm về nước"
      }
    ],
    "explanation": "申し訳ありません (thành thật xin lỗi (lịch sự)), 朝礼 (buổi tập trung/họp đầu giờ sáng), オープンキャンパス (ngày hội mở cửa trường cho người muốn tìm hiểu/tuyển sinh), 一時帰国 (tạm về nước)"
  },
  {
    "id": "ma_1676",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "帰国",
        "right": "về nước mình"
      },
      {
        "id": "p2",
        "left": "メッセージ",
        "right": "tin nhắn, lời nhắn, thông điệp"
      },
      {
        "id": "p3",
        "left": "一筆箋",
        "right": "giấy nhỏ dài để viết vài dòng nhắn gửi"
      },
      {
        "id": "p4",
        "left": "伝わる",
        "right": "được truyền đến, được hiểu"
      }
    ],
    "explanation": "帰国 (về nước mình), メッセージ (tin nhắn, lời nhắn, thông điệp), 一筆箋 (giấy nhỏ dài để viết vài dòng nhắn gửi), 伝わる (được truyền đến, được hiểu)"
  },
  {
    "id": "ma_1677",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "縦",
        "right": "chiều dọc"
      },
      {
        "id": "p2",
        "left": "～センチ",
        "right": "… xăng-ti-mét (cm)"
      },
      {
        "id": "p3",
        "left": "細長い",
        "right": "thon dài, dài và hẹp"
      },
      {
        "id": "p4",
        "left": "便箋",
        "right": "giấy viết thư"
      }
    ],
    "explanation": "縦 (chiều dọc), ～センチ (… xăng-ti-mét (cm)), 細長い (thon dài, dài và hẹp), 便箋 (giấy viết thư)"
  },
  {
    "id": "ma_1678",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "堅い",
        "right": "cứng, chắc; cứng nhắc, trang trọng quá"
      },
      {
        "id": "p2",
        "left": "本題",
        "right": "vấn đề/chủ đề chính"
      },
      {
        "id": "p3",
        "left": "手書き",
        "right": "việc viết tay, chữ viết tay"
      },
      {
        "id": "p4",
        "left": "贈り物",
        "right": "quà tặng"
      }
    ],
    "explanation": "堅い (cứng, chắc; cứng nhắc, trang trọng quá), 本題 (vấn đề/chủ đề chính), 手書き (việc viết tay, chữ viết tay), 贈り物 (quà tặng)"
  },
  {
    "id": "ma_1679",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "お世話になっています",
        "right": "cảm ơn vì luôn giúp đỡ/chiếu cố (lời chào trong quan hệ thường xuyên)"
      },
      {
        "id": "p2",
        "left": "気が利く",
        "right": "tinh ý, chu đáo, biết ý"
      },
      {
        "id": "p3",
        "left": "機械",
        "right": "máy móc"
      },
      {
        "id": "p4",
        "left": "印刷",
        "right": "in"
      }
    ],
    "explanation": "お世話になっています (cảm ơn vì luôn giúp đỡ/chiếu cố (lời chào trong quan hệ thường xuyên)), 気が利く (tinh ý, chu đáo, biết ý), 機械 (máy móc), 印刷 (in)"
  },
  {
    "id": "ma_1680",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "済ませる",
        "right": "làm xong, giải quyết xong; làm cho qua bằng…"
      },
      {
        "id": "p2",
        "left": "思い",
        "right": "tâm tư, suy nghĩ, tình cảm"
      },
      {
        "id": "p3",
        "left": "先日",
        "right": "hôm trước, ít ngày trước"
      },
      {
        "id": "p4",
        "left": "近況",
        "right": "tình hình gần đây của một người"
      }
    ],
    "explanation": "済ませる (làm xong, giải quyết xong; làm cho qua bằng…), 思い (tâm tư, suy nghĩ, tình cảm), 先日 (hôm trước, ít ngày trước), 近況 (tình hình gần đây của một người)"
  },
  {
    "id": "ma_1681",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "お久しぶりです",
        "right": "lâu rồi không gặp"
      },
      {
        "id": "p2",
        "left": "相変わらず",
        "right": "vẫn như trước, không thay đổi"
      },
      {
        "id": "p3",
        "left": "出産",
        "right": "sinh con"
      },
      {
        "id": "p4",
        "left": "ちょっとした",
        "right": "nhỏ, nho nhỏ, không lớn"
      }
    ],
    "explanation": "お久しぶりです (lâu rồi không gặp), 相変わらず (vẫn như trước, không thay đổi), 出産 (sinh con), ちょっとした (nhỏ, nho nhỏ, không lớn)"
  },
  {
    "id": "ma_1682",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "一言",
        "right": "một lời, vài lời ngắn gọn"
      },
      {
        "id": "p2",
        "left": "添える",
        "right": "thêm vào, đính kèm"
      },
      {
        "id": "p3",
        "left": "気に入る",
        "right": "thấy ưng ý, thích sau khi tiếp xúc"
      },
      {
        "id": "p4",
        "left": "愚痴",
        "right": "lời than vãn, càm ràm"
      }
    ],
    "explanation": "一言 (một lời, vài lời ngắn gọn), 添える (thêm vào, đính kèm), 気に入る (thấy ưng ý, thích sau khi tiếp xúc), 愚痴 (lời than vãn, càm ràm)"
  },
  {
    "id": "ma_1683",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "ラストオーダー",
        "right": "lượt/giờ nhận gọi món cuối cùng"
      },
      {
        "id": "p2",
        "left": "追加",
        "right": "thêm vào, gọi thêm"
      },
      {
        "id": "p3",
        "left": "生ビール",
        "right": "bia tươi"
      },
      {
        "id": "p4",
        "left": "渋滞",
        "right": "ùn tắc"
      }
    ],
    "explanation": "ラストオーダー (lượt/giờ nhận gọi món cuối cùng), 追加 (thêm vào, gọi thêm), 生ビール (bia tươi), 渋滞 (ùn tắc)"
  },
  {
    "id": "ma_1684",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "帰宅",
        "right": "về nhà"
      },
      {
        "id": "p2",
        "left": "久しぶり",
        "right": "lâu rồi mới lại…; lâu không gặp/làm"
      },
      {
        "id": "p3",
        "left": "壊す（体を壊す）",
        "right": "làm hỏng; làm tổn hại sức khỏe"
      },
      {
        "id": "p4",
        "left": "割る",
        "right": "làm vỡ; chia, chia nhỏ"
      }
    ],
    "explanation": "帰宅 (về nhà), 久しぶり (lâu rồi mới lại…; lâu không gặp/làm), 壊す（体を壊す） (làm hỏng; làm tổn hại sức khỏe), 割る (làm vỡ; chia, chia nhỏ)"
  },
  {
    "id": "ma_1685",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "サプライズパーティー",
        "right": "bữa tiệc tổ chức bất ngờ cho ai"
      },
      {
        "id": "p2",
        "left": "言葉遣い",
        "right": "cách dùng từ, cách nói năng"
      },
      {
        "id": "p3",
        "left": "間違う",
        "right": "sai, nhầm"
      },
      {
        "id": "p4",
        "left": "ショック",
        "right": "cú sốc, sự bàng hoàng"
      }
    ],
    "explanation": "サプライズパーティー (bữa tiệc tổ chức bất ngờ cho ai), 言葉遣い (cách dùng từ, cách nói năng), 間違う (sai, nhầm), ショック (cú sốc, sự bàng hoàng)"
  },
  {
    "id": "ma_1686",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "受ける（ショックを受ける）",
        "right": "chịu, nhận tác động (cú sốc)"
      },
      {
        "id": "p2",
        "left": "落ち込む",
        "right": "buồn bã, suy sụp tinh thần; giảm sút"
      },
      {
        "id": "p3",
        "left": "わざわざ",
        "right": "cất công, đặc biệt dành công sức để làm"
      },
      {
        "id": "p4",
        "left": "倒す",
        "right": "làm đổ, đánh ngã; đánh bại"
      }
    ],
    "explanation": "受ける（ショックを受ける） (chịu, nhận tác động (cú sốc)), 落ち込む (buồn bã, suy sụp tinh thần; giảm sút), わざわざ (cất công, đặc biệt dành công sức để làm), 倒す (làm đổ, đánh ngã; đánh bại)"
  },
  {
    "id": "ma_1687",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "汚す",
        "right": "làm bẩn"
      },
      {
        "id": "p2",
        "left": "本気",
        "right": "sự nghiêm túc, thật lòng"
      },
      {
        "id": "p3",
        "left": "わざと",
        "right": "cố ý, có chủ đích"
      },
      {
        "id": "p4",
        "left": "後悔",
        "right": "hối hận"
      }
    ],
    "explanation": "汚す (làm bẩn), 本気 (sự nghiêm túc, thật lòng), わざと (cố ý, có chủ đích), 後悔 (hối hận)"
  },
  {
    "id": "ma_1688",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "なんで",
        "right": "tại sao (khẩu ngữ)"
      },
      {
        "id": "p2",
        "left": "なんか",
        "right": "không hiểu sao, có vẻ; như…, chẳng hạn… (khẩu ngữ)"
      },
      {
        "id": "p3",
        "left": "変",
        "right": "lạ, kỳ lạ, bất thường"
      },
      {
        "id": "p4",
        "left": "ふもと",
        "right": "chân núi"
      }
    ],
    "explanation": "なんで (tại sao (khẩu ngữ)), なんか (không hiểu sao, có vẻ; như…, chẳng hạn… (khẩu ngữ)), 変 (lạ, kỳ lạ, bất thường), ふもと (chân núi)"
  },
  {
    "id": "ma_1689",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "～軒",
        "right": "từ đếm nhà, cửa hàng, tòa nhà nhỏ"
      },
      {
        "id": "p2",
        "left": "お参り",
        "right": "đi lễ đền/chùa"
      },
      {
        "id": "p3",
        "left": "村人",
        "right": "dân làng"
      },
      {
        "id": "p4",
        "left": "平気",
        "right": "không sao, không sợ/không bận tâm"
      }
    ],
    "explanation": "～軒 (từ đếm nhà, cửa hàng, tòa nhà nhỏ), お参り (đi lễ đền/chùa), 村人 (dân làng), 平気 (không sao, không sợ/không bận tâm)"
  },
  {
    "id": "ma_1690",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "和尚",
        "right": "nhà sư, hòa thượng"
      },
      {
        "id": "p2",
        "left": "わいわい",
        "right": "ồn ào, rôm rả (nhiều người)"
      },
      {
        "id": "p3",
        "left": "やって来る",
        "right": "đến, xuất hiện ở chỗ người nói/điểm nhìn"
      },
      {
        "id": "p4",
        "left": "口々に",
        "right": "mỗi người đều nói, người này người kia cùng nói"
      }
    ],
    "explanation": "和尚 (nhà sư, hòa thượng), わいわい (ồn ào, rôm rả (nhiều người)), やって来る (đến, xuất hiện ở chỗ người nói/điểm nhìn), 口々に (mỗi người đều nói, người này người kia cùng nói)"
  },
  {
    "id": "ma_1691",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "裸",
        "right": "trạng thái không mặc quần áo, trần truồng"
      },
      {
        "id": "p2",
        "left": "誤解",
        "right": "hiểu lầm"
      },
      {
        "id": "p3",
        "left": "文章",
        "right": "đoạn văn, bài văn, văn bản"
      },
      {
        "id": "p4",
        "left": "笑い出す",
        "right": "bắt đầu bật cười"
      }
    ],
    "explanation": "裸 (trạng thái không mặc quần áo, trần truồng), 誤解 (hiểu lầm), 文章 (đoạn văn, bài văn, văn bản), 笑い出す (bắt đầu bật cười)"
  },
  {
    "id": "ma_1692",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "訳",
        "right": "lý do, nguyên do; lẽ, kết luận"
      },
      {
        "id": "p2",
        "left": "早口言葉",
        "right": "câu nói líu lưỡi để luyện phát âm nhanh"
      },
      {
        "id": "p3",
        "left": "柿",
        "right": "quả hồng, cây hồng"
      },
      {
        "id": "p4",
        "left": "食う",
        "right": "ăn (khẩu ngữ thô, suồng sã)"
      }
    ],
    "explanation": "訳 (lý do, nguyên do; lẽ, kết luận), 早口言葉 (câu nói líu lưỡi để luyện phát âm nhanh), 柿 (quả hồng, cây hồng), 食う (ăn (khẩu ngữ thô, suồng sã))"
  },
  {
    "id": "ma_1693",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "パジャマ",
        "right": "đồ ngủ, pyjama"
      },
      {
        "id": "p2",
        "left": "カエル",
        "right": "ếch"
      },
      {
        "id": "p3",
        "left": "ぴょこぴょこ",
        "right": "nhấp nhô, nhảy những bước nhỏ liên tiếp"
      },
      {
        "id": "p4",
        "left": "なぞなぞ",
        "right": "câu đố, trò đố vui"
      }
    ],
    "explanation": "パジャマ (đồ ngủ, pyjama), カエル (ếch), ぴょこぴょこ (nhấp nhô, nhảy những bước nhỏ liên tiếp), なぞなぞ (câu đố, trò đố vui)"
  },
  {
    "id": "ma_1694",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "回文",
        "right": "câu/chuỗi đọc xuôi và ngược giống nhau"
      },
      {
        "id": "p2",
        "left": "マウス",
        "right": "chuột máy tính"
      },
      {
        "id": "p3",
        "left": "崖",
        "right": "vách đá dựng đứng"
      },
      {
        "id": "p4",
        "left": "わ（けがしたわ）",
        "right": "trợ từ cuối câu thể hiện cảm xúc/nhấn nhẹ"
      }
    ],
    "explanation": "回文 (câu/chuỗi đọc xuôi và ngược giống nhau), マウス (chuột máy tính), 崖 (vách đá dựng đứng), わ（けがしたわ） (trợ từ cuối câu thể hiện cảm xúc/nhấn nhẹ)"
  },
  {
    "id": "ma_1695",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "詩",
        "right": "thơ, bài thơ"
      },
      {
        "id": "p2",
        "left": "載る",
        "right": "được đăng, được in; nằm trên (vật mang)"
      },
      {
        "id": "p3",
        "left": "小鳥",
        "right": "chim nhỏ"
      },
      {
        "id": "p4",
        "left": "鈴",
        "right": "chuông nhỏ, lục lạc"
      }
    ],
    "explanation": "詩 (thơ, bài thơ), 載る (được đăng, được in; nằm trên (vật mang)), 小鳥 (chim nhỏ), 鈴 (chuông nhỏ, lục lạc)"
  },
  {
    "id": "ma_1696",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "両手",
        "right": "hai tay, cả hai tay"
      },
      {
        "id": "p2",
        "left": "広げる",
        "right": "mở rộng, trải ra"
      },
      {
        "id": "p3",
        "left": "空",
        "right": "bầu trời"
      },
      {
        "id": "p4",
        "left": "ちっとも",
        "right": "không… chút nào (khẩu ngữ)"
      }
    ],
    "explanation": "両手 (hai tay, cả hai tay), 広げる (mở rộng, trải ra), 空 (bầu trời), ちっとも (không… chút nào (khẩu ngữ))"
  },
  {
    "id": "ma_1697",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "地べた",
        "right": "mặt đất (cách nói đời thường)"
      },
      {
        "id": "p2",
        "left": "ゆする",
        "right": "lay, rung, lắc"
      },
      {
        "id": "p3",
        "left": "唄",
        "right": "bài hát, khúc hát (thường gặp với dân ca)"
      },
      {
        "id": "p4",
        "left": "暮らす",
        "right": "sống, sinh sống"
      }
    ],
    "explanation": "地べた (mặt đất (cách nói đời thường)), ゆする (lay, rung, lắc), 唄 (bài hát, khúc hát (thường gặp với dân ca)), 暮らす (sống, sinh sống)"
  },
  {
    "id": "ma_1698",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "～後",
        "right": "sau…"
      },
      {
        "id": "p2",
        "left": "励ます",
        "right": "động viên, khích lệ"
      },
      {
        "id": "p3",
        "left": "生きる",
        "right": "sống, tồn tại"
      },
      {
        "id": "p4",
        "left": "時代",
        "right": "thời đại, thời kỳ"
      }
    ],
    "explanation": "～後 (sau…), 励ます (động viên, khích lệ), 生きる (sống, tồn tại), 時代 (thời đại, thời kỳ)"
  },
  {
    "id": "ma_1699",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "個性",
        "right": "cá tính, nét riêng"
      },
      {
        "id": "p2",
        "left": "～らしさ",
        "right": "nét đặc trưng, phẩm chất riêng của…"
      },
      {
        "id": "p3",
        "left": "認める",
        "right": "thừa nhận, công nhận; chấp nhận, cho phép"
      },
      {
        "id": "p4",
        "left": "込める",
        "right": "đặt, gửi vào (tình cảm, tâm huyết)"
      }
    ],
    "explanation": "個性 (cá tính, nét riêng), ～らしさ (nét đặc trưng, phẩm chất riêng của…), 認める (thừa nhận, công nhận; chấp nhận, cho phép), 込める (đặt, gửi vào (tình cảm, tâm huyết))"
  },
  {
    "id": "ma_1700",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "許す",
        "right": "tha thứ; cho phép"
      },
      {
        "id": "p2",
        "left": "消費",
        "right": "tiêu thụ, sử dụng hết"
      },
      {
        "id": "p3",
        "left": "～者",
        "right": "người thực hiện/thuộc về…"
      },
      {
        "id": "p4",
        "left": "開発",
        "right": "phát triển, tạo sản phẩm/công nghệ mới"
      }
    ],
    "explanation": "許す (tha thứ; cho phép), 消費 (tiêu thụ, sử dụng hết), ～者 (người thực hiện/thuộc về…), 開発 (phát triển, tạo sản phẩm/công nghệ mới)"
  },
  {
    "id": "ma_1701",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "実話",
        "right": "chuyện có thật"
      },
      {
        "id": "p2",
        "left": "コマーシャル",
        "right": "quảng cáo, thường trên TV/radio"
      },
      {
        "id": "p3",
        "left": "フリーダイヤル",
        "right": "số điện thoại miễn cước cho người gọi"
      },
      {
        "id": "p4",
        "left": "～製",
        "right": "được làm bằng…; sản xuất tại…"
      }
    ],
    "explanation": "実話 (chuyện có thật), コマーシャル (quảng cáo, thường trên TV/radio), フリーダイヤル (số điện thoại miễn cước cho người gọi), ～製 (được làm bằng…; sản xuất tại…)"
  },
  {
    "id": "ma_1702",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "かけ間違い",
        "right": "việc gọi nhầm số điện thoại"
      },
      {
        "id": "p2",
        "left": "いったい",
        "right": "rốt cuộc, không biết là… (nhấn câu hỏi)"
      },
      {
        "id": "p3",
        "left": "文字",
        "right": "chữ, ký tự"
      },
      {
        "id": "p4",
        "left": "イメージ",
        "right": "hình dung, tưởng tượng"
      }
    ],
    "explanation": "かけ間違い (việc gọi nhầm số điện thoại), いったい (rốt cuộc, không biết là… (nhấn câu hỏi)), 文字 (chữ, ký tự), イメージ (hình dung, tưởng tượng)"
  },
  {
    "id": "ma_1703",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "数える",
        "right": "đếm"
      },
      {
        "id": "p2",
        "left": "遠足",
        "right": "chuyến dã ngoại, thường do trường tổ chức"
      },
      {
        "id": "p3",
        "left": "作家",
        "right": "nhà văn; người sáng tác"
      },
      {
        "id": "p4",
        "left": "４こま漫画",
        "right": "truyện tranh bốn khung"
      }
    ],
    "explanation": "数える (đếm), 遠足 (chuyến dã ngoại, thường do trường tổ chức), 作家 (nhà văn; người sáng tác), ４こま漫画 (truyện tranh bốn khung)"
  },
  {
    "id": "ma_1704",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "せりふ",
        "right": "lời thoại"
      },
      {
        "id": "p2",
        "left": "登場人物",
        "right": "nhân vật trong truyện, phim…"
      },
      {
        "id": "p3",
        "left": "はしご",
        "right": "cái thang"
      },
      {
        "id": "p4",
        "left": "わくわく",
        "right": "háo hức, hồi hộp vui sướng"
      }
    ],
    "explanation": "せりふ (lời thoại), 登場人物 (nhân vật trong truyện, phim…), はしご (cái thang), わくわく (háo hức, hồi hộp vui sướng)"
  },
  {
    "id": "ma_1705",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "はらはら",
        "right": "hồi hộp lo lắng, thót tim"
      },
      {
        "id": "p2",
        "left": "しょんぼり",
        "right": "ỉu xìu, buồn rầu"
      },
      {
        "id": "p3",
        "left": "駄目",
        "right": "không được, không ổn, vô ích"
      },
      {
        "id": "p4",
        "left": "だって",
        "right": "vì mà…; ngay cả… cũng… (khẩu ngữ)"
      }
    ],
    "explanation": "はらはら (hồi hộp lo lắng, thót tim), しょんぼり (ỉu xìu, buồn rầu), 駄目 (không được, không ổn, vô ích), だって (vì mà…; ngay cả… cũng… (khẩu ngữ))"
  },
  {
    "id": "ma_1706",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "勘違い",
        "right": "nhầm, hiểu sai"
      },
      {
        "id": "p2",
        "left": "顔が広い",
        "right": "quen biết rộng"
      },
      {
        "id": "p3",
        "left": "顔から火が出る",
        "right": "xấu hổ đến nóng bừng mặt"
      },
      {
        "id": "p4",
        "left": "表現",
        "right": "diễn đạt, thể hiện"
      }
    ],
    "explanation": "勘違い (nhầm, hiểu sai), 顔が広い (quen biết rộng), 顔から火が出る (xấu hổ đến nóng bừng mặt), 表現 (diễn đạt, thể hiện)"
  },
  {
    "id": "ma_1707",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "黙る",
        "right": "im lặng, ngừng nói"
      },
      {
        "id": "p2",
        "left": "必死",
        "right": "hết sức, liều mình, hết lòng cố gắng"
      },
      {
        "id": "p3",
        "left": "あはは",
        "right": "ha ha, tiếng cười lớn"
      },
      {
        "id": "p4",
        "left": "もう少しで",
        "right": "chỉ chút nữa là…; suýt…"
      }
    ],
    "explanation": "黙る (im lặng, ngừng nói), 必死 (hết sức, liều mình, hết lòng cố gắng), あはは (ha ha, tiếng cười lớn), もう少しで (chỉ chút nữa là…; suýt…)"
  },
  {
    "id": "ma_1708",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "優勝",
        "right": "vô địch, giành giải nhất"
      },
      {
        "id": "p2",
        "left": "飛び上がる",
        "right": "nhảy bật lên, bay lên"
      },
      {
        "id": "p3",
        "left": "ほっぺた",
        "right": "má (khẩu ngữ)"
      },
      {
        "id": "p4",
        "left": "飛び出す",
        "right": "lao ra, nhảy ra, bất ngờ xuất hiện"
      }
    ],
    "explanation": "優勝 (vô địch, giành giải nhất), 飛び上がる (nhảy bật lên, bay lên), ほっぺた (má (khẩu ngữ)), 飛び出す (lao ra, nhảy ra, bất ngờ xuất hiện)"
  },
  {
    "id": "ma_1709",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "疑問",
        "right": "điều thắc mắc, sự nghi ngờ"
      },
      {
        "id": "p2",
        "left": "女子高生",
        "right": "nữ sinh trung học phổ thông"
      },
      {
        "id": "p3",
        "left": "男",
        "right": "nam, đàn ông, con trai"
      },
      {
        "id": "p4",
        "left": "女",
        "right": "nữ, phụ nữ, con gái"
      }
    ],
    "explanation": "疑問 (điều thắc mắc, sự nghi ngờ), 女子高生 (nữ sinh trung học phổ thông), 男 (nam, đàn ông, con trai), 女 (nữ, phụ nữ, con gái)"
  },
  {
    "id": "ma_1710",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "男女",
        "right": "nam và nữ"
      },
      {
        "id": "p2",
        "left": "目上",
        "right": "người lớn tuổi/cấp bậc cao hơn"
      },
      {
        "id": "p3",
        "left": "使い分ける",
        "right": "chọn dùng khác nhau tùy tình huống"
      },
      {
        "id": "p4",
        "left": "若者",
        "right": "người trẻ, giới trẻ"
      }
    ],
    "explanation": "男女 (nam và nữ), 目上 (người lớn tuổi/cấp bậc cao hơn), 使い分ける (chọn dùng khác nhau tùy tình huống), 若者 (người trẻ, giới trẻ)"
  },
  {
    "id": "ma_1711",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "我慢",
        "right": "chịu đựng, nhịn"
      },
      {
        "id": "p2",
        "left": "のんびり",
        "right": "thong thả, thư giãn"
      },
      {
        "id": "p3",
        "left": "海岸線",
        "right": "đường bờ biển"
      },
      {
        "id": "p4",
        "left": "渓谷",
        "right": "thung lũng hẹp có sông/suối, hẻm núi"
      }
    ],
    "explanation": "我慢 (chịu đựng, nhịn), のんびり (thong thả, thư giãn), 海岸線 (đường bờ biển), 渓谷 (thung lũng hẹp có sông/suối, hẻm núi)"
  },
  {
    "id": "ma_1712",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "トロッコ列車",
        "right": "tàu kiểu xe goòng, thường dùng ngắm cảnh du lịch"
      },
      {
        "id": "p2",
        "left": "SL",
        "right": "đầu máy/tàu hơi nước; viết tắt Steam Locomotive"
      },
      {
        "id": "p3",
        "left": "製造",
        "right": "sản xuất, chế tạo"
      },
      {
        "id": "p4",
        "left": "鉄",
        "right": "sắt"
      }
    ],
    "explanation": "トロッコ列車 (tàu kiểu xe goòng, thường dùng ngắm cảnh du lịch), SL (đầu máy/tàu hơi nước; viết tắt Steam Locomotive), 製造 (sản xuất, chế tạo), 鉄 (sắt)"
  },
  {
    "id": "ma_1713",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "扇風機",
        "right": "quạt điện"
      },
      {
        "id": "p2",
        "left": "石炭",
        "right": "than đá"
      },
      {
        "id": "p3",
        "left": "燃やす",
        "right": "đốt, làm cháy"
      },
      {
        "id": "p4",
        "left": "入り込む",
        "right": "lọt vào, đi sâu vào bên trong"
      }
    ],
    "explanation": "扇風機 (quạt điện), 石炭 (than đá), 燃やす (đốt, làm cháy), 入り込む (lọt vào, đi sâu vào bên trong)"
  },
  {
    "id": "ma_1714",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "揺れる",
        "right": "rung, lắc, đung đưa"
      },
      {
        "id": "p2",
        "left": "～産",
        "right": "được sản xuất/trồng/đánh bắt tại…"
      },
      {
        "id": "p3",
        "left": "車窓",
        "right": "cửa sổ tàu/xe; cảnh nhìn qua cửa sổ"
      },
      {
        "id": "p4",
        "left": "目を向ける",
        "right": "đưa mắt nhìn; chú ý đến"
      }
    ],
    "explanation": "揺れる (rung, lắc, đung đưa), ～産 (được sản xuất/trồng/đánh bắt tại…), 車窓 (cửa sổ tàu/xe; cảnh nhìn qua cửa sổ), 目を向ける (đưa mắt nhìn; chú ý đến)"
  },
  {
    "id": "ma_1715",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "通り過ぎる",
        "right": "đi ngang qua, đi quá"
      },
      {
        "id": "p2",
        "left": "車掌",
        "right": "nhân viên phụ trách trên tàu, soát vé/hướng dẫn hành khách"
      },
      {
        "id": "p3",
        "left": "土地",
        "right": "đất, khu đất; vùng đất, địa phương"
      },
      {
        "id": "p4",
        "left": "ハーモニカ",
        "right": "kèn harmonica"
      }
    ],
    "explanation": "通り過ぎる (đi ngang qua, đi quá), 車掌 (nhân viên phụ trách trên tàu, soát vé/hướng dẫn hành khách), 土地 (đất, khu đất; vùng đất, địa phương), ハーモニカ (kèn harmonica)"
  },
  {
    "id": "ma_1716",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "乗客",
        "right": "hành khách trên phương tiện"
      },
      {
        "id": "p2",
        "left": "ハプニング",
        "right": "sự việc bất ngờ, sự cố ngoài dự kiến"
      },
      {
        "id": "p3",
        "left": "思いがけない",
        "right": "không ngờ tới, bất ngờ"
      },
      {
        "id": "p4",
        "left": "出来事",
        "right": "sự việc, chuyện xảy ra"
      }
    ],
    "explanation": "乗客 (hành khách trên phương tiện), ハプニング (sự việc bất ngờ, sự cố ngoài dự kiến), 思いがけない (không ngờ tới, bất ngờ), 出来事 (sự việc, chuyện xảy ra)"
  },
  {
    "id": "ma_1717",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "向かい合う",
        "right": "đối diện nhau, quay mặt vào nhau"
      },
      {
        "id": "p2",
        "left": "フリー切符",
        "right": "vé đi không giới hạn trong phạm vi và thời hạn quy định"
      },
      {
        "id": "p3",
        "left": "乗り降り",
        "right": "lên xuống phương tiện"
      },
      {
        "id": "p4",
        "left": "配布",
        "right": "phân phát"
      }
    ],
    "explanation": "向かい合う (đối diện nhau, quay mặt vào nhau), フリー切符 (vé đi không giới hạn trong phạm vi và thời hạn quy định), 乗り降り (lên xuống phương tiện), 配布 (phân phát)"
  },
  {
    "id": "ma_1718",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "観光マップ",
        "right": "bản đồ du lịch"
      },
      {
        "id": "p2",
        "left": "書き込む",
        "right": "viết thêm vào, điền vào; đăng nội dung"
      },
      {
        "id": "p3",
        "left": "ときには",
        "right": "đôi khi, cũng có lúc"
      },
      {
        "id": "p4",
        "left": "薦める",
        "right": "giới thiệu, đề cử, khuyên chọn"
      }
    ],
    "explanation": "観光マップ (bản đồ du lịch), 書き込む (viết thêm vào, điền vào; đăng nội dung), ときには (đôi khi, cũng có lúc), 薦める (giới thiệu, đề cử, khuyên chọn)"
  },
  {
    "id": "ma_1719",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "世界自然遺産",
        "right": "di sản thiên nhiên thế giới"
      },
      {
        "id": "p2",
        "left": "～発",
        "right": "xuất phát từ…; khởi hành lúc…"
      },
      {
        "id": "p3",
        "left": "地元",
        "right": "địa phương nơi mình sống/xuất thân; vùng sở tại"
      },
      {
        "id": "p4",
        "left": "豊かさ",
        "right": "sự phong phú, giàu có"
      }
    ],
    "explanation": "世界自然遺産 (di sản thiên nhiên thế giới), ～発 (xuất phát từ…; khởi hành lúc…), 地元 (địa phương nơi mình sống/xuất thân; vùng sở tại), 豊かさ (sự phong phú, giàu có)"
  },
  {
    "id": "ma_1720",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "見どころ",
        "right": "điểm đáng xem, nét hấp dẫn"
      },
      {
        "id": "p2",
        "left": "杉",
        "right": "cây sugi, tuyết tùng Nhật Bản"
      },
      {
        "id": "p3",
        "left": "トレッキング",
        "right": "đi bộ đường núi"
      },
      {
        "id": "p4",
        "left": "所要時間",
        "right": "thời gian cần để hoàn thành hành trình/công việc"
      }
    ],
    "explanation": "見どころ (điểm đáng xem, nét hấp dẫn), 杉 (cây sugi, tuyết tùng Nhật Bản), トレッキング (đi bộ đường núi), 所要時間 (thời gian cần để hoàn thành hành trình/công việc)"
  },
  {
    "id": "ma_1721",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "歩行距離",
        "right": "quãng đường đi bộ"
      },
      {
        "id": "p2",
        "left": "往復",
        "right": "đi lại hai chiều"
      },
      {
        "id": "p3",
        "left": "樹齢",
        "right": "tuổi của cây"
      },
      {
        "id": "p4",
        "left": "神秘的",
        "right": "thần bí, huyền bí"
      }
    ],
    "explanation": "歩行距離 (quãng đường đi bộ), 往復 (đi lại hai chiều), 樹齢 (tuổi của cây), 神秘的 (thần bí, huyền bí)"
  },
  {
    "id": "ma_1722",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "姿",
        "right": "dáng vẻ, hình dáng; hình ảnh người/vật"
      },
      {
        "id": "p2",
        "left": "言い表す",
        "right": "diễn tả bằng lời"
      },
      {
        "id": "p3",
        "left": "モデル",
        "right": "mẫu, hình mẫu; người mẫu"
      },
      {
        "id": "p4",
        "left": "森",
        "right": "rừng"
      }
    ],
    "explanation": "姿 (dáng vẻ, hình dáng; hình ảnh người/vật), 言い表す (diễn tả bằng lời), モデル (mẫu, hình mẫu; người mẫu), 森 (rừng)"
  },
  {
    "id": "ma_1723",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "日常",
        "right": "đời sống hằng ngày, thường nhật"
      },
      {
        "id": "p2",
        "left": "海の幸",
        "right": "sản vật từ biển, hải sản"
      },
      {
        "id": "p3",
        "left": "山の幸",
        "right": "sản vật núi rừng như nấm, rau rừng"
      },
      {
        "id": "p4",
        "left": "民宿",
        "right": "nhà trọ gia đình, minshuku"
      }
    ],
    "explanation": "日常 (đời sống hằng ngày, thường nhật), 海の幸 (sản vật từ biển, hải sản), 山の幸 (sản vật núi rừng như nấm, rau rừng), 民宿 (nhà trọ gia đình, minshuku)"
  },
  {
    "id": "ma_1724",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "味わう",
        "right": "nếm, thưởng thức; trải nghiệm cảm giác"
      },
      {
        "id": "p2",
        "left": "頂上",
        "right": "đỉnh (núi, vật cao)"
      },
      {
        "id": "p3",
        "left": "朝日",
        "right": "mặt trời/ánh nắng buổi sáng"
      },
      {
        "id": "p4",
        "left": "積もる",
        "right": "tích tụ, chất lên (tuyết, bụi…)"
      }
    ],
    "explanation": "味わう (nếm, thưởng thức; trải nghiệm cảm giác), 頂上 (đỉnh (núi, vật cao)), 朝日 (mặt trời/ánh nắng buổi sáng), 積もる (tích tụ, chất lên (tuyết, bụi…))"
  },
  {
    "id": "ma_1725",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "おやつ",
        "right": "đồ ăn bữa phụ, đồ ăn vặt"
      },
      {
        "id": "p2",
        "left": "おつまみ",
        "right": "đồ nhắm ăn cùng rượu bia"
      },
      {
        "id": "p3",
        "left": "通る（電気が通る）",
        "right": "đi qua, chạy qua; điện được dẫn đến"
      },
      {
        "id": "p4",
        "left": "日帰り",
        "right": "đi và về trong ngày"
      }
    ],
    "explanation": "おやつ (đồ ăn bữa phụ, đồ ăn vặt), おつまみ (đồ nhắm ăn cùng rượu bia), 通る（電気が通る） (đi qua, chạy qua; điện được dẫn đến), 日帰り (đi và về trong ngày)"
  },
  {
    "id": "ma_1726",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "滝",
        "right": "thác nước"
      },
      {
        "id": "p2",
        "left": "食材",
        "right": "nguyên liệu nấu ăn"
      },
      {
        "id": "p3",
        "left": "門",
        "right": "cổng"
      },
      {
        "id": "p4",
        "left": "国宝",
        "right": "bảo vật quốc gia; danh hiệu bảo tồn văn hóa của Nhật"
      }
    ],
    "explanation": "滝 (thác nước), 食材 (nguyên liệu nấu ăn), 門 (cổng), 国宝 (bảo vật quốc gia; danh hiệu bảo tồn văn hóa của Nhật)"
  },
  {
    "id": "ma_1727",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "指定",
        "right": "chỉ định, quy định"
      },
      {
        "id": "p2",
        "left": "全体",
        "right": "toàn bộ, tổng thể"
      },
      {
        "id": "p3",
        "left": "彫刻",
        "right": "điêu khắc"
      },
      {
        "id": "p4",
        "left": "彫る",
        "right": "khắc, chạm, tạc"
      }
    ],
    "explanation": "指定 (chỉ định, quy định), 全体 (toàn bộ, tổng thể), 彫刻 (điêu khắc), 彫る (khắc, chạm, tạc)"
  },
  {
    "id": "ma_1728",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "豪華さ",
        "right": "vẻ lộng lẫy, sự xa hoa"
      },
      {
        "id": "p2",
        "left": "名所",
        "right": "địa điểm nổi tiếng, thắng cảnh"
      },
      {
        "id": "p3",
        "left": "まるで",
        "right": "cứ như, giống hệt; hoàn toàn (với phủ định)"
      },
      {
        "id": "p4",
        "left": "絵の具",
        "right": "màu vẽ, sơn vẽ"
      }
    ],
    "explanation": "豪華さ (vẻ lộng lẫy, sự xa hoa), 名所 (địa điểm nổi tiếng, thắng cảnh), まるで (cứ như, giống hệt; hoàn toàn (với phủ định)), 絵の具 (màu vẽ, sơn vẽ)"
  },
  {
    "id": "ma_1729",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "カラフル",
        "right": "nhiều màu sắc rực rỡ"
      },
      {
        "id": "p2",
        "left": "トンネル",
        "right": "đường hầm"
      },
      {
        "id": "p3",
        "left": "一気に",
        "right": "một mạch, một hơi, trong một lần"
      },
      {
        "id": "p4",
        "left": "流れ落ちる",
        "right": "chảy xuống, tuôn xuống"
      }
    ],
    "explanation": "カラフル (nhiều màu sắc rực rỡ), トンネル (đường hầm), 一気に (một mạch, một hơi, trong một lần), 流れ落ちる (chảy xuống, tuôn xuống)"
  },
  {
    "id": "ma_1730",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "迫力満点",
        "right": "đầy ấn tượng mạnh, rất hùng tráng/ngoạn mục"
      },
      {
        "id": "p2",
        "left": "ごうごう",
        "right": "ầm ầm, tiếng vang lớn kéo dài"
      },
      {
        "id": "p3",
        "left": "鯱",
        "right": "shachihoko: tượng linh vật thân cá đầu thú trên nóc thành, đền…"
      },
      {
        "id": "p4",
        "left": "～世紀",
        "right": "thế kỷ…"
      }
    ],
    "explanation": "迫力満点 (đầy ấn tượng mạnh, rất hùng tráng/ngoạn mục), ごうごう (ầm ầm, tiếng vang lớn kéo dài), 鯱 (shachihoko: tượng linh vật thân cá đầu thú trên nóc thành, đền…), ～世紀 (thế kỷ…)"
  },
  {
    "id": "ma_1731",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "代表",
        "right": "đại diện, tiêu biểu cho"
      },
      {
        "id": "p2",
        "left": "誇り",
        "right": "niềm tự hào"
      },
      {
        "id": "p3",
        "left": "戦争",
        "right": "tiến hành chiến tranh"
      },
      {
        "id": "p4",
        "left": "天守閣",
        "right": "tháp chính cao trong thành Nhật"
      }
    ],
    "explanation": "代表 (đại diện, tiêu biểu cho), 誇り (niềm tự hào), 戦争 (tiến hành chiến tranh), 天守閣 (tháp chính cao trong thành Nhật)"
  },
  {
    "id": "ma_1732",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "再び",
        "right": "lại, một lần nữa"
      },
      {
        "id": "p2",
        "left": "金",
        "right": "vàng (kim loại)"
      },
      {
        "id": "p3",
        "left": "上り",
        "right": "chiều lên; chiều tàu đi về đầu mối/trung tâm của tuyến"
      },
      {
        "id": "p4",
        "left": "列車",
        "right": "đoàn tàu"
      }
    ],
    "explanation": "再び (lại, một lần nữa), 金 (vàng (kim loại)), 上り (chiều lên; chiều tàu đi về đầu mối/trung tâm của tuyến), 列車 (đoàn tàu)"
  },
  {
    "id": "ma_1733",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "発車",
        "right": "khởi hành"
      },
      {
        "id": "p2",
        "left": "カーディガン",
        "right": "áo cardigan, áo khoác len mở phía trước"
      },
      {
        "id": "p3",
        "left": "奥",
        "right": "phía trong sâu, phía cuối"
      },
      {
        "id": "p4",
        "left": "もしかしたら",
        "right": "biết đâu, có lẽ"
      }
    ],
    "explanation": "発車 (khởi hành), カーディガン (áo cardigan, áo khoác len mở phía trước), 奥 (phía trong sâu, phía cuối), もしかしたら (biết đâu, có lẽ)"
  },
  {
    "id": "ma_1734",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "ございます",
        "right": "có, tồn tại (cách nói lịch sự của あります)"
      },
      {
        "id": "p2",
        "left": "着払い",
        "right": "người nhận trả phí vận chuyển"
      },
      {
        "id": "p3",
        "left": "宅配便",
        "right": "dịch vụ chuyển phát tận nhà; kiện gửi qua dịch vụ đó"
      },
      {
        "id": "p4",
        "left": "グレー",
        "right": "màu xám"
      }
    ],
    "explanation": "ございます (có, tồn tại (cách nói lịch sự của あります)), 着払い (người nhận trả phí vận chuyển), 宅配便 (dịch vụ chuyển phát tận nhà; kiện gửi qua dịch vụ đó), グレー (màu xám)"
  },
  {
    "id": "ma_1735",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "胸",
        "right": "ngực; lòng, tâm trạng"
      },
      {
        "id": "p2",
        "left": "マーク",
        "right": "đánh dấu"
      },
      {
        "id": "p3",
        "left": "まだまだ",
        "right": "vẫn còn nhiều; còn lâu mới đạt"
      },
      {
        "id": "p4",
        "left": "請求",
        "right": "yêu cầu thanh toán/cung cấp"
      }
    ],
    "explanation": "胸 (ngực; lòng, tâm trạng), マーク (đánh dấu), まだまだ (vẫn còn nhiều; còn lâu mới đạt), 請求 (yêu cầu thanh toán/cung cấp)"
  },
  {
    "id": "ma_1736",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "洗面台",
        "right": "bồn/bệ rửa mặt"
      },
      {
        "id": "p2",
        "left": "車内",
        "right": "bên trong xe/tàu"
      },
      {
        "id": "p3",
        "left": "座席",
        "right": "chỗ ngồi, ghế ngồi"
      },
      {
        "id": "p4",
        "left": "鉄道",
        "right": "đường sắt"
      }
    ],
    "explanation": "洗面台 (bồn/bệ rửa mặt), 車内 (bên trong xe/tàu), 座席 (chỗ ngồi, ghế ngồi), 鉄道 (đường sắt)"
  },
  {
    "id": "ma_1737",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "グリーン車",
        "right": "toa Green, hạng ghế cao cấp hơn toa thường ở Nhật"
      },
      {
        "id": "p2",
        "left": "販売",
        "right": "bán hàng"
      },
      {
        "id": "p3",
        "left": "停車",
        "right": "dừng xe/tàu"
      },
      {
        "id": "p4",
        "left": "時刻",
        "right": "giờ, thời điểm chính xác"
      }
    ],
    "explanation": "グリーン車 (toa Green, hạng ghế cao cấp hơn toa thường ở Nhật), 販売 (bán hàng), 停車 (dừng xe/tàu), 時刻 (giờ, thời điểm chính xác)"
  },
  {
    "id": "ma_1738",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "禁煙",
        "right": "bỏ/ngừng hút thuốc"
      },
      {
        "id": "p2",
        "left": "デッキ",
        "right": "khoang cửa/đầu toa tàu; boong tàu thủy"
      },
      {
        "id": "p3",
        "left": "通話",
        "right": "nói chuyện điện thoại"
      },
      {
        "id": "p4",
        "left": "なお",
        "right": "ngoài ra, xin nói thêm; vẫn còn"
      }
    ],
    "explanation": "禁煙 (bỏ/ngừng hút thuốc), デッキ (khoang cửa/đầu toa tàu; boong tàu thủy), 通話 (nói chuyện điện thoại), なお (ngoài ra, xin nói thêm; vẫn còn)"
  },
  {
    "id": "ma_1739",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "満席",
        "right": "kín chỗ, hết ghế trống"
      },
      {
        "id": "p2",
        "left": "いたす",
        "right": "làm (cách nói khiêm nhường/lịch sự của する)"
      },
      {
        "id": "p3",
        "left": "あらかじめ",
        "right": "trước, sẵn từ trước"
      },
      {
        "id": "p4",
        "left": "了承",
        "right": "hiểu, chấp thuận"
      }
    ],
    "explanation": "満席 (kín chỗ, hết ghế trống), いたす (làm (cách nói khiêm nhường/lịch sự của する)), あらかじめ (trước, sẵn từ trước), 了承 (hiểu, chấp thuận)"
  },
  {
    "id": "ma_1740",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "心より",
        "right": "từ tận đáy lòng, chân thành (trang trọng)"
      },
      {
        "id": "p2",
        "left": "車両",
        "right": "toa xe, phương tiện đường bộ/đường sắt"
      },
      {
        "id": "p3",
        "left": "内回り",
        "right": "chiều vòng trong của tuyến vòng"
      },
      {
        "id": "p4",
        "left": "見合わせる",
        "right": "tạm hoãn/tạm ngừng; nhìn nhau"
      }
    ],
    "explanation": "心より (từ tận đáy lòng, chân thành (trang trọng)), 車両 (toa xe, phương tiện đường bộ/đường sắt), 内回り (chiều vòng trong của tuyến vòng), 見合わせる (tạm hoãn/tạm ngừng; nhìn nhau)"
  },
  {
    "id": "ma_1741",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "尋ねる",
        "right": "hỏi, hỏi thăm thông tin"
      },
      {
        "id": "p2",
        "left": "幸運",
        "right": "sự may mắn; may mắn"
      },
      {
        "id": "p3",
        "left": "雲",
        "right": "mây"
      },
      {
        "id": "p4",
        "left": "早速",
        "right": "ngay, lập tức bắt tay làm"
      }
    ],
    "explanation": "尋ねる (hỏi, hỏi thăm thông tin), 幸運 (sự may mắn; may mắn), 雲 (mây), 早速 (ngay, lập tức bắt tay làm)"
  },
  {
    "id": "ma_1742",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "路面電車",
        "right": "tàu điện chạy trên đường phố, tram"
      },
      {
        "id": "p2",
        "left": "天井",
        "right": "trần nhà"
      },
      {
        "id": "p3",
        "left": "満足",
        "right": "thỏa đáng, đầy đủ; hài lòng"
      },
      {
        "id": "p4",
        "left": "～ぶりに",
        "right": "sau… mới lại làm, lần đầu sau khoảng…"
      }
    ],
    "explanation": "路面電車 (tàu điện chạy trên đường phố, tram), 天井 (trần nhà), 満足 (thỏa đáng, đầy đủ; hài lòng), ～ぶりに (sau… mới lại làm, lần đầu sau khoảng…)"
  },
  {
    "id": "ma_1743",
    "type": "matching",
    "question": "Ghép từ tiếng Nhật với nghĩa tiếng Việt",
    "pairs": [
      {
        "id": "p1",
        "left": "再会",
        "right": "gặp lại sau thời gian xa cách"
      },
      {
        "id": "p2",
        "left": "さすが",
        "right": "quả là, đúng là (như tiếng tăm/kỳ vọng)"
      },
      {
        "id": "p3",
        "left": "香り",
        "right": "hương thơm, mùi dễ chịu"
      },
      {
        "id": "p4",
        "left": "旅行記",
        "right": "du ký, bài ghi chép về chuyến du lịch"
      }
    ],
    "explanation": "再会 (gặp lại sau thời gian xa cách), さすが (quả là, đúng là (như tiếng tăm/kỳ vọng)), 香り (hương thơm, mùi dễ chịu), 旅行記 (du ký, bài ghi chép về chuyến du lịch)"
  }
] as unknown as Exercise[];
