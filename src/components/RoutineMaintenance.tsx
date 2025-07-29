import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Calendar,
  Clock,
  AlertTriangle,
  Wrench,
  CheckCircle,
  Settings,
  Shield,
  Filter,
  Eye,
  Zap,
  Package,
  Fan,
  Hand,
  Crosshair,
  Database
} from 'lucide-react';

interface MaintenanceSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  frequency?: string;
  content: React.ReactNode;
  isExpanded: boolean;
}

interface RoutineMaintenanceProps {
  onNavigateBack: () => void;
}

const RoutineMaintenance: React.FC<RoutineMaintenanceProps> = ({ onNavigateBack }) => {
  const [sections, setSections] = useState<MaintenanceSection[]>([
    {
      id: '1',
      title: 'Daily Tasks',
      icon: <Clock className="h-5 w-5" />,
      frequency: 'Daily',
      isExpanded: false,
      content: (
        <div className="space-y-4">

          <ul className="space-y-3 mobile-list">
            <li className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Check the <strong>gloves</strong> for wear or holes. Check that they are seated properly and that the exterior O-rings are in place. Replace worn or defective gloves or O-rings as soon as possible. See "<u>Removal and Replacement Procedures</u>" below.</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Inspect the <strong>exterior</strong> of the system. Ensure that it is kept free from excessive dirt. Check that the <strong>piping</strong> is intact and that all <strong>gas supply</strong> and <strong>vent lines</strong> are well connected. If necessary, clean the exterior. Tighten any loose connections.</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Check that the <strong>gas supply</strong> is sufficient and the <strong>flow</strong> is adequate. If necessary, replace the gas supply and adjust the flow rate.</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: '2',
      title: 'Weekly Tasks',
      icon: <Calendar className="h-5 w-5" />,
      frequency: 'Weekly',
      isExpanded: false,
      content: (
        <ul className="space-y-3 mobile-list">
          <li className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span>Check and replace, if necessary, the <strong>vacuum pump oil</strong>. This step is crucial to the life of the pump and its ability to perform to specifications. Because each pump is different, refer to the <strong>pump manual</strong> for service procedures.</span>
          </li>
          <li className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span>Check the <strong>ante chambers O-rings</strong>. Replace them if they are worn.</span>
          </li>
          <li className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span>Check the <strong>box filters</strong>. Replace if necessary.</span>
          </li>
        </ul>
      )
    },
    {
      id: '3',
      title: 'Annual or Semi-Annual Tasks',
      icon: <Crosshair className="h-5 w-5" />,
      frequency: 'Annual/Semi-Annual',
      isExpanded: false,
      content: (
        <ul className="space-y-3 mobile-list">
          <li className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span>If the purification <strong>capability of the column</strong> is not sufficient (it can no longer maintain low oxygen and moisture levels), regenerate the column material.</span>
          </li>
          <li className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span>If time between regenerations has become minimal, replace <strong>column material</strong>.</span>
          </li>
          <li className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span>Replace glovebox <strong>HEPA filters</strong>.</span>
          </li>
        </ul>
      )
    },
    {
      id: '4',
      title: 'Safety Inspections',
      icon: <Shield className="h-5 w-5" />,
      frequency: 'Regular',
      isExpanded: false,
      content: (
        <div className="space-y-4">
          <ul className="space-y-3 mobile-list">
            <li className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
              <span>Inspect all box wiring for signs of wear or damage. Replace any suspect wiring found during the inspection.</span>
            </li>
            <li className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
              <span>Inspect the <strong>window</strong> for signs of stress or cracks. Replace as needed.</span>
            </li>
          </ul>
          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <div className="flex items-start space-x-2">
              <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <p className="text-red-800"><strong>Warning:</strong> Never place or stack materials, tools, or documentation on any part of the PureLab HE exterior surfaces except for those that are designed for such purposes. Vibration or contact with people or other objects may cause the items to fall.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: '5',
      title: 'Removal and Replacement Procedures',
      icon: <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />,
      isExpanded: false,
      content: (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-yellow-800">These procedures are intended to be a guideline for removing and replacing various components of the system. They are not intended to be exact step-by-step instructions. It is assumed that the person using these procedures is capable of performing basic mechanical and electrical tasks.</p>
        </div>
      )
    },
    {
      id: '6',
      title: 'Blower',
      icon: <Fan className="h-5 w-5" />,
      isExpanded: false,
      content: (
        <div className="space-y-4">
          <p className="font-medium">To replace the blower, proceed as follows:</p>
          <ol className="space-y-2 list-decimal list-inside mobile-list">
            <li>Turn off the blower. (EOS-2 Analyzers must have their blank cap on. See page 43.)</li>
            <li>Turn off the system main power.</li>
            <li>Remove the right-side panel from the purifier module.</li>
            <li>Remove the electrical connector from the blower.</li>
            <li>Loosen and remove the two clamps that attach the piping. Cover the opening with KF-40 blanks or plastic caps to prevent excess outside air from entering the system.</li>
            <li>Remove the blower box assembly and replace it with a new one.</li>
            <li>Purge the box piping with working gas.</li>
            <li>Connect the piping with the clamps.</li>
            <li>Connect the electrical connector.</li>
            <li>Power the system on and check for leaks.</li>
          </ol>
        </div>
      )
    },
    {
      id: '7',
      title: 'Column',
      icon: <Database className="h-5 w-5" />,
      isExpanded: false,
      content: (
        <div className="space-y-4">
          <p className="font-medium">To replace the material in the purifier column you will need a vacuum cleaner, funnel, and waste bins to collect old material.</p>
          <ol className="space-y-2 list-decimal list-inside mobile-list">
            <li>Turn off the blower. (EOS-2 Analyzers must have their blank cap on. See page 43.)</li>
            <li>Turn off the system main power.</li>
            <li>Place the waste bin under the bottom port of the column.</li>
            <li>Remove the two KF-40 clamps and blanks from the side of the column.</li>
          </ol>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
            <p className="text-blue-800"><strong>NOTE:</strong> As soon as the bottom blank is removed the filter material will begin to come out.</p>
          </div>
          <ol className="space-y-2 list-decimal list-inside mobile-list" start={5}>
            <li>Drain the old material and use the vacuum to remove any remaining material.</li>
            <li>Empty the entire contents of the purifier according to your safety regulations.</li>
            <li>Replace the blank onto the bottom port of the column.</li>
            <li>Use the funnel in the top port of the column and add half of the molecular sieve, all of the copper catalyst, and then the rest of the sieve.</li>
            <li>Replace the blank to the top port of the column. Be certain that KF-40 connections are tight.</li>
            <li>Restore the main power to the system.</li>
            <li>Perform two regenerations of the column for optimum performance.</li>
            <li>Resume normal system operation.</li>
          </ol>
        </div>
      )
    },
    {
      id: '8',
      title: 'Filters',
      icon: <Filter className="h-5 w-5" />,
      isExpanded: false,
      content: (
        <p>To replace the box filters, simply exchange them with new filters. They are installed hand tight and should be replaced the same way. Turn clockwise to install. Turn counterclockwise to remove.</p>
      )
    },
    {
  id: '9',
  title: 'Gloves & Related Components',
  icon: <Hand className="h-5 w-5" />,
  isExpanded: false,
  content: (
  <div className="space-y-6">

    {/* Warning block */}
    <div className="bg-red-50 border-l-4 border-red-400 p-4">
      <div className="flex items-start space-x-2">
        <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
        <p className="text-red-800">
          <strong>WARNING:</strong> Replacing a glove increases the risk of exposing the system to the outside environment. Prior to proceeding, ensure that every precaution is taken to protect the contents of the box.
        </p>
      </div>
    </div>

    {/* Centered image */}
    <div className="flex justify-center">
      <img 
        src="https://i.imgur.com/MtJUykU.png" 
        alt="Gloves - Figure 43" 
        className="max-w-md rounded-lg shadow-md w-full h-auto"
      />
    </div>

      {/* 9.1 */}
      <ExpandableSubsection
        id="9.1"
        title="Replacement With Internal Glove Port Cover"
        content={
          <>
            <p>An internal glove port cover is used to seal off the glove port from the inside of the PureLab HE.</p>
            <ol className="list-decimal list-inside space-y-1 text-sm mt-2 mobile-list">
              <li>If the glove port cover is not inside the PureLab HE, bring it in via the Antechamber.</li>
              <li>Install and tighten the glove port cover on the port that has the glove that is to be replaced.</li>
              <li>Remove the O-rings that hold the glove onto the glove port.</li>
              <li>Remove the old glove and discard it properly.</li>
              <li>Compress the new glove as much as possible to remove excess air.</li>
              <li>Install the new glove over the glove port.</li>
              <li>If possible, purge the new glove by venting working gas into it via a separate gas line.</li>
              <li>Install the O-rings onto the new glove port, over the new glove.</li>
              <li>Remove the internal glove port.</li>
            </ol>
          </>
        }
      />

      {/* 9.2 */}
      <ExpandableSubsection
        id="9.2"
        title="Replacement Without Internal Glove Port Cover"
        content={
          <ol className="list-decimal list-inside space-y-1 text-sm mobile-list">
            <li>Press the glove that is to be replaced into the box.</li>
            <li>Remove the inner glove port O-ring (closest to the window).</li>
            <li>Fold back the glove onto the outer O-ring without letting it come off the port.</li>
            <li>Compress the new glove to remove excess air.</li>
            <li>Install the new glove over the glove port, over the old glove.</li>
            <li>Install the inner O-ring over the new glove.</li>
            <li>Purge the glove with working gas if possible.</li>
            <li>From inside the box, pull in the old glove.</li>
            <li>Install the outer O-ring over the new glove.</li>
            <li>Remove and discard the old glove via the antechamber.</li>
          </ol>
        }
      />
    {/* 9.3 */}
      <ExpandableSubsection
        id="9.3"
        title="Control Box Panel"
        content={
          <p className="text-sm mobile-list">The control box includes circuit breakers, electronics, power supply, and relays. Some may require backing plate removal.</p>
        }
      />
        {/* 9.4 */}
      <ExpandableSubsection
        id="9.4"
        title="Circuit Breakers"
        content={
              <ol className="list-decimal list-inside space-y-1 mobile-list">
                <li>Remove AC power from source.</li>
                <li>Disconnect connectors using pliers (not by pulling wires).</li>
                <li>Press breaker tabs and remove from door.</li>
                <li>Install new breaker in reverse order.</li>
              </ol>
        }
      />
            {/* 9.5 */}
      <ExpandableSubsection
        id="9.5"
        title="Power Supply"
        content={
              <ol className="list-decimal list-inside space-y-1 mobile-list">
                <li>Remove system AC power.</li>
                <li>Disconnect DC (blue/white) and AC cables.</li>
                <li>Release bottom clip from DIN rail.</li>
                <li>Reinstall in reverse order.</li>
              </ol>
        }
      />
            {/* 9.6 */}
      <ExpandableSubsection
        id="9.6"
        title="Solid State Relays"
        content={
              <ol className="list-decimal list-inside space-y-1 mobile-list">
                <li>Mark and disconnect DC and AC wiring.</li>
                <li>Unscrew SSR from backing panel.</li>
                <li>Reinstall in reverse order.</li>
              </ol>
        }
      />
             {/* 9.7 */}
      <ExpandableSubsection
        id="9.7"
        title="Valves"
        content={
              <ol className="list-decimal list-inside space-y-1 mobile-list">
                <li>Remove PureLab HE AC power.</li>
                <li>Turn off gas/vacuum sources accordingly.</li>
                <li>Remove electrical connection and solenoid.</li>
                <li>Replace in reverse order and test for leaks.</li>
              </ol>
        }
      />
              {/* 9.8 */}
      <ExpandableSubsection
        id="9.8"
        title="Vacuum Pump"
        content={
              <ol className="list-decimal list-inside space-y-1 mobile-list">
                <li>Remove power and disconnect clamps.</li>
                <li>Unbolt and remove old pump.</li>
                <li>Install new pump, add oil, power on, test.</li>
              </ol>
        }
      />

    </div>
  )
},
    {
      id: '10',
      title: 'Window',
      icon: <Eye className="h-5 w-5" />,
      isExpanded: false,
      content: (
        <div className="space-y-4">
          <p className="font-medium">Replacing a window requires the box to be exposed to open air, then purged, and possibly regenerated. Contact INERT for the crashing the box procedure if intended.</p>
          <ol className="space-y-2 list-decimal list-inside mobile-list">
            <li>Turn off the system main power. (EOS-2 must be blanked. See Page 43.)</li>
            <li>Remove all of the bolts from the window frame and remove the frame.</li>
            <li>Remove the window and discard properly.</li>
            <li>Ensure that the window gasket is completely attached to the box frame and that it is free from all dirt or other material that would prevent a good seal.</li>
            <li>Mount the new window. Ensure that the window is sitting above the window shims (clear plastic material along the bottom edge).</li>
            <li>Position the window frame over the window and insert all corner bolts, but do not tighten them.</li>
            <li>Insert the remaining bolts while ensuring the window is properly positioned.</li>
            <li>Tighten all bolts. Torque to 15-inch pounds, and then purge the box.</li>
          </ol>
        </div>
      )
    },
    {
      id: '11',
      title: 'Spare Parts',
      icon: <Package className="h-5 w-5" />,
      isExpanded: false,
      content: (
        <div className="space-y-4">
          <div className="overflow-x-auto mobile-table-container">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg mobile-table">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Part #</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Component</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Tag #</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">X800024</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">.3 Micron Filters</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">F001-F002</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">G8B1532-9.75 L / R</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Butyl Glovebox Gloves 15 mm thick</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">GLV01</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">G8B1532-9.75 A</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Amb Butyl Glovebox Gloves 15 mm thick</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">GLV02</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">G8B3032-9.75 L / R</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Butyl Glovebox Gloves 30 mm thick</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">GLV03</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">G8B3032-9.75 A</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Amb Butyl Glovebox Gloves 30 mm thick</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">GLV04</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-mono text-gray-900">
                    X800022 (WELDED)<br />
                    X800130 (BOLTED)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">15" Antechamber Door O-rings</td>
                  <td className="px-6 py-4 text-sm font-mono text-gray-900">ACR01-ACRO2</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">X800020</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">6" Mini Antechamber Door O-rings</td>
                  <td className="px-6 py-4 text-sm font-mono text-gray-900">ACR03-ACR04</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <p className="text-blue-800">Several spare parts for the PureLab HE are specific to the voltage and region where the system has been shipped to. Please contact Inert's service department for questions or pricing of spare parts, help, or support.</p>
          </div>
        </div>
      )
    }
  ]);

  const toggleSection = (sectionId: string) => {
    setSections(prev => prev.map(section => 
      section.id === sectionId ? { ...section, isExpanded: !section.isExpanded } : section
    ));
  };

const scrollToSection = (sectionId: string) => {
  setSections(prev =>
    prev.map(section =>
      section.id === sectionId
        ? { ...section, isExpanded: true }
        : { ...section, isExpanded: false }
    )
  );

  // Laisse le temps à React d’ouvrir la section avant de faire défiler
  setTimeout(() => {
    const element = document.getElementById(`section-${sectionId}`);
    if (element) {
      const yOffset = -100; // ajuste selon la hauteur de ton en-tête
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, 100); // petit délai (100ms)
};

  return (
    <>
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mobile-main">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-md mb-6">
      <p className="text-blue-800 font-medium">
        Regular preventive maintenance will reduce issues that cause down time while increasing the overall performance of the system. The following are the recommended minimum levels of service for the PureLab HE.
      </p>
    </div>
      {/* Table of Contents */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 mb-8 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
          <span>Table of Contents</span>
        </h2>
        <div className="space-y-3 mobile-toc">
          {/* First row: blocks 1-3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {sections.slice(0, 3).map(section => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg border border-gray-200 transition-colors group mobile-toc-item"
              >
                <div className="text-red-500 group-hover:text-red-600">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 flex-wrap">
                    <span className="text-sm font-medium text-gray-600">{section.id}</span>
                    {section.frequency && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full mobile-badge">
                        {section.frequency}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-900 font-medium">{section.title}</div>
                </div>
              </button>
            ))}
          </div>
          
          {/* Second row: blocks 4-5 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {sections.slice(3, 5).map(section => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg border border-gray-200 transition-colors group mobile-toc-item"
              >
                <div className="text-red-500 group-hover:text-red-600">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 flex-wrap">
                    <span className="text-sm font-medium text-gray-600">{section.id}</span>
                    {section.frequency && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full mobile-badge">
                        {section.frequency}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-900 font-medium">{section.title}</div>
                </div>
              </button>
            ))}
          </div>
          
          {/* Third row: block 6 (Blower) starting new row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {sections.slice(5, 8).map(section => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg border border-gray-200 transition-colors group mobile-toc-item"
              >
                <div className="text-red-500 group-hover:text-red-600">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 flex-wrap">
                    <span className="text-sm font-medium text-gray-600">{section.id}</span>
                    {section.frequency && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full mobile-badge">
                        {section.frequency}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-900 font-medium">{section.title}</div>
                </div>
              </button>
            ))}
          </div>
          
          {/* Remaining blocks: 7-11 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {sections.slice(8).map(section => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg border border-gray-200 transition-colors group mobile-toc-item"
              >
                <div className="text-red-500 group-hover:text-red-600">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 flex-wrap">
                    <span className="text-sm font-medium text-gray-600">{section.id}</span>
                    {section.frequency && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full mobile-badge">
                        {section.frequency}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-900 font-medium">{section.title}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Maintenance Sections */}
      <div className="space-y-6">
        {sections.map(section => (
          <div 
            key={section.id} 
            id={`section-${section.id}`}
            className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-200"
          >
      <div 
        className={`p-6 ${section.id !== '5' ? 'cursor-pointer hover:bg-gray-50' : ''} transition-colors mobile-maintenance-section`} 
        onClick={() => {
          if (section.id !== '5') toggleSection(section.id);
        }}
      >
              <div className="flex items-center justify-between mobile-maintenance-header">
                <div className="flex items-center space-x-4">
                  <div className="text-red-500">
                    {section.icon}
                  </div>
                  <div>
                    <div className="flex items-center space-x-3 mb-1 flex-wrap">
                      <span className="text-lg font-semibold text-gray-900 mobile-maintenance-title">{section.id}</span>
                      <h3 className="text-xl font-semibold text-gray-900 mobile-maintenance-title">{section.title}</h3>
                      {section.frequency && (
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mobile-badge">
                          {section.frequency}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                {section.id !== '5' && (
                  <div className="ml-4">
                    {section.isExpanded ? 
                      <ChevronUp className="h-6 w-6 text-gray-500" /> : 
                      <ChevronDown className="h-6 w-6 text-gray-500" />
                    }
                  </div>
                )}
              </div>
            </div>

            {(section.isExpanded || section.id === '5') && (
              <div className="border-t border-gray-200 bg-gray-50 p-6 mobile-maintenance-content">
                <div className="prose max-w-none">
                  {section.content}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
    </>
  );
};
const ExpandableSubsection: React.FC<{
  id: string;
  title: string;
  content: React.ReactNode;
  alwaysOpen?: boolean;
}> = ({ id, title, content, alwaysOpen = false }) => {
  const [open, setOpen] = useState(alwaysOpen);

  return (
    <div className="border border-gray-200 rounded-md bg-white shadow-sm mobile-subsection">
      {!alwaysOpen ? (
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between items-center px-4 py-2 text-left hover:bg-gray-50 mobile-subsection-header"
        >
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium text-gray-600">{id}</span>
            <span className="text-sm text-gray-900 font-semibold">{title}</span>
          </div>
          {open ? (
            <ChevronUp className="h-4 w-4 text-gray-500" />
          ) : (
            <ChevronDown className="h-4 w-4 text-gray-500" />
          )}
        </button>
      ) : (
        <div className="w-full flex justify-between items-center px-4 py-2 mobile-subsection-header">
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium text-gray-600">{id}</span>
            <span className="text-sm text-gray-900 font-semibold">{title}</span>
          </div>
        </div>
      )}

      {(open || alwaysOpen) && (
        <div className="p-4 bg-gray-50 text-sm border-t border-gray-200 mobile-subsection-content">
          {content}
        </div>
      )}
    </div>
  );
};

export default RoutineMaintenance;