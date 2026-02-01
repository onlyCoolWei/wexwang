export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            欢迎来到我的个人介绍
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            这是一个使用 Next.js 构建的个人介绍网站。
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">技术栈</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Next.js 14</li>
                <li>React 18</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
