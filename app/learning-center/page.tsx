import { Search, BookOpen, GraduationCap, Award, Clock, Briefcase, Zap, UserCircle, ShoppingCart, HomeIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from 'next/link'

export default function LearningCenter() {
  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-blue-100 to-indigo-50 min-h-screen pb-4">
      {/* Header */}
      <header className="p-4 flex items-center gap-4">
        <Link href="/" passHref>
          <button className="text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
        </Link>
        <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NNB5zC6TU422hfhAiySMZokgQ11Pm0.png" alt="Learning Center Logo" width={40} height={40} className="w-10" />
        <div className="flex-1 relative">
          <Input 
            type="search" 
            placeholder="搜索学习资源" 
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </header>

      {/* Navigation Pills */}
      <div className="flex gap-2 px-4 overflow-x-auto no-scrollbar">
        <Badge variant="secondary" className="bg-blue-100 text-blue-500 hover:bg-blue-200">
          全部资源
        </Badge>
        <Badge variant="secondary" className="whitespace-nowrap">视频课程</Badge>
        <Badge variant="secondary" className="whitespace-nowrap">练习题</Badge>
        <Badge variant="secondary" className="whitespace-nowrap">学习计划</Badge>
        <Badge variant="secondary" className="whitespace-nowrap">学习工具</Badge>
      </div>

      {/* Banner */}
      <div className="p-4">
        <div className="bg-gradient-to-r from-blue-200 to-indigo-200 rounded-lg p-4">
          <h2 className="text-lg font-bold mb-2">欢迎来到学习中心</h2>
          <p className="text-sm text-gray-700">这里有丰富的学习资源，帮助你更好地学习和成长。</p>
        </div>
      </div>

      {/* Learning Resources */}
      <div className="grid grid-cols-2 gap-4 px-4 py-6 bg-white">
        <Button variant="outline" className="flex flex-col items-center gap-1 h-auto py-4">
          <BookOpen className="h-6 w-6 text-blue-500" />
          <span className="text-xs">在线课程</span>
        </Button>
        <Button variant="outline" className="flex flex-col items-center gap-1 h-auto py-4">
          <GraduationCap className="h-6 w-6 text-blue-500" />
          <span className="text-xs">学习进度</span>
        </Button>
        <Button variant="outline" className="flex flex-col items-center gap-1 h-auto py-4">
          <Award className="h-6 w-6 text-blue-500" />
          <span className="text-xs">成就徽章</span>
        </Button>
        <Button variant="outline" className="flex flex-col items-center gap-1 h-auto py-4">
          <Clock className="h-6 w-6 text-blue-500" />
          <span className="text-xs">学习计划</span>
        </Button>
      </div>

      {/* Recent Courses */}
      <div className="p-4">
        <Card className="p-4">
          <h3 className="font-bold mb-4 flex items-center gap-2">
            最近学习的课程
            <Badge variant="secondary" className="bg-green-100 text-green-500">
              继续学习
            </Badge>
          </h3>
          <div className="space-y-4">
            <div className="flex gap-4 items-center">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NNB5zC6TU422hfhAiySMZokgQ11Pm0.png" 
                alt="Math Course" 
                width={60} 
                height={60} 
                className="rounded"
              />
              <div className="flex-1">
                <div className="font-semibold">趣味数学</div>
                <div className="text-sm text-gray-500">已完成 60%</div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NNB5zC6TU422hfhAiySMZokgQ11Pm0.png" 
                alt="English Course" 
                width={60} 
                height={60} 
                className="rounded"
              />
              <div className="flex-1">
                <div className="font-semibold">英语阅读</div>
                <div className="text-sm text-gray-500">已完成 40%</div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '40%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Learning Tools */}
      <div className="p-4 bg-gradient-to-r from-indigo-100 to-blue-200 mx-4 rounded-lg mt-4">
        <h3 className="font-bold mb-4">学习工具</h3>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="secondary" className="flex items-center gap-2 h-auto py-3">
            <Briefcase className="h-5 w-5" />
            <span>作业管理器</span>
          </Button>
          <Button variant="secondary" className="flex items-center gap-2 h-auto py-3">
            <Clock className="h-5 w-5" />
            <span>学习计时器</span>
          </Button>
          <Button variant="secondary" className="flex items-center gap-2 h-auto py-3">
            <BookOpen className="h-5 w-5" />
            <span>笔记本</span>
          </Button>
          <Button variant="secondary" className="flex items-center gap-2 h-auto py-3">
            <GraduationCap className="h-5 w-5" />
            <span>知识图谱</span>
          </Button>
        </div>
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
          <Link href="/activities" passHref>
            <Button variant="ghost" className="flex flex-col items-center gap-0.5">
              <Zap className="h-5 w-5" />
              <span className="text-xs">活动</span>
            </Button>
          </Link>
          <Link href="/my-learning" passHref>
            <Button variant="ghost" className="flex flex-col items-center gap-0.5">
              <UserCircle className="h-5 w-5" />
              <span className="text-xs">我的学习</span>
            </Button>
          </Link>
          <Button variant="ghost" className="flex flex-col items-center gap-0.5 bg-gray-100">
            <BookOpen className="h-5 w-5" />
            <span className="text-xs">学习中心</span>
          </Button>
          <Link href="/my-courses" passHref>
            <Button variant="ghost" className="flex flex-col items-center gap-0.5">
              <ShoppingCart className="h-5 w-5" />
              <span className="text-xs">我的课程</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

