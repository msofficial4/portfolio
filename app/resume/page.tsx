"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  Briefcase,
  Calendar,
  Code,
  Download,
  Gitlab,
  GraduationCap,
  Home,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SkillProgress from "@/components/skill-progress"
import "./print.css" // Import the print styles

export default function ResumePage() {
  useEffect(() => {
    // Additional print handling if needed
    const handlePrint = () => {
      // Add print-specific class to the grid container
      const gridContainer = document.querySelector(".resume-grid")
      if (gridContainer) {
        gridContainer.classList.add("print-grid")
      }

      // Add card-content class to all CardContent elements
      const cardContents = document.querySelectorAll(".card-content-wrapper")
      cardContents.forEach((content) => {
        content.classList.add("card-content")
      })
    }

    // Add event listener for beforeprint
    window.addEventListener("beforeprint", handlePrint)

    return () => {
      window.removeEventListener("beforeprint", handlePrint)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-muted/20">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Code className="h-5 w-5" />
            <span>Malik Shahzaib</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild className="no-print">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>
            {/* <Button
              size="sm"
              onClick={() => {
                // Trigger print dialog
                window.print()
              }}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button> */}
          </div>
        </div>
      </header>

      <main className="flex-1 py-12 print:py-0">
        <div className="container px-4 md:px-6 print:px-0 print:mx-0 print:max-w-none">
          {/* Use the original grid layout for web, print-grid class will be added via JS for print */}
          <div className="grid gap-8 lg:grid-cols-3 resume-grid">
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Profile */}
              <Card className="w-full">
                <CardContent className="p-6 card-content-wrapper">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-primary/20">
                      <Image
                        src="/portfolio/images/shahzaib.jpg"
                        alt="Malik Shahzaib"
                        fill
                        className="object-cover"
                        sizes="128px"
                        priority
                      />
                    </div>
                    <h1 className="text-2xl font-bold">Malik Shahzaib</h1>
                    <p className="text-muted-foreground">PHP, WordPress & Laravel Developer</p>

                    <div className="w-full mt-6 space-y-3">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">Lahore, 54600 Punjab</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                        <a href="tel:+923094600297" className="text-sm hover:text-primary">
                          +923094600297
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                        <a href="mailto:msofficial48@gmail.com" className="text-sm hover:text-primary">
                          msofficial48@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Linkedin className="h-4 w-4 text-primary flex-shrink-0" />
                        <a
                          href="https://linkedin.com/in/msofficial"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm hover:text-primary"
                        >
                          linkedin.com/in/msofficial
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Gitlab className="h-4 w-4 text-primary flex-shrink-0" />
                        <a
                          href="https://gitlab.com/msofficial48"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm hover:text-primary"
                        >
                          gitlab.com/msofficial48
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Skills */}
              <Card className="w-full">
                <CardContent className="p-6 card-content-wrapper">
                  <h2 className="text-xl font-bold mb-4">Technical Skills</h2>
                  <div className="space-y-4">
                    <SkillProgress name="PHP" level={9.5} />
                    <SkillProgress name="WordPress" level={9.2} />
                    <SkillProgress name="Laravel" level={9.3} />
                    <SkillProgress name="WooCommerce" level={9.0} />
                    <SkillProgress name="MySQL" level={9.1} />
                    <SkillProgress name="JavaScript" level={8.5} />
                    <SkillProgress name="HTML/CSS" level={9.0} />
                  </div>
                </CardContent>
              </Card>

              {/* Education */}
              <Card className="w-full">
                <CardContent className="p-6 card-content-wrapper">
                  <h2 className="text-xl font-bold mb-4">Education</h2>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <GraduationCap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Bachelor of Science: Computer Science</h3>
                        <p className="text-sm text-muted-foreground">Virtual University of Pakistan - Lahore</p>
                        <p className="text-sm text-primary mt-1">Expected in April 2026</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Skills */}
              <Card className="w-full">
                <CardContent className="p-6 card-content-wrapper">
                  <h2 className="text-xl font-bold mb-4">Additional Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Problem-solving</Badge>
                    <Badge>Team collaboration</Badge>
                    <Badge>API integration</Badge>
                    <Badge>Software development</Badge>
                    <Badge>Product development</Badge>
                    <Badge>Object-oriented programming</Badge>
                    <Badge>Requirements gathering</Badge>
                    <Badge>Front-end development</Badge>
                    <Badge>Performance optimization</Badge>
                    <Badge>Web security</Badge>
                    <Badge>Technical support</Badge>
                    <Badge>RESTful APIs</Badge>
                    <Badge>Database management</Badge>
                    <Badge>Coding standards</Badge>
                    <Badge>Back-end development</Badge>
                    <Badge>Web services integration</Badge>
                    <Badge>Code optimization</Badge>
                    <Badge>Full-stack development</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Professional Summary */}
              <Card className="w-full">
                <CardContent className="p-6 card-content-wrapper">
                  <h2 className="text-xl font-bold mb-4">Professional Summary</h2>
                  <div className="space-y-4">
                    <p>
                      Creative Developer with proficiency in monitoring software performance tests and revising programs
                      for corrections. First-rate critical thinking and organizational skills. Excellent understanding
                      of basic development principles and programming for diverse operating systems.
                    </p>
                    <p>
                      Self-motivated Developer adds high level of experience over more than 4+ years collaborating and
                      working on multiple web-based projects. Passionate, hardworking coder with penchant for developing
                      customized interfaces that factor in unique demands for accessibility, reachability and security.
                      Organized approach to meeting multiple, concurrent deadlines. Pulls from active knowledge of
                      current technology landscape to promote best practices in web design.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Work Experience */}
              <Card className="w-full">
                <CardContent className="p-6 card-content-wrapper">
                  <h2 className="text-xl font-bold mb-6">Work Experience</h2>

                  {/* Current Job */}
                  <div className="relative pl-8 pb-8 border-l border-primary/30 last:border-0 last:pb-0">
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                    <div className="space-y-3">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                        <h3 className="font-bold text-lg">Laravel Developer</h3>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">December 2022 - Present</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Catalyic Technology, Lahore</span>
                      </div>
                      <ul className="space-y-2 mt-2">
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>
                            Worked closely with clients to gather requirements and translate them into technical
                            specifications for implementation.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>
                            Continuously updated skills through training courses, workshops, and self-study—staying
                            current on industry trends and emerging technologies.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>Debugged complex software issues, leading to a more stable product release.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>
                            Collaborated with cross-functional teams to ensure seamless integration of new features.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>Reduced development time by creating reusable code libraries for future projects.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>Updated old code bases to modern development standards, improving functionality.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>
                            Adapted quickly to new technologies and programming languages, enhancing overall team
                            productivity.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>
                            Participated in regular code reviews, ensuring high-quality standards were consistently met
                            across all development efforts.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Previous Job */}
                  <div className="relative pl-8 pb-8 border-l border-primary/30 last:border-0 last:pb-0">
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                    <div className="space-y-3">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                        <h3 className="font-bold text-lg">PHP, WordPress Developer</h3>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">August 2020 - November 2022</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Techvengers, Lahore</span>
                      </div>
                      <ul className="space-y-2 mt-2">
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>Developed and implemented WordPress sites, themes and plugins.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>
                            Maximized site performance with regular updates, security measures, and optimization
                            techniques.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>
                            Customized e-commerce solutions for online businesses using WooCommerce plugin integration.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>Designed responsive, mobile-first websites from design concepts.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>
                            Installed required plugins and additional coding to fit final design and functionality
                            requirements.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>
                            Enhanced website functionality by implementing custom WordPress themes and plugins.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>Converted PSD files into custom WordPress themes.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>
                            Optimized website loading speeds through careful evaluation of installed plugins and
                            efficient use of caching mechanisms.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>
                            Migrated existing websites to WordPress platform without loss of data or functionality,
                            streamlining content updates for clients.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* First Job */}
                  <div className="relative pl-8 pb-0 last:border-0 last:pb-0">
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                    <div className="space-y-3">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                        <h3 className="font-bold text-lg">SEO Expert</h3>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">April 2019 - July 2020</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Uplift Pakistan, Lahore</span>
                      </div>
                      <ul className="space-y-2 mt-2">
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>
                            Enhanced online visibility for clients through optimized meta tags, on-page content, and
                            backlink building.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>
                            Collaborated with content marketing teams to develop SEO-friendly content that increased
                            organic search traffic.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t py-6 mt-12">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          <div className="flex items-center gap-2 text-sm">
            <Code className="h-4 w-4" />
            <span>© {new Date().getFullYear()} Malik Shahzaib. All rights reserved.</span>
          </div>
          <div className="flex gap-4">
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
              <Home className="h-4 w-4" />
              <span className="sr-only">Home</span>
            </Link>
            <Link href="https://gitlab.com/msofficial48" className="text-muted-foreground hover:text-primary">
              <Gitlab className="h-4 w-4" />
              <span className="sr-only">GitLab</span>
            </Link>
            <Link href="https://linkedin.com/in/msofficial" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
