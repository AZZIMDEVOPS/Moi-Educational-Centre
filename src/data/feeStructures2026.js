// ─── Official Moi Educational Centre Fee Structures 2026 ─────────────────

export const CBE_FEES_2026 = {
  title: "CBE Fee Structure 2026",
  subtitle: "Competency Based Education (Pre-Primary to Junior School)",
  currency: "KES",
  headers: ["Section", "Grade", "Term 1", "Term 2", "Term 3", "Annual Total"],
  grades: [
    { section: "PRE-PRIMARY", grade: "CRE'CHE", term1: 30000, term2: 30000, term3: 30000, total: 90000 },
    { section: "PRE-PRIMARY", grade: "RECEPTION", term1: 67200, term2: 67200, term3: 37200, total: 171600 },
    { section: "PRE-PRIMARY", grade: "PP1", term1: 69400, term2: 69400, term3: 39400, total: 178200 },
    { section: "PRE-PRIMARY", grade: "PP2", term1: 69400, term2: 69400, term3: 39400, total: 178200 },
    
    { section: "LOWER PRIMARY", grade: "GRADE 1", term1: 77100, term2: 77100, term3: 47100, total: 201300 },
    { section: "LOWER PRIMARY", grade: "GRADE 2", term1: 77100, term2: 77100, term3: 47100, total: 201300 },
    { section: "LOWER PRIMARY", grade: "GRADE 3", term1: 82600, term2: 82600, term3: 52600, total: 217800 },
    { section: "LOWER PRIMARY", grade: "GRADE 4", term1: 82600, term2: 82600, term3: 52600, total: 217800 },
    
    { section: "UPPER PRIMARY", grade: "GRADE 5", term1: 88100, term2: 88100, term3: 58100, total: 234300 },
    { section: "UPPER PRIMARY", grade: "GRADE 6", term1: 89200, term2: 89200, term3: 59200, total: 237600 },
    
    { section: "JUNIOR SCHOOL", grade: "GRADE 7", term1: 96700, term2: 96700, term3: 66700, total: 260100 },
    { section: "JUNIOR SCHOOL", grade: "GRADE 8", term1: 96700, term2: 96700, term3: 66700, total: 260100 },
    { section: "JUNIOR SCHOOL", grade: "GRADE 9", term1: 96700, term2: 96700, term3: 66700, total: 260100 }
  ],
  otherCharges: [
    { item: "Medical Fee", amount: 2000, frequency: "Annual", type: "medical" },
    { item: "Interview / Application Fee", amount: 2000, frequency: "Once", type: "interview" },
    { item: "Admission Fee", amount: 4000, frequency: "Once", type: "admission" },
    { item: "PA Books Project (Grade 1)", amount: 7500, frequency: "Once", type: "books" },
    { item: "PA Books Project (Grade 7)", amount: 10000, frequency: "Once", type: "books" },
    { item: "Caution Money (Refundable)", amount: 10000, frequency: "Once", type: "caution" }
  ],
  contacts: {
    phone: "+254-20-6004155 / 0702 090 213",
    wireless: "020-2301895",
    fax: "+254-20-6008895",
    email: "info@moieducentre.ac.ke",
    box: "P.O. BOX 45373-00100, NAIROBI"
  }
};

export const SENIOR_SCHOOL_FEES_2026 = {
  title: "Senior School — Grade 10 Fees Structure 2026",
  subtitle: "Moi Educational Centre High School",
  currency: "KES",
  term1: 100000,
  term2: 100000,
  term3: 75000,
  annualTotal: 275000,
  inclusions: [
    "Tuition & Expert Subject Instruction",
    "Hot Nutritious Daily Lunch",
    "Course Books & Core Literature",
    "Essential School Stationery",
    "Swimming Lessons & Aquatic Access"
  ],
  additionalCharges: [
    { item: "Interview / Application Fee", amount: 2000, frequency: "Once", type: "interview" },
    { item: "Medical Fee", amount: 2000, frequency: "Annual", type: "medical" },
    { item: "Admission Fee", amount: 4000, frequency: "Once", type: "admission" },
    { item: "Caution Money", amount: 10000, frequency: "Once", type: "caution" },
    { item: "Book Fund", amount: 25000, frequency: "Once", type: "books" }
  ],
  additionalTotal: 43000,
  electives: [
    { name: "Music Lessons / Instruments", cost: "Ksh 9,000 / term", type: "music" },
    { name: "Arts and Design", cost: "Ksh 10,000 / term", type: "arts" },
    { name: "Aviation Programme", cost: "Ksh 10,000 / term", type: "aviation" }
  ],
  contacts: {
    phone: "0797 339 900 / 0777 339 909",
    wireless: "020-6008895",
    email: "highschool@moieducentre.ac.ke",
    box: "P.O. Box 45373-00100, NAIROBI"
  }
};

