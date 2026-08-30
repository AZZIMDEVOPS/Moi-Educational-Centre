/* =============================================================
   MEC PARENT PORTAL — Realistic Demo Data
   Moi Educational Centre (CBC & Cambridge Curricula)
   ============================================================= */

export const LINKED_CHILDREN = [
  {
    id: 'brian-g6',
    name: 'Brian Mukanzi',
    admNo: 'MEC-2019-4821',
    grade: 'Grade 6',
    stream: 'East',
    curriculum: 'Kenyan CBC Curriculum',
    house: 'Chemelil (Blue)',
    classTeacher: 'Mr. David Omondi',
    headTeacher: 'Mrs. Florence Kamau',
    avatar: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=200&auto=format&fit=crop&q=80',
    feeBalance: 14500,
    termFee: 145000,
    paidFee: 130500,
    attendanceRate: 98,
    unreadMessages: 2,
    pendingAssignments: 3,
    busNumber: 'Bus 04 (Nairobi West / Langata)',
    busStatus: 'On Route to School',
    driver: 'Mr. John Kiprop (0722 000 111)',
    borrowedBooksCount: 2,
  },
  {
    id: 'sarah-g3',
    name: 'Sarah Mukanzi',
    admNo: 'MEC-2022-8104',
    grade: 'Grade 3',
    stream: 'North',
    curriculum: 'Kenyan CBC Curriculum',
    house: 'Aberdare (Red)',
    classTeacher: 'Ms. Grace Wanjiku',
    headTeacher: 'Mrs. Florence Kamau',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80',
    feeBalance: 0,
    termFee: 123000,
    paidFee: 123000,
    attendanceRate: 100,
    unreadMessages: 1,
    pendingAssignments: 1,
    busNumber: 'Bus 04 (Nairobi West / Langata)',
    busStatus: 'Arrived at School',
    driver: 'Mr. John Kiprop (0722 000 111)',
    borrowedBooksCount: 1,
  },
  {
    id: 'daniel-g9',
    name: 'Daniel Mukanzi',
    admNo: 'MEC-2016-1930',
    grade: 'Year 9 / Grade 9',
    stream: 'Senior A',
    curriculum: 'Cambridge International Curriculum',
    house: 'Elgon (Green)',
    classTeacher: 'Dr. Peter Njuguna',
    headTeacher: 'Mr. Paul K. Chemng\'orem',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&auto=format&fit=crop&q=80',
    feeBalance: 35000,
    termFee: 210000,
    paidFee: 175000,
    attendanceRate: 96,
    unreadMessages: 4,
    pendingAssignments: 4,
    busNumber: 'Self / Parent Pickup',
    busStatus: 'N/A',
    driver: 'N/A',
    borrowedBooksCount: 3,
  }
];

export const PARENT_PROFILE = {
  name: 'Mr. Evans Mukanzi',
  email: 'evans.mukanzi@gmail.com',
  phone: '+254 722 458 912',
  nationalId: '24891023',
  address: 'House 14, City Estate, Mai Mahiu Road, Nairobi West',
  occupation: 'Senior Financial Analyst',
  spouseName: 'Mrs. Mary Mukanzi',
  spousePhone: '+254 733 912 344',
  preferredCommunication: 'SMS & Email',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80'
};

export const FEE_STATEMENTS = {
  'brian-g6': [
    { id: 'REC-9081', date: '2026-01-10', desc: 'Term 1 2026 Tuition Fee Invoice', type: 'debit', amount: 125000, balance: 125000, status: 'Billed' },
    { id: 'REC-9082', date: '2026-01-10', desc: 'Term 1 2026 Activity & Co-Curricular Fee', type: 'debit', amount: 20000, balance: 145000, status: 'Billed' },
    { id: 'MP-81923', date: '2026-01-12', desc: 'M-Pesa Payment (Ref: QJK829104)', type: 'credit', amount: 80000, balance: 65000, method: 'M-Pesa', status: 'Confirmed' },
    { id: 'BNK-7712', date: '2026-02-01', desc: 'Bank Deposit (Standard Chartered)', type: 'credit', amount: 50500, balance: 14500, method: 'Bank Transfer', status: 'Confirmed' },
  ],
  'sarah-g3': [
    { id: 'REC-8801', date: '2026-01-08', desc: 'Term 1 2026 Tuition Fee Invoice', type: 'debit', amount: 105000, balance: 105000, status: 'Billed' },
    { id: 'REC-8802', date: '2026-01-08', desc: 'Term 1 2026 Activity Fee', type: 'debit', amount: 18000, balance: 123000, status: 'Billed' },
    { id: 'MP-99012', date: '2026-01-09', desc: 'M-Pesa Full Payment (Ref: QLK772910)', type: 'credit', amount: 123000, balance: 0, method: 'M-Pesa', status: 'Confirmed' },
  ],
  'daniel-g9': [
    { id: 'REC-7102', date: '2026-01-05', desc: 'Term 1 2026 Cambridge Senior Tuition', type: 'debit', amount: 180000, balance: 180000, status: 'Billed' },
    { id: 'REC-7103', date: '2026-01-05', desc: 'Lab & STEM Examination Fee', type: 'debit', amount: 30000, balance: 210000, status: 'Billed' },
    { id: 'MP-66102', date: '2026-01-15', desc: 'M-Pesa Installment 1 (Ref: QPL192831)', type: 'credit', amount: 100000, balance: 110000, method: 'M-Pesa', status: 'Confirmed' },
    { id: 'BNK-9912', date: '2026-02-05', desc: 'Bank Direct Transfer (EFT)', type: 'credit', amount: 75000, balance: 35000, method: 'Bank Transfer', status: 'Confirmed' },
  ]
};

