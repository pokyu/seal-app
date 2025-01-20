import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            关于我们
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            欢迎来到我们的网站
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                我们的使命
              </h2>
              <p className="text-gray-600">
                我们致力于为用户提供最优质的服务和体验，不断创新和改进我们的产品。
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                我们的愿景
              </h2>
              <p className="text-gray-600">
                成为行业内最受信赖的合作伙伴，为客户创造持续的价值。
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              联系我们
            </h2>
            <p className="text-gray-600">
              电子邮件：contact@example.com<br />
              电话：+86 123 4567 8900<br />
              地址：中国北京市朝阳区xxx街xxx号
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
