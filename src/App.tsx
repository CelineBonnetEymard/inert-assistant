import React, { useState } from 'react';
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  AlertCircle, 
  CheckCircle, 
  Filter,
  HelpCircle,
  Wrench
} from 'lucide-react';

interface Cause {
  id: string;
  question: string;
  action: string;
  isExpanded: boolean;
  mediaUrl?: string;
  mediaType?: 'image' | 'video';
}

interface Issue {
  id: string;
  title: string;
  category: string;
  description: string;
  causes: Cause[];
  isExpanded: boolean;
}

const initialIssues: Issue[] = [
  {
    id: '1',
    title: 'No Working Gas Flow',
    category: 'Gas Supply System',
    description: 'There is no working gas going into the PureLab HE.',
    isExpanded: false,
    causes: [
      {
        id: '1-1',
        question: 'Do you have adequate pressure and flow of working gas?',
        action: 'Ensure your gas source has pressure and you’re suppling 55-60 PSI (3.8 – 4.1 Bar) of pressure to the purifier.',
        isExpanded: false,
        mediaUrl: '/1%20-%20Regulator%20on%20a%20gas%20cylinder.png'
      }, 
      {
        id: '1-2',
        question: 'Is the electrical signal getting to the gas (GA) valve?',
        action: 'The Valve will illuminate if it is receiving the proper voltage.',
        isExpanded: false,
        mediaUrl: '/2%20-%20Valve%20block%20with%20GA%20valve%20illuminated.png'
      }     
    ]
  },
  {
    id: '2',
    title: 'No Regeneration Gas Flow',
    category: 'Gas Supply System',
    description: (
      <span>
        NOTE:{" "}
        <a
          href="/PureLabHE_Manual 0.6.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Click here to view Regeneration procedure for a PureLab HE
        </a>
      </span>
    ),
    isExpanded: false,
    causes: [
      {
        id: '2-1',
        question: 'Ensure you have adequate pressure and flow of Regeneration Gas. ',
        action: 'Ensure your gas source has pressure and you’re providing 7-10 PSI (0.5 – 0.7 Bar) of gas pressure to the regeneration gas inlet.',
        isExpanded: false,
        mediaUrl: '/1%20-%20Regulator%20on%20a%20gas%20cylinder.png'
      },
      {
        id: '2-2',
        question: 'Are the Regeneration Gas (RG) and Exhaust (EX) valves receiving the electrical signal to open?',
        action: 'The valves will illuminate when receiving the appropriate signal.',
        isExpanded: false,
        mediaUrl: '/3%20-%20Valve%20block%20with%20RG%20and%20EX%20valve%20illuminated.png'
      },
      {
        id: '2-3',
        question: 'Is the flow meter on the front of the purifier open?',
        action: 'Turn clockwise to open flow meter.',
        isExpanded: false,
        mediaUrl: '/4%20-%20Flow%20meter%20on%20purifier.png'
      }
    ]
  },
  {
    id: '3',
    title: 'Antechamber Won\'t Hold Vacuum',
    category: 'Vacuum System',
    description: 'The antechamber is unable to maintain proper vacuum levels.',
    isExpanded: false,
    causes: [
      {
        id: '3-1',
        question: 'Are the antechamber o-rings sealing properly?',
        action: 'Ensure O-rings are clean and free of debris.',
        isExpanded: false,
        mediaUrl: '/5%20-%20Antechamber%20O-ring.png'
      },
      {
        id: '3-2',
        question: 'Is the refill valve closed?',
        action: 'If not, close it. Your system may be equipped with an auto-refill valve or manual. The auto valve will be illuminated when open.',
        isExpanded: false,
        mediaUrl: '/6%20-%20Auto%20and%20manual%20refill%20valves.png'
      }
    ]
  },
  {
    id: '4',
    title: 'Glovebox is leaking',
    category: 'Glovebox Integrity',
    description: ' ',
    isExpanded: false,
    causes: [
      {
        id: '4-1',
        question: 'Unknown cause.',
        action: 'Refer to the pressure test section of the PureLab HE manual. Perform a pressure test and record the result of the leakage rate. Take the steps below to find possible sources of the leak. Retest and record the result, noting improvements in the leak rate.',
        isExpanded: false,
        mediaUrl: '/7%20-%20HMI%20pressure%20test%20screen.png'
      },
      {
        id: '4-2',
        question: 'Have any modifications been performed to the glovebox?',
        action: 'Ensure all modifications are leak tight. Use liquid leak detector (soapy water) to test connections.',
        isExpanded: false
      },
      {
        id: '4-3',
        question: 'Leaking through antechamber.',
        action: 'Place antechambers under vacuum.',
        isExpanded: false
      },
      {
        id: '4-4',
        question: 'Leaking through gloves.',
        action: 'Carefully inspect gloves for damage. If damaged, order replacement gloves from Inert.',
        isExpanded: false
      }
    ]
  },
  {
    id: '5',
    title: 'Vacuum pump is making noise or has reduced performance',
    category: 'Vacuum System',
    description: ' ',
    isExpanded: false,
    causes: [
      {
        id: '5-1',
        question: 'Vacuum pump requires service.',
        action: 'If oil looks black and opaque, change oil. ',
        isExpanded: false,
        mediaUrl: '/8%20-%20Fresh%20oil%20&%20not%20fresh%20oil.png'
      },
      {
        id: '5-2',
        question: 'Leaking through a fitting.',
        action: 'Check all fittings on vacuum lines for tightness.',
        isExpanded: false
      },
      {
        id: '5-3',
        question: 'What should I do if changing the pump oil and checking the upstream fittings doesn\'t improve vacuum pump performance?',
        action: 'If there is no improvement after changing the pump oil and checking the fittings upstream from the pump, put a vacuum gauge directly on the inlet of the pump. Refer to the pump manual for the obtainable vacuum level. If the pump cannot achieve the specified vacuum, the pump must be repaired or replaced.',
        isExpanded: false
      }      
    ]
  },
  {
    id: '6',
    title: 'The window is "cloudy" or scratched',
    category: 'Maintenance',
    description: 'Control panel buttons and display are not responding',
    isExpanded: false,
    causes: [
      {
        id: '6-1',
        question: 'Lexan window needs cleaning.',
        action: 'Lexan can be gently washed using mild soap or detergent with a soft cloth. You may also use organic solvents such as aliphatic hydrocarbons, kerosene, or naphtha. To remove light scratches, try using automotive wax.',
        isExpanded: false
      }
    ]
  }
];