export const SUBJECT_PERFORMANCE = {
  'brian-g6': [
    { code: 'MATH', name: 'Mathematics & Numeracy', score: 88, grade: 'EE', teacher: 'Mr. David Omondi', trend: '+4%', comment: 'Outstanding spatial reasoning and algebra problem solving.' },
    { code: 'ENG', name: 'English Language Arts', score: 92, grade: 'EE', teacher: 'Ms. Clara Njeri', trend: '+2%', comment: 'Exceptional creative writing and debate comprehension.' },
    { code: 'SCI', name: 'Science & Technology', score: 84, grade: 'ME', teacher: 'Mr. Joseph Mwangi', trend: '+5%', comment: 'Active participation in STEM robotics experiments.' },
    { code: 'KIS', name: 'Kiswahili na Insha', score: 89, grade: 'EE', teacher: 'Bi. Agnes Wanjiku', trend: '+3%', comment: 'Uwezo mkubwa wa kuandika insha na msamiati.' },
    { code: 'SOC', name: 'Social Studies & CBC Values', score: 90, grade: 'EE', teacher: 'Mrs. Beatrice Achieng', trend: 'Stable', comment: 'Strong leadership in group social responsibility projects.' },
    { code: 'CRE', name: 'Christian Religious Education', score: 95, grade: 'EE', teacher: 'Pastor Samuel Mutua', trend: '+1%', comment: 'Exemplary moral clarity and peer mentorship.' },
    { code: 'ART', name: 'Creative Arts & Music Academy', score: 94, grade: 'EE', teacher: 'Mr. Philip Musyoka', trend: '+6%', comment: 'Passed ABRSM Grade 2 Piano practicals with distinction.' },
  ],
  'sarah-g3': [
    { code: 'MATH', name: 'Mathematics Activities', score: 94, grade: 'EE', teacher: 'Ms. Grace Wanjiku', trend: '+5%', comment: 'Quick mental math and pattern recognition skills.' },
    { code: 'ENG', name: 'English Literacy Activities', score: 96, grade: 'EE', teacher: 'Ms. Grace Wanjiku', trend: '+3%', comment: 'Fluent reader with expressive vocabulary.' },
    { code: 'KIS', name: 'Kiswahili Activities', score: 91, grade: 'EE', teacher: 'Mwalimu Hassan', trend: '+2%', comment: 'Anasoma na kuandika kwa ufasaha wa hali ya juu.' },
    { code: 'ENV', name: 'Environmental & Hygiene', score: 88, grade: 'ME', teacher: 'Mrs. Jane Ruto', trend: '+4%', comment: 'Keen awareness of environmental conservation.' },
    { code: 'CRE', name: 'Religious Education Activities', score: 98, grade: 'EE', teacher: 'Ms. Grace Wanjiku', trend: 'Stable', comment: 'Polite, helpful, and kind to all classmates.' },
  ],
  'daniel-g9': [
    { code: 'CAM-M', name: 'Cambridge Mathematics 0580', score: 91, grade: 'A*', teacher: 'Dr. Peter Njuguna', trend: '+3%', comment: 'Top performer in quadratic equations and trigonometry.' },
    { code: 'CAM-P', name: 'Cambridge Physics 0625', score: 87, grade: 'A', teacher: 'Mr. Felix Barasa', trend: '+5%', comment: 'Excellent practical lab analysis and circuit design.' },
    { code: 'CAM-C', name: 'Cambridge Chemistry 0620', score: 85, grade: 'A', teacher: 'Mrs. Sarah Cherono', trend: '+2%', comment: 'Consistent accuracy in stoichiometry calculations.' },
    { code: 'CAM-E', name: 'Cambridge IGCSE English 0500', score: 89, grade: 'A', teacher: 'Mr. Richard Thorne', trend: '+4%', comment: 'Well-articulated analytical essays and literature reviews.' },
    { code: 'CAM-CS', name: 'Computer Science & Python', score: 96, grade: 'A*', teacher: 'Eng. Kevin Otieno', trend: '+6%', comment: 'Created an automated library algorithm during STEM week.' },
  ]
};

