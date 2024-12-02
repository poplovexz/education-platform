import { Search, BookOpen, GraduationCap, Award, Clock, Briefcase, HomeIcon, Zap, UserCircle, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from 'next/link'

export default function MyLearning() {
  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-pink-100 to-purple-100 min-h-screen pb-4">
      {/* Header */}
      <header className="p-4 flex items-center gap-4 bg-white rounded-b-3xl shadow-md">
        <Link href="/" passHref>
          <button className="text-pink-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
        </Link>
        <div className="flex-1 text-lg font-semibold text-purple-800">我的学习</div>
      </header>

      {/* Learning Progress */}
      <div className="p-4">
        <Card className="p-6 rounded-3xl shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-purple-800">学习进度</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">总体进度</span>
                <span className="text-sm font-medium text-pink-600">65%</span>
              </div>
              <div className="w-full bg-pink-100 rounded-full h-3">
                <div className="bg-pink-500 h-3 rounded-full" style={{width: '65%'}}></div>
              </div>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">已完成课程: <span className="text-purple-600 font-semibold">3</span></span>
              <span className="text-gray-600">进行中课程: <span className="text-purple-600 font-semibold">2</span></span>
            </div>
          </div>
        </Card>
      </div>

      {/* Current Courses */}
      <div className="p-4 space-y-4">
        <h3 className="text-xl font-bold text-purple-800">当前学习的课程</h3>
        <Card className="p-4 rounded-2xl shadow-md">
          <div className="flex gap-4">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NNB5zC6TU422hfhAiySMZokgQ11Pm0.png"
              alt="趣味数学" 
              width={80} 
              height={80} 
              className="rounded-xl object-cover shadow-sm"
            />
            <div className="flex-1">
              <div className="font-semibold text-purple-700">趣味数学</div>
              <div className="text-sm text-gray-600 mb-2">进度: 75%</div>
              <div className="w-full bg-pink-100 rounded-full h-2.5">
                <div className="bg-pink-500 h-2.5 rounded-full" style={{width: '75%'}}></div>
              </div>
              <Button variant="outline" size="sm" className="mt-3 border-pink-300 text-pink-600 hover:bg-pink-50">
                继续学习
              </Button>
            </div>
          </div>
        </Card>
        <Card className="p-4 rounded-2xl shadow-md">
          <div className="flex gap-4">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NNB5zC6TU422hfhAiySMZokgQ11Pm0.png"
              alt="英语阅读" 
              width={80} 
              height={80} 
              className="rounded-xl object-cover shadow-sm"
            />
            <div className="flex-1">
              <div className="font-semibold text-purple-700">英语阅读</div>
              <div className="text-sm text-gray-600 mb-2">进度: 40%</div>
              <div className="w-full bg-pink-100 rounded-full h-2.5">
                <div className="bg-pink-500 h-2.5 rounded-full" style={{width: '40%'}}></div>
              </div>
              <Button variant="outline" size="sm" className="mt-3 border-pink-300 text-pink-600 hover:bg-pink-50">
                继续学习
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Learning Achievements */}
      <div className="p-6 bg-gradient-to-r from-pink-200 to-purple-200 mx-4 rounded-3xl mt-6 shadow-lg">
        <h3 className="text-xl font-bold mb-4 text-purple-800">学习成就</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center bg-white p-4 rounded-2xl shadow-md">
            <Award className="h-16 w-16 text-yellow-500 mb-2" />
            <span className="text-sm text-center text-gray-600 font-medium">数学小达人</span>
          </div>
          <div className="flex flex-col items-center bg-white p-4 rounded-2xl shadow-md">
            <BookOpen className="h-16 w-16 text-blue-500 mb-2" />
            <span className="text-sm text-center text-gray-600 font-medium">阅读之星</span>
          </div>
          <div className="flex flex-col items-center bg-white p-4 rounded-2xl shadow-md">
            <Clock className="h-16 w-16 text-green-500 mb-2" />
            <span className="text-sm text-center text-gray-600 font-medium">学习时长冠军</span>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-pink-200 mx-4 mt-6 rounded-t-3xl shadow-lg">
        <div className="grid grid-cols-5 px-2 py-4">
          <Link href="/" passHref>
            <Button variant="ghost" className="flex flex-col items-center gap-1 text-pink-600">
              <HomeIcon className="h-8 w-8" />
              <span className="text-xs font-medium">首页</span>
            </Button>
          </Link>
          <Link href="/activities" passHref>
            <Button variant="ghost" className="flex flex-col items-center gap-1 text-purple-600">
              <Zap className="h-8 w-8" />
              <span className="text-xs font-medium">活动</span>
            </Button>
          </Link>
          <Button variant="ghost" className="flex flex-col items-center gap-1 text-blue-600 bg-blue-100">
            <UserCircle className="h-8 w-8" />
            <span className="text-xs font-medium">我的学习</span>
          </Button>
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
  )
}