function App() {
  const [issues, setIssues] = useState<Issue[]>(initialIssues);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [modalMediaUrl, setModalMediaUrl] = useState<string | null>(null);
  const [modalMediaType, setModalMediaType] = useState<'image' | 'video' | null>(null);

  const categories = ['All', ...Array.from(new Set(initialIssues.map(issue => issue.category)))];

  const filteredIssues = issues.filter(issue => {
    const matchesSearch = issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         issue.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         issue.causes.some(cause => 
                           cause.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           cause.action.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    const matchesCategory = selectedCategory === 'All' || issue.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleIssue = (issueId: string) => {
    setIssues(prev => prev.map(issue => 
      issue.id === issueId ? { ...issue, isExpanded: !issue.isExpanded } : issue
    ));
  };

  const toggleCause = (issueId: string, causeId: string) => {
    setIssues(prev => prev.map(issue => 
      issue.id === issueId 
        ? {
            ...issue,
            causes: issue.causes.map(cause =>
              cause.id === causeId 
                ? { ...cause, isExpanded: !cause.isExpanded }
                : cause
            )
          }
        : issue
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-800 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mobile-header">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="https://www.inertcorp.com/wp-content/uploads/2024/01/logo-mobile-inter.png" 
                alt="INERT Logo" 
                className="h-10"
              />
              <div className="border-l border-gray-600 pl-4 ml-4 hidden sm:block">
                <h1 className="text-xl font-semibold">
                  System Troubleshooting Assistant
                </h1>
                <p className="text-gray-300 text-sm">
                  These are some of the most frequently asked questions and our responses
                </p>
              </div>
              <div className="sm:hidden">
                <h1 className="text-lg font-semibold">
                  Troubleshooting
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mobile-main">
          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
              <input
                type="text"
                placeholder="Search issues, causes, or solutions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white shadow-sm mobile-search"
              />
            </div>

            <div className="flex items-center space-x-4 mobile-filter-container">
              <Filter className="h-5 w-5 text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white shadow-sm font-medium mobile-filter-select"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-6">
            {filteredIssues.map(issue => (
              <div key={issue.id} className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-200 mobile-card">
                <div className="p-6 cursor-pointer hover:bg-gray-50 transition-colors mobile-card" onClick={() => toggleIssue(issue.id)}>
                  <div className="flex items-center justify-between mobile-card-header">
                    <div className="flex-1 mobile-card-content">
                      <div className="flex items-center space-x-3 mb-2 flex-wrap">
                        <AlertCircle className="h-6 w-6 text-red-500" />
                        <h3 className="text-xl font-semibold text-gray-900">{issue.title}</h3>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full border mobile-badge">
                          {issue.category}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{issue.description}</p>
                    </div>
                    <div className="ml-4 mobile-card-actions">
                      {issue.isExpanded ? <ChevronUp className="h-6 w-6 text-gray-500" /> : <ChevronDown className="h-6 w-6 text-gray-500" />}
                    </div>
                  </div>
                </div>

                {issue.isExpanded && (
                  <div className="border-t border-gray-200 bg-gray-50 p-6 space-y-3">
                    {issue.causes.map(cause => (
                      <div key={cause.id} className="bg-white rounded-lg border border-gray-200 shadow-sm">
                        <div className="p-4 cursor-pointer hover:bg-gray-50 mobile-cause" onClick={() => toggleCause(issue.id, cause.id)}>
                          <div className="flex justify-between items-center mobile-cause-header">
                            <div className="flex items-start space-x-3 mobile-cause-content">
                              <HelpCircle className="h-5 w-5 text-gray-500 mt-0.5" />
                              <div>
                                <span className="font-semibold text-gray-900">Cause: </span>
                                <span className="text-gray-700">{cause.question}</span>
                              </div>
                            </div>
                            <div className="mobile-cause-actions">
                              {cause.isExpanded ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
                            </div>
                          </div>
                        </div>

                        {cause.isExpanded && (
                          <div className="border-t border-gray-100 bg-green-50 p-4 flex space-x-4 items-start mobile-solution">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                            <div className="flex-1">
                              <span className="font-semibold text-gray-900">Solution: </span>
                              <span className="text-gray-700">{cause.action}</span>
                            </div>
                            {cause.mediaUrl && (
                              <div className="w-56 h-36 sm:w-64 sm:h-44 flex-shrink-0 cursor-pointer mobile-solution-media bg-green-50" onClick={() => {
                                setModalMediaUrl(cause.mediaUrl!);
                                setModalMediaType(cause.mediaType || 'image');
                              }}>
                                {cause.mediaType === 'video' ? (
                                  <iframe
                                    src={cause.mediaUrl}
                                    title="Solution video"
                                    className="w-full h-full rounded"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                  />
                                ) : (
                                  <img
                                    src={cause.mediaUrl}
                                    alt="Solution illustration"
                                    className="w-full h-full object-contain rounded"
                                  />
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {modalMediaUrl && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
              <div className="relative max-w-3xl w-full mx-4 mobile-modal">
                <button
                  className="absolute top-2 right-2 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full px-2 hover:bg-opacity-80 z-10"
                  onClick={() => {
                    setModalMediaUrl(null);
                    setModalMediaType(null);
                  }}
                >
                  &times;
                </button>
                {modalMediaType === 'video' ? (
                  <iframe
                    src={modalMediaUrl}
                    className="w-full h-[60vh] rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={modalMediaUrl}
                    alt="Zoomed media"
                    className="max-w-[90%] max-h-[70vh] mx-auto object-contain rounded-lg border-4 border-black bg-white p-2"
                  />
                )}
              </div>
            </div>
          )}
        </main>
    </div>
  );
};

export default App;