export const ATTENDANCE_DATA = {
  'brian-g6': {
    rate: 98,
    present: 49,
    absent: 1,
    late: 0,
    excused: 1,
    recentLog: [
      { date: '2026-02-20', status: 'Present', time: '07:22 AM', note: 'On time for morning devotion' },
      { date: '2026-02-19', status: 'Present', time: '07:25 AM', note: 'On time' },
      { date: '2026-02-18', status: 'Present', time: '07:18 AM', note: 'On time' },
      { date: '2026-02-17', status: 'Excused', time: 'N/A', note: 'Dental appointment (Parent note received)' },
      { date: '2026-02-16', status: 'Present', time: '07:20 AM', note: 'On time' },
    ]
  },
  'sarah-g3': {
    rate: 100,
    present: 51,
    absent: 0,
    late: 0,
    excused: 0,
    recentLog: [
      { date: '2026-02-20', status: 'Present', time: '07:20 AM', note: 'On time' },
      { date: '2026-02-19', status: 'Present', time: '07:19 AM', note: 'On time' },
      { date: '2026-02-18', status: 'Present', time: '07:21 AM', note: 'On time' },
    ]
  },
  'daniel-g9': {
    rate: 96,
    present: 48,
    absent: 2,
    late: 1,
    excused: 1,
    recentLog: [
      { date: '2026-02-20', status: 'Present', time: '07:15 AM', note: 'Senior lab prep session' },
      { date: '2026-02-19', status: 'Present', time: '07:24 AM', note: 'On time' },
      { date: '2026-02-12', status: 'Late', time: '07:42 AM', note: 'Traffic delay along Langata Road' },
    ]
  }
};

export const TIMETABLE_DATA = {
  'brian-g6': [
    { day: 'Monday', slots: [
      { time: '08:00 - 08:40', subject: 'Mathematics', teacher: 'Mr. David Omondi', room: 'Room 6E' },
      { time: '08:40 - 09:20', subject: 'Science & Tech', teacher: 'Mr. Joseph Mwangi', room: 'Lab 2' },
      { time: '09:20 - 10:00', subject: 'English Language', teacher: 'Ms. Clara Njeri', room: 'Room 6E' },
      { time: '10:00 - 10:30', subject: 'Morning Tea Break', teacher: 'Duty Staff', room: 'Dining Hall' },
      { time: '10:30 - 11:10', subject: 'Kiswahili Insha', teacher: 'Bi. Agnes Wanjiku', room: 'Room 6E' },
      { time: '11:10 - 11:50', subject: 'Robotics & STEM', teacher: 'Eng. Kevin Otieno', room: 'Innovation Hub' },
      { time: '12:00 - 01:00', subject: 'Hot Lunch & Recreation', teacher: 'Duty Staff', room: 'Cafeteria' },
      { time: '01:15 - 02:30', subject: 'Physical Education / Swimming', teacher: 'Coach Brian', room: 'Aquatic Centre' },
    ]},
    { day: 'Tuesday', slots: [
      { time: '08:00 - 08:40', subject: 'Social Studies', teacher: 'Mrs. Beatrice Achieng', room: 'Room 6E' },
      { time: '08:40 - 09:20', subject: 'Mathematics', teacher: 'Mr. David Omondi', room: 'Room 6E' },
      { time: '09:20 - 10:00', subject: 'CRE / Values', teacher: 'Pastor Samuel Mutua', room: 'Chapel Hall' },
      { time: '10:30 - 11:50', subject: 'Music Academy (Piano)', teacher: 'Mr. Philip Musyoka', room: 'Music Studio A' },
    ]},
    { day: 'Wednesday', slots: [
      { time: '08:00 - 09:20', subject: 'Science Practical', teacher: 'Mr. Joseph Mwangi', room: 'Bio Science Lab' },
      { time: '09:20 - 10:00', subject: 'English Reading', teacher: 'Ms. Clara Njeri', room: 'MEC Library' },
      { time: '10:30 - 11:50', subject: 'World Scholar\'s Cup Prep', teacher: 'Mr. Richard Thorne', room: 'Auditorium' },
    ]},
    { day: 'Thursday', slots: [
      { time: '08:00 - 08:40', subject: 'Mathematics Revision', teacher: 'Mr. David Omondi', room: 'Room 6E' },
      { time: '08:40 - 09:20', subject: 'Kiswahili Lugha', teacher: 'Bi. Agnes Wanjiku', room: 'Room 6E' },
      { time: '10:30 - 11:50', subject: 'Creative Art & Design', teacher: 'Mrs. Lucy Wambui', room: 'Art Studio 1' },
    ]},
    { day: 'Friday', slots: [
      { time: '08:00 - 08:40', subject: 'General Assembly', teacher: 'Headmistress Kamau', room: 'Main Quad' },
      { time: '08:40 - 10:00', subject: 'Inter-House Sports League', teacher: 'Sports Dept', room: 'Main Sports Pitch' },
      { time: '10:30 - 11:50', subject: 'Clubs & Societies', teacher: 'Patrons', room: 'Various Hubs' },
    ]}
  ]
};

