const PARTICLE_PAIRS = [
  ["in", "out"],
  ["down", "up"],
  ["on", "off"],
  ["back", "wild"],
];

const FUNCTION_CARDS = [
  { type: "flip1", label: "Flip 1", image: "Function cards/card front/flip1.jpg" },
  { type: "flip2", label: "Flip 2", image: "Function cards/card front/flip2.jpg" },
  { type: "flipAll", label: "Flip All", image: "Function cards/card front/flip all.jpg" },
  { type: "shuffle", label: "Shuffle Hand", image: "Function cards/card front/SHUFFLE HAND.jpg" },
];

const CARD_DATA = [
  { deck: 1, phrase: "break down", meaning: "拆解、分解", example: "The mechanic had to break it down to find the problem and fix it." },
  { deck: 1, phrase: "close down", meaning: "關門大吉", example: "The owner has to close down his store because it is not making any money for him." },
  { deck: 1, phrase: "bring down", meaning: "降低", example: "The air crash brings down the airline's reputation." },
  { deck: 1, phrase: "break down", meaning: "壞掉", example: "Our car broke down, so we can't drive it." },
  { deck: 1, phrase: "bring down", meaning: "摧毀", example: "The virus brings down many companies because they can't do business." },
  { deck: 1, phrase: "bring back", meaning: "帶回", example: "I bring back a lot of sand from the beach. Can you help me clean up the floor?" },
  { deck: 1, phrase: "bring in", meaning: "將...帶進入", example: "Please bring in the food. I'm so hungry." },
  { deck: 1, phrase: "come in", meaning: "進入", example: "Come in! The door isn't locked." },
  { deck: 1, phrase: "come in", meaning: "介入、加入", example: "We need to test the blood we found. That's where the CSI comes in." },
  { deck: 1, phrase: "come off", meaning: "顯得", example: "Jay came off lazy to the boss because she saw him sleeping at work yesterday." },
  { deck: 1, phrase: "break off", meaning: "崩解", example: "The earthquake caused the rock to break off from the mountain." },
  { deck: 1, phrase: "come off", meaning: "脫落", example: "The button on his shirt came off. He needed to sew it back before he went on stage." },
  { deck: 1, phrase: "cut off", meaning: "剪斷", example: "We can't untie the rope. We need to cut it off." },
  { deck: 1, phrase: "cut off", meaning: "切斷供應", example: "They cut off the power before they fix the elevator." },
  { deck: 1, phrase: "carry on", meaning: "繼續", example: "Carry on walking! The enemies are getting closer behind us." },
  { deck: 1, phrase: "come on", meaning: "到某個表面上", example: "He comes on stage and the audience cheers for him." },
  { deck: 1, phrase: "come on", meaning: "來嘛(表示鼓勵)", example: "Don't just stand there and watch. Come on! Play with us!" },
  { deck: 1, phrase: "carry out", meaning: "扛出去", example: "We need to carry out the boxes so the movers can put them on the truck." },
  { deck: 1, phrase: "carry out", meaning: "執行(計畫)", example: "We need to be prepared before we can carry out the new plan." },
  { deck: 1, phrase: "check out", meaning: "退房", example: "You need to check out your hotel room before noon, or they will charge you extra money." },
  { deck: 1, phrase: "check out", meaning: "出借(設備、書籍)", example: "I need to check out the camera today. They said I can use it for three hours before I have to return it." },
  { deck: 1, phrase: "bring up", meaning: "拿上來", example: "Can you bring up the bag for me? It's in the car in the basement." },
  { deck: 1, phrase: "bring up", meaning: "提出(話題)", example: "I need to talk to Joe about this. I will bring it up the next time I saw him." },
  { deck: 1, phrase: "come up", meaning: "上來", example: "Come up to the top floor! The view is beautiful." },
  { deck: 1, phrase: "come up", meaning: "浮現、來到眼前", example: "He comes up to me and introduce himself." },
  { deck: 1, phrase: "come up", meaning: "想出", example: "He comes up with an idea to solve the problem." },
  { deck: 1, phrase: "clean up", meaning: "清理乾淨", example: "The room is so messy. We need to clean it up." },
  { deck: 2, phrase: "give back", meaning: "返還", example: "I need to give back the book I borrowed before next Tuesday." },
  { deck: 2, phrase: "give back", meaning: "回饋", example: "It is important to give back to the people who helped us in the past." },
  { deck: 2, phrase: "hold back", meaning: "保留", example: "You shouldn't hold back if you want to win the game. Do your best!" },
  { deck: 2, phrase: "hold back", meaning: "拖累", example: "He is holding me back in the competition. I don't want to lose because of him." },
  { deck: 2, phrase: "fill in", meaning: "填入(空缺)", example: "Please fill in your name here on the form." },
  { deck: 2, phrase: "fill in", meaning: "說明", example: "Danny fills me in on the meeting that I missed. Now I know everything." },
  { deck: 2, phrase: "fill in", meaning: "代替", example: "Jay is sick. You need to fill in for him for the speech." },
  { deck: 2, phrase: "get down", meaning: "蹲(趴)下", example: "John get down on the floor to hide from the monster." },
  { deck: 2, phrase: "get down", meaning: "從高處下來", example: "Get down from the roof! You will get hurt!" },
  { deck: 2, phrase: "get down", meaning: "開始認真", example: "We can't keep playing. We should get down to work." },
  { deck: 2, phrase: "get in", meaning: "進入", example: "The burglar get in the house by breaking the window." },
  { deck: 2, phrase: "get in", meaning: "加入", example: "We are buying lottery tickets. Do you want to get in? We will share the money if we win." },
  { deck: 2, phrase: "give in", meaning: "讓步", example: "The police gave in to the robber's demand. They gave him a car and he got away." },
  { deck: 2, phrase: "give in", meaning: "放棄抵抗", example: "I gave in and agreed to whatever he asked for. It's impossible to negotiate with him." },
  { deck: 2, phrase: "go in", meaning: "進去", example: "They said the house is haunted by ghosts. No one ever comes out after they goes in." },
  { deck: 2, phrase: "get off", meaning: "下車", example: "I will get off the train in 10 minutes. Can you meet me at the exit?" },
  { deck: 2, phrase: "get off", meaning: "起步", example: "We get off well in the beginning but now we are meeting some difficulty." },
  { deck: 2, phrase: "go off", meaning: "離去", example: "Jay's wife left him and went off to live with her new boyfriend." },
  { deck: 2, phrase: "go off", meaning: "爆炸", example: "We have to cut the right wire or the bomb will go off." },
  { deck: 2, phrase: "go off", meaning: "響起", example: "Everyone ran out the building when the fire alarm went off." },
  { deck: 2, phrase: "get on", meaning: "搭上", example: "We need to get on the next train or we'll be late. Hurry up!" },
  { deck: 2, phrase: "go on", meaning: "繼續", example: "Let's go on to the next bar. I really don't like this one." },
  { deck: 2, phrase: "go on", meaning: "進行", example: "There is a meeting going on in the room right now." },
  { deck: 2, phrase: "figure out", meaning: "找出辦法", example: "We need to figure out a solution before it's too late." },
  { deck: 2, phrase: "fill out", meaning: "填寫完畢", example: "You need to fill out the form and give it to me before 5 p.m." },
  { deck: 2, phrase: "end up", meaning: "最終...", example: "He ends up with no money because he keeps gambling." },
  { deck: 2, phrase: "give up", meaning: "放棄", example: "I give up studying for the test. I can't learn 200 vocabularies in one night." },
  { deck: 3, phrase: "look back", meaning: "看回去(往回看)", example: "He was distracted by a message. Afterwards, he look back to his note and continue to study." },
  { deck: 3, phrase: "look back", meaning: "回顧", example: "He looked back on his life and felt lucky to have so many people who have helped him in the past." },
  { deck: 3, phrase: "pull back", meaning: "向後拉", example: "He pulled me back when the car is about to hit me. He saved my life." },
  { deck: 3, phrase: "pull back", meaning: "撤退", example: "The enemy is getting too close. We need to pull back or we will all die." },
  { deck: 3, phrase: "look down", meaning: "往下看", example: "I looked down and saw a stain on my shoe." },
  { deck: 3, phrase: "look down", meaning: "鄙視", example: "It is not good to look down on people just because they are poor." },
  { deck: 3, phrase: "put down", meaning: "放下", example: "I need to put down the box. It is very heavy and I can't carry it anymore." },
  { deck: 3, phrase: "put down", meaning: "安樂死", example: "I have to put down my dog because it is suffering from a bad illness." },
  { deck: 3, phrase: "move in", meaning: "搬進", example: "I can't wait for Joe to move in to my house. I finally have a roommate." },
  { deck: 3, phrase: "put in", meaning: "放入", example: "Put the garbage in the trash can. Don't leave them on the table." },
  { deck: 3, phrase: "put in", meaning: "投入(時間、努力)", example: "I put in a lot of time and efforts. I hope one day I can be successful." },
  { deck: 3, phrase: "pay off", meaning: "付清", example: "You need to pay off your debt, or the bank will sell your house." },
  { deck: 3, phrase: "pay off", meaning: "付出得到回報", example: "He finally won an award for his book. Years of hard work finally pays off." },
  { deck: 3, phrase: "put off", meaning: "拖延", example: "He always puts off his work. Therefore, he never finishes anything on time." },
  { deck: 3, phrase: "put off", meaning: "引起反感", example: "He is always mean to people. That is why he puts people off and has no friends." },
  { deck: 3, phrase: "move on", meaning: "轉移(到下一個)", example: "Let's move on to the next topic. We don't have much time left." },
  { deck: 3, phrase: "move on", meaning: "看開繼續前進", example: "You need to move on from the break up. Let's go to a bar and meet some people." },
  { deck: 3, phrase: "pass on", meaning: "傳給", example: "Jack just lend me the new game he bought. I will pass it on to Jane after I play it because she also wants to try it." },
  { deck: 3, phrase: "pass on", meaning: "傳承", example: "He pass on his experience in learning English by writing a book." },
  { deck: 3, phrase: "put on", meaning: "穿上", example: "It is cold outside so I put on a jacket before I go out." },
  { deck: 3, phrase: "put on", meaning: "演出", example: "Jack puts on a great show tonight. The audience loves him so much." },
  { deck: 3, phrase: "look out", meaning: "往外看", example: "I looked out the window and saw a beautiful sunrise." },
  { deck: 3, phrase: "look out", meaning: "關心、照顧", example: "He looks out for me in the army. He is like a big brother to me." },
  { deck: 3, phrase: "put out", meaning: "對外發布", example: "The virus has spread. We need to put out a warning." },
  { deck: 3, phrase: "put out", meaning: "撲滅", example: "If something is on fire, you can use water to put out the fire." },
  { deck: 3, phrase: "look up", meaning: "查詢、查閱", example: "If you don't know the meaning of a word, you should look it up in a dictionary." },
  { deck: 3, phrase: "make up", meaning: "組成", example: "International students make up half the population of this school." },
  { deck: 4, phrase: "sit back", meaning: "往後坐(放鬆)", example: "Don't worry so much about work. Just sit back and relax for a while." },
  { deck: 4, phrase: "sit back", meaning: "坐視不管", example: "I can't believe the prison guard sit back and watch the prisoners fight to death." },
  { deck: 4, phrase: "step back", meaning: "退後", example: "You need to step back when the train passes by the platform." },
  { deck: 4, phrase: "step back", meaning: "退出(脫離困境)", example: "We need to step back and look at the big picture. We can't keep focusing on the smaller details." },
  { deck: 4, phrase: "take back", meaning: "帶...回去", example: "They took James back to the hotel because he is not feeling well." },
  { deck: 4, phrase: "take back", meaning: "奪回", example: "The king's brother stole his kingdom from him. He swore that he would take it back someday." },
  { deck: 4, phrase: "set down", meaning: "放下來", example: "John set the box down on the floor and took a break." },
  { deck: 4, phrase: "take down", meaning: "拿下來", example: "It's a week after Christmas. You should take down your Christmas lights." },
  { deck: 4, phrase: "take down", meaning: "摧毀、殺死", example: "The bad guys won't give up unless we take down their leader." },
  { deck: 4, phrase: "turn down", meaning: "拒絕", example: "He turned down my offer to help him with his homework. He said he wanted to finish it on his own." },
  { deck: 4, phrase: "take in", meaning: "接納(至家中)", example: "This loving family took me in when I lose my house. They gave me a place I can call home." },
  { deck: 4, phrase: "take in", meaning: "完全理解、學會", example: "There are 20 new words for me to learn. It's going to take me a while to take in all of them." },
  { deck: 4, phrase: "set off", meaning: "觸發", example: "The store owner called the police as soon as the thief set off the alarm." },
  { deck: 4, phrase: "set off", meaning: "引起", example: "Employees started to protest. This set off an argument over workers' rights." },
  { deck: 4, phrase: "take off", meaning: "起飛", example: "Hurry up! The airplane is going to take off in ten minutes." },
  { deck: 4, phrase: "take off", meaning: "脫掉(衣物)", example: "Jane took off her clothes and put them in the washing machine when she got home." },
  { deck: 4, phrase: "turn off", meaning: "關閉", example: "Please turn off the light before you leave a room." },
  { deck: 4, phrase: "turn off", meaning: "引起反感", example: "He turns people off because he is always making sexist comments." },
  { deck: 4, phrase: "take on", meaning: "扛起(責任、工作)", example: "He takes on a lot of responsibilities at work. He has to organize events, talk to clients and write reports." },
  { deck: 4, phrase: "reach out", meaning: "伸出手", example: "He reached out for the bag on the shelf, but he was too short to get it." },
  { deck: 4, phrase: "reach out", meaning: "嘗試觸及、聯絡", example: "Mandy reached out to me for help. She lost her job and now has no place to live." },
  { deck: 4, phrase: "set out", meaning: "出發", example: "I set out for a trip because I don't want to stay here anymore." },
  { deck: 4, phrase: "start out", meaning: "以...身分開始", example: "Before he became the head chef, he started out as a waiter in a small restaurant." },
  { deck: 4, phrase: "start out", meaning: "以某方法開始", example: "I wasn't a full time designer in the past. I started out by doing this part time." },
  { deck: 4, phrase: "turn out", meaning: "最終...", example: "Although he was not as smart as others, he turned out to be successful because he worked very hard." },
  { deck: 4, phrase: "run out", meaning: "用盡、耗盡", example: "We have run out of cookies. Can you buy some more when you go to the supermarket?" },
].map((card, index) => ({
  ...card,
  id: `${card.deck}-${index}-${card.phrase}`,
  particle: card.phrase.split(" ").at(-1),
  image: `Verb Phrase cards/card front/${card.phrase}.jpg`,
}));

