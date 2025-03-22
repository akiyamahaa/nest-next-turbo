// prisma/data.ts

export interface OptionData {
  label: string;
  text: string;
  explanation: string;
}

export interface QuestionData {
  text: string;
  imageUrl?: string;
  correctOptionLabel: string;
  options: OptionData[];
}

export interface QuizData {
  title: string;
  description: string;
  questions: QuestionData[];
}

export interface SeedData {
  categoryName: string;
  quizzes: QuizData[];
}

export const seedData: SeedData = {
  categoryName: 'CỜ TẬP SỰ',
  quizzes: [
    {
      title: 'Quiz 1: Kiến thức cơ bản về cờ vua',
      description: 'Đánh giá kiến thức cơ bản về quân cờ và luật chơi cờ vua.',
      questions: [
        {
          text: 'Trong cờ vua, quân nào có thể di chuyển theo hình chữ L?',
          correctOptionLabel: 'A',
          options: [
            {
              label: 'A',
              text: 'Mã',
              explanation:
                'Quân Mã di chuyển theo hình chữ L và có thể nhảy qua các quân khác.',
            },
            {
              label: 'B',
              text: 'Tốt',
              explanation:
                'Quân Tốt chỉ di chuyển thẳng và tấn công theo đường chéo.',
            },
            {
              label: 'C',
              text: 'Hậu',
              explanation: 'Quân Hậu di chuyển theo đường thẳng và đường chéo.',
            },
            {
              label: 'D',
              text: 'Xe',
              explanation: 'Quân Xe di chuyển theo đường thẳng dọc và ngang.',
            },
          ],
        },
        {
          text: 'Quân cờ nào được xem là mạnh nhất trên bàn cờ (ngoại trừ vua)?',
          correctOptionLabel: 'A',
          options: [
            {
              label: 'A',
              text: 'Hậu',
              explanation:
                'Hậu là quân có sức mạnh lớn nhất với khả năng di chuyển theo nhiều hướng.',
            },
            {
              label: 'B',
              text: 'Xe',
              explanation: 'Xe chỉ di chuyển theo đường thẳng.',
            },
            {
              label: 'C',
              text: 'Mã',
              explanation:
                'Mã di chuyển theo hình chữ L nhưng không mạnh bằng Hậu.',
            },
            {
              label: 'D',
              text: 'Tốt',
              explanation: 'Tốt là quân có giá trị thấp nhất.',
            },
          ],
        },
        {
          text: "Trong cờ vua, từ 'chiếu' có nghĩa là gì?",
          correctOptionLabel: 'A',
          options: [
            {
              label: 'A',
              text: 'Quân vua đang bị đe dọa bị bắt trong lượt kế tiếp',
              explanation: "Đây chính là định nghĩa của 'chiếu'.",
            },
            {
              label: 'B',
              text: 'Quân vua không thể di chuyển',
              explanation: "Đó là tình trạng 'bế tắc', không phải chiếu.",
            },
            {
              label: 'C',
              text: 'Quân vua bị bao vây bởi quân đối phương',
              explanation: 'Bao vây không nhất thiết đồng nghĩa với chiếu.',
            },
            {
              label: 'D',
              text: 'Quân vua đang đứng giữa bàn cờ',
              explanation: 'Vị trí không liên quan đến khái niệm chiếu.',
            },
          ],
        },
        {
          text: 'Trong lượt đi đầu tiên, quân Tốt có thể di chuyển bao nhiêu ô về phía trước?',
          correctOptionLabel: 'A',
          options: [
            {
              label: 'A',
              text: '1 hoặc 2 ô',
              explanation: 'Quân Tốt có thể đi 2 ô nếu chưa di chuyển lần nào.',
            },
            {
              label: 'B',
              text: 'Chỉ 1 ô',
              explanation: 'Tốt có thể đi 2 ô trong lượt đầu tiên.',
            },
            {
              label: 'C',
              text: '3 ô',
              explanation: 'Không thể đi 3 ô trong lượt đầu tiên.',
            },
            {
              label: 'D',
              text: 'Không di chuyển',
              explanation: 'Tốt luôn phải tiến về phía trước.',
            },
          ],
        },
        {
          text: 'Quân Xe di chuyển theo cách nào?',
          correctOptionLabel: 'A',
          options: [
            {
              label: 'A',
              text: 'Theo đường thẳng dọc và ngang',
              explanation: 'Quân Xe chỉ di chuyển theo hàng và cột.',
            },
            {
              label: 'B',
              text: 'Theo đường chéo',
              explanation: 'Đây là cách di chuyển của quân Tượng.',
            },
            {
              label: 'C',
              text: 'Theo hình chữ L',
              explanation: 'Đây là cách di chuyển của quân Mã.',
            },
            {
              label: 'D',
              text: 'Theo đường cong',
              explanation: 'Không có quân nào di chuyển theo đường cong.',
            },
          ],
        },
        {
          text: 'Quân Mã di chuyển theo hình thức nào?',
          correctOptionLabel: 'A',
          options: [
            {
              label: 'A',
              text: 'Hình chữ L',
              explanation:
                'Quân Mã di chuyển 2 ô theo một hướng và 1 ô theo hướng vuông góc.',
            },
            {
              label: 'B',
              text: 'Hình chữ X',
              explanation: 'Không có quân nào di chuyển theo hình chữ X.',
            },
            {
              label: 'C',
              text: 'Hình chữ T',
              explanation: 'Không đúng cách di chuyển của quân Mã.',
            },
            {
              label: 'D',
              text: 'Hình chữ Z',
              explanation: 'Không phải cách di chuyển của quân Mã.',
            },
          ],
        },
        {
          text: 'Khi quân Tốt đi đến hàng cuối cùng của bàn cờ, nó có thể được phong tặng thành quân nào?',
          correctOptionLabel: 'A',
          options: [
            {
              label: 'A',
              text: 'Hậu, Xe, Mã hoặc Tượng',
              explanation:
                'Quân Tốt có thể được phong tặng thành bất kỳ quân nào ngoại trừ vua.',
            },
            {
              label: 'B',
              text: 'Chỉ Hậu',
              explanation:
                'Mặc dù thường phong tặng thành Hậu, nhưng có thể chọn quân khác.',
            },
            { label: 'C', text: 'Chỉ Xe', explanation: 'Không chỉ Xe.' },
            { label: 'D', text: 'Chỉ Tượng', explanation: 'Không chỉ Tượng.' },
          ],
        },
        {
          text: 'Mục tiêu cuối cùng của ván cờ vua là gì?',
          correctOptionLabel: 'A',
          options: [
            {
              label: 'A',
              text: 'Chiếu hết quân vua đối phương',
              explanation:
                'Mục tiêu là tạo ra tình huống mà quân vua đối phương không có nước đi an toàn.',
            },
            {
              label: 'B',
              text: 'Ăn hết quân đối phương',
              explanation:
                'Ăn hết quân không đảm bảo thắng nếu không chiếu hết.',
            },
            {
              label: 'C',
              text: 'Kiểm soát toàn bộ bàn cờ',
              explanation:
                'Kiểm soát bàn cờ rất quan trọng nhưng không phải mục tiêu cuối cùng.',
            },
            {
              label: 'D',
              text: 'Phong tặng quân Tốt',
              explanation: 'Không liên quan đến mục tiêu của trò chơi.',
            },
          ],
        },
        {
          text: 'Trong cờ vua, khi nào ván cờ được gọi là hòa?',
          correctOptionLabel: 'D',
          options: [
            {
              label: 'A',
              text: 'Khi một bên không thể tiếp tục di chuyển',
              explanation: 'Đây chỉ là một trong các điều kiện hòa.',
            },
            {
              label: 'B',
              text: 'Khi cả hai bên đồng ý hòa',
              explanation: 'Đây cũng là một điều kiện hòa.',
            },
            {
              label: 'C',
              text: 'Khi một bên thua về thời gian',
              explanation: 'Thua về thời gian không phải hòa.',
            },
            {
              label: 'D',
              text: 'Cả A và B',
              explanation: 'Hòa xảy ra khi bế tắc hoặc cả hai bên đồng ý.',
            },
          ],
        },
      ],
    },
    {
      title: 'Quiz 2: Chiến thuật nâng cao trong cờ vua',
      description:
        'Đánh giá hiểu biết về các chiến thuật và kỹ thuật tấn công, phòng thủ trong cờ vua.',
      questions: [
        {
          text: 'Khai cuộc cờ vua phổ biến nhất đối với người trắng là gì?',
          correctOptionLabel: 'A',
          options: [
            {
              label: 'A',
              text: 'Khai cuộc Ruy Lopez',
              explanation:
                'Ruy Lopez là khai cuộc cổ điển và phổ biến của người trắng.',
            },
            {
              label: 'B',
              text: 'Khai cuộc Sicilian Defense',
              explanation: 'Đây là khai cuộc chủ yếu của người đen.',
            },
            {
              label: 'C',
              text: "Khai cuộc King's Indian Defense",
              explanation: 'Đây cũng là khai cuộc của người đen.',
            },
            {
              label: 'D',
              text: 'Khai cuộc Caro-Kann',
              explanation: 'Đây là khai cuộc an toàn của người đen.',
            },
          ],
        },
        {
          text: 'Trong tấn công phức tạp, mục tiêu chính là gì?',
          correctOptionLabel: 'A',
          options: [
            {
              label: 'A',
              text: 'Tạo ra mối đe dọa đa chiều lên quân vua đối phương',
              explanation:
                'Chiến thuật tấn công đa chiều nhằm làm đối phương rối loạn.',
            },
            {
              label: 'B',
              text: 'Giành được nhiều điểm hơn',
              explanation:
                'Điểm số không phải mục tiêu trong chiến thuật tấn công.',
            },
            {
              label: 'C',
              text: 'Giữ vững vị trí trung tâm',
              explanation:
                'Dù quan trọng nhưng không phải mục tiêu tấn công chính.',
            },
            {
              label: 'D',
              text: 'Phòng thủ, sau đó phản công',
              explanation:
                'Đây là chiến thuật phòng thủ chứ không phải tấn công chủ động.',
            },
          ],
        },
        {
          text: "Chiến thuật 'chiếu nhá' (fork) là:",
          correctOptionLabel: 'A',
          options: [
            {
              label: 'A',
              text: 'Một nước đi khiến một quân đối phương bị tấn công bởi hai hoặc nhiều quân cùng lúc',
              explanation:
                'Fork là chiến thuật tấn công đồng thời nhiều quân của đối phương.',
            },
            {
              label: 'B',
              text: 'Một nước đi tạo bẫy bắt quân vua',
              explanation: 'Không chính xác.',
            },
            {
              label: 'C',
              text: 'Một nước đi bảo vệ quân của mình',
              explanation: 'Không phải fork.',
            },
            {
              label: 'D',
              text: 'Một nước đi nhằm chiếm vị trí trung tâm',
              explanation: 'Không phải fork.',
            },
          ],
        },
        {
          text: "Trong cờ vua, thuật ngữ 'pin' có ý nghĩa gì?",
          correctOptionLabel: 'B',
          options: [
            {
              label: 'A',
              text: 'Một quân bị khóa hoàn toàn không thể di chuyển',
              explanation: 'Chỉ một phần của ý nghĩa pin.',
            },
            {
              label: 'B',
              text: 'Một quân bị khóa nếu di chuyển sẽ làm lộ vị trí quân vua hoặc mất lợi thế chiến lược',
              explanation: "Đây là định nghĩa chính xác của 'pin'.",
            },
            {
              label: 'C',
              text: 'Một quân bị bao vây bởi quân đối phương',
              explanation: 'Không hoàn toàn đúng.',
            },
            {
              label: 'D',
              text: 'Một quân bị khóa và không thể tấn công',
              explanation: 'Không chính xác.',
            },
          ],
        },
        {
          text: "Chiến thuật 'quyết đoán' trong cờ vua nhằm mục tiêu:",
          correctOptionLabel: 'A',
          options: [
            {
              label: 'A',
              text: 'Tạo ra đòn tấn công bất ngờ dẫn đến thắng nhanh',
              explanation:
                'Chiến thuật này nhằm tạo áp lực mạnh mẽ lên đối phương.',
            },
            {
              label: 'B',
              text: 'Giữ vững thế phòng thủ',
              explanation: "Không phải mục tiêu của 'quyết đoán'.",
            },
            {
              label: 'C',
              text: 'Trao đổi quân có lợi',
              explanation: 'Không phải mục tiêu trực tiếp.',
            },
            {
              label: 'D',
              text: 'Tăng cường bảo vệ quân vua',
              explanation: 'Không phải mục tiêu tấn công quyết đoán.',
            },
          ],
        },
        {
          text: "Trong tình huống 'chiếu hết', quân vua đối phương:",
          correctOptionLabel: 'A',
          options: [
            {
              label: 'A',
              text: 'Không thể di chuyển đến ô an toàn nào',
              explanation: 'Đây là định nghĩa của chiếu hết.',
            },
            {
              label: 'B',
              text: 'Chỉ còn một nước đi duy nhất',
              explanation: 'Không chính xác.',
            },
            {
              label: 'C',
              text: 'Có thể phá vỡ tình huống bằng cách trao đổi quân',
              explanation: 'Không phải chiếu hết.',
            },
            {
              label: 'D',
              text: 'Được miễn nhiễm khỏi bị bắt',
              explanation: 'Không đúng.',
            },
          ],
        },
        {
          text: 'Khi đối phương mắc sai lầm trong khai cuộc, chiến thuật hiệu quả là:',
          correctOptionLabel: 'A',
          options: [
            {
              label: 'A',
              text: 'Tấn công trung tâm để khai thác sai sót của đối phương',
              explanation: 'Tấn công trung tâm thường mang lại lợi thế lớn.',
            },
            {
              label: 'B',
              text: 'Bỏ qua và tiếp tục phát triển quân',
              explanation:
                'Không tận dụng được cơ hội từ sai lầm của đối phương.',
            },
            {
              label: 'C',
              text: 'Đổi quân ngay lập tức',
              explanation: 'Không nhất thiết phải đổi quân.',
            },
            {
              label: 'D',
              text: 'Rút lui và phòng thủ',
              explanation: 'Không khai thác được sai sót của đối phương.',
            },
          ],
        },
        {
          text: 'Việc kiểm soát trung tâm bàn cờ có ý nghĩa gì?',
          correctOptionLabel: 'C',
          options: [
            {
              label: 'A',
              text: 'Chỉ giúp tấn công',
              explanation:
                'Trung tâm mở ra nhiều cơ hội tấn công nhưng cũng quan trọng trong phòng thủ.',
            },
            {
              label: 'B',
              text: 'Chỉ giúp phòng thủ',
              explanation: 'Không chỉ có tác dụng phòng thủ.',
            },
            {
              label: 'C',
              text: 'Tạo điều kiện thuận lợi cho di chuyển tự do và kiểm soát cả tấn công lẫn phòng thủ',
              explanation:
                'Đúng; kiểm soát trung tâm là chìa khóa của chiến lược cờ vua.',
            },
            {
              label: 'D',
              text: 'Không ảnh hưởng nhiều',
              explanation:
                'Trung tâm bàn cờ rất quan trọng trong mọi chiến thuật.',
            },
          ],
        },
        {
          text: 'Trong tấn công kết hợp, mục tiêu chính là:',
          correctOptionLabel: 'A',
          options: [
            {
              label: 'A',
              text: 'Chiếu hết quân vua đối phương',
              explanation:
                'Mục tiêu cuối cùng của tấn công kết hợp là đạt được chiếu hết.',
            },
            {
              label: 'B',
              text: 'Đánh bại các quân nhỏ của đối phương',
              explanation: 'Không phải mục tiêu chính.',
            },
            {
              label: 'C',
              text: 'Chiếm ưu thế về vị trí',
              explanation: 'Quan trọng nhưng không phải mục tiêu cuối cùng.',
            },
            {
              label: 'D',
              text: 'Giành được lợi thế thời gian',
              explanation: 'Không phải mục tiêu cuối cùng.',
            },
          ],
        },
      ],
    },
  ],
};