export const ASSIGNMENTS = {
  'brian-g6': [
    { id: 'ASG-101', subject: 'Science & Tech', title: 'Solar Energy & Circuit Model Project', dueDate: '2026-02-25', status: 'In Progress', priority: 'High', instructions: 'Build a working series circuit model using cardboard, LED bulb, and 9V battery. Bring to Lab 2 on Wednesday.', teacher: 'Mr. Joseph Mwangi' },
    { id: 'ASG-102', subject: 'Mathematics', title: 'Fraction & Percentage Problem Set 4', dueDate: '2026-02-23', status: 'New', priority: 'Medium', instructions: 'Complete questions 1 to 15 on page 84 of CBC Math Workbook 6.', teacher: 'Mr. David Omondi' },
    { id: 'ASG-103', subject: 'Kiswahili', title: 'Insha: Manufaa ya Teknolojia Masomoni', dueDate: '2026-02-27', status: 'In Progress', priority: 'Medium', instructions: 'Andika insha ya maneno 250-300 kuhusu jinsi teknolojia inavyosaidia wanafunzi.', teacher: 'Bi. Agnes Wanjiku' },
    { id: 'ASG-104', subject: 'English', title: 'Book Review: The Boy Who Harnessed the Wind', dueDate: '2026-02-18', status: 'Submitted', priority: 'Completed', instructions: 'Submit a 2-page summary analyzing main themes and character resilience.', teacher: 'Ms. Clara Njeri', gradeAwarded: 'Exceeding Expectations (94%)' }
  ]
};

export const ANNOUNCEMENTS = [
  { id: 1, title: 'Term 1 Mid-Term Break & Parent Open Day Notice', date: '2026-02-18', category: 'Academic', read: false, summary: 'School will close for mid-term break on Thursday, 26th February at 12:30 PM. Parent-Teacher conferences scheduled for Friday morning.', content: 'Dear MEC Parents,\n\nPlease note that mid-term break for Term 1 2026 will commence on Thursday, 26th February at 12:30 PM. Buses will dispatch at 1:00 PM.\n\nIndividual Parent-Teacher Academic Consultations will be held on Friday, 27th February from 8:30 AM to 1:00 PM in respective classrooms.\n\nWarm regards,\nMEC Administration.' },
  { id: 2, title: '40th Anniversary Gala & Music Academy Concert', date: '2026-02-14', category: 'Events', read: false, summary: 'Join us at the Main Auditorium for our 40 Years of Excellence grand musical concert featuring our ABRSM scholars.', content: 'Moi Educational Centre proudly invites all parents and guardians to our 40th Anniversary Grand Concert on Saturday, 14th March 2026. Entry is complimentary. Light refreshments will be served.' },
  { id: 3, title: 'Term 1 Fee Clearance Deadline', date: '2026-02-01', category: 'Finance', read: true, summary: 'Reminder for parents with pending term balances to finalize payment before mid-term exams.', content: 'Kindly ensure all outstanding fee balances are cleared via M-Pesa Paybill 123456 or Bank Transfer prior to the mid-term break.' }
];

export const MESSAGES_INBOX = [
  { id: 'MSG-301', sender: 'Mr. David Omondi (Class Teacher)', subject: 'Brian\'s WSC Global Round Selection', date: '2026-02-19', read: false, text: 'Greetings Mr. Mukanzi, I am delighted to inform you that Brian has been selected to represent MEC at the World Scholar\'s Cup Global Round in Kuala Lumpur. Please review the consent form attached in the documents section.' },
  { id: 'MSG-302', sender: 'Finance Department', subject: 'Receipt Confirmation for KES 50,500', date: '2026-02-02', read: true, text: 'Dear Parent, we have received your bank transfer payment of KES 50,500. Your official receipt BNK-7712 is now available for download under Fee Statements.' },
  { id: 'MSG-303', sender: 'Coach Brian (Swimming)', subject: 'Inter-School Aquatic Championships', date: '2026-01-28', read: true, text: 'Sarah has qualified for the 50m backstroke final at the Kasarani Aquatic Complex. Training will take place every Tuesday afternoon.' }
];