const state = {
  drawPile: [],
  retryPile: [],
  discardPile: [],
  vpHand: [],
  functionHand: [],
  particles: [],
  score: 0,
  turn: 1,
  draws: 0,
  selectedVpId: null,
  selectedFunctionId: null,
  pendingFunctionFlips: 0,
  gameKey: "all",
};

const els = {
  setup: document.querySelector("#setup"),
  game: document.querySelector("#game"),
  deckPicker: document.querySelector("#deckPicker"),
  startBtn: document.querySelector("#startBtn"),
  newGameBtn: document.querySelector("#newGameBtn"),
  particles: document.querySelector("#particles"),
  vpHand: document.querySelector("#vpHand"),
  functionHand: document.querySelector("#functionHand"),
  feedback: document.querySelector("#feedback"),
  feedbackContent: document.querySelector("#feedbackContent"),
  closeFeedback: document.querySelector("#closeFeedback"),
  score: document.querySelector("#score"),
  bestScore: document.querySelector("#bestScore"),
  drawCount: document.querySelector("#drawCount"),
  retryCount: document.querySelector("#retryCount"),
  discardCount: document.querySelector("#discardCount"),
  handCount: document.querySelector("#handCount"),
  turnCount: document.querySelector("#turnCount"),
  matchHint: document.querySelector("#matchHint"),
};

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function storageKey() {
  return `put-n-turn-best:${state.gameKey}`;
}

