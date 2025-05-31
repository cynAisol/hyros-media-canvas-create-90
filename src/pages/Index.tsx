import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
	Monitor,
	Smartphone,
	Globe,
	Code,
	Users,
	Award,
	ArrowRight,
	Mail,
	Phone,
	MapPin,
	Sun,
	Moon,
	Rocket,
	Star,
	Zap,
	Search,
	Palette,
	Laptop,
	Play,
	CheckCircle,
} from "lucide-react";
import { useState } from "react";
import WorkingProcess from "@/components/WorkingProcess";
import StrategicPartners from "@/components/StrategicPartners";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import TypingAnimation from "@/components/TypingAnimation";
import Testimonials from "@/components/Testimonials";

const Index = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		// Handle form submission here
	};

	const services = [
		{
			icon: <Monitor className="w-8 h-8" />,
			title: "Web Development",
			description:
				"Custom websites built with cutting-edge technologies for optimal performance and user experience.",
		},
		{
			icon: <Smartphone className="w-8 h-8" />,
			title: "Mobile-First Design",
			description:
				"Responsive designs that look perfect on every device, from smartphones to desktops.",
		},
		{
			icon: <Globe className="w-8 h-8" />,
			title: "SEO Optimization",
			description:
				"Boost your online visibility with our comprehensive SEO strategies and technical optimization.",
		},
		{
			icon: <Code className="w-8 h-8" />,
			title: "E-commerce Solutions",
			description:
				"Powerful online stores that drive sales and provide seamless shopping experiences.",
		},
	];

	const portfolioItems = [
		{
			title: "Jewelry Store",
			category: "E-commerce",
			image: "/img/website1.png",
			url: "https://atoleajewelry.com/",
		},
		{
			title: "Dental care",
			category: "Web Development",
			image: "/img/website2.png",
			url: "https://burstoralcare.com/",
		},
		{
			title: "Tech solution",
			category: "Landing Page",
			image: "/img/website3.png",
			url: "https://zepto.com.au/",
		},
		{
			title: "Sales & Marketing",
			category: "Marketing Page",
			image: "/img/website4.png",
			url: "https://www.firsttouch.com/",
		},
		{
			title: "Anti Aging ",
			category: "Landing Page",
			image: "/img/website5.png",
			url: "https://letsdisco.com/",
		},
		{
			title: "Gaming",
			category: "web Development",
			image: "/img/website6.png",
			url: "https://aloquerciodesign.com/",
		},
	];

	const typingTexts = [
		"Future Today",
		"Success Story",
		"Dreams Reality",
		"Vision to Life",
	];

	return (
		<div className="min-h-screen bg-white">
			{/* Navigation */}
			<nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
				<div className="container mx-auto px-4 py-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-2">
							<div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
							<span className="text-2xl font-bold text-gray-900">
								HACHI AGENCY
							</span>
						</div>
						<div className="hidden md:flex items-center space-x-8">
							<a
								href="#home"
								className="text-gray-700 hover:text-blue-600 transition-colors"
							>
								Home
							</a>
							<a
								href="#services"
								className="text-gray-700 hover:text-blue-600 transition-colors"
							>
								Services
							</a>
							<a
								href="#portfolio"
								className="text-gray-700 hover:text-blue-600 transition-colors"
							>
								Portfolio
							</a>
							<a
								href="#about"
								className="text-gray-700 hover:text-blue-600 transition-colors"
							>
								About
							</a>
							<a
								href="#contact"
								className="text-gray-700 hover:text-blue-600 transition-colors"
							>
								Contact
							</a>
						</div>
					</div>
				</div>
			</nav>

			{/* Enhanced Hero Section */}
			<section
				id="home"
				className="pt-20 min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50"
			>
				{/* Animated Background Elements */}
				<div className="absolute inset-0 overflow-hidden">
					<div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
					<div
						className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"
						style={{ animationDelay: "2s" }}
					></div>
					<div
						className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse"
						style={{ animationDelay: "4s" }}
					></div>
				</div>

				<div className="relative z-10 container mx-auto px-4 py-20">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div className="space-y-8">
							{/* Badge with enhanced styling */}
							<div className="animate-fade-in">
								<Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-4 py-2 text-sm font-medium">
									✨ #1 Premium Web Agency
								</Badge>
							</div>

							{/* Main Headline */}
							<div className="animate-fade-in space-y-4">
								<h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
									Build Your
									<br />
									<span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
										Digital
									</span>
									<br />
									<TypingAnimation
										texts={typingTexts}
										speed={150}
										pauseDuration={1500}
									/>
								</h1>
							</div>

							{/* Enhanced Description */}
							<div className="animate-fade-in space-y-6">
								<p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
									We create{" "}
									<span className="font-semibold text-gray-900">
										stunning, high-performance websites
									</span>{" "}
									that drive real results for your business. From concept to
									launch, we're your digital transformation partners.
								</p>

								{/* Key Benefits */}
								<div className="flex flex-wrap gap-4">
									<div className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-full">
										<CheckCircle className="w-4 h-4 text-green-600" />
										<span className="text-sm font-medium text-green-800">
											Fast Delivery
										</span>
									</div>
									<div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-full">
										<CheckCircle className="w-4 h-4 text-blue-600" />
										<span className="text-sm font-medium text-blue-800">
											24/7 Support
										</span>
									</div>
									<div className="flex items-center gap-2 bg-purple-50 px-3 py-2 rounded-full">
										<CheckCircle className="w-4 h-4 text-purple-600" />
										<span className="text-sm font-medium text-purple-800">
											100% Satisfaction
										</span>
									</div>
								</div>
							</div>

							{/* Enhanced CTAs */}
							<div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
								<Button
									size="lg"
									className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
								>
									Start Your Project
									<ArrowRight className="ml-2 w-5 h-5" />
								</Button>
								<Button
									size="lg"
									variant="outline"
									className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 text-lg px-8 py-6 transition-all duration-300 group"
								>
									<Play className="mr-2 w-5 h-5 group-hover:text-blue-600" />
									Watch Demo
								</Button>
							</div>

							{/* Social Proof */}
							<div className="animate-fade-in pt-4">
								<div className="flex items-center gap-6">
									<div className="flex items-center gap-2">
										<div className="flex -space-x-2">
											<div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-white"></div>
											<div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full border-2 border-white"></div>
											<div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full border-2 border-white"></div>
											<div className="w-8 h-8 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center">
												<span className="text-xs font-bold text-gray-600">
													+
												</span>
											</div>
										</div>
										<span className="text-sm text-gray-600 font-medium">
											50+ Happy Clients
										</span>
									</div>
									<div className="flex items-center gap-1">
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className="w-4 h-4 fill-yellow-400 text-yellow-400"
											/>
										))}
										<span className="text-sm text-gray-600 ml-1">
											4.9/5 Rating
										</span>
									</div>
								</div>
							</div>
						</div>

						{/* Enhanced Visual Section */}
						<div className="relative animate-fade-in">
							<div className="relative">
								{/* Main Image with enhanced styling */}
								<div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-8">
									<img
										src="https://d1hdtc0tbqeghx.cloudfront.net/wp-content/uploads/2024/02/29110639/Web-Design-and-Development-agency-Digital-Transformation.webp"
										alt="Digital Transformation"
										className="w-full h-auto rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-500"
										style={{ maxWidth: "34em" }}
									/>

									{/* Floating elements */}
									<div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-80 animate-pulse"></div>
									<div
										className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl opacity-60 animate-pulse"
										style={{ animationDelay: "1s" }}
									></div>
								</div>

								{/* Stats Cards */}
								<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
									<div className="flex items-center space-x-4">
										<div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
											<Zap className="w-6 h-6 text-white" />
										</div>
										<div>
											<div className="font-bold text-gray-900 text-lg">
												Lightning Fast
											</div>
											<div className="text-gray-600">99.9% Uptime</div>
										</div>
									</div>
								</div>

								<div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
									<div className="flex items-center space-x-4">
										<div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
											<Award className="w-6 h-6 text-white" />
										</div>
										<div>
											<div className="font-bold text-gray-900 text-lg">
												Award Winning
											</div>
											<div className="text-gray-600">Design Agency</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Strategic Partners Section - Icons/logos of websites we made */}
			<StrategicPartners />

			{/* Benefits/Why US Section */}
			<WhyUs />

			{/* Portfolio Section - Website previews */}
			<section
				id="portfolio"
				className="py-20 bg-gray-50 relative overflow-hidden"
			>
				{/* Blurred Blob Background - Right Side */}
				<svg
					className="absolute -top-24 right-0 w-[400px] h-[400px] z-0 blur-2xl opacity-30 pointer-events-none select-none"
					viewBox="0 0 400 400"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<ellipse cx="200" cy="200" rx="170" ry="120" fill="#34d399" />
					<ellipse
						cx="300"
						cy="120"
						rx="80"
						ry="60"
						fill="#a78bfa"
						fillOpacity="0.5"
					/>
				</svg>
				{/* Blurred Blob Background - Left Side */}
				<svg
					className="absolute -bottom-24 -left-24 w-[350px] h-[350px] z-0 blur-2xl opacity-20 pointer-events-none select-none"
					viewBox="0 0 350 350"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<ellipse cx="175" cy="175" rx="140" ry="100" fill="#60A5FA" />
					<ellipse
						cx="80"
						cy="100"
						rx="60"
						ry="40"
						fill="#fbbf24"
						fillOpacity="0.4"
					/>
				</svg>
				<div className="container mx-auto px-4 relative z-10">
					<div className="text-center mb-16 flex flex-col items-center relative">
						<span className="absolute -left-8 top-2 text-3xl">💼</span>
						<Badge className="mb-4">Our Work</Badge>
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
							<span>Portfolio Highlights</span>
							<span className="text-3xl">🎨</span>
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
							Discover some of our recent projects that showcase our expertise
							and creativity.
						</p>
						<span className="absolute -right-8 top-2 text-3xl">✨</span>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{portfolioItems.map((item, index) => (
							<a href={item.url}>
								<Card
									key={index}
									className="group overflow-hidden hover:shadow-xl transition-all duration-300"
								>
									<div className="relative overflow-hidden">
										<img
											src={item.image}
											alt={item.title}
											className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
									</div>
									<CardHeader>
										<div className="flex items-center justify-between">
											<Badge variant="secondary">{item.category}</Badge>
											<ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
										</div>
										<CardTitle className="group-hover:text-blue-600 transition-colors">
											{item.title}
										</CardTitle>
									</CardHeader>
								</Card>
							</a>
						))}
					</div>
					{/* Portfolio Showcase Card */}
					<div className="flex justify-center mt-12">
						<div className="bg-white rounded-xl shadow-lg p-6 max-w-lg text-left border border-gray-100">
							<div className="text-purple-600 font-bold mb-2 flex items-center gap-2">
								<span>🎯</span>
								<span>Showcase Highlight</span>
							</div>
							<div className="text-gray-700">
								Each project represents our commitment to quality, innovation,
								and client success. Ready to see your vision come to life?
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Working Process Section */}
			<WorkingProcess />

			{/* About Section */}
			<section id="about" className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div>
							<Badge className="mb-4">About Us</Badge>
							<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
								Crafting Digital Excellence Since Day One
							</h2>
							<p className="text-lg text-gray-600 mb-8">
								At HACHI AGENCY, we're passionate about creating digital
								experiences that matter. Our team of skilled developers,
								designers, and strategists work together to bring your vision to
								life with cutting-edge technology and creative innovation.
							</p>
							<div className="grid grid-cols-3 gap-8 mb-8">
								<div className="text-center">
									<div className="text-3xl font-bold text-blue-600 mb-2">
										49+
									</div>
									<div className="text-gray-600">Projects Completed</div>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-blue-600 mb-2">
										98%
									</div>
									<div className="text-gray-600">Client Satisfaction</div>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-blue-600 mb-2">
										5+
									</div>
									<div className="text-gray-600">Years Experience</div>
								</div>
							</div>
							<Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
								Learn More About Us
							</Button>
						</div>
						<div className="relative">
							<img
								src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
								alt="Team working"
								className="rounded-2xl shadow-2xl"
							/>
							<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
								<div className="flex items-center space-x-4">
									<Award className="w-8 h-8 text-blue-600" />
									<div>
										<div className="font-bold text-gray-900">Award Winning</div>
										<div className="text-gray-600">Design Agency</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<Testimonials />

			{/* FAQ Section */}
			<FAQ />

			{/* Contact Section - Clean Design */}
			<section
				id="contact"
				className="py-20 bg-gradient-to-br from-gray-50 to-white"
			>
				<div className="container mx-auto px-4">
					{/* Header */}
					<div className="text-center mb-16">
						<Badge className="mb-6 bg-blue-600 text-white border-0">
							Get In Touch
						</Badge>
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
							Ready to Start Your Project?
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
							Let's transform your vision into reality with cutting-edge
							technology and creative excellence!
						</p>

						{/* Process Icons */}
						<div className="flex justify-center gap-12 mb-8">
							<div className="flex flex-col items-center">
								<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
									<Search className="w-6 h-6 text-blue-600" />
								</div>
								<span className="text-sm text-gray-600 font-medium">
									Discover
								</span>
							</div>
							<div className="flex flex-col items-center">
								<div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
									<Palette className="w-6 h-6 text-purple-600" />
								</div>
								<span className="text-sm text-gray-600 font-medium">
									Design
								</span>
							</div>
							<div className="flex flex-col items-center">
								<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
									<Laptop className="w-6 h-6 text-green-600" />
								</div>
								<span className="text-sm text-gray-600 font-medium">
									Develop
								</span>
							</div>
							<div className="flex flex-col items-center">
								<div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-2">
									<Rocket className="w-6 h-6 text-orange-600" />
								</div>
								<span className="text-sm text-gray-600 font-medium">
									Deliver
								</span>
							</div>
						</div>
					</div>

					<div className="grid lg:grid-cols-2 gap-16 items-start">
						{/* Contact Information */}
						<div className="space-y-8">
							<div>
								<h3 className="text-2xl font-bold text-gray-900 mb-8">
									Contact Information
								</h3>
								<div className="space-y-6">
									<div className="flex items-center space-x-4">
										<div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
											<Mail className="w-6 h-6 text-white" />
										</div>
										<div>
											<div className="font-semibold text-gray-900">Email</div>
											<div className="text-gray-600">
												hachiagency.com@gmail.com
											</div>
											<div className="text-gray-600">
												contact@hachiagency.com
											</div>
										</div>
									</div>
									<div className="flex items-center space-x-4">
										<div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
											<Phone className="w-6 h-6 text-white" />
										</div>
										<div>
											<div className="font-semibold text-gray-900">Phone</div>
											<div className="text-gray-600">+1 (555) 123-4567</div>
										</div>
									</div>
									<div className="flex items-center space-x-4">
										<div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
											<MapPin className="w-6 h-6 text-white" />
										</div>
										<div>
											<div className="font-semibold text-gray-900">
												Location
											</div>
											<div className="text-gray-600">San Francisco, CA</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Contact Form - Clean Design */}
						<div>
							<form onSubmit={handleSubmit} className="space-y-8">
								<div className="relative">
									<input
										type="text"
										placeholder=" "
										value={formData.name}
										onChange={(e) =>
											setFormData({ ...formData, name: e.target.value })
										}
										className="peer w-full bg-transparent border-0 border-b-2 border-gray-200 focus:border-blue-600 focus:outline-none py-3 px-0 text-gray-900 placeholder-transparent transition-colors duration-300"
										id="name"
									/>
									<label
										htmlFor="name"
										className="absolute left-0 -top-6 text-gray-600 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-blue-600 peer-focus:text-sm"
									>
										Your Name
									</label>
								</div>

								<div className="relative">
									<input
										type="email"
										placeholder=" "
										value={formData.email}
										onChange={(e) =>
											setFormData({ ...formData, email: e.target.value })
										}
										className="peer w-full bg-transparent border-0 border-b-2 border-gray-200 focus:border-blue-600 focus:outline-none py-3 px-0 text-gray-900 placeholder-transparent transition-colors duration-300"
										id="email"
									/>
									<label
										htmlFor="email"
										className="absolute left-0 -top-6 text-gray-600 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-blue-600 peer-focus:text-sm"
									>
										Your Email
									</label>
								</div>

								<div className="relative">
									<textarea
										placeholder=" "
										value={formData.message}
										onChange={(e) =>
											setFormData({ ...formData, message: e.target.value })
										}
										className="peer w-full bg-transparent border-0 border-b-2 border-gray-200 focus:border-blue-600 focus:outline-none py-3 px-0 text-gray-900 placeholder-transparent transition-colors duration-300 resize-none min-h-[100px]"
										id="message"
									/>
									<label
										htmlFor="message"
										className="absolute left-0 -top-6 text-gray-600 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-blue-600 peer-focus:text-sm"
									>
										Tell us about your project...
									</label>
								</div>

								<Button
									type="submit"
									className="w-full h-14 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
								>
									Send Message
									<ArrowRight className="ml-2 w-5 h-5" />
								</Button>
							</form>
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action Section - Boy Running as Full Background */}
			<section
				className="w-full py-20 bg-white flex items-center justify-center relative overflow-hidden"
				style={{
					minHeight: "580px",
					backgroundImage: "url('/img/boy-running.png')",
					backgroundRepeat: "no-repeat",
					backgroundSize: "contain",
					backgroundPosition: "center",
				}}
			>
				<div className="container mx-auto px-4 relative z-10">
					<div className="flex justify-end">
						<div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl ml-auto">
							<h2 className="text-3xl md:text-4xl font-bold mb-6">
								Are you ready to transform your business?
							</h2>
							<Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg shadow-lg text-lg font-semibold">
								Contact Us
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-900 text-white py-16">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-4 gap-8">
						<div>
							<div className="flex items-center space-x-2 mb-6">
								<div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
								<span className="text-2xl font-bold">HACHI AGENCY</span>
							</div>
							<p className="text-gray-400 mb-6">
								Creating digital experiences that drive success for businesses
								worldwide.
							</p>
						</div>
						<div>
							<h4 className="text-lg font-semibold mb-6">Services</h4>
							<ul className="space-y-2 text-gray-400">
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Web Development
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Mobile Design
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										SEO Optimization
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										E-commerce
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="text-lg font-semibold mb-6">Company</h4>
							<ul className="space-y-2 text-gray-400">
								<li>
									<a href="#" className="hover:text-white transition-colors">
										About Us
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Portfolio
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Careers
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Contact
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="text-lg font-semibold mb-6">Connect</h4>
							<ul className="space-y-2 text-gray-400">
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Twitter
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										LinkedIn
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Instagram
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										GitHub
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
						<p>&copy; 2024 HACHI AGENCY. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Index;