export const SCHOOL_EVENTS = [
  { id: 'EVT-1', title: 'Parent-Teacher Academic Consultations', date: '2026-02-27', time: '08:30 AM - 01:00 PM', location: 'Classrooms / Junior Wing', category: 'Academic' },
  { id: 'EVT-2', title: 'Annual Inter-House Athletics & Sports Gala', date: '2026-03-06', time: '09:00 AM - 03:30 PM', location: 'MEC Sports Complex Pitch 1', category: 'Sports' },
  { id: 'EVT-3', title: 'World Scholar\'s Cup Kuala Lumpur Departure', date: '2026-03-20', time: '06:00 AM', location: 'JKIA Airport Terminal 1A', category: 'International' },
  { id: 'EVT-4', title: 'End of Term 1 Examinations Begin', date: '2026-03-25', time: '08:00 AM', location: 'All Exam Halls', category: 'Academic' },
];

export const SCHOOL_DOCUMENTS = [
  { id: 'DOC-1', name: 'Term 1 2026 Academic Calendar & Schedule.pdf', category: 'Academic', date: '2026-01-05', size: '1.4 MB' },
  { id: 'DOC-2', name: 'MEC Parent Handbook & Code of Conduct 2026.pdf', category: 'Policy', date: '2026-01-05', size: '2.8 MB' },
  { id: 'DOC-3', name: 'World Scholar\'s Cup Trip Consent & Medical Release Form.pdf', category: 'Forms', date: '2026-02-15', size: '890 KB' },
  { id: 'DOC-4', name: 'School Bus Transport Safety Policy & Routes.pdf', category: 'Transport', date: '2026-01-10', size: '3.1 MB' },
];