export const CAMBRIDGE_FEES_2026 = {
  title: "Cambridge Education Fees Structure 2025/2026",
  subtitle: "Cambridge International Curriculum (Year 1 to Year 6)",
  currency: "KES",
  headers: ["Year Level", "Term 1", "Term 2", "Term 3", "Annual Total"],
  years: [
    { year: "Year 1", term1: 153832, term2: 148832, term3: 79696, total: 382360 },
    { year: "Year 2", term1: 153832, term2: 148832, term3: 79696, total: 382360 },
    { year: "Year 3", term1: 164392, term2: 159392, term3: 84696, total: 408480 },
    { year: "Year 4", term1: 164392, term2: 159392, term3: 84696, total: 408480 },
    { year: "Year 5", term1: 172952, term2: 172952, term3: 88696, total: 434850 },
    { year: "Year 6", term1: 172952, term2: 172952, term3: 88696, total: 434850 }
  ],
  otherCharges: [
    { item: "Medical Fee", amount: 2000, frequency: "Annual", type: "medical" },
    { item: "Interview Fee", amount: 2000, frequency: "Once", type: "interview" },
    { item: "Admission Fee", amount: 4000, frequency: "Once", type: "admission" },
    { item: "Book Fund", amount: 35000, frequency: "Once", type: "books" },
    { item: "Caution Money", amount: 20000, frequency: "Once", type: "caution" },
    { item: "Work Books", amount: 20000, frequency: "Annual", type: "books" }
  ],
  contacts: {
    phone: "+254-20-6004155 / 0702 090 213",
    wireless: "020-2301895",
    fax: "+254-20-6008895",
    email: "info@moieducentre.ac.ke",
    box: "P.O. BOX 45373-00100, NAIROBI"
  }
};

export const PAYMENT_CHANNELS_2026 = {
  cbeAndCambridge: {
    schoolFees: {
      bankName: "KCB Bank Kenya",
      accountName: "Moi Educational Centre",
      accountNumber: "1282818309",
      swiftCode: "KCBLKENX",
      bankCode: "01",
      branchCode: "01-338",
      mpesaPaybill: "522533",
      mpesaAccountFormat: "7661342#<5-Digit-Adm-No> (e.g. 7661342#00345)"
    },
    clubsAndTrips: {
      bankName: "KCB Bank Kenya",
      accountName: "Moi Educational Centre",
      accountNumber: "1321340605",
      swiftCode: "KCBLKENX",
      bankCode: "01",
      branchCode: "01-338",
      mpesaPaybill: "522533",
      mpesaAccountFormat: "7785621#<5-Digit-Adm-No> (e.g. 7785621#00345)"
    }
  },
  seniorSchool: {
    schoolFees: {
      bankName: "KCB Bank Kenya",
      accountName: "Moi Educational Centre",
      accountNumber: "1268406880",
      swiftCode: "KCBLKENX",
      bankCode: "01",
      branchCode: "01-289",
      mpesaPaybill: "522533",
      mpesaAccountFormat: "7661613#<5-Digit-Adm-No> (e.g. 7661613#00345)"
    },
    clubsAndTrips: {
      bankName: "KCB Bank Kenya",
      accountName: "Moi Educational Centre",
      accountNumber: "1314809091",
      swiftCode: "KCBLKENX",
      bankCode: "01",
      branchCode: "01-338",
      mpesaPaybill: "522533",
      mpesaAccountFormat: "7581846#<Adm-No>#<Club> (e.g. 7581846#00345#Soccer)"
    }
  },
  importantNotes: [
    "Strictly indicate the student's 5-digit admission number as Account Number and NOT the student's name.",
    "Bankers' cheques must be drawn in favor of 'Moi Educational Centre'. Personal cheques are not accepted.",
    "Fees must be paid in full on or before the first day of each term.",
    "FEES ONCE PAID IS NOT REFUNDABLE under school policy."
  ]
};
