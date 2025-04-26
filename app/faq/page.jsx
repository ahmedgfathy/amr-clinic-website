'use client';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "ما هي الفئة العمرية التي يستقبلها المركز؟",
      answer: "يستقبل المركز الأطفال من عمر 2 إلى 12 سنة، مع توفير برامج مخصصة لكل فئة عمرية."
    },
    {
      question: "كيف يتم تشخيص حالة التوحد أو ADHD؟",
      answer: "يتم التشخيص من خلال فريق متخصص باستخدام مقاييس عالمية معتمدة، ويشمل التقييم جلسات متعددة لمراقبة سلوك الطفل وتقييم مهاراته المختلفة."
    },
    {
      question: "ما هي مدة البرنامج العلاجي؟",
      answer: "تختلف مدة البرنامج حسب حالة كل طفل واحتياجاته. يتم تصميم خطة علاجية فردية بعد التقييم المبدئي، وتتم مراجعة التقدم بشكل دوري."
    },
    {
      question: "هل يوفر المركز خدمات الدعم للأسرة؟",
      answer: "نعم، نقدم جلسات إرشادية وتدريبية للوالدين والأسرة لمساعدتهم في التعامل مع أطفالهم وفهم احتياجاتهم بشكل أفضل."
    },
    {
      question: "كم عدد الجلسات الأسبوعية؟",
      answer: "يعتمد عدد الجلسات على الخطة العلاجية لكل طفل، وعادةً ما تتراوح بين 2-5 جلسات أسبوعياً."
    },
    {
      question: "هل تتوفر خدمة المواصلات؟",
      answer: "نعم، يوفر المركز خدمة مواصلات آمنة ومريحة للأطفال من وإلى المركز في مناطق محددة."
    }
  ];

  return (
    <main>
      {/* Header Section */}
      <section className="relative py-16 bg-gradient-to-b from-teal-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">الأسئلة الشائعة</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              إجابات على الأسئلة الأكثر شيوعاً حول خدماتنا وبرامجنا العلاجية
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  className="w-full text-right bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex justify-between items-center"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="bg-gray-50 p-4 rounded-b-lg mt-1">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            لم تجد إجابة لسؤالك؟
          </h2>
          <p className="text-gray-600 mb-8">
            فريقنا متواجد للإجابة على جميع استفساراتك
          </p>
          <a
            href="/contact"
            className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors"
          >
            تواصل معنا
          </a>
        </div>
      </section>
    </main>
  );
}