function bestScore() {
  return Number(localStorage.getItem(storageKey()) || 0);
}

function setBestScore(score) {
  if (score > bestScore()) localStorage.setItem(storageKey(), String(score));
}

function particleMatches(cardParticle, tableParticle) {
  return tableParticle === "wild" || cardParticle === tableParticle;
}

function selectedDecks() {
  return [...els.deckPicker.querySelectorAll("input:checked")].map((input) => Number(input.value));
}

function cardButtonClasses(card) {
  const visible = state.particles.map((p) => p.face);
  const matchable = visible.some((particle) => particleMatches(card.particle, particle));
  return `card vp-card ${state.selectedVpId === card.id ? "selected" : ""} ${matchable ? "matchable" : ""}`;
}

function renderDeckPicker() {
  const deckCounts = [1, 2, 3, 4].map((deck) => CARD_DATA.filter((card) => card.deck === deck).length);
  els.deckPicker.innerHTML = deckCounts.map((count, index) => {
    const deck = index + 1;
    return `
      <label class="deck-option">
        <input type="checkbox" value="${deck}" ${deck === 1 ? "checked" : ""}>
        <span>Deck ${deck}<br><small>${count} cards</small></span>
      </label>
    `;
  }).join("");
}

function render() {
  els.score.textContent = state.score;
  els.bestScore.textContent = bestScore();
  els.drawCount.textContent = state.drawPile.length;
  els.retryCount.textContent = state.retryPile.length;
  els.discardCount.textContent = state.discardPile.length;
  els.handCount.textContent = state.vpHand.length;
  els.turnCount.textContent = state.turn;

  els.particles.innerHTML = state.particles.map((particle, index) => `
    <button class="card particle-card" data-particle-index="${index}" aria-label="Play on ${particle.face}">
      <img src="particle cards/${particle.face}.jpg" alt="${particle.face}">
      <span class="card-title">${particle.face.toUpperCase()}</span>
    </button>
  `).join("");

  els.vpHand.innerHTML = state.vpHand.map((card) => `
    <button class="${cardButtonClasses(card)}" data-vp-id="${card.id}">
      <img src="${card.image}" alt="${card.phrase}">
      <span class="card-title">${card.phrase}</span>
      <span class="meaning">${card.meaning}</span>
      <span class="card-meta">Particle: ${card.particle}</span>
    </button>
  `).join("");

  els.functionHand.innerHTML = state.functionHand.map((card) => `
    <button class="card function-card ${state.selectedFunctionId === card.id ? "selected" : ""}" data-function-id="${card.id}">
      <img src="${card.image}" alt="${card.label}">
      <span class="card-title">${card.label}</span>
    </button>
  `).join("");

  if (state.selectedFunctionId) {
    const selected = state.functionHand.find((card) => card.id === state.selectedFunctionId);
    els.matchHint.textContent = selected?.type === "shuffle"
      ? "Shuffle Hand exchanges your current VP hand with new VPs."
      : `Choose ${state.pendingFunctionFlips || 1} particle card${state.pendingFunctionFlips === 1 ? "" : "s"} to flip.`;
  } else {
    els.matchHint.textContent = state.selectedVpId
      ? "Choose the particle card you want to match against."
      : "Choose a VP, then choose a particle.";
  }
}

