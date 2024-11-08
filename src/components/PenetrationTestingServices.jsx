import React from 'react';

const PenetrationTestingServices = () => {
  return (
    <section className="pages-vertical-padding bg-[#0E0E0E] text-white">
      <div className="container flex justify-center items-center flex-col">
        <h1 className="heading-font-sizes font-semibold md:max-w-[660px] lg:max-w-[964px] text-center mb-[40px] lg:mb-24">
          Our Network Penetration Testing Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-center lg:w-[960px] md:max-w-[710px] lg:gap-24 gap-6 md:gap-7">
          <div className="space-y-6">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Network Penetration Testing:</h3>
              <ul className="list-disc text-lg space-y-4 pl-5">
                <li>Vulnerability scanning</li>
                <li>Firewall testing</li>
                <li>Wireless network assessment</li>
                <li>Intrusion detection system testing</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Cloud Infrastructure Penetration Testing:</h3>
              <ul className="list-disc text-lg space-y-4 pl-5">
                <li>Misconfigurations</li>
                <li>Weak access controls</li>
                <li>Data exposure risks</li>
                <li>Insecure network configurations</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6 md:mt-7">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Web Application Penetration Testing:</h3>
              <ul className="list-disc text-lg space-y-4 pl-5">
                <li>Injection attacks</li>
                <li>Cross-site scripting (XSS)</li>
                <li>Cross-site request forgery (CSRF)</li>
                <li>Session management vulnerabilities</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Mobile Application Penetration Testing:</h3>
              <ul className="list-disc text-lg space-y-4 pl-5">
                <li>Insecure data storage</li>
                <li>Weak authentication</li>
                <li>Insecure network communication</li>
                <li>Insecure APIs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PenetrationTestingServices;
