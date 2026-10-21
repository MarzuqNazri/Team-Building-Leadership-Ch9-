/* ============================================================
   LEADERSHIP CHAPTER 9 (TEAMS) — EDITABLE QUESTION BANK
   Plain JavaScript; no server, build step, or external assets.
   Source basis: uploaded ENC133 Leadership Chapter 9 slides.
   To edit: change question wording/options/explanations below.
   type: "mcq" or "tf"; answer is the zero-based option index.
   ============================================================ */
"use strict";

const QUESTION_BANK = [
  {
    id: 1, type: "mcq", room: "The Team Definition", roomBm: "Definisi Pasukan",
    clue: "The first lock asks what makes people a team—not merely people in the same place.",
    clueBm: "Kunci pertama bertanya apakah yang menjadikan orang ramai sebuah pasukan—bukan sekadar berada di tempat yang sama.",
    question: "Which combination best defines a team?",
    questionBm: "Gabungan manakah paling tepat mentakrifkan pasukan?",
    scenario: "A restaurant is preparing for a busy service.",
    scenarioBm: "Sebuah restoran sedang membuat persediaan untuk perkhidmatan yang sibuk.",
    options: [
      {en:"People in the same workplace who complete unrelated individual tasks.", bm:"Orang di tempat kerja yang sama dan menyiapkan tugas individu yang tidak berkaitan."},
      {en:"Individuals with a shared purpose, common goals, interdependent roles and collective accountability.", bm:"Individu yang mempunyai tujuan bersama, matlamat sepunya, peranan saling bergantung dan akauntabiliti kolektif."},
      {en:"A group where only the manager is responsible for results.", bm:"Kumpulan yang hanya pengurus bertanggungjawab terhadap hasil."},
      {en:"People who work independently and avoid communication.", bm:"Orang yang bekerja sendiri dan mengelakkan komunikasi."}
    ], answer:1,
    explanation:"A team combines a shared purpose, common goals, interdependent roles and accountability for collective performance.",
    explanationBm:"Pasukan menggabungkan tujuan bersama, matlamat sepunya, peranan saling bergantung dan akauntabiliti terhadap prestasi kolektif."
  },
  {
    id: 2, type: "tf", room: "Group or Team?", roomBm: "Kumpulan atau Pasukan?",
    clue: "Look for interdependence and collective responsibility.",
    clueBm: "Cari kebergantungan antara ahli dan tanggungjawab kolektif.",
    question: "True or False: A team differs from a group because team members work toward common goals and share responsibility for collective results.",
    questionBm: "Betul atau Salah: Pasukan berbeza daripada kumpulan kerana ahli pasukan berusaha mencapai matlamat bersama dan berkongsi tanggungjawab terhadap hasil kolektif.",
    scenario: "Several restaurant employees share a building but work separately. A second crew coordinates every role to launch a new restaurant.",
    scenarioBm: "Beberapa pekerja restoran berkongsi bangunan tetapi bekerja secara berasingan. Satu kru lain menyelaraskan setiap peranan untuk membuka restoran baharu.",
    options: [
      {en:"True / Betul",bm:"Betul"},
      {en:"False / Salah",bm:"Salah"}
    ], answer:0,
    explanation:"Correct. Merely sharing a workplace does not make people a team. Coordinated work, common goals, interdependence and collective accountability distinguish a team.",
    explanationBm:"Betul. Berkongsi tempat kerja sahaja tidak menjadikan mereka pasukan. Kerja terselaras, matlamat bersama, kebergantungan dan akauntabiliti kolektif membezakan pasukan."
  },
  {
    id: 3, type: "mcq", room: "The Trust Engine", roomBm: "Enjin Kepercayaan",
    clue: "The vault needs the foundations of effective teamwork.",
    clueBm: "Peti besi memerlukan asas kerja berpasukan yang berkesan.",
    question: "Which action best supports an effective team?",
    questionBm: "Tindakan manakah paling menyokong pasukan yang berkesan?",
    scenario: "A hospitality team is repeatedly duplicating work and missing service details.",
    scenarioBm: "Pasukan hospitaliti kerap mengulangi kerja yang sama dan terlepas butiran perkhidmatan.",
    options: [
      {en:"Keep roles vague so everyone can do anything.",bm:"Biarkan peranan tidak jelas supaya semua orang boleh melakukan apa sahaja."},
      {en:"Reward only individual success and discourage discussion.",bm:"Ganjar kejayaan individu sahaja dan tidak menggalakkan perbincangan."},
      {en:"Clarify shared goals and roles, encourage open communication, and reinforce accountability.",bm:"Jelaskan matlamat bersama dan peranan, galakkan komunikasi terbuka serta teguhkan akauntabiliti."},
      {en:"Avoid leadership so the team must guess priorities.",bm:"Elakkan kepimpinan supaya pasukan perlu meneka keutamaan."}
    ], answer:2,
    explanation:"Effective teams need clear purpose and goals, appropriate skills and defined roles, open communication and trust, accountability, commitment, leadership and cooperation.",
    explanationBm:"Pasukan berkesan memerlukan tujuan dan matlamat yang jelas, kemahiran serta peranan yang sesuai, komunikasi terbuka dan kepercayaan, akauntabiliti, komitmen, kepimpinan dan kerjasama."
  },
  {
    id: 4, type: "mcq", room: "The Storm Chamber", roomBm: "Bilik Ribut",
    clue: "Disagreement has appeared. Identify the stage and the leader's response.",
    clueBm: "Perselisihan telah muncul. Kenal pasti peringkat dan tindak balas ketua.",
    question: "During which team-development stage do disagreements often emerge, requiring the leader to manage conflict and clarify responsibilities?",
    questionBm: "Dalam peringkat perkembangan pasukan yang manakah perselisihan sering muncul sehingga ketua perlu mengurus konflik dan menjelaskan tanggungjawab?",
    scenario: "Two banquet staff disagree about setup priorities before a wedding.",
    scenarioBm: "Dua orang kakitangan jamuan tidak bersetuju tentang keutamaan susun atur sebelum majlis perkahwinan.",
    options: [
      {en:"Forming / Pembentukan",bm:"Pembentukan"},
      {en:"Storming / Pergolakan",bm:"Pergolakan"},
      {en:"Norming / Penetapan norma",bm:"Penetapan norma"},
      {en:"Performing / Pelaksanaan berkesan",bm:"Pelaksanaan berkesan"}
    ], answer:1,
    explanation:"Storming is the stage where disagreements and uncertainty can rise. The leader should facilitate discussion, manage conflict and clarify responsibilities.",
    explanationBm:"Storming ialah peringkat apabila perselisihan dan ketidakpastian boleh meningkat. Ketua perlu memudah cara perbincangan, mengurus konflik dan menjelaskan tanggungjawab."
  },
  {
    id: 5, type: "mcq", room: "The Coordination Bridge", roomBm: "Jambatan Penyelarasan",
    clue: "The team is becoming coordinated. Which development stage is this?",
    clueBm: "Pasukan semakin terselaras. Apakah peringkat perkembangan ini?",
    question: "A team has established shared expectations and work patterns. Members coordinate more consistently and follow agreed standards. Which stage best fits?",
    questionBm: "Sebuah pasukan telah menetapkan jangkaan bersama dan corak kerja. Ahli menyelaras kerja dengan lebih konsisten serta mematuhi piawaian yang dipersetujui. Peringkat manakah paling sesuai?",
    scenario: "The team has moved beyond its early disagreements.",
    scenarioBm: "Pasukan telah melepasi perselisihan pada peringkat awal.",
    options: [
      {en:"Forming / Pembentukan",bm:"Pembentukan"},
      {en:"Storming / Pergolakan",bm:"Pergolakan"},
      {en:"Norming / Penetapan norma",bm:"Penetapan norma"},
      {en:"Performing / Pelaksanaan berkesan",bm:"Pelaksanaan berkesan"}
    ], answer:2,
    explanation:"Norming is when expectations and patterns become established. The leader reinforces standards and encourages coordination.",
    explanationBm:"Norming ialah peringkat apabila jangkaan dan corak kerja mula mantap. Ketua mengukuhkan piawaian dan menggalakkan penyelarasan."
  },
  {
    id: 6, type: "mcq", room: "The Team-Type Archive", roomBm: "Arkib Jenis Pasukan",
    clue: "Match the team structure to the job's purpose.",
    clueBm: "Padankan struktur pasukan dengan tujuan tugas.",
    question: "A hotel forms a temporary team to renovate guest rooms for a defined project. What type of team is this?",
    questionBm: "Sebuah hotel membentuk pasukan sementara untuk mengubah suai bilik tetamu bagi projek yang ditetapkan. Apakah jenis pasukan ini?",
    scenario: "The team is formed for a defined piece of work and will not be permanent.",
    scenarioBm: "Pasukan dibentuk untuk kerja yang ditetapkan dan tidak akan kekal.",
    options: [
      {en:"Functional team / Pasukan fungsian",bm:"Pasukan fungsian"},
      {en:"Cross-functional team / Pasukan rentas fungsi",bm:"Pasukan rentas fungsi"},
      {en:"Project team / Pasukan projek",bm:"Pasukan projek"},
      {en:"Self-managed team / Pasukan kendiri",bm:"Pasukan kendiri"}
    ], answer:2,
    explanation:"A project team is temporary and formed to deliver a defined project, such as a hotel renovation.",
    explanationBm:"Pasukan projek bersifat sementara dan dibentuk untuk menyiapkan projek tertentu, seperti pengubahsuaian hotel."
  },
  {
    id: 7, type: "tf", room: "The Cohesion Core", roomBm: "Teras Kesepaduan",
    clue: "Unity can help a team, but it is not a guarantee of results.",
    clueBm: "Kesatuan boleh membantu pasukan, tetapi bukan jaminan hasil yang baik.",
    question: "True or False: High team cohesiveness always guarantees high performance.",
    questionBm: "Betul atau Salah: Kesepaduan pasukan yang tinggi sentiasa menjamin prestasi yang tinggi.",
    scenario: "A close-knit kitchen team rejects every new idea to preserve harmony.",
    scenarioBm: "Pasukan dapur yang rapat menolak setiap idea baharu demi mengekalkan keharmonian.",
    options: [
      {en:"True / Betul",bm:"Betul"},
      {en:"False / Salah",bm:"Salah"}
    ], answer:1,
    explanation:"False. Cohesiveness can strengthen commitment and cooperation, but a cohesive team may still perform poorly if goals, standards or direction are misaligned. Excessive cohesion can encourage groupthink or resistance to change.",
    explanationBm:"Salah. Kesepaduan boleh mengukuhkan komitmen dan kerjasama, tetapi pasukan yang erat masih boleh berprestasi rendah jika matlamat, piawaian atau hala tuju tidak selaras. Kesepaduan berlebihan boleh menggalakkan pemikiran kelompok atau penolakan perubahan."
  },
  {
    id: 8, type: "mcq", room: "The Remote Control Room", roomBm: "Bilik Kawalan Jarak Jauh",
    clue: "Remote collaboration needs deliberate structure.",
    clueBm: "Kerjasama jarak jauh memerlukan struktur yang dirancang dengan teliti.",
    question: "Which practice is most appropriate for leading a virtual team?",
    questionBm: "Amalan manakah paling sesuai untuk memimpin pasukan maya?",
    scenario: "Hotel staff, suppliers and event planners coordinate from different locations.",
    scenarioBm: "Kakitangan hotel, pembekal dan perancang acara menyelaras kerja dari lokasi yang berbeza.",
    options: [
      {en:"Assume everyone knows when and how to respond.",bm:"Anggap semua orang tahu bila dan bagaimana untuk memberi respons."},
      {en:"Set clear goals and roles, agree on communication norms, track progress and build trust.",bm:"Tetapkan matlamat dan peranan yang jelas, persetujui norma komunikasi, pantau kemajuan dan bina kepercayaan."},
      {en:"Use no shared tools or progress checks.",bm:"Jangan gunakan alat bersama atau semakan kemajuan."},
      {en:"Measure performance only by how often someone appears online.",bm:"Ukur prestasi hanya berdasarkan kekerapan seseorang kelihatan dalam talian."}
    ], answer:1,
    explanation:"Virtual teams depend on digital communication and may face lower visibility, coordination challenges and technology risks. Leaders should clarify goals and roles, set communication norms, track deliverables and build trust.",
    explanationBm:"Pasukan maya bergantung pada komunikasi digital dan mungkin menghadapi keterlihatan yang lebih rendah, cabaran penyelarasan serta risiko teknologi. Ketua perlu menjelaskan matlamat dan peranan, menetapkan norma komunikasi, memantau hasil kerja dan membina kepercayaan."
  },
  {
    id: 9, type: "mcq", room: "The Conflict Resolution Lock", roomBm: "Kunci Penyelesaian Konflik",
    clue: "The final lock requires a constructive response—not blame.",
    clueBm: "Kunci terakhir memerlukan tindak balas membina—bukan menyalahkan.",
    question: "Two departments blame each other because guest requirements keep changing and food production is delayed. What should the leader do first?",
    questionBm: "Dua jabatan saling menyalahkan kerana keperluan tetamu sering berubah dan pengeluaran makanan lewat. Apakah tindakan pertama yang patut dilakukan oleh ketua?",
    scenario: "Communication has deteriorated and both sides blame each other.",
    scenarioBm: "Komunikasi semakin buruk dan kedua-dua pihak saling menyalahkan.",
    options: [
      {en:"Publicly blame one department before hearing both sides.",bm:"Menyalahkan satu jabatan secara terbuka sebelum mendengar kedua-dua pihak."},
      {en:"Ignore the issue and hope it disappears.",bm:"Mengabaikan isu dan berharap ia hilang sendiri."},
      {en:"Bring both sides together, clarify facts and responsibilities, and agree on a communication process.",bm:"Temukan kedua-dua pihak, jelaskan fakta dan tanggungjawab, serta persetujui proses komunikasi."},
      {en:"Treat every disagreement as a personal attack.",bm:"Anggap setiap perselisihan sebagai serangan peribadi."}
    ], answer:2,
    explanation:"Constructive conflict management starts by understanding the issue and hearing both sides. Clarifying responsibilities and agreeing on communication can address role ambiguity and communication breakdowns.",
    explanationBm:"Pengurusan konflik yang membina bermula dengan memahami isu dan mendengar kedua-dua pihak. Menjelaskan tanggungjawab dan menyepakati komunikasi boleh menangani kekaburan peranan serta kegagalan komunikasi."
  },
  {
    id: 10, type: "mcq", room: "The Final Leadership Test", roomBm: "Ujian Kepimpinan Terakhir",
    clue: "A new case tests whether you can transfer the chapter's ideas to an unfamiliar situation.",
    clueBm: "Kes baharu menguji keupayaan anda menggunakan idea bab ini dalam situasi yang berbeza.",
    question: "A student entrepreneurship team is launching a campus food stall. Marketing, purchasing and food-preparation students have different expertise but must coordinate toward one launch goal. What is the best team design?",
    questionBm: "Pasukan keusahawanan pelajar sedang melancarkan gerai makanan kampus. Pelajar pemasaran, pembelian dan penyediaan makanan mempunyai kepakaran berbeza tetapi perlu menyelaras kerja untuk satu matlamat pelancaran. Reka bentuk pasukan manakah paling sesuai?",
    scenario: "This is a new application example, not the same workplace examples used earlier.",
    scenarioBm: "Ini ialah contoh aplikasi baharu, bukan contoh tempat kerja yang digunakan sebelum ini.",
    options: [
      {en:"A cross-functional team with clear shared goals, defined roles and regular coordination.",bm:"Pasukan rentas fungsi dengan matlamat bersama yang jelas, peranan ditetapkan dan penyelarasan berkala."},
      {en:"A group where each department works separately and shares no progress.",bm:"Kumpulan yang setiap bahagiannya bekerja berasingan dan tidak berkongsi kemajuan."},
      {en:"A permanent functional team made up only of marketing students.",bm:"Pasukan fungsian kekal yang hanya terdiri daripada pelajar pemasaran."},
      {en:"A team that avoids role clarity to encourage spontaneous work.",bm:"Pasukan yang mengelakkan kejelasan peranan untuk menggalakkan kerja spontan."}
    ], answer:0,
    explanation:"This is a cross-functional team because members from different functions contribute to a shared goal. Clear goals, defined roles and regular coordination help their interdependent work succeed.",
    explanationBm:"Ini ialah pasukan rentas fungsi kerana ahli daripada fungsi berbeza menyumbang kepada matlamat bersama. Matlamat jelas, peranan ditetapkan dan penyelarasan berkala membantu kerja saling bergantung berjaya."
  }
];

