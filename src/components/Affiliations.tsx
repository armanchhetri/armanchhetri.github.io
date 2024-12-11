import React from 'react';
import { Users } from 'lucide-react';

const Affiliations = () => {
  const affiliations = [
    {
      organization: "Microsoft Learn Student Ambassadors",
      year: 2019
    },
    {
      organization: "LOCUS",
      roles: ["Datarush Contest Organizer (2021)", "Children in Tech Organizer (2021)"]
    },
    {
      organization: "ANSWER Scholar",
      period: "2012–2022"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Affiliations</h2>
        <div className="space-y-6">
          {affiliations.map((affiliation, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg flex items-start gap-4">
              <Users className="text-blue-600 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-semibold">{affiliation.organization}</h3>
                {affiliation.year && <p className="text-gray-600">Year: {affiliation.year}</p>}
                {affiliation.period && <p className="text-gray-600">Period: {affiliation.period}</p>}
                {affiliation.roles && (
                  <ul className="list-disc list-inside mt-2">
                    {affiliation.roles.map((role, i) => (
                      <li key={i} className="text-gray-700">{role}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Affiliations;