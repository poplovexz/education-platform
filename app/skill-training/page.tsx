import Link from 'next/link';
import { HomeIcon, Zap, UserCircle, BookOpen, ShoppingCart } from '@heroicons/react/solid';
import Button from '../components/Button';


function MyApp() {
  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-blue-100 to-indigo-50 min-h-screen pb-4">
      {/* Hero Section */}
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-2">Welcome to My App!</h1>
        <p className="text-gray-600">This is a simple Next.js application.</p>
      </div>

      {/* Success Stories */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">Success Stories</h2>
        <p className="text-gray-600">Here are some success stories from our users.</p>
        {/* Add success story images here with the new URL */}
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NNB5zC6TU422hfhAiySMZokgQ11Pm0.png" alt="Success Story 1" className="w-full h-auto mb-4"/>
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NNB5zC6TU422hfhAiySMZokgQ11Pm0.png" alt="Success Story 2" className="w-full h-auto mb-4"/>

      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 mx-4 mt-4 rounded-lg">
        <div className="grid grid-cols-5 px-2 py-1">
          <Link href="/" passHref>
            <Button variant="ghost" className="flex flex-col items-center gap-0.5">
              <HomeIcon className="h-5 w-5" />
              <span className="text-xs">首页</span>
            </Button>
          </Link>
          <Button variant="ghost" className="flex flex-col items-center gap-0.5">
            <Zap className="h-5 w-5" />
            <span className="text-xs">活动</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-0.5">
            <UserCircle className="h-5 w-5" />
            <span className="text-xs">会员中心</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-0.5">
            <BookOpen className="h-5 w-5" />
            <span className="text-xs">学习中心</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-0.5">
            <ShoppingCart className="h-5 w-5" />
            <span className="text-xs">我的课程</span>
          </Button>
        </div>
      </div>

    </div>
  );
}

export default MyApp;

