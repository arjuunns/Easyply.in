"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Clock, Code, Users, Brain, TrendingUp, Calendar, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useNavigate } from 'react-router-dom'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const cardHoverVariants = {
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
    },
  },
}

export default function InterviewPracticePage() {
  const [selectedTopic, setSelectedTopic] = useState("")
  const [selectedDifficulty, setSelectedDifficulty] = useState("")
  const [selectedType, setSelectedType] = useState("")

  const interviewFormats = [
  {
    title: "Technical Interview",
    description: "Coding challenges and technical problem solving",
    duration: "45-60 minutes",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    includes: ["Algorithm problems", "Code review", "System design basics"],
  },
  {
    title: "Behavioral Interview",
    description: "Soft skills and experience-based questions",
    duration: "30-45 minutes",
    icon: Users,
    color: "from-purple-500 to-pink-500",
    includes: ["STAR method questions", "Leadership scenarios", "Conflict resolution"],
  },
  {
    title: "Mixed Interview",
    description: "Combination of technical and behavioral questions",
    duration: "60-90 minutes",
    icon: Brain,
    color: "from-emerald-500 to-teal-500",
    includes: ["Technical challenges", "Behavioral assessment", "Culture fit"],
  },
  {
    title: "System Design Interview",
    description: "Test your ability to design scalable systems",
    duration: "45-60 minutes",
    icon: TrendingUp,
    color: "from-yellow-500 to-orange-500",
    includes: ["Design REST APIs", "Database modeling", "Scaling strategies"],
  },
  {
    title: "AI/ML Interview",
    description: "Questions focused on machine learning and data science",
    duration: "45-60 minutes",
    icon: Brain,
    color: "from-indigo-500 to-fuchsia-500",
    includes: ["ML algorithms", "Model evaluation", "Data pipelines"],
  },
  {
    title: "Frontend Development Interview",
    description: "For roles focused on UI/UX and frontend tech",
    duration: "40-60 minutes",
    icon: Code,
    color: "from-pink-500 to-red-500",
    includes: ["React/JS questions", "UI scenarios", "Accessibility"],
  },
  {
    title: "Backend Development Interview",
    description: "Server-side logic, DBs, and API design",
    duration: "45-60 minutes",
    icon: Code,
    color: "from-gray-700 to-gray-400",
    includes: ["Databases", "Authentication", "API structures"],
  },
  {
    title: "Product Management Interview",
    description: "Case studies and product thinking",
    duration: "45-60 minutes",
    icon: Calendar,
    color: "from-green-500 to-lime-500",
    includes: ["Prioritization", "Roadmapping", "User stories"],
  },
  {
    title: "UI/UX Design Interview",
    description: "For design-oriented roles",
    duration: "30-45 minutes",
    icon: Award,
    color: "from-rose-500 to-piñk-600",
    includes: ["Design systems", "Figma walkthrough", "User flows"],
  },
  {
    title: "HR/Non-Technical Interview",
    description: "Suited for business, law, medical, and HR domains",
    duration: "30-40 minutes",
    icon: Users,
    color: "from-orange-400 to-yellow-400",
    includes: ["Situational questions", "Communication skills", "Domain ethics"],
  }
]

  const performanceData = [
    {
      topic: "Web Development",
      difficulty: "Medium",
      timeAgo: "2 days ago",
      score: "8.5/10",
      scoreColor: "text-emerald-400",
    },
    {
      topic: "DSA Algorithms",
      difficulty: "Hard",
      timeAgo: "1 week ago",
      score: "7.2/10",
      scoreColor: "text-blue-400",
    },
  ]
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-background">
      {/* Background Pattern */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <div className="inline-flex items-centser gap-2 px-4 py-2 bg-primary/20 rounded-full border border-primary/30 mb-6">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">AI-Powered Practice</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Master Your Interview Skills
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Practice with our advanced AI interviewer across multiple domains. Get detailed
              feedback and improve your interview performance with personalized insights.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Setup Interview Card */}
            <motion.div variants={itemVariants}>
              <Card className="bg-card border-border backdrop-blur-sm">
                <CardHeader className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary rounded-lg">
                      <Brain className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl text-foreground">Setup Your Interview</CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    Customize your practice session based on your target role
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Interview Topic</label>
                    <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                      <SelectTrigger className="bg-input border-border text-foreground">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border">
                        <SelectItem value="web-dev">Web Development</SelectItem>
                        <SelectItem value="data-science">Data Science</SelectItem>
                        <SelectItem value="mobile-dev">Mobile Development</SelectItem>
                        <SelectItem value="devops">DevOps</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Difficulty Level</label>
                    <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                      <SelectTrigger className="bg-input border-border text-foreground">
                        <SelectValue placeholder="Select difficulty" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border">
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                        <SelectItem value="expert">Expert</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Interview Type</label>
                    <Select value={selectedType} onValueChange={setSelectedType}>
                      <SelectTrigger className="bg-input border-border text-foreground">
                        <SelectValue placeholder="Select interview type" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border">
                        <SelectItem value="technical">Technical</SelectItem>
                        <SelectItem value="behavioral">Behavioral</SelectItem>
                        <SelectItem value="mixed">Mixed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 text-lg"
                      size="lg"
                      onClick={() => navigate('/startinterview')}
                    >
                      Start Free Interview
                    </Button>
                  </motion.div>

                  <p className="text-xs text-muted-foreground text-center">
                    First interview is free. Additional interviews require premium.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Interview Formats */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">Interview Formats</h2>
              <div className="space-y-4">
                {interviewFormats.map((format, index) => (
                  <motion.div
                    key={format.title}
                    variants={cardHoverVariants}
                    whileHover="hover"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="bg-card border-border backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 bg-gradient-to-r ${format.color} rounded-xl`}>
                            <format.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1 space-y-3">
                            <div className="flex items-center justify-between">
                              <h3 className="text-xl font-semibold text-foreground">{format.title}</h3>
                              <div className="flex items-center gap-1 text-muted-foreground">
                                <Clock className="w-4 h-4" />
                                <span className="text-sm">{format.duration}</span>
                              </div>
                            </div>
                            <p className="text-muted-foreground">{format.description}</p>
                            <div className="space-y-2">
                              <p className="text-sm font-medium text-foreground">What's included:</p>
                              <div className="flex flex-wrap gap-2">
                                {format.includes.map((item) => (
                                  <Badge
                                    key={item}
                                    variant="secondary"
                                  >
                                    {item}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div className="pt-2">
                              <Button
                                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 text-md mt-2"
                                size="lg"
                                onClick={() => navigate('/startinterview')}
                              >
                                Start Interview
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Performance Section */}
          <motion.div variants={itemVariants}>
            <Card className="bg-card border-border backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary rounded-lg">
                    <TrendingUp className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">Your Performance</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {performanceData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-accent/30 rounded-lg border border-border"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-muted rounded-lg">
                        <Code className="w-5 h-5 text-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{item.topic}</h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{item.difficulty}</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{item.timeAgo}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Badge className={`${item.scoreColor} bg-transparent border-current`}>
                      {item.score}
                    </Badge>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
     </div>
  )
}
