# Leadership Chapter 9 (Teams) — Learning Escape Room

A bilingual (English/Bahasa Malaysia) browser-based educational game for first-year ACCA-FIA and Entrepreneurship Diploma learners. It uses an escape-room structure: students must answer each challenge correctly to unlock the next room.

## Learning coverage

The ten questions are based on the uploaded ENC133 Leadership Chapter 9 slides:
- Definition and characteristics of a team
- Team versus group
- Characteristics of effective teams
- Forming, Storming, Norming and Performing
- Types of teams
- Team cohesiveness and the risks of excessive cohesion
- Leading virtual teams
- Constructive team-conflict management
- A final transfer question using a new student entrepreneurship scenario

The slides identify learning outcomes around defining teams, distinguishing teams from groups, explaining team-development stages, recognising team types, and applying team concepts to workplace situations. The game also includes content from Session 2 on cohesiveness, virtual teams and conflict.

## Files

```text
leadership-chapter-9-teams/
├── index.html
├── style.css
├── script.js
└── README.md
```

No images or other assets are required. The vault and room illustrations are made with CSS. The page uses a Google Fonts stylesheet when internet access is available; system fonts are used as fallback.

## Run locally

1. Download or extract this folder.
2. Open `index.html` in a modern browser (Chrome, Edge, Firefox or Safari).
3. Select **Play / Mula Bermain**, review the instructions, then select **Enter the Vault**.
4. Try answering each question. Correct answers unlock the next room; incorrect answers show feedback and allow a retry.

The game runs entirely in the browser and does not require a server, API key, database, package installation or build command.

## Publish with GitHub Pages

1. Sign in to GitHub and create a repository, for example `leadership-chapter-9-teams`.
2. Upload **all four files** into the repository's root folder. Make sure `index.html` is at the root, not inside an extra nested folder.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose the `main` branch and `/(root)` folder, then save.
6. Wait for GitHub Pages to publish. The website URL will appear in the Pages section and usually resembles `https://YOUR-USERNAME.github.io/leadership-chapter-9-teams/`.

GitHub's interface may change slightly. If Pages is not available, confirm that the repository was created and that you have permission to change its settings.

## Edit the question bank

Open `script.js` and find the clearly labelled `QUESTION_BANK` array near the top.

Each question object includes:
- `type`: `"mcq"` or `"tf"`
- `room` and `roomBm`: room titles
- `clue` and `clueBm`: room clues
- `question` and `questionBm`: question wording
- `scenario` and `scenarioBm`: optional context
- `options`: array of answer objects with `en` and `bm`
- `answer`: **zero-based index** of the correct option (first option is `0`)
- `explanation` and `explanationBm`: feedback shown after answering

For True/False items, use two options. Keep the `answer` index aligned with the correct option. To maintain the scoring and progress display, this edition is designed for 10 questions; if you change the number, also check the score denominator and room progress logic in `script.js`.

## Gameplay and scoring

- 10 rooms; each room must be answered correctly to continue.
- 10 points for a correct answer on the first attempt.
- Incorrect attempts can be retried and do not deduct points.
- The final score measures first-attempt correctness, not speed or physical/gameplay skill.
- Untimed mode is selected by default.
- If untimed mode is turned off, a 15-minute session clock appears. It is advisory and does not lock out students, so they can finish the learning activity after time expires.
- Supports mouse, touch, and keyboard. Press `1`–`4` to select an answer option; use the submit button or Enter to submit the form.

## Manual testing checklist

- [ ] Start button opens the instructions screen.
- [ ] Instructions button opens the instructions screen.
- [ ] Untimed mode starts without a clock.
- [ ] Turning off untimed mode displays a 15-minute clock.
- [ ] Starting the mission shows room 1, the question, options, clue and progress.
- [ ] Submitting with no option selected prompts the learner to choose.
- [ ] Correct answer awards 10 points only if correct on the first attempt, unlocks the room and displays feedback.
- [ ] Incorrect answer displays feedback and allows another attempt.
- [ ] Repeated clicks cannot score the same question more than once.
- [ ] Continue is not usable to bypass an unanswered room.
- [ ] All 10 rooms lead to the completion screen.
- [ ] Completion screen displays score, first-try accuracy and answer explanations.
- [ ] Restart resets score and progress.
- [ ] Return-home controls work.
- [ ] Layout is usable on desktop and narrow mobile screens.

## References used for question content

Uploaded teaching material: **ENC133 Leadership — Chapter 9: Leading Teams, Sessions 1 and 2** (slides cite Daft, 2018 and Northouse, 2020). Questions follow the material's terminology and scope. Check your institution's preferred reference style if you add formal citations to the student-facing version.