function setupParticles() {
  state.particles = PARTICLE_PAIRS.map(([front, back]) => ({
    pair: [front, back],
    face: Math.random() > 0.5 ? front : back,
  }));
}

function flipParticle(index) {
  const particle = state.particles[index];
  particle.face = particle.pair.find((side) => side !== particle.face);
}

function drawOne() {
  state.draws += 1;
  const useRetry = state.draws % 3 === 0 && state.retryPile.length > 0;
  const source = useRetry ? state.retryPile : state.drawPile;
  if (source.length > 0) state.vpHand.push(source.pop());
}

function dealOne() {
  if (state.drawPile.length > 0) state.vpHand.push(state.drawPile.pop());
}

function endTurn() {
  drawOne();
  state.turn += 1;
  checkGameEnd();
  render();
}

function checkGameEnd() {
  if (state.vpHand.length || state.drawPile.length || state.retryPile.length) return;
  setBestScore(state.score);
  showFeedback("Game Complete", `Final score: ${state.score}. Best for this deck set: ${bestScore()}.`, "good");
}

function showFeedback(title, body, tone) {
  els.feedback.className = `feedback ${tone || ""}`;
  els.feedbackContent.innerHTML = `<h2>${title}</h2><p>${body}</p>`;
}

function hideFeedback() {
  els.feedback.classList.add("hidden");
}

