import Link from 'next/link';
import { Home, Zap, UserCircle, BookOpen, ShoppingCart } from 'react-feather';
import { Button } from '@/components/ui/button';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">{children}</main>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-pink-200 mx-4 mt-6 rounded-t-3xl shadow-lg">
        <div className="grid grid-cols-5 px-2 py-4">
          <Link href="/" passHref>
            <Button variant="ghost" className="flex flex-col items-center gap-1 text-pink-600">
              <Home className="h-8 w-8" />
              <span className="text-xs font-medium">首页</span>
            </Button>
          </Link>
          <Button variant="ghost" className="flex flex-col items-center gap-1 text-purple-600 bg-purple-100">
            <Zap className="h-8 w-8" />
            <span className="text-xs font-medium">活动</span>
          </Button>
          <Link href="/my-learning" passHref>
            <Button variant="ghost" className="flex flex-col items-center gap-1 text-blue-600">
              <UserCircle className="h-8 w-8" />
              <span className="text-xs font-medium">我的学习</span>
            </Button>
          </Link>
          <Link href="/learning-center" passHref>
            <Button variant="ghost" className="flex flex-col items-center gap-1 text-green-600">
              <BookOpen className="h-8 w-8" />
              <span className="text-xs font-medium">学习中心</span>
            </Button>
          </Link>
          <Link href="/my-courses" passHref>
            <Button variant="ghost" className="flex flex-col items-center gap-1 text-yellow-600">
              <ShoppingCart className="h-8 w-8" />
              <span className="text-xs font-medium">我的课程</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

