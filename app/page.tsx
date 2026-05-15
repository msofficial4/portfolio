import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Briefcase,
  Code,
  Download,
  ExternalLink,
  Gitlab,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SkillProgress from "@/components/skill-progress"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Code className="h-5 w-5" />
            <span>Malik Shahzaib</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary">
              Skills
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary">
              Experience
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button asChild>
            <Link href="/resume">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi, I'm <span className="text-primary">Malik Shahzaib</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    PHP, WordPress & Laravel Developer with 4+ years of experience building robust web applications and
                    e-commerce solutions.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="#contact">
                      Get In Touch
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/resume">
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-primary/20">
                  <Image
                    src="/portfolio/images/shahzaib.jpg"
                    alt="Malik Shahzaib"
                    fill
                    className="object-cover"
                    sizes="320px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Me</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Passionate Developer</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Creative Developer with proficiency in monitoring software performance tests and revising programs for
                  corrections. Self-motivated with high level of experience over more than 4+ years collaborating and
                  working on multiple web-based projects.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex justify-center">
                <div className="relative w-96 h-96 rounded-lg overflow-hidden">
                  <Image
                    src="/portfolio/images/shahzaib.jpg"
                    alt="About Malik Shahzaib"
                    fill
                    className="object-cover"
                    sizes="384px"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Professional Journey</h3>
                  <p className="text-muted-foreground">
                    Passionate, hardworking coder with penchant for developing customized interfaces that factor in
                    unique demands for accessibility, reachability and security. Organized approach to meeting multiple,
                    concurrent deadlines.
                  </p>
                  <p className="text-muted-foreground">
                    Pulls from active knowledge of current technology landscape to promote best practices in web design
                    and development.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm">Lahore, Punjab</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-primary" />
                    <span className="text-sm">4+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-primary" />
                    <span className="text-sm">CS Student</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Code className="h-4 w-4 text-primary" />
                    <span className="text-sm">Full Stack Developer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Skills</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Technical Expertise</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Specialized in modern web technologies with a focus on PHP, Laravel, and WordPress development.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Core Technologies</CardTitle>
                  <CardDescription>Primary programming languages and frameworks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <SkillProgress name="PHP" level={9.5} />
                  <SkillProgress name="Laravel" level={9.3} />
                  <SkillProgress name="WordPress" level={9.2} />
                  <SkillProgress name="MySQL" level={9.1} />
                  <SkillProgress name="JavaScript" level={8.5} />
                  <SkillProgress name="HTML/CSS" level={9.0} />
                  <SkillProgress name="jQuery" level={8.8} />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Frameworks & Tools</CardTitle>
                  <CardDescription>Modern development tools and frameworks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <SkillProgress name="WooCommerce" level={9.0} />
                  <SkillProgress name="ReactJS" level={8.2} />
                  <SkillProgress name="VueJS" level={8.0} />
                  <SkillProgress name="Git" level={8.8} />
                  <SkillProgress name="REST APIs" level={9.0} />
                  <SkillProgress name="Database Design" level={8.9} />
                  <SkillProgress name="Web Security" level={8.7} />
                </CardContent>
              </Card>
            </div>
            <div className="mx-auto max-w-5xl">
              <Card>
                <CardHeader>
                  <CardTitle>Additional Skills</CardTitle>
                  <CardDescription>Other technical and professional competencies</CardDescription>
                </CardHeader>
                <CardContent>
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
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Experience</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Professional Journey</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Over 4 years of experience working with leading companies and delivering exceptional web solutions.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <div className="space-y-8">
                {/* Current Job */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Laravel Developer</CardTitle>
                        <CardDescription>Catalyic Technology, Lahore</CardDescription>
                      </div>
                      <Badge>December 2022 - Present</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>
                        • Worked closely with clients to gather requirements and translate them into technical
                        specifications
                      </li>
                      <li>• Debugged complex software issues, leading to more stable product releases</li>
                      <li>• Collaborated with cross-functional teams to ensure seamless integration of new features</li>
                      <li>• Reduced development time by creating reusable code libraries for future projects</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Previous Job */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>PHP, WordPress Developer</CardTitle>
                        <CardDescription>Techvengers, Lahore</CardDescription>
                      </div>
                      <Badge variant="secondary">August 2020 - November 2022</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Developed and implemented WordPress sites, themes and plugins</li>
                      <li>
                        • Maximized site performance with regular updates, security measures, and optimization
                        techniques
                      </li>
                      <li>
                        • Customized e-commerce solutions for online businesses using WooCommerce plugin integration
                      </li>
                      <li>• Designed responsive, mobile-first websites from design concepts</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* First Job */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>SEO Expert</CardTitle>
                        <CardDescription>Uplift Pakistan, Lahore</CardDescription>
                      </div>
                      <Badge variant="secondary">April 2019 - July 2020</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>
                        • Enhanced online visibility for clients through optimized meta tags, on-page content, and
                        backlink building
                      </li>
                      <li>
                        • Collaborated with content marketing teams to develop SEO-friendly content that increased
                        organic search traffic
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Contact</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Let's Work Together</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to bring your ideas to life? Let's discuss your next project.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Get In Touch</CardTitle>
                  <CardDescription>Feel free to reach out for collaborations or just a friendly hello</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <a href="mailto:msofficial48@gmail.com" className="hover:text-primary">
                      msofficial48@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href="tel:+923094600297" className="hover:text-primary">
                      +923094600297
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Lahore, 54600 Punjab, Pakistan</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Connect Online</CardTitle>
                  <CardDescription>Find me on these platforms</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://linkedin.com/in/msofficial" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn Profile
                      <ExternalLink className="ml-auto h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://gitlab.com/msofficial48" target="_blank" rel="noopener noreferrer">
                      <Gitlab className="mr-2 h-4 w-4" />
                      GitLab Profile
                      <ExternalLink className="ml-auto h-4 w-4" />
                    </a>
                  </Button>
                  {/* <Button className="w-full" asChild>
                    <Link href="/resume">
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </Link>
                  </Button> */}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          <div className="flex items-center gap-2 text-sm">
            <Code className="h-4 w-4" />
            <span>© {new Date().getFullYear()} Malik Shahzaib. All rights reserved.</span>
          </div>
          <div className="flex gap-4">
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