const $ = (id) => document.getElementById(id);
const screens = ["homeScreen","instructionsScreen","gameScreen","completionScreen"];
let currentIndex = 0;
let score = 0;
let attempts = QUESTION_BANK.map(() => 0);
let firstTryCorrect = QUESTION_BANK.map(() => false);
let completed = QUESTION_BANK.map(() => false);
let selectedAnswer = null;
let answerLocked = false;
let timedMode = false;
let secondsLeft = 900;
let timerInterval = null;
let startedAt = null;

function showScreen(screenId) {
  screens.forEach(id => $(id).classList.toggle("hidden", id !== screenId));
  window.scrollTo({top:0, behavior:"smooth"});
}
function stopTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = null;
}
function resetGame() {
  stopTimer();
  currentIndex = 0; score = 0;
  attempts = QUESTION_BANK.map(() => 0);
  firstTryCorrect = QUESTION_BANK.map(() => false);
  completed = QUESTION_BANK.map(() => false);
  selectedAnswer = null; answerLocked = false;
  secondsLeft = 900; startedAt = null;
  $("feedbackBox").classList.add("hidden");
  $("timerCard").classList.add("hidden");
}
function startInstructions() {
  showScreen("instructionsScreen");
}
function beginMission() {
  resetGame();
  timedMode = !$("untimedToggle").checked;
  startedAt = Date.now();
  if (timedMode) {
    $("timerCard").classList.remove("hidden");
    updateTimer();
    timerInterval = setInterval(() => {
      secondsLeft -= 1;
      updateTimer();
      if (secondsLeft <= 0) {
        stopTimer();
        // Time is advisory: the player may finish learning without losing score.
        $("timerValue").textContent = "00:00";
        $("timerCard").classList.add("time-expired");
      }
    }, 1000);
  }
  renderQuestion();
  showScreen("gameScreen");
}
function updateTimer() {
  const m = Math.floor(Math.max(0,secondsLeft)/60).toString().padStart(2,"0");
  const s = (Math.max(0,secondsLeft)%60).toString().padStart(2,"0");
  $("timerValue").textContent = `${m}:${s}`;
}
function renderProgress() {
  const total = QUESTION_BANK.length;
  const cleared = completed.filter(Boolean).length;
  $("roomCounter").textContent = `${String(currentIndex+1).padStart(2,"0")} / ${String(total).padStart(2,"0")}`;
  $("scoreValue").textContent = `${score} / ${total*10}`;
  $("progressLabel").textContent = `${Math.round(cleared/total*100)}% unlocked`;
  $("progressBar").style.width = `${cleared/total*100}%`;
  $("sceneRoomNo").textContent = String(currentIndex+1).padStart(2,"0");
  $("roomDots").innerHTML = QUESTION_BANK.map((q,i)=>`<span class="room-dot ${completed[i]?"done":i===currentIndex?"current":""}" title="Room ${i+1}"></span>`).join("");
}
function renderQuestion() {
  const q = QUESTION_BANK[currentIndex];
  selectedAnswer = null; answerLocked = false;
  $("roomTitle").textContent = `Room ${String(currentIndex+1).padStart(2,"0")} — ${q.room}`;
  $("roomSubtitle").textContent = q.roomBm;
  $("challengeType").textContent = q.type === "tf" ? "TRUE / FALSE · BETUL / SALAH" : "MCQ · PILIHAN JAWAPAN";
  $("attemptLabel").textContent = "First attempt / Percubaan pertama";
  $("questionText").textContent = q.question;
  $("questionBm").textContent = q.questionBm;
  $("roomClue").textContent = q.clue;
  $("roomClueBm").textContent = q.clueBm;
  $("scenarioText").textContent = q.scenario || "";
  $("scenarioBm").textContent = q.scenarioBm || "";
  $("scenarioBox").classList.toggle("hidden", !q.scenario);
  $("answerOptions").innerHTML = "";
  q.options.forEach((option,i)=>{
    const label = document.createElement("label");
    label.className = "answer-option";
    const input = document.createElement("input");
    input.type = "radio"; input.name = "answer"; input.value = String(i);
    input.addEventListener("change",()=>{selectedAnswer=i;});
    const copy = document.createElement("span"); copy.className="option-copy";
    const en = document.createElement("span"); en.textContent = `${String.fromCharCode(65+i)}. ${option.en}`;
    const bm = document.createElement("span"); bm.className="bm"; bm.textContent = option.bm;
    copy.append(en,bm); label.append(input,copy); $("answerOptions").append(label);
  });
  $("feedbackBox").classList.add("hidden");
  $("submitAnswerButton").classList.remove("hidden");
  $("submitAnswerButton").disabled = false;
  $("sceneStatus").textContent = "SEALED ROOM";
  $("sceneIllustration").classList.remove("unlocked");
  renderProgress();
}
function submitAnswer(event) {
  event.preventDefault();
  if (answerLocked) return;
  if (selectedAnswer === null) {
    const first = $("answerOptions").querySelector("input");
    if (first) first.focus();
    $("attemptLabel").textContent = "Choose an answer first / Pilih jawapan dahulu";
    return;
  }
  const q = QUESTION_BANK[currentIndex];
  attempts[currentIndex] += 1;
  const correct = selectedAnswer === q.answer;
  if (correct) {
    answerLocked = true;
    completed[currentIndex] = true;
    if (attempts[currentIndex] === 1) {
      firstTryCorrect[currentIndex] = true;
      score += 10;
    }
    $("feedbackBox").classList.remove("incorrect");
    $("feedbackIcon").textContent = "✓";
    $("feedbackTitle").textContent = attempts[currentIndex] === 1 ? "Correct! +10 points / Betul! +10 markah" : "Correct! Room unlocked / Betul! Bilik dibuka";
    $("sceneStatus").textContent = "ACCESS GRANTED";
    $("sceneIllustration").classList.add("unlocked");
    $("attemptLabel").textContent = "Room cleared / Bilik selesai";
    $("submitAnswerButton").classList.add("hidden");
    $("continueButton").textContent = currentIndex === QUESTION_BANK.length-1 ? "View results / Lihat keputusan →" : "Continue / Teruskan →";
  } else {
    $("feedbackBox").classList.add("incorrect");
    $("feedbackIcon").textContent = "↻";
    $("feedbackTitle").textContent = "Not quite — try again / Belum tepat — cuba lagi";
    $("attemptLabel").textContent = `Attempt ${attempts[currentIndex]} / Percubaan ${attempts[currentIndex]}`;
  }
  $("feedbackExplanation").textContent = q.explanation;
  $("feedbackExplanationBm").textContent = q.explanationBm;
  $("feedbackBox").classList.remove("hidden");
  $("feedbackBox").scrollIntoView({behavior:"smooth",block:"nearest"});
  // Prevent repeat submission of the same click; incorrect answers can still be retried.
  if (correct) {
    $("answerOptions").querySelectorAll("input").forEach(input=>input.disabled=true);
  } else {
    $("answerOptions").querySelectorAll("input").forEach(input=>input.checked=false);
    selectedAnswer = null;
  }
  renderProgress();
}
function continueMission() {
  if (!completed[currentIndex]) return;
  if (currentIndex === QUESTION_BANK.length-1) {
    finishMission();
    return;
  }
  currentIndex += 1;
  renderQuestion();
}
function finishMission() {
  stopTimer();
  const total = QUESTION_BANK.length;
  const firstCorrectCount = firstTryCorrect.filter(Boolean).length;
  const accuracy = Math.round(firstCorrectCount/total*100);
  $("finalScore").textContent = `${score} / ${total*10}`;
  $("finalAccuracy").textContent = `${accuracy}%`;
  $("finalRooms").textContent = `${completed.filter(Boolean).length} / ${total}`;
  if (accuracy >= 80) {
    $("completionTitle").textContent = "Leadership vault mastered!";
    $("completionSubtitle").textContent = "Excellent work. You demonstrated strong understanding of teams and leadership decisions.";
    $("resultMessage").textContent = "You answered most challenges correctly on the first attempt. Keep applying clear goals, defined roles, coordination and constructive conflict management in real teams.";
    $("resultMessageBm").textContent = "Cemerlang. Anda menjawab kebanyakan cabaran dengan betul pada percubaan pertama. Terus aplikasikan matlamat jelas, peranan yang ditetapkan, penyelarasan dan pengurusan konflik yang membina dalam pasukan sebenar.";
  } else if (accuracy >= 50) {
    $("completionTitle").textContent = "Vault unlocked — keep building!";
    $("completionSubtitle").textContent = "You completed every room. Review the explanations to strengthen your leadership knowledge.";
    $("resultMessage").textContent = "You persisted through the challenges. Revisit the explanations for team characteristics, development stages, team types, cohesiveness, virtual leadership and conflict.";
    $("resultMessageBm").textContent = "Anda berjaya melalui semua cabaran. Semak semula penerangan tentang ciri pasukan, peringkat perkembangan, jenis pasukan, kesepaduan, kepimpinan maya dan konflik.";
  } else {
    $("completionTitle").textContent = "Vault unlocked — learning continues!";
    $("completionSubtitle").textContent = "Completion matters. Use the answer review to revisit the key concepts, then play again.";
    $("resultMessage").textContent = "Use this attempt as a diagnostic. Review each explanation and replay the mission to check your understanding. Your score reflects first-try correctness, not speed.";
    $("resultMessageBm").textContent = "Gunakan percubaan ini untuk mengenal pasti perkara yang perlu diperkukuh. Semak setiap penerangan dan main semula untuk menguji pemahaman. Markah mengukur ketepatan percubaan pertama, bukan kelajuan.";
  }
  $("answerReview").innerHTML = QUESTION_BANK.map((q,i)=>{
    const ans = q.options[q.answer];
    const state = firstTryCorrect[i] ? "Correct on first try / Betul pada percubaan pertama" : `Solved after ${attempts[i]} attempt(s) / Selesai selepas ${attempts[i]} percubaan`;
    return `<article class="review-item"><strong>${String(i+1).padStart(2,"0")}. ${escapeHtml(q.question)}</strong><p class="bm">${escapeHtml(q.questionBm)}</p><p class="review-answer">✓ ${escapeHtml(ans.en)}</p><p class="bm">${escapeHtml(ans.bm)}</p><p>${escapeHtml(q.explanation)}</p><p class="bm">${escapeHtml(q.explanationBm)}</p><p class="small-note">${escapeHtml(state)}</p></article>`;
  }).join("");
  renderProgress();
  showScreen("completionScreen");
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}
function goHome() { stopTimer(); showScreen("homeScreen"); }
function restartMission() {
  const keepMode = $("untimedToggle").checked;
  $("untimedToggle").checked = keepMode;
  beginMission();
}

$("startButton").addEventListener("click",startInstructions);
$("instructionsButton").addEventListener("click",startInstructions);
$("beginMissionButton").addEventListener("click",beginMission);
$("answerForm").addEventListener("submit",submitAnswer);
$("continueButton").addEventListener("click",continueMission);
$("restartButton").addEventListener("click",restartMission);
$("playAgainButton").addEventListener("click",()=>{showScreen("instructionsScreen");});
$("homeButton").addEventListener("click",goHome);
$("brandHome").addEventListener("click",event=>{event.preventDefault();goHome();});
$("backHomeButton").addEventListener("click",goHome);
$("gameHomeButton").addEventListener("click",goHome);
$("completionHomeButton").addEventListener("click",goHome);

// Keyboard accessibility: number keys 1-4 select visible options; Enter submits.
document.addEventListener("keydown",event=>{
  if ($("gameScreen").classList.contains("hidden") || answerLocked) return;
  if (/^[1-4]$/.test(event.key)) {
    const option = $("answerOptions").querySelectorAll('input[type="radio"]')[Number(event.key)-1];
    if (option && !option.disabled) { option.checked=true; option.dispatchEvent(new Event("change",{bubbles:true})); }
  }
});