export const LIBRARY_BOOKS = {
  'brian-g6': [
    { title: 'The Boy Who Harnessed the Wind', author: 'William Kamkwamba', issuedDate: '2026-02-05', dueDate: '2026-02-26', status: 'Active', barcode: 'MEC-LIB-9012' },
    { title: 'Encarta Student Encyclopedia Vol 4', author: 'Microsoft Learning', issuedDate: '2026-02-10', dueDate: '2026-02-24', status: 'Active', barcode: 'MEC-LIB-4412' }
  ],
  'sarah-g3': [
    { title: 'The Magic Treehouse: Dinosaurs Before Dark', author: 'Mary Pope Osborne', issuedDate: '2026-02-12', dueDate: '2026-02-27', status: 'Active', barcode: 'MEC-LIB-1102' }
  ],
  'daniel-g9': [
    { title: 'Cambridge IGCSE Computer Science Coursebook', author: 'David Watson', issuedDate: '2026-01-15', dueDate: '2026-03-15', status: 'Active', barcode: 'MEC-LIB-7781' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', issuedDate: '2026-02-01', dueDate: '2026-02-22', status: 'Due Soon', barcode: 'MEC-LIB-3304' }
  ]
};

export const REQUEST_FORMS = [
  { id: 'REQ-881', type: 'Leave Request', child: 'Brian Mukanzi', dateSubmitted: '2026-02-15', requestedDates: '2026-02-17 (Dental)', status: 'Approved', comments: 'Approved by Class Teacher Mr. Omondi.' },
  { id: 'REQ-882', type: 'Transport Route Change', child: 'Sarah Mukanzi', dateSubmitted: '2026-02-01', requestedDates: 'Effective Feb 5', status: 'Approved', comments: 'Assigned to Bus 04 Seat 12.' },
  { id: 'REQ-883', type: 'Medical Detail Update', child: 'Brian Mukanzi', dateSubmitted: '2026-02-18', requestedDates: 'Permanent', status: 'Under Review', comments: 'School nurse reviewing updated allergy certificate.' }
];

export const TEACHERS_LIST = {
  'brian-g6': [
    { name: 'Mr. David Omondi', role: 'Class Teacher & Mathematics Lead', subject: 'Mathematics & Numeracy', email: 'd.omondi@moieducentre.ac.ke', phone: '0722 100 200', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80' },
    { name: 'Ms. Clara Njeri', role: 'Language Arts Patron', subject: 'English Language & Debate', email: 'c.njeri@moieducentre.ac.ke', phone: '0722 100 201', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80' },
    { name: 'Mr. Joseph Mwangi', role: 'STEM & Robotics Lab Instructor', subject: 'Science & Technology', email: 'j.mwangi@moieducentre.ac.ke', phone: '0722 100 202', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80' },
    { name: 'Bi. Agnes Wanjiku', role: 'Head of Kiswahili Section', subject: 'Kiswahili na Insha', email: 'a.wanjiku@moieducentre.ac.ke', phone: '0722 100 203', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80' },
    { name: 'Mr. Philip Musyoka', role: 'MEC Music Academy Master', subject: 'Piano & ABRSM Music Theory', email: 'p.musyoka@moieducentre.ac.ke', phone: '0722 100 204', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80' }
  ]
};

export const LEARNING_RESOURCES = [
  { id: 'RES-1', title: 'Grade 6 CBC Science & Tech Revision Notes', subject: 'Science & Tech', type: 'PDF Notes', topic: 'Electrical Circuits & Energy', teacher: 'Mr. Joseph Mwangi', size: '2.4 MB', date: '2026-02-14' },
  { id: 'RES-2', title: 'Mathematics Algebra & Geometry Practice Worksheet', subject: 'Mathematics', type: 'Worksheet', topic: 'Quadratic Equations & Angles', teacher: 'Mr. David Omondi', size: '1.1 MB', date: '2026-02-12' },
  { id: 'RES-3', title: 'English Creative Writing & Vocabulary Guide', subject: 'English', type: 'Presentation', topic: 'Descriptive Essays & Idioms', teacher: 'Ms. Clara Njeri', size: '4.8 MB', date: '2026-02-10' },
  { id: 'RES-4', title: 'World Scholar\'s Cup Debate Training Video Module', subject: 'Co-Curricular', type: 'Video Lesson', topic: 'Refutation & Speech Structuring', teacher: 'Mr. Richard Thorne', size: '45 MB', date: '2026-02-08' },
  { id: 'RES-5', title: 'Kiswahili Insha Na Fasihi Kituo Cha Marejeleo', subject: 'Kiswahili', type: 'PDF Notes', topic: 'Uandishi Wa Insha Za Shajara', teacher: 'Bi. Agnes Wanjiku', size: '1.8 MB', date: '2026-02-05' },
];

export const UPCOMING_EXAMS = [
  { id: 'EXM-1', subject: 'Mathematics CAT 2', date: '2026-03-02', time: '08:30 AM - 10:00 AM', venue: 'Main Quad Exam Hall B', duration: '1h 30m', examiner: 'Mr. David Omondi', instructions: 'Bring scientific calculator, ruler, and HB pencils. No mobile devices permitted.' },
  { id: 'EXM-2', subject: 'Science & Technology Practical Test', date: '2026-03-04', time: '10:30 AM - 12:00 PM', venue: 'Science Bio Lab 2', duration: '1h 30m', examiner: 'Mr. Joseph Mwangi', instructions: 'Lab coats must be worn. Prepare circuit diagram workbooks.' },
  { id: 'EXM-3', subject: 'Cambridge English IGCSE Mock Exam', date: '2026-03-10', time: '08:00 AM - 10:30 AM', venue: 'Senior Wing Auditorium', duration: '2h 30m', examiner: 'Mr. Richard Thorne', instructions: 'Black ballpoint pens only. Dictionaries not allowed.' },
];

export const STUDENT_ACHIEVEMENTS = [
  { id: 'ACH-0', title: 'MEC Music Academy Europe Tour 2026 (Vienna)', category: 'Music & International Tours', date: 'Aug 2026', badge: 'Europe Tour 2026', desc: 'Selected for the prestigious MEC Music Academy International Tour to Vienna, Austria — performing at St. Stephen\'s Cathedral and attending conservatory masterclasses.' },
  { id: 'ACH-1', title: 'World Scholar\'s Cup Global Qualifier', category: 'Debate & Academics', date: 'Feb 2026', badge: 'Gold Medalist', desc: 'Ranked Top 3 overall scholar team in Nairobi Regional Round. Qualified for Kuala Lumpur Global Round.' },
  { id: 'ACH-2', title: 'ABRSM Grade 2 Piano Distinction', category: 'Music Academy', date: 'Nov 2025', badge: 'Distinction', desc: 'Scored 138/150 in the Associated Board of the Royal Schools of Music practical examination.' },
  { id: 'ACH-3', title: 'Inter-House Swimming Gala Champion', category: 'Sports', date: 'Oct 2025', badge: '1st Place', desc: 'Gold Medal in 50m Butterfly & 4x50m Medley Relay representing Chemelil House.' },
  { id: 'ACH-4', title: 'MEC STEM Robotics Innovator Award', category: 'Innovation', date: 'Jul 2025', badge: 'Top Project', desc: 'Built an automated solar tracking circuit model during MEC Innovation Week.' },
];

export const STUDENT_CLUBS = [
  { name: 'MEC Music Academy (Europe Tour 2026)', category: 'Arts & Music', patron: 'Music Conservatory Faculty', meeting: 'Tuesdays & Thursdays 03:30 PM - 05:00 PM', venue: 'Music Studio A & Concert Hall', status: 'Tour Delegate' },
  { name: 'World Scholar\'s Cup Club', category: 'Academic & Debate', patron: 'Mr. Richard Thorne', meeting: 'Wednesdays 03:30 PM - 05:00 PM', venue: 'Main Auditorium', status: 'Active Member' },
  { name: 'MEC Robotics & STEM Society', category: 'Technology', patron: 'Eng. Kevin Otieno', meeting: 'Thursdays 03:30 PM - 05:00 PM', venue: 'Innovation Lab 1', status: 'Active Member' },
  { name: 'Swimming & Aquatics Squad', category: 'Sports', patron: 'Coach Brian', meeting: 'Mondays & Fridays 04:00 PM', venue: 'Aquatics Complex', status: 'Team Captain' }
];

export const TEACHER_PROFILE_DATA = {
  name: 'Mr. David Omondi',
  title: 'Senior Mathematics & STEM Educator',
  department: 'Mathematics & Upper Primary Section',
  email: 'd.omondi@moieducentre.ac.ke',
  phone: '+254 722 100 200',
  staffId: 'MEC-EMP-039',
  headOfStream: 'Grade 6 East Class Teacher',
  qualifications: 'B.Ed. Mathematics & Science (Kenyatta University), Cambridge IGCSE Certified Examiner',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
  assignedClasses: ['Grade 6 East (Class Teacher)', 'Grade 6 West (Mathematics)', 'Grade 5 North (Mathematics & STEM)'],
  pendingMarkingCount: 18,
  todayLessonsCount: 4,
};

export const CLASS_STUDENTS_LIST = [
  { admNo: 'MEC-2019-4821', name: 'Brian Mukanzi', grade: 'Grade 6 East', attendancePct: 98, mathScore: 88, status: 'Present', pastoralNote: 'Participated actively in robotics team.' },
  { admNo: 'MEC-2019-4822', name: 'Kiprono Cheruiyot', grade: 'Grade 6 East', attendancePct: 100, mathScore: 94, status: 'Present', pastoralNote: 'Assigned as class monitor for Week 7.' },
  { admNo: 'MEC-2019-4823', name: 'Amina Mohamed', grade: 'Grade 6 East', attendancePct: 95, mathScore: 82, status: 'Present', pastoralNote: 'Showing great progress in geometry.' },
  { admNo: 'MEC-2019-4824', name: 'Faith Wanjiku', grade: 'Grade 6 East', attendancePct: 92, mathScore: 79, status: 'Present', pastoralNote: 'Extra assistance recommended for algebra fractions.' },
  { admNo: 'MEC-2019-4825', name: 'Ethan Odhiambo', grade: 'Grade 6 East', attendancePct: 97, mathScore: 91, status: 'Present', pastoralNote: 'Selected for National Mathematics Olympiad.' },
];

export const TEACHER_LESSON_PLANS = [
  { id: 'LP-101', subject: 'Mathematics', class: 'Grade 6 East', topic: 'Quadratic Equations & Spatial Angles', curriculum: 'Kenyan CBC Strand 3', objectives: 'Learners apply algebraic reasoning to calculate missing interior angles.', competencies: 'Critical thinking, Digital Literacy, Problem Solving', activities: 'Group cardboard angle geometry activity & interactive smartboard quiz.', status: 'Approved' },
  { id: 'LP-102', subject: 'Science & Technology', class: 'Grade 6 East', topic: 'Series & Parallel Electrical Circuits', curriculum: 'Kenyan CBC Strand 2', objectives: 'Construct working parallel circuits using switches and LED indicators.', competencies: 'Self-efficacy, Collaboration, Scientific Inquiry', activities: 'Hands-on lab experiment in Bio-Science Lab 2.', status: 'Approved' }
];

export const SCHOOL_ERP_METRICS = {
  totalLearners: 2450,
  newAdmissionsThisTerm: 184,
  learnerAttendanceRate: 98.2,
  staffAttendanceRate: 99.1,
  totalFeesBilledKES: 285000000,
  totalFeesCollectedKES: 242500000,
  outstandingFeesKES: 42500000,
  collectionRatePct: 85.1,
  teacherCount: 112,
  supportStaffCount: 48,
  activeBusesCount: 24,
  pendingApprovalsCount: 7,
  unreadAlertsCount: 4,
};

export const PRINCIPAL_APPROVAL_QUEUE = [
  { id: 'APP-901', type: 'Procurement Request', requester: 'Eng. Kevin Otieno (Innovation Lab)', dept: 'ICT & STEM', date: '2026-02-19', title: 'Procurement of 12 Interactive Smart Boards & Solar Kits', amount: 450000, status: 'Pending Review', priority: 'High', doc: 'PO_SmartBoards_Specification.pdf', desc: 'Upgrade for Senior School STEM & Robotics Lab 2.' },
  { id: 'APP-902', type: 'Fee Adjustment / Waiver', requester: 'Accounts Office (Mrs. Mercy Ruto)', dept: 'Finance Office', date: '2026-02-18', title: '50% Sibling Fee Scholarship Waiver — Adm MEC-2022-8104', amount: 61500, status: 'Pending Review', priority: 'Medium', doc: 'Bursary_Board_Minutes_Feb2026.pdf', desc: 'Approved by Board Bursary Committee for 3rd child.' },
  { id: 'APP-903', type: 'Staff Annual Leave Request', requester: 'Ms. Clara Njeri (Language Arts)', dept: 'Human Resources', date: '2026-02-17', title: '5-Day Maternity / Compassionate Leave Request', amount: 0, status: 'Pending Review', priority: 'Normal', doc: 'Leave_Application_Form_Clara.pdf', desc: 'Reliever assigned: Mr. Richard Thorne.' },
  { id: 'APP-904', type: 'Learner Transfer Approval', requester: 'Admissions Office', dept: 'Admissions', date: '2026-02-16', title: 'Senior School Cambridge Pathway Transfer — Adm MEC-2016-1930', amount: 0, status: 'Pending Review', priority: 'Normal', doc: 'Cambridge_Entry_Assessment_Score.pdf', desc: 'Passed Cambridge International Placement Exam with Distinction.' },
  { id: 'APP-905', type: 'Term Report Card Sign-Off', requester: 'Grade 6 Section Head (Mr. David Omondi)', dept: 'Primary Academic Wing', date: '2026-02-15', title: 'Term 1 Official Learner Report Forms (Grade 6 East - 42 Students)', amount: 0, status: 'Approved', priority: 'High', doc: 'Grade6East_Compiled_Report_Cards.pdf', desc: 'Signed off by Principal Mrs. Florence Kamau.' }
];

export const ADMISSIONS_PIPELINE = [
  { id: 'ADM-2026-001', applicantName: 'Ethan Wambua', parentName: 'Dr. Samuel Wambua', gradeApplied: 'Grade 1 CBC', date: '2026-02-18', status: 'Assessment Scheduled', testScore: 'Pass (92%)', assignedClass: 'Grade 1 East' },
  { id: 'ADM-2026-002', applicantName: 'Sophia Njoki', parentName: 'Mrs. Caroline Njoki', gradeApplied: 'Year 7 Cambridge', date: '2026-02-17', status: 'Under Review', testScore: 'Pending', assignedClass: 'Senior A' },
  { id: 'ADM-2026-003', applicantName: 'Jabari Ochieng', parentName: 'Eng. Patrick Ochieng', gradeApplied: 'Grade 4 CBC', date: '2026-02-15', status: 'Admitted & Allocated', testScore: 'Pass (88%)', assignedClass: 'Grade 4 North' },
  { id: 'ADM-2026-004', applicantName: 'Zaria Kiprop', parentName: 'Mrs. Hannah Kiprop', gradeApplied: 'Pre-Primary 2', date: '2026-02-10', status: 'Application Received', testScore: 'Pending', assignedClass: 'PP2 Yellow' },
];

export const PROCUREMENT_REQUESTS = [
  { id: 'PR-4401', item: '12 Interactive Touchscreens & Projectors', vendor: 'Safaricom Business Solutions', dept: 'ICT', amount: 450000, date: '2026-02-19', status: 'Pending Principal Approval' },
  { id: 'PR-4402', item: 'Bio-Science Lab Chemicals & Microscope Slides', vendor: 'Kobian Scientific Kenya', dept: 'Sciences', amount: 185000, date: '2026-02-14', status: 'Approved & Order Placed' },
  { id: 'PR-4403', item: '50 New Yamaha Keyboards & Music Theory Books', vendor: 'Kenya Music House', dept: 'Music Academy', amount: 320000, date: '2026-02-05', status: 'Delivered & Verified' },
];

export const SCHOOL_ASSETS = [
  { assetNo: 'MEC-AST-001', name: 'Scania 62-Seater School Bus (Bus 04)', category: 'Fleet Transport', location: 'Transport Depot', condition: 'Excellent', serial: 'KDF 819Z' },
  { assetNo: 'MEC-AST-042', name: 'Smart Board 75" 4K Interactive Display', category: 'ICT Equipment', location: 'Innovation Hub 1', condition: 'New', serial: 'SMT-90812' },
  { assetNo: 'MEC-AST-108', name: 'Yamaha Grand Piano C3X', category: 'Music Academy', location: 'Main Auditorium', condition: 'Excellent', serial: 'YMH-33891' },
];

export const ERP_AUDIT_LOGS = [
  { timestamp: '2026-02-20 08:14 AM', user: 'Principal Mrs. Florence Kamau', role: 'Principal', action: 'Approved Procurement Order', details: 'Approved PO #APP-901 (Smart Boards & Solar Kits - KES 450,000)' },
  { timestamp: '2026-02-19 04:30 PM', user: 'Accounts Office (Mrs. Mercy Ruto)', role: 'Finance', action: 'Reconciled M-Pesa Paybill Batch', details: 'Confirmed 142 transactions totaling KES 4,850,000' },
  { timestamp: '2026-02-19 11:15 AM', user: 'Mr. David Omondi', role: 'Teacher', action: 'Submitted Attendance Register', details: 'Grade 6 East Roll Call marked (42 Present, 0 Absent)' },
  { timestamp: '2026-02-18 02:45 PM', user: 'Admin System', role: 'System', action: 'Automated Fee Balance Alert Sent', details: 'Dispatched SMS notifications to 48 parents with outstanding balances' }
];