function startGame() {
  const decks = selectedDecks();
  if (!decks.length) return;

  state.gameKey = decks.sort().join("-");
  state.drawPile = shuffle(CARD_DATA.filter((card) => decks.includes(card.deck)));
  state.retryPile = [];
  state.discardPile = [];
  state.vpHand = [];
  state.functionHand = shuffle(FUNCTION_CARDS).slice(0, 2).map((card, index) => ({ ...card, id: `${card.type}-${index}-${Date.now()}` }));
  state.score = 0;
  state.turn = 1;
  state.draws = 0;
  state.selectedVpId = null;
  state.selectedFunctionId = null;
  state.pendingFunctionFlips = 0;
  setupParticles();

  for (let i = 0; i < 4; i += 1) dealOne();

  els.setup.classList.add("hidden");
  els.game.classList.remove("hidden");
  hideFeedback();
  render();
}

function playVp(particleIndex) {
  const cardIndex = state.vpHand.findIndex((card) => card.id === state.selectedVpId);
  if (cardIndex < 0) return;

  const card = state.vpHand.splice(cardIndex, 1)[0];
  const tableParticle = state.particles[particleIndex].face;
  const correct = particleMatches(card.particle, tableParticle);

  if (correct) {
    state.score += 1;
    state.discardPile.push(card);
    showFeedback("Matched", `${card.phrase} uses ${card.particle}. ${card.meaning}: ${card.example}`, "good");
  } else {
    state.score -= 1;
    state.retryPile.unshift(card);
    showFeedback("Try Again Later", `${card.phrase} uses ${card.particle}, not ${tableParticle}. It moved to the retry pile.`, "bad");
  }

  flipParticle(particleIndex);
  state.selectedVpId = null;
  endTurn();
}

function playFunction(particleIndex) {
  const functionIndex = state.functionHand.findIndex((card) => card.id === state.selectedFunctionId);
  if (functionIndex < 0) return;
  const card = state.functionHand[functionIndex];

  flipParticle(particleIndex);
  state.pendingFunctionFlips -= 1;
  if (state.pendingFunctionFlips > 0) {
    render();
    return;
  }

  state.functionHand.splice(functionIndex, 1);
  state.selectedFunctionId = null;
  state.pendingFunctionFlips = 0;
  showFeedback(card.label, `${card.label} used. Your turn ends after drawing one VP.`, "good");
  endTurn();
}

function shuffleHandFunction() {
  const functionIndex = state.functionHand.findIndex((card) => card.id === state.selectedFunctionId);
  if (functionIndex < 0) return;

  const count = state.vpHand.length;
  state.drawPile = shuffle([...state.drawPile, ...state.vpHand]);
  state.vpHand = [];
  for (let i = 0; i < count && state.drawPile.length > 0; i += 1) {
    state.vpHand.push(state.drawPile.pop());
  }
  const [card] = state.functionHand.splice(functionIndex, 1);
  state.selectedFunctionId = null;
  state.pendingFunctionFlips = 0;
  showFeedback(card.label, `Exchanged ${count} VP cards with the draw pile. Your turn ends after drawing one VP.`, "good");
  endTurn();
}

function flipAllFunction() {
  const functionIndex = state.functionHand.findIndex((card) => card.id === state.selectedFunctionId);
  if (functionIndex < 0) return;
  state.particles.forEach((_, index) => flipParticle(index));
  const [card] = state.functionHand.splice(functionIndex, 1);
  state.selectedFunctionId = null;
  state.pendingFunctionFlips = 0;
  showFeedback(card.label, "All particle cards flipped. Your turn ends after drawing one VP.", "good");
  endTurn();
}

els.startBtn.addEventListener("click", startGame);
els.newGameBtn.addEventListener("click", () => {
  els.game.classList.add("hidden");
  els.setup.classList.remove("hidden");
  hideFeedback();
});
els.closeFeedback.addEventListener("click", hideFeedback);

els.vpHand.addEventListener("click", (event) => {
  const button = event.target.closest("[data-vp-id]");
  if (!button) return;
  state.selectedFunctionId = null;
  state.pendingFunctionFlips = 0;
  state.selectedVpId = button.dataset.vpId;
  render();
});

els.functionHand.addEventListener("click", (event) => {
  const button = event.target.closest("[data-function-id]");
  if (!button) return;
  state.selectedVpId = null;
  state.selectedFunctionId = button.dataset.functionId;
  const selected = state.functionHand.find((card) => card.id === state.selectedFunctionId);
  state.pendingFunctionFlips = selected?.type === "flip2" ? 2 : 1;
  if (selected?.type === "shuffle") shuffleHandFunction();
  if (selected?.type === "flipAll") flipAllFunction();
  render();
});

els.particles.addEventListener("click", (event) => {
  const button = event.target.closest("[data-particle-index]");
  if (!button) return;
  const particleIndex = Number(button.dataset.particleIndex);
  if (state.selectedVpId) playVp(particleIndex);
  if (state.selectedFunctionId) playFunction(particleIndex);
});

renderDeckPicker();
els.bestScore.textContent = bestScore();
