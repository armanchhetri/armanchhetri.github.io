import React from 'react';
import { BookOpen } from 'lucide-react';

type Publication = {
  title: string;
  authors?: string;
  venue: string;
  year: number;
  doi?: string;
};

const Publications = () => {
  const publications: Publication[] = [
    {
      title: "Metamorphic Stress Testing of Vision-Language Components for Time-Critical Autonomous Systems",
      authors: "Arman Chhetri, Yinxi Liu",
      venue: "TRUST '26 @ ASE 2026",
      year: 2026,
      doi: "10.1145/3843782.3844660"
    },
    {
      title: "When Do Inference-Cost Stress Tests Generalize? A Cross-Model and Cross-Configuration Measurement Study",
      authors: "Arman Chhetri, Yinxi Liu",
      venue: "RASE '26 @ ASE 2026",
      year: 2026,
      doi: "10.1145/3820756.3844910"
    },
    {
      title: "Automatic speech recognition for the Nepali language using CNN, bidirectional LSTM, and ResNet",
      venue: "2022 International Conference on Inventive Computation Technologies (ICICT)",
      year: 2022,
      doi: "10.1109/ICICT54344.2022.9850832"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Publications</h2>
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <BookOpen className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
                  {pub.authors && <p className="text-gray-700 mb-1">{pub.authors}</p>}
                  <p className="text-gray-600">{pub.venue}</p>
                  <p className="text-gray-500">Year: {pub.year}</p>
                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
                    >
                      DOI: {pub.doi}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
