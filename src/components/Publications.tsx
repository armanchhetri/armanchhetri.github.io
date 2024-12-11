import React from 'react';
import { BookOpen } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: "Automatic speech recognition for the Nepali language using CNN, bidirectional LSTM, and ResNet",
      conference: "2022 International Conference on Inventive Computation Technologies (ICICT)",
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
                <BookOpen className="text-blue-600 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
                  <p className="text-gray-600">{pub.conference}</p>
                  <p className="text-gray-500">Year: {pub.year}</p>
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
                  >
                    DOI: {pub.doi}
                  </a>
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