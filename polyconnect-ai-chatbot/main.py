from fpdf import FPDF

class PDF(FPDF):
    def header(self):
        self.set_font("Arial", "B", 14)
        self.cell(0, 10, "SUST Admission Preparation – Key Points Summary", ln=True, align="C")
        self.ln(5)

    def chapter_title(self, title):
        self.set_font("Arial", "B", 12)
        self.set_text_color(0, 0, 128)
        self.cell(0, 10, title, ln=True)
        self.set_text_color(0, 0, 0)

    def chapter_body(self, body):
        self.set_font("Arial", "", 11)
        self.multi_cell(0, 8, body)
        self.ln()

pdf = PDF()
pdf.add_page()

sections = [
    ("1. SUST Admission is Very Competitive",
     "- গুচ্ছ থেকে বের হওয়ার পর SUST এর হাইপ বেড়েছে।\n"
     "- অনেক বুয়েট টপ স্টুডেন্টরাও ট্রায়ালের জন্য SUST দেয়।\n"
     "- সিলেট অঞ্চলের শিক্ষার্থীদের কাছে SUST ড্রিম ইউনিভার্সিটি।"),

    ("2. স্টুডেন্ট টাইপ (E1, E2, E3)",
     "- E1: বুয়েট-লেভেল টপ স্টুডেন্ট (Top Notch)\n"
     "- E2: সামান্য ভুল করা ছাত্র – SUST, KUET, CUET\n"
     "- E3: আরও বেশি গ্যাপ – মাঝারি পর্যায়ের ভর্তি\n"
     "- SUST মূলত E2 ও E3 টাইপ স্টুডেন্টে ভর্তি হয়।"),

    ("3. Full Syllabus is a Game-Changer",
     "- 75% শর্ট সিলেবাস, 25% ফুল সিলেবাস থেকে প্রশ্ন।\n"
     "- ফুল সিলেবাস পড়তে হবে অ্যাডমিশন গাইড / কোর্স / ক্লাস থেকে।"),

    ("4. SUST Question Level",
     "- বুয়েটের পর সবচেয়ে কঠিন প্রশ্ন করে SUST।\n"
     "- ট্র্যাপ প্রশ্ন: No Answer, Wrong Answer, Wrong Question, Unit Trap ইত্যাদি।"),

    ("5. Question Pattern & Strategy",
     "- ৫টি অপশন – ট্র্যাপিং সম্ভাবনা বেশি।\n"
     "- কঠিন প্রশ্ন 10–20%, বাকি 80–90% পারার মত।"),

    ("6. Core Resources for Preparation",
     "1. SUST Previous Year Question Bank (Main)\n"
     "2. QnA SUST Analysis Megabook\n"
     "3. Engineering Question Bank\n"
     "4. উদ্ভাস Practice + Concept Books\n"
     "5. Sunrise Foundation Book\n\n"
     "Chemistry: হাজারি স্যারের বই (রিডিং)\n"
     "Biology: আজমল/হাসান স্যারের বই (রিডিং + প্রশ্নব্যাংক)"),

    ("7. Crash Course + Practice",
     "- Crash Course: 60 ক্লাস + 30 প্রশ্নব্যাংক সলভ ক্লাস\n"
     "- প্রশ্নব্যাংক অন্তত ২ বার শেষ করতে হবে।\n"
     "- ক্যালকুলেটর ট্রিক্স ও ব্যাক ক্যালকুলেশন জানলে সুবিধা।"),

    ("8. Time Management & Tips",
     "- পরীক্ষা ৩০ দিনের মধ্যে হবে, এখন থেকেই রেডি হতে হবে।\n"
     "- কঠিন MCQ প্রতিদিন সলভ করে ব্রেইন ট্রেইন করো।"),

    ("Conclusion",
     "- কঠিন? হ্যাঁ। অসম্ভব? না।\n"
     "- কেবল ট্যাকটিক্যাল + হার্ডওয়ার্ক হলে চান্স হবেই ইনশাআল্লাহ।"),
]

for title, body in sections:
    pdf.chapter_title(title)
    pdf.chapter_body(body)

pdf.output("SUST_Admission_Key_Points_Summary.pdf")
