import { Search, Crown, Gift, FlameIcon as Fire, BookOpen, GraduationCap, Monitor, Coffee, PenTool } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { HomeIcon, Zap, UserCircle, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export default function EducationMall() {
  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-blue-100 to-indigo-50 min-h-screen pb-16">
      {/* Header */}
      <header className="p-4 flex items-center gap-4">
        <button className="text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <Image src="/placeholder.svg" alt="EduMall Logo" width={40} height={40} className="w-10" />
        <div className="flex-1 relative">
          <Input 
            type="search" 
            placeholder="搜索课程" 
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </header>

      {/* Navigation Pills */}
      <div className="flex gap-2 px-4 overflow-x-auto no-scrollbar">
        <Badge variant="secondary" className="bg-blue-100 text-blue-500 hover:bg-blue-200">
          优惠券
        </Badge>
        <Badge variant="secondary" className="whitespace-nowrap">热门课程</Badge>
        <Badge variant="secondary" className="whitespace-nowrap">考试认证</Badge>
        <Badge variant="secondary" className="whitespace-nowrap">1元课程</Badge>
        <Badge variant="secondary" className="whitespace-nowrap">技能提升</Badge>
      </div>

      {/* Banner */}
      <div className="p-4">
        <div className="bg-gradient-to-r from-blue-200 to-indigo-200 rounded-lg p-4">
          <h2 className="text-lg font-bold mb-2">暑期课程大促销</h2>
          <div className="flex gap-2">
            <Image src="/placeholder.svg" alt="Summer Courses" width={100} height={100} className="rounded" />
            <Image src="/placeholder.svg" alt="Special Offer" width={100} height={100} className="rounded" />
          </div>
        </div>
      </div>

      {/* Category Icons */}
      <div className="grid grid-cols-5 gap-4 px-4 py-6 bg-white">
        <Link href="/academic-advancement" passHref>
          <Button variant="ghost" className="flex flex-col items-center gap-1">
            <GraduationCap className="h-6 w-6 text-blue-500" />
            <span className="text-xs">学历提升</span>
          </Button>
        </Link>
        <Button variant="ghost" className="flex flex-col items-center gap-1">
          <BookOpen className="h-6 w-6 text-blue-500" />
          <span className="text-xs">技能培训</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center gap-1">
          <Monitor className="h-6 w-6 text-blue-500" />
          <span className="text-xs">在线课程</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center gap-1">
          <Coffee className="h-6 w-6 text-blue-500" />
          <span className="text-xs">兴趣爱好</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center gap-1">
          <PenTool className="h-6 w-6 text-blue-500" />
          <span className="text-xs">考试辅导</span>
        </Button>
      </div>

      {/* Flash Sale */}
      <div className="p-4">
        <Card className="p-4">
          <h3 className="font-bold mb-4 flex items-center gap-2">
            限时特价课程
            <Badge variant="secondary" className="bg-red-100 text-red-500">
              超值优惠
            </Badge>
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Image 
                src="/placeholder.svg" 
                alt="Web Development Course" 
                width={150} 
                height={150} 
                className="w-full rounded"
              />
              <div className="text-red-500">
                ¥199
                <span className="text-xs text-gray-400 line-through ml-2">¥899</span>
              </div>
              <div className="text-xs text-gray-500">剩余 21:04:00</div>
            </div>
            <div className="space-y-2">
              <Image 
                src="/placeholder.svg" 
                alt="Data Science Course" 
                width={150} 
                height={150} 
                className="w-full rounded"
              />
              <div className="text-red-500">
                ¥173.42
                <span className="text-xs text-gray-400 line-through ml-2">¥299</span>
              </div>
              <div className="text-xs text-gray-500">剩余1天</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Points Section */}
      <div className="grid grid-cols-4 px-4 py-2 bg-white rounded-lg mx-4">
        <Button variant="ghost" className="flex flex-col items-center gap-1">
          <Crown className="h-6 w-6 text-yellow-500" />
          <span className="text-xs">学习积分查询</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center gap-1">
          <Gift className="h-6 w-6 text-blue-500" />
          <span className="text-xs">积分换课程</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center gap-1">
          <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2" />
            <circle cx="12" cy="12" r="6" fill="currentColor" />
          </svg>
          <span className="text-xs">学习金兑换</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center gap-1">
          <Fire className="h-6 w-6 text-orange-500" />
          <span className="text-xs">热门课程</span>
        </Button>
      </div>

      {/* Featured Courses */}
      <div className="p-4 bg-gradient-to-r from-indigo-100 to-blue-200 mx-4 rounded-lg mt-4">
        <h3 className="font-bold mb-4">精选热门课程</h3>
        <div className="grid grid-cols-2 gap-4">
          <Image 
            src="/placeholder.svg" 
            alt="Featured Course" 
            width={200} 
            height={200} 
            className="w-full rounded-lg"
          />
          <div className="grid gap-4">
            <Image 
              src="/placeholder.svg" 
              alt="Popular Course 1" 
              width={100} 
              height={100} 
              className="w-full rounded-lg"
            />
            <Image 
              src="/placeholder.svg" 
              alt="Popular Course 2" 
              width={100} 
              height={100} 
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="grid grid-cols-5 px-2 py-1">
          <Button variant="ghost" className="flex flex-col items-center gap-0.5">
            <HomeIcon className="h-5 w-5" />
            <span className="text-xs">首页</span>
          </Button>
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
  )
}

