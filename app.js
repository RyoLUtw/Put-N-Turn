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
  verb: card.phrase.split(" ")[0],
  particle: card.phrase.split(" ").at(-1),
  image: `Verb Phrase cards/card front/${card.phrase}.jpg`,
  backImage: `Verb Phrase cards/card back/${card.phrase}.jpg`,
}));

const state = {
  drawPile: [],
  retryPile: [],
  discardPile: [],
  vpHand: [],
  functionHand: [],
  particles: [],
  score: 0,
  functionPoints: 0,
  functionRewardPending: false,
  turn: 1,
  draws: 0,
  selectedVpId: null,
  selectedFunctionId: null,
  pendingFunctionFlips: 0,
  handMode: "vp",
  activeVpIndex: 0,
  activeFunctionIndex: 0,
  activeParticleIndex: 0,
  targeting: null,
  stagedParticleIndex: null,
  stagedCardVisible: false,
  animatingPlayId: null,
  resolving: null,
  gameKey: "all",
};

const DEBUG_BUILD = "20260821-text-reward-modal";

function debugLog(action, details = {}) {
  console.log(`[Put N Turn ${DEBUG_BUILD}] ${action}`, details);
}

function debugWarn(action, details = {}) {
  console.warn(`[Put N Turn ${DEBUG_BUILD}] ${action}`, details);
}

window.addEventListener("error", (event) => {
  console.error(`[Put N Turn ${DEBUG_BUILD}] window-error`, {
    message: event.message,
    source: event.filename,
    line: event.lineno,
    column: event.colno,
    error: event.error,
  });
});

window.addEventListener("unhandledrejection", (event) => {
  console.error(`[Put N Turn ${DEBUG_BUILD}] unhandled-rejection`, event.reason);
});

const els = {
  setup: document.querySelector("#setup"),
  game: document.querySelector("#game"),
  deckPicker: document.querySelector("#deckPicker"),
  selectionViews: document.querySelector("#selectionViews"),
  quickSelectBtn: document.querySelector("#quickSelectBtn"),
  selectionSummary: document.querySelector("#selectionSummary"),
  startBtn: document.querySelector("#startBtn"),
  newGameBtn: document.querySelector("#newGameBtn"),
  addFunctionPointBtn: document.querySelector("#addFunctionPointBtn"),
  statsBtn: document.querySelector("#statsBtn"),
  helpBtn: document.querySelector("#helpBtn"),
  statsModal: document.querySelector("#statsModal"),
  helpModal: document.querySelector("#helpModal"),
  functionRewardModal: document.querySelector("#functionRewardModal"),
  functionRewardChoices: document.querySelector("#functionRewardChoices"),
  functionRewardHand: document.querySelector("#functionRewardHand"),
  particles: document.querySelector("#particles"),
  vpConfirmTray: document.querySelector("#vpConfirmTray"),
  vpHand: document.querySelector("#vpHand"),
  functionHand: document.querySelector("#functionHand"),
  tableArea: document.querySelector(".table-area"),
  tableTitle: document.querySelector(".table-area h2"),
  handArea: document.querySelector(".hand-area"),
  handTitle: document.querySelector("#handTitle"),
  vpModeBtn: document.querySelector("#vpModeBtn"),
  functionModeBtn: document.querySelector("#functionModeBtn"),
  playStage: document.querySelector("#playStage"),
  feedback: document.querySelector("#feedback"),
  feedbackContent: document.querySelector("#feedbackContent"),
  closeFeedback: document.querySelector("#closeFeedback"),
  score: document.querySelector("#score"),
  bestScore: document.querySelector("#bestScore"),
  drawCount: document.querySelector("#drawCount"),
  retryCount: document.querySelector("#retryCount"),
  discardCount: document.querySelector("#discardCount"),
  handCount: document.querySelector("#handCount"),
  functionPointCount: document.querySelector("#functionPointCount"),
  turnCount: document.querySelector("#turnCount"),
  matchHint: document.querySelector("#matchHint"),
};

let quickSelectEnabled = false;
let quickSelectAnchor = null;
let selectionView = "deck";
const selectedCardSet = new Set(
  CARD_DATA.map((card, index) => ({ card, index }))
    .filter(({ card }) => card.deck === 1)
    .map(({ index }) => index),
);

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

function selectedCardIndices() {
  return [...selectedCardSet].sort((a, b) => a - b);
}

function cardButtonClasses(card) {
  const visible = state.particles.map((p) => p.face);
  const matchable = visible.some((particle) => particleMatches(card.particle, particle));
  return `card vp-card ${state.selectedVpId === card.id ? "selected" : ""} ${matchable ? "matchable" : ""}`;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(value, max));
}

function wheelOffset(index, activeIndex) {
  return clamp(index - activeIndex, -2, 2);
}

function wheelStyle(index, activeIndex) {
  const offset = wheelOffset(index, activeIndex);
  return `--offset:${offset};--distance:${Math.abs(offset)};`;
}

function activeHandCards() {
  return state.handMode === "vp" ? state.vpHand : state.functionHand;
}

function activeHandIndex() {
  return state.handMode === "vp" ? state.activeVpIndex : state.activeFunctionIndex;
}

function setActiveHandIndex(index) {
  if (state.handMode === "vp") state.activeVpIndex = clamp(index, 0, Math.max(0, state.vpHand.length - 1));
  else state.activeFunctionIndex = clamp(index, 0, Math.max(0, state.functionHand.length - 1));
}

function moveActiveHand(delta) {
  if (state.targeting || state.resolving || state.animatingPlayId) return;
  setActiveHandIndex(activeHandIndex() + delta);
  render();
}

function moveActiveParticle(delta) {
  if (!state.targeting || state.resolving || state.animatingPlayId) return;
  if (state.targeting.type === "vp") return;
  state.activeParticleIndex = clamp(state.activeParticleIndex + delta, 0, Math.max(0, state.particles.length - 1));
  render();
}

function setHandMode(mode) {
  if (state.targeting || state.resolving || state.animatingPlayId) return;
  if (mode === "function" && state.functionHand.length === 0) {
    debugWarn("hand-mode-blocked-no-function-cards");
    return;
  }
  state.handMode = mode;
  state.selectedVpId = null;
  state.selectedFunctionId = null;
  state.pendingFunctionFlips = 0;
  setActiveHandIndex(activeHandIndex());
  render();
}

function cardBackFor(card) {
  return card.backImage || "Function cards/card back/card back.jpg";
}

function wait(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

async function animateParticleFlip(index) {
  const particle = state.particles[index];
  if (!particle) return;

  debugLog("particle-flip-animation-start", {
    index,
    from: particle.face,
  });

  const firstButton = els.particles.querySelector(`[data-particle-index="${index}"]`);
  const firstTarget = firstButton?.querySelector("img") || firstButton;
  if (!firstTarget?.animate) {
    flipParticle(index);
    render();
    debugWarn("particle-flip-animation-fallback", { index });
    return;
  }

  firstButton?.classList.add("is-flipping");
  try {
    await firstTarget.animate([
      { transform: "rotateY(0deg)", opacity: 1 },
      { transform: "rotateY(90deg)", opacity: 0.72 },
    ], {
      duration: 220,
      easing: "cubic-bezier(.2,.8,.2,1)",
      fill: "forwards",
    }).finished;

    flipParticle(index);
    render();

    const secondButton = els.particles.querySelector(`[data-particle-index="${index}"]`);
    const secondTarget = secondButton?.querySelector("img") || secondButton;
    secondButton?.classList.add("is-flipping");
    if (secondTarget?.animate) {
      await secondTarget.animate([
        { transform: "rotateY(-90deg)", opacity: 0.72 },
        { transform: "rotateY(0deg)", opacity: 1 },
      ], {
        duration: 260,
        easing: "cubic-bezier(.2,.8,.2,1)",
      }).finished;
    }

    debugLog("particle-flip-animation-finish", {
      index,
      to: state.particles[index]?.face,
    });
  } catch (error) {
    debugWarn("particle-flip-animation-interrupted", { index, error });
  } finally {
    render();
  }
}

async function animateParticleFlips(indices) {
  const uniqueIndices = [...new Set(indices)].filter((index) => state.particles[index]);
  if (!uniqueIndices.length) return;
  state.animatingPlayId = "particle-flips";
  if (uniqueIndices.length === 1) {
    await animateParticleFlip(uniqueIndices[0]);
    state.animatingPlayId = null;
    render();
    return;
  }

  debugLog("particle-flip-all-animation-start", {
    indices: uniqueIndices,
    from: uniqueIndices.map((index) => state.particles[index]?.face),
  });

  const firstTargets = uniqueIndices
    .map((index) => {
      const button = els.particles.querySelector(`[data-particle-index="${index}"]`);
      button?.classList.add("is-flipping");
      return button?.querySelector("img") || button;
    })
    .filter(Boolean);

  await Promise.all(firstTargets.map((target) => target.animate([
    { transform: "rotateY(0deg)", opacity: 1 },
    { transform: "rotateY(90deg)", opacity: 0.72 },
  ], {
    duration: 220,
    easing: "cubic-bezier(.2,.8,.2,1)",
    fill: "forwards",
  }).finished.catch(() => null)));

  uniqueIndices.forEach((index) => flipParticle(index));
  render();

  const secondTargets = uniqueIndices
    .map((index) => {
      const button = els.particles.querySelector(`[data-particle-index="${index}"]`);
      button?.classList.add("is-flipping");
      return button?.querySelector("img") || button;
    })
    .filter(Boolean);

  await Promise.all(secondTargets.map((target) => target.animate([
    { transform: "rotateY(-90deg)", opacity: 0.72 },
    { transform: "rotateY(0deg)", opacity: 1 },
  ], {
    duration: 260,
    easing: "cubic-bezier(.2,.8,.2,1)",
  }).finished.catch(() => null)));

  debugLog("particle-flip-all-animation-finish", {
    indices: uniqueIndices,
    to: uniqueIndices.map((index) => state.particles[index]?.face),
  });
  state.animatingPlayId = null;
  render();
}

function renderPlayedStage() {
  if (!state.resolving) {
    els.playStage.classList.add("hidden");
    els.playStage.innerHTML = "";
    return;
  }

  const { card, correct, title } = state.resolving;
  const actionLabel = correct ? "Move to discard pile" : "Move to retry pile";
  els.playStage.classList.remove("hidden");
  els.playStage.innerHTML = `
    <div class="played-card ${state.resolving.flipped ? "is-flipped" : ""}" aria-label="${title}">
      <div class="played-card-face played-card-front">
        <img src="${card.image}" alt="${card.phrase || card.label}">
      </div>
      <div class="played-card-face played-card-back">
        <img src="${cardBackFor(card)}" alt="">
      </div>
    </div>
    <div class="result-overlay ${correct ? "good" : "bad"}">
      <p>${card.example}</p>
      <div class="result-actions">
        <button class="result-action secondary-action" type="button" data-flip-result>Flip</button>
        <button class="result-action" type="button" data-confirm-result>${actionLabel}</button>
      </div>
    </div>
  `;
}

function flipResultCard() {
  if (!state.resolving) return;
  state.resolving.autoFlipArmed = false;
  state.resolving.flipped = !state.resolving.flipped;
  const playedCard = els.playStage.querySelector(".played-card");
  playedCard?.classList.toggle("is-flipped", state.resolving.flipped);
  debugLog("result-card-flip", {
    phrase: state.resolving.card?.phrase,
    flipped: state.resolving.flipped,
  });
}

function autoFlipResultCard(cardId) {
  if (!state.resolving || state.resolving.card?.id !== cardId || !state.resolving.autoFlipArmed) return;
  state.resolving.flipped = true;
  state.resolving.autoFlipArmed = false;
  const playedCard = els.playStage.querySelector(".played-card");
  playedCard?.classList.add("is-flipped");
  debugLog("result-card-auto-flip", {
    phrase: state.resolving.card?.phrase,
  });
}

async function confirmResult() {
  if (!state.resolving) return;
  const pendingParticleIndex = state.resolving.particleIndex;
  const awardsFunction = state.resolving.awardsFunction;
  debugLog("result-confirm", {
    phrase: state.resolving.card?.phrase,
    correct: state.resolving.correct,
    pendingParticleIndex,
    awardsFunction,
  });
  state.resolving = null;
  endTurn({ draw: true });
  if (pendingParticleIndex !== null && pendingParticleIndex !== undefined) {
    await wait(520);
    await animateParticleFlips([pendingParticleIndex]);
  }
  if (awardsFunction) grantFunctionReward();
}

function stageActiveHandPlay() {
  if (state.targeting || state.resolving || state.animatingPlayId) {
    debugWarn("stage-active-hand-blocked", {
      targeting: state.targeting,
      resolving: Boolean(state.resolving),
      animatingPlayId: state.animatingPlayId,
    });
    return;
  }
  hideFeedback();

  if (state.handMode === "vp") {
    const card = state.vpHand[state.activeVpIndex];
    if (!card) {
      debugWarn("stage-vp-no-card", { activeVpIndex: state.activeVpIndex, handLength: state.vpHand.length });
      return;
    }
    debugLog("stage-vp-start", {
      cardId: card.id,
      phrase: card.phrase,
      activeVpIndex: state.activeVpIndex,
    });
    state.selectedFunctionId = null;
    state.pendingFunctionFlips = 0;
    state.selectedVpId = card.id;
    state.animatingPlayId = card.id;
    render();
    window.setTimeout(() => {
      state.animatingPlayId = null;
      state.targeting = { type: "vp", cardId: card.id };
      state.stagedParticleIndex = null;
      state.stagedCardVisible = false;
      state.activeParticleIndex = 0;
      debugLog("stage-vp-ready", {
        cardId: card.id,
        phrase: card.phrase,
        particles: state.particles.map((particle) => particle.face),
      });
      render();
      window.setTimeout(() => {
        if (state.targeting?.type !== "vp" || state.targeting.cardId !== card.id || state.stagedParticleIndex !== null) return;
        state.stagedCardVisible = true;
        debugLog("stage-vp-insert-after-expand", { cardId: card.id, phrase: card.phrase });
        render();
      }, 460);
    }, 360);
    return;
  }

  const card = state.functionHand[state.activeFunctionIndex];
  if (!card) {
    debugWarn("stage-function-no-card", { activeFunctionIndex: state.activeFunctionIndex, handLength: state.functionHand.length });
    return;
  }
  debugLog("stage-function-start", { cardId: card.id, label: card.label, type: card.type });
  state.selectedVpId = null;
  state.selectedFunctionId = card.id;
  state.pendingFunctionFlips = card.type === "flip2" ? 2 : 1;
  state.animatingPlayId = card.id;
  render();
  window.setTimeout(() => {
    state.animatingPlayId = null;
    if (card.type === "shuffle") {
      shuffleHandFunction();
    } else if (card.type === "flipAll") {
      flipAllFunction();
    } else {
      state.targeting = { type: "function", cardId: card.id };
      state.stagedParticleIndex = null;
      state.stagedCardVisible = false;
      window.setTimeout(() => {
        if (state.targeting?.type !== "function" || state.targeting.cardId !== card.id || state.stagedParticleIndex !== null) return;
        state.stagedCardVisible = true;
        debugLog("stage-function-insert-after-expand", { cardId: card.id, label: card.label, type: card.type });
        render();
      }, 460);
      render();
    }
  }, 360);
}

function playActiveTarget() {
  if (!state.targeting || state.resolving || state.animatingPlayId) return;
  if (state.stagedParticleIndex === null) return;
  if (state.targeting.type === "vp") confirmPlacedVp();
  else if (state.targeting.type === "function") confirmPlacedFunction();
}

function stagedTargetCard() {
  if (!state.targeting) return null;
  const source = state.targeting.type === "vp" ? state.vpHand : state.functionHand;
  return source.find((card) => card.id === state.targeting.cardId) || null;
}

function stagedCardMarkup(card, { placed = false } = {}) {
  const kind = card.phrase ? "VP" : "Function";
  const label = card.phrase || card.label;
  return `
    <div class="staged-vp-card ${placed ? "is-placed" : ""}" data-staged-card-id="${card.id}" aria-label="Staged ${kind} ${label}">
      <img src="${card.image}" alt="${label}" draggable="false">
    </div>
  `;
}

function particleIndexFromPoint(clientX, clientY) {
  const particleButtons = [...els.particles.querySelectorAll("[data-particle-index]")];
  const containingButton = particleButtons.find((button) => {
    const rect = button.getBoundingClientRect();
    return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
  });
  if (containingButton) return Number(containingButton.dataset.particleIndex);

  let nearest = null;
  particleButtons.forEach((button) => {
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distance = Math.hypot(clientX - centerX, clientY - centerY);
    if (!nearest || distance < nearest.distance) {
      nearest = { button, distance };
    }
  });
  return nearest ? Number(nearest.button.dataset.particleIndex) : null;
}

function animateStagedCardToParticle(particleIndex) {
  debugLog("staged-card-animation-request", {
    particleIndex,
    targeting: state.targeting,
    resolving: Boolean(state.resolving),
    animatingPlayId: state.animatingPlayId,
    selectedVpId: state.selectedVpId,
    selectedFunctionId: state.selectedFunctionId,
  });

  if (!state.targeting || state.resolving || state.animatingPlayId || !state.stagedCardVisible) {
    debugWarn("staged-card-animation-blocked", {
      particleIndex,
      targeting: state.targeting,
      resolving: Boolean(state.resolving),
      animatingPlayId: state.animatingPlayId,
      stagedCardVisible: state.stagedCardVisible,
    });
    return;
  }
  const staged = els.particles.querySelector("[data-staged-card-id]");
  const target = els.particles.querySelector(`[data-particle-index="${particleIndex}"]`);
  if (!staged || !target) {
    debugWarn("staged-card-animation-missing-elements", {
      particleIndex,
      hasStaged: Boolean(staged),
      hasTarget: Boolean(target),
    });
    state.stagedParticleIndex = particleIndex;
    state.activeParticleIndex = particleIndex;
    render();
    return;
  }

  state.animatingPlayId = "staged-card";
  const stagedRect = staged.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();
  const finalLeft = targetRect.left + (targetRect.width - stagedRect.width) / 2;
  const finalTop = targetRect.top + (targetRect.height - stagedRect.height) / 2;
  debugLog("staged-card-animation-start", {
    particleIndex,
    stagedId: staged.dataset.stagedCardId,
    targetLabel: target.textContent.trim(),
    stagedRect: {
      left: Math.round(stagedRect.left),
      top: Math.round(stagedRect.top),
      width: Math.round(stagedRect.width),
      height: Math.round(stagedRect.height),
    },
    targetRect: {
      left: Math.round(targetRect.left),
      top: Math.round(targetRect.top),
      width: Math.round(targetRect.width),
      height: Math.round(targetRect.height),
    },
    finalRect: {
      left: Math.round(finalLeft),
      top: Math.round(finalTop),
      width: Math.round(stagedRect.width),
      height: Math.round(stagedRect.height),
    },
  });
  const clone = staged.cloneNode(true);
  clone.classList.add("staged-vp-flight");
  clone.style.left = `${stagedRect.left}px`;
  clone.style.top = `${stagedRect.top}px`;
  clone.style.width = `${stagedRect.width}px`;
  clone.style.height = `${stagedRect.height}px`;
  clone.style.transform = "none";
  document.body.appendChild(clone);
  staged.classList.add("is-flying-source");
  staged.style.visibility = "hidden";

  const animation = clone.animate([
    {
      left: `${stagedRect.left}px`,
      top: `${stagedRect.top}px`,
      width: `${stagedRect.width}px`,
      height: `${stagedRect.height}px`,
      opacity: 1,
    },
    {
      left: `${finalLeft}px`,
      top: `${finalTop}px`,
      width: `${stagedRect.width}px`,
      height: `${stagedRect.height}px`,
      opacity: 0.98,
    },
  ], {
    duration: 640,
    easing: "cubic-bezier(.2,.8,.2,1)",
    fill: "forwards",
  });

  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    state.animatingPlayId = "staged-card-settling";
    const cloneRect = clone.getBoundingClientRect();
    debugLog("staged-card-animation-finish", {
      particleIndex,
      cloneRect: {
        left: Math.round(cloneRect.left),
        top: Math.round(cloneRect.top),
        width: Math.round(cloneRect.width),
        height: Math.round(cloneRect.height),
      },
    });
    window.setTimeout(() => {
      debugLog("staged-card-animation-place", {
        particleIndex,
        selectedVpId: state.selectedVpId,
        selectedFunctionId: state.selectedFunctionId,
      });
      clone.remove();
      staged.classList.remove("is-flying-source");
      staged.style.removeProperty("visibility");
      state.animatingPlayId = null;
      state.stagedParticleIndex = particleIndex;
      state.activeParticleIndex = particleIndex;
      render();
    }, 360);
  };
  animation.addEventListener("finish", finish, { once: true });
  window.setTimeout(() => {
    if (state.animatingPlayId === "staged-card") {
      debugWarn("staged-card-animation-fallback-timeout", { particleIndex });
      finish();
    }
  }, 980);
}

function confirmPlacedVp() {
  if (state.targeting?.type !== "vp" || state.stagedParticleIndex === null || state.resolving || state.animatingPlayId) {
    debugWarn("confirm-vp-blocked", {
      targeting: state.targeting,
      stagedParticleIndex: state.stagedParticleIndex,
      resolving: Boolean(state.resolving),
      animatingPlayId: state.animatingPlayId,
    });
    return;
  }

  debugLog("confirm-vp-resolve", {
    particleIndex: state.stagedParticleIndex,
    selectedVpId: state.selectedVpId,
  });
  playVp(state.stagedParticleIndex);
}

async function confirmPlacedFunction() {
  if (state.targeting?.type !== "function" || state.stagedParticleIndex === null || state.resolving || state.animatingPlayId) {
    debugWarn("confirm-function-blocked", {
      targeting: state.targeting,
      stagedParticleIndex: state.stagedParticleIndex,
      resolving: Boolean(state.resolving),
      animatingPlayId: state.animatingPlayId,
    });
    return;
  }

  debugLog("confirm-function-resolve", {
    particleIndex: state.stagedParticleIndex,
    selectedFunctionId: state.selectedFunctionId,
    pendingFunctionFlips: state.pendingFunctionFlips,
  });
  await playFunction(state.stagedParticleIndex);
}

function unplayStagedCard() {
  if (!state.targeting || state.resolving || state.animatingPlayId) {
    debugWarn("unplay-staged-card-blocked", {
      targeting: state.targeting,
      resolving: Boolean(state.resolving),
      animatingPlayId: state.animatingPlayId,
    });
    return;
  }

  debugLog("unplay-staged-card", {
    targeting: state.targeting,
    selectedVpId: state.selectedVpId,
    selectedFunctionId: state.selectedFunctionId,
    stagedParticleIndex: state.stagedParticleIndex,
  });
  state.targeting = null;
  state.stagedParticleIndex = null;
  state.stagedCardVisible = false;
  state.animatingPlayId = null;
  render();
}

function uniqueValues(items) {
  return [...new Set(items)].sort((a, b) => a.localeCompare(b));
}

function indexedCards(predicate = () => true) {
  return CARD_DATA.map((card, cardIndex) => ({ card, cardIndex })).filter(({ card }) => predicate(card));
}

function wordOption({ card, cardIndex }, groupKey) {
  return `
    <label class="word-option">
      <input type="checkbox" data-card-index="${cardIndex}" data-range-group="${groupKey}" ${selectedCardSet.has(cardIndex) ? "checked" : ""}>
      <span>
        <strong>${card.phrase}</strong>
        <small>${card.meaning} · Deck ${card.deck}</small>
      </span>
    </label>
  `;
}

function selectionGroup(title, subtitle, items, groupKey, extraClass = "") {
  return `
    <section class="selection-group ${extraClass}" data-selection-group="${groupKey}">
      <div class="deck-heading">
        <div><h3>${title}</h3><span>${subtitle}</span></div>
        <button class="deck-select" type="button" data-group-select>Select group</button>
      </div>
      <div class="word-list">${items.map((item) => wordOption(item, groupKey)).join("")}</div>
    </section>
  `;
}

function renderDeckView() {
  return [1, 2, 3, 4].map((deck) => {
    const cards = indexedCards((card) => card.deck === deck);
    return selectionGroup(`Deck ${deck}`, `${cards.length} cards`, cards, `deck-${deck}`, "deck-group");
  }).join("");
}

function renderVerbView() {
  return uniqueValues(CARD_DATA.map((card) => card.verb)).map((verb) => {
    const verbCards = indexedCards((card) => card.verb === verb);
    const particles = uniqueValues(verbCards.map(({ card }) => card.particle));
    return `
      <section class="verb-group selection-group" data-selection-group="verb-${verb}">
        <div class="deck-heading verb-heading">
          <div><h3>${verb}</h3><span>${particles.length} particles · ${verbCards.length} cards</span></div>
          <button class="deck-select" type="button" data-group-select>Select verb</button>
        </div>
        <div class="particle-children">
          ${particles.map((particle) => {
            const cards = verbCards.filter(({ card }) => card.particle === particle);
            return selectionGroup(particle, `${cards.length} card${cards.length === 1 ? "" : "s"}`, cards, `verb-${verb}-${particle}`, "particle-child");
          }).join("")}
        </div>
      </section>
    `;
  }).join("");
}

function selectedVerbCount(particle) {
  return uniqueValues(selectedCardIndices()
    .map((index) => CARD_DATA[index])
    .filter((card) => card.particle === particle)
    .map((card) => card.verb)).length;
}

function renderParticleView() {
  const particles = uniqueValues(CARD_DATA.map((card) => card.particle));
  return `
    <section class="particle-count-panel">
      <div class="particle-count-header">
        <div>
          <h3>Choose verbs per particle</h3>
          <p>Each count selects that many verb + particle combinations and includes all matching card meanings.</p>
        </div>
        <label class="same-count-option">
          <input id="sameParticleCount" type="checkbox">
          <span>Same number across particles</span>
        </label>
      </div>
      <div class="particle-count-grid">
        ${particles.map((particle) => {
          const verbs = uniqueValues(CARD_DATA.filter((card) => card.particle === particle).map((card) => card.verb));
          return `
            <label class="particle-count-row">
              <span><strong>${particle}</strong><small>Up to ${verbs.length} verbs</small></span>
              <input type="number" min="0" max="${verbs.length}" data-particle-count="${particle}" data-individual-max="${verbs.length}" value="${selectedVerbCount(particle)}">
              <span class="particle-preview" data-particle-preview="${particle}"></span>
            </label>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function renderCardPicker() {
  clearQuickSelectAnchor();
  els.deckPicker.className = `deck-picker ${selectionView}-view`;
  els.deckPicker.innerHTML = selectionView === "deck"
    ? renderDeckView()
    : selectionView === "verb" ? renderVerbView() : renderParticleView();

  if (selectionView === "particle") updateParticlePreviews();
  updateSetupControls();
}

function clearQuickSelectAnchor() {
  if (quickSelectAnchor) quickSelectAnchor.closest(".word-option")?.classList.remove("range-anchor");
  quickSelectAnchor = null;
}

function updateSetupControls() {
  const selectedCount = selectedCardIndices().length;
  els.selectionSummary.textContent = `${selectedCount} of ${CARD_DATA.length} cards selected`;
  els.startBtn.disabled = selectedCount === 0;
  els.quickSelectBtn.disabled = selectionView === "particle";

  els.deckPicker.querySelectorAll("[data-selection-group]").forEach((group) => {
    const inputs = [...group.querySelectorAll("[data-card-index]")];
    const button = group.querySelector(":scope > .deck-heading [data-group-select]");
    if (button) button.textContent = inputs.length && inputs.every((input) => input.checked) ? "Clear group" : "Select group";
  });
}

function syncVisibleCardInputs() {
  els.deckPicker.querySelectorAll("[data-card-index]").forEach((input) => {
    input.checked = selectedCardSet.has(Number(input.dataset.cardIndex));
  });
}

function updateParticlePreviews() {
  els.deckPicker.querySelectorAll("[data-particle-preview]").forEach((preview) => {
    const particle = preview.dataset.particlePreview;
    const verbs = uniqueValues(selectedCardIndices()
      .map((index) => CARD_DATA[index])
      .filter((card) => card.particle === particle)
      .map((card) => card.verb));
    preview.textContent = verbs.length ? verbs.join(", ") : "None selected";
  });
}

function updateParticleSelection() {
  const countInputs = [...els.deckPicker.querySelectorAll("[data-particle-count]")];
  if (!countInputs.length) return;

  const previousVerbs = new Map(countInputs.map((input) => {
    const particle = input.dataset.particleCount;
    const verbs = uniqueValues(selectedCardIndices()
      .map((index) => CARD_DATA[index])
      .filter((card) => card.particle === particle)
      .map((card) => card.verb));
    return [particle, verbs];
  }));

  selectedCardSet.clear();
  countInputs.forEach((input) => {
    const particle = input.dataset.particleCount;
    const verbs = uniqueValues(CARD_DATA.filter((card) => card.particle === particle).map((card) => card.verb));
    const count = Number(input.value);
    const chosenVerbs = (previousVerbs.get(particle) || []).filter((verb) => verbs.includes(verb)).slice(0, count);
    verbs.forEach((verb) => {
      if (chosenVerbs.length < count && !chosenVerbs.includes(verb)) chosenVerbs.push(verb);
    });
    CARD_DATA.forEach((card, index) => {
      if (card.particle === particle && chosenVerbs.includes(card.verb)) selectedCardSet.add(index);
    });
  });
  updateParticlePreviews();
}

function render() {
  els.score.textContent = state.score;
  els.bestScore.textContent = bestScore();
  els.drawCount.textContent = state.drawPile.length;
  els.retryCount.textContent = state.retryPile.length;
  els.discardCount.textContent = state.discardPile.length;
  els.handCount.textContent = state.vpHand.length;
  els.functionPointCount.textContent = state.functionPoints;
  els.turnCount.textContent = state.turn;

  state.activeVpIndex = clamp(state.activeVpIndex, 0, Math.max(0, state.vpHand.length - 1));
  state.activeFunctionIndex = clamp(state.activeFunctionIndex, 0, Math.max(0, state.functionHand.length - 1));
  state.activeParticleIndex = clamp(state.activeParticleIndex, 0, Math.max(0, state.particles.length - 1));

  const functionTargeting = state.targeting?.type === "function";
  const vpTargeting = state.targeting?.type === "vp";
  const stagedTargeting = Boolean(state.targeting);
  const handWheelAway = stagedTargeting || Boolean(state.resolving);
  const stagedCard = stagedTargetCard();
  els.game.classList.toggle("is-targeting", false);
  els.game.classList.toggle("vp-table-expanded", handWheelAway);
  els.tableArea.classList.toggle("targeting", false);
  els.tableArea.classList.toggle("vp-staging", stagedTargeting);
  els.tableArea.classList.toggle("vp-confirming", stagedTargeting && state.stagedParticleIndex !== null);
  els.tableTitle.textContent = "Particle Cards";
  els.handArea.classList.toggle("hidden", false);
  els.handArea.classList.toggle("wheel-away", handWheelAway);
  els.handArea.setAttribute("aria-hidden", String(handWheelAway));
  els.vpModeBtn.classList.toggle("active", state.handMode === "vp");
  els.functionModeBtn.classList.toggle("active", state.handMode === "function");
  els.vpModeBtn.setAttribute("aria-pressed", String(state.handMode === "vp"));
  els.functionModeBtn.setAttribute("aria-pressed", String(state.handMode === "function"));
  els.vpModeBtn.disabled = false;
  els.functionModeBtn.disabled = state.functionHand.length === 0;
  els.handTitle.textContent = state.handMode === "vp" ? "Verb Phrase Wheel" : "Function Card Wheel";

  els.particles.className = "particles";
  els.particles.innerHTML = `${state.particles.map((particle, index) => `
    <button class="card particle-card ${stagedTargeting ? "targetable" : ""} ${state.animatingPlayId === `particle-${index}` ? "playing-up" : ""}" data-particle-index="${index}" aria-label="${stagedTargeting ? "Place staged card on" : "Particle"} ${particle.face}">
      <img src="particle cards/${particle.face}.jpg" alt="${particle.face}" draggable="false">
      <span class="card-title">${particle.face.toUpperCase()}</span>
      ${stagedCard && state.stagedParticleIndex === index ? stagedCardMarkup(stagedCard, { placed: true }) : ""}
    </button>
  `).join("")}${stagedCard && state.stagedParticleIndex === null && state.stagedCardVisible ? stagedCardMarkup(stagedCard) : ""}`;
  if (stagedCard && (state.stagedCardVisible || state.stagedParticleIndex !== null)) {
    const particleFace = state.particles[state.stagedParticleIndex]?.face.toUpperCase() || "";
    const trayText = particleFace ? `on ${particleFace}` : "not placed";
    const confirmLabel = vpTargeting ? "Confirm" : `Confirm Flip${state.pendingFunctionFlips > 1 ? ` (${state.pendingFunctionFlips})` : ""}`;
    els.vpConfirmTray.classList.remove("hidden");
    els.vpConfirmTray.innerHTML = `
      <div class="vp-confirm-copy">
        <strong>${stagedCard.phrase || stagedCard.label}</strong>
        <span>${trayText}</span>
      </div>
      <div class="vp-confirm-actions">
        <button class="unplay-vp-btn" type="button" data-unplay-vp>Unplay</button>
        ${state.stagedParticleIndex !== null ? `<button class="confirm-vp-btn" type="button" data-confirm-vp>${confirmLabel}</button>` : ""}
      </div>
    `;
  } else {
    els.vpConfirmTray.classList.add("hidden");
    els.vpConfirmTray.innerHTML = "";
  }

  const handCards = activeHandCards();
  const handIndex = activeHandIndex();
  els.vpHand.innerHTML = handCards.length ? handCards.map((card, index) => {
    const active = index === handIndex;
    const classes = state.handMode === "vp" ? cardButtonClasses(card) : `card function-card ${state.selectedFunctionId === card.id ? "selected" : ""}`;
    const idAttr = state.handMode === "vp" ? `data-vp-id="${card.id}"` : `data-function-id="${card.id}"`;
    return `
      <button class="${classes} wheel-card ${active ? "is-active" : ""} ${vpTargeting && state.targeting.cardId === card.id ? "staged-away" : ""} ${Math.abs(index - handIndex) > 2 ? "out-of-range" : ""} ${state.animatingPlayId === card.id ? "playing-up" : ""}" ${idAttr} data-wheel-index="${index}" style="${wheelStyle(index, handIndex)}">
        <img src="${card.image}" alt="${card.phrase || card.label}" draggable="false">
        ${state.handMode === "function" ? `<span class="card-title">${card.label}</span>` : ""}
      </button>
    `;
  }).join("") : `<div class="hand-empty">No ${state.handMode === "vp" ? "VP" : "function"} cards in hand</div>`;

  els.functionHand.innerHTML = "";

  if (state.selectedFunctionId) {
    const selected = state.functionHand.find((card) => card.id === state.selectedFunctionId);
    els.matchHint.textContent = selected?.type === "shuffle"
      ? "Shuffle Hand exchanges your current VP hand with new VPs."
      : "Click a particle card to place the staged function card. Move it between particles, then confirm below.";
  } else if (state.targeting) {
    els.matchHint.textContent = vpTargeting
      ? (state.stagedParticleIndex === null
        ? "Click a particle card to place the staged VP."
        : "Click another particle to move the VP, or confirm below to check the match.")
      : "Click a particle card to place the staged function card. Click another particle to move it.";
  } else {
    els.matchHint.textContent = state.handMode === "vp"
      ? "Swipe left or right to view VPs in hand. Swipe up to play the centered card."
      : "Swipe left or right to view function cards. Swipe up to play the centered card.";
  }

  renderFunctionRewardChoices();

  renderPlayedStage();
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
  const useRetry = state.drawPile.length === 0
    || (state.draws % 3 === 0 && state.retryPile.length > 0);
  const source = useRetry ? state.retryPile : state.drawPile;
  if (source.length > 0) state.vpHand.push(source.pop());
}

function dealOne() {
  if (state.drawPile.length > 0) state.vpHand.push(state.drawPile.pop());
}

function endTurn({ draw = true } = {}) {
  if (draw) drawOne();
  state.turn += 1;
  checkGameEnd();
  render();
}

function createFunctionCard(card) {
  return { ...card, id: `${card.type}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}` };
}

function renderFunctionRewardChoices() {
  if (!els.functionRewardChoices) return;
  els.functionRewardChoices.innerHTML = FUNCTION_CARDS.map((card) => `
    <button class="function-choice" type="button" data-function-reward-type="${card.type}">
      <span>${card.label}</span>
    </button>
  `).join("");
  if (!els.functionRewardHand) return;
  els.functionRewardHand.innerHTML = state.functionHand.length
    ? state.functionHand.map((card) => `<span>${card.label}</span>`).join("")
    : "<span>No function cards in hand</span>";
}

function grantFunctionReward() {
  state.functionPoints = 0;
  state.functionRewardPending = true;
  hideModals();
  showModal(els.functionRewardModal);
  debugLog("function-reward-unlocked", {
    choices: FUNCTION_CARDS.map((card) => card.label),
    functionHand: state.functionHand.map((card) => card.label),
  });
  render();
}

function chooseFunctionReward(type) {
  if (!state.functionRewardPending) {
    debugWarn("function-reward-choice-blocked", { type, functionRewardPending: state.functionRewardPending });
    return;
  }
  const template = FUNCTION_CARDS.find((card) => card.type === type);
  if (!template) {
    debugWarn("function-reward-choice-missing", { type });
    return;
  }
  const card = createFunctionCard(template);
  state.functionHand.push(card);
  state.functionRewardPending = false;
  state.handMode = "function";
  state.activeFunctionIndex = state.functionHand.length - 1;
  hideModals();
  debugLog("function-reward-picked", {
    type,
    label: card.label,
    functionHand: state.functionHand.map((item) => item.label),
  });
  render();
}

function addFunctionPointForTest() {
  if (els.game.classList.contains("hidden")) return;
  if (state.functionRewardPending) {
    debugWarn("test-function-point-blocked-reward-pending", {
      functionPoints: state.functionPoints,
      functionHand: state.functionHand.map((card) => card.label),
    });
    return;
  }
  state.functionPoints += 1;
  debugLog("test-function-point-added", { functionPoints: state.functionPoints });
  if (state.functionPoints >= 5) grantFunctionReward();
  render();
}

function checkGameEnd() {
  if (state.drawPile.length || state.retryPile.length) return;
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

function showModal(modal) {
  modal.classList.remove("hidden");
}

function hideModals() {
  els.statsModal.classList.add("hidden");
  els.helpModal.classList.add("hidden");
  els.functionRewardModal.classList.add("hidden");
}

function startGame() {
  const cardIndices = selectedCardIndices();
  if (!cardIndices.length) {
    debugWarn("start-game-blocked-no-cards");
    return;
  }

  state.gameKey = cardIndices.join("-");
  state.drawPile = shuffle(cardIndices.map((index) => CARD_DATA[index]));
  state.retryPile = [];
  state.discardPile = [];
  state.vpHand = [];
  state.functionHand = shuffle(FUNCTION_CARDS).slice(0, 2).map(createFunctionCard);
  state.score = 0;
  state.functionPoints = 0;
  state.functionRewardPending = false;
  state.handMode = "vp";
  state.turn = 1;
  state.draws = 0;
  state.selectedVpId = null;
  state.selectedFunctionId = null;
  state.pendingFunctionFlips = 0;
  state.handMode = "vp";
  state.activeVpIndex = 0;
  state.activeFunctionIndex = 0;
  state.activeParticleIndex = 0;
  state.targeting = null;
  state.stagedParticleIndex = null;
  state.stagedCardVisible = false;
  state.animatingPlayId = null;
  state.resolving = null;
  setupParticles();

  for (let i = 0; i < 4; i += 1) dealOne();

  els.setup.classList.add("hidden");
  els.game.classList.remove("hidden");
  document.body.classList.add("game-active");
  hideFeedback();
  debugLog("start-game", {
    selectedCount: cardIndices.length,
    vpHand: state.vpHand.map((card) => card.phrase),
    functionHand: state.functionHand.map((card) => card.label),
    particles: state.particles.map((particle) => particle.face),
  });
  render();
}

function playVp(particleIndex) {
  const cardIndex = state.vpHand.findIndex((card) => card.id === state.selectedVpId);
  if (cardIndex < 0) {
    debugWarn("play-vp-missing-selected-card", {
      particleIndex,
      selectedVpId: state.selectedVpId,
      vpHand: state.vpHand.map((card) => ({ id: card.id, phrase: card.phrase })),
    });
    return;
  }

  const card = state.vpHand.splice(cardIndex, 1)[0];
  const tableParticle = state.particles[particleIndex].face;
  const correct = particleMatches(card.particle, tableParticle);
  debugLog("play-vp-resolve", {
    particleIndex,
    tableParticle,
    phrase: card.phrase,
    cardParticle: card.particle,
    correct,
  });
  let title;
  let body;

  if (correct) {
    state.score += 1;
    state.functionPoints += 1;
    state.discardPile.push(card);
    title = "Correct";
    body = `${card.phrase} uses ${card.particle}. ${card.meaning}: ${card.example}`;
  } else {
    state.score -= 1;
    state.retryPile.unshift(card);
    title = "Try Again Later";
    body = `${card.phrase} uses ${card.particle}, not ${tableParticle}. It moved to the retry pile.`;
  }

  state.selectedVpId = null;
  state.targeting = null;
  state.stagedParticleIndex = null;
  state.stagedCardVisible = false;
  state.activeVpIndex = clamp(cardIndex, 0, Math.max(0, state.vpHand.length - 1));
  state.resolving = {
    card,
    correct,
    title,
    body,
    particleIndex,
    awardsFunction: correct && state.functionPoints >= 5,
    flipped: false,
    autoFlipArmed: true,
  };
  render();
  window.setTimeout(() => autoFlipResultCard(card.id), 640);
}

async function playFunction(particleIndex) {
  const functionIndex = state.functionHand.findIndex((card) => card.id === state.selectedFunctionId);
  if (functionIndex < 0) return;
  const card = state.functionHand[functionIndex];

  state.stagedParticleIndex = null;
  state.stagedCardVisible = false;
  render();
  await wait(120);
  await animateParticleFlips([particleIndex]);
  state.pendingFunctionFlips -= 1;
  if (state.pendingFunctionFlips > 0) {
    state.stagedParticleIndex = null;
    state.stagedCardVisible = true;
    state.activeParticleIndex = clamp(particleIndex, 0, Math.max(0, state.particles.length - 1));
    render();
    return;
  }

  state.functionHand.splice(functionIndex, 1);
  state.selectedFunctionId = null;
  state.pendingFunctionFlips = 0;
  state.functionRewardPending = false;
  state.handMode = "vp";
  state.targeting = null;
  state.stagedParticleIndex = null;
  state.stagedCardVisible = false;
  state.activeFunctionIndex = 0;
  showFeedback(card.label, `${card.label} used. Your turn ends.`, "good");
  endTurn({ draw: false });
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
  state.functionRewardPending = false;
  state.handMode = "vp";
  state.targeting = null;
  state.stagedParticleIndex = null;
  state.stagedCardVisible = false;
  state.activeFunctionIndex = 0;
  showFeedback(card.label, `Exchanged ${count} VP cards with the draw pile. Your turn ends.`, "good");
  endTurn({ draw: false });
}

async function flipAllFunction() {
  const functionIndex = state.functionHand.findIndex((card) => card.id === state.selectedFunctionId);
  if (functionIndex < 0) return;
  await animateParticleFlips(state.particles.map((_, index) => index));
  const [card] = state.functionHand.splice(functionIndex, 1);
  state.selectedFunctionId = null;
  state.pendingFunctionFlips = 0;
  state.functionRewardPending = false;
  state.handMode = "vp";
  state.targeting = null;
  state.stagedParticleIndex = null;
  state.stagedCardVisible = false;
  state.activeFunctionIndex = 0;
  showFeedback(card.label, "All particle cards flipped. Your turn ends.", "good");
  endTurn({ draw: false });
}

els.startBtn.addEventListener("click", startGame);
els.selectionViews.addEventListener("click", (event) => {
  const button = event.target.closest("[data-selection-view]");
  if (!button) return;
  selectionView = button.dataset.selectionView;
  els.selectionViews.querySelectorAll("[data-selection-view]").forEach((viewButton) => {
    viewButton.setAttribute("aria-pressed", String(viewButton === button));
  });
  if (selectionView === "particle" && quickSelectEnabled) {
    quickSelectEnabled = false;
    els.quickSelectBtn.setAttribute("aria-pressed", "false");
    els.quickSelectBtn.textContent = "Quick Select: Off";
  }
  renderCardPicker();
});

els.quickSelectBtn.addEventListener("click", () => {
  quickSelectEnabled = !quickSelectEnabled;
  clearQuickSelectAnchor();
  els.quickSelectBtn.setAttribute("aria-pressed", String(quickSelectEnabled));
  els.quickSelectBtn.textContent = `Quick Select: ${quickSelectEnabled ? "On" : "Off"}`;
  els.selectionSummary.textContent = quickSelectEnabled
    ? "Quick Select is on: choose the first and last card in a group."
    : `${selectedCardIndices().length} of ${CARD_DATA.length} cards selected`;
});

els.deckPicker.addEventListener("click", (event) => {
  const button = event.target.closest("[data-group-select]");
  if (!button) return;
  const group = button.closest("[data-selection-group]");
  const inputs = [...group.querySelectorAll("[data-card-index]")];
  const shouldSelect = !inputs.every((input) => input.checked);
  inputs.forEach((input) => {
    const cardIndex = Number(input.dataset.cardIndex);
    input.checked = shouldSelect;
    if (shouldSelect) selectedCardSet.add(cardIndex);
    else selectedCardSet.delete(cardIndex);
  });
  clearQuickSelectAnchor();
  syncVisibleCardInputs();
  updateSetupControls();
});

els.deckPicker.addEventListener("change", (event) => {
  const sameCount = event.target.closest("#sameParticleCount");
  if (sameCount) {
    const inputs = [...els.deckPicker.querySelectorAll("[data-particle-count]")];
    const sharedMax = Math.min(...inputs.map((input) => Number(input.dataset.individualMax)));
    inputs.forEach((input) => {
      input.max = sameCount.checked ? sharedMax : input.dataset.individualMax;
    });
    if (sameCount.checked && inputs.length) {
      const sharedValue = Math.min(Number(inputs[0].value), sharedMax);
      inputs.forEach((input) => { input.value = sharedValue; });
      updateParticleSelection();
      updateSetupControls();
    }
    return;
  }

  const input = event.target.closest("[data-card-index]");
  if (!input) return;
  const cardIndex = Number(input.dataset.cardIndex);
  if (input.checked) selectedCardSet.add(cardIndex);
  else selectedCardSet.delete(cardIndex);

  if (quickSelectEnabled) {
    input.checked = true;
    selectedCardSet.add(cardIndex);
    if (!quickSelectAnchor || quickSelectAnchor.dataset.rangeGroup !== input.dataset.rangeGroup) {
      clearQuickSelectAnchor();
      quickSelectAnchor = input;
      input.closest(".word-option").classList.add("range-anchor");
      els.selectionSummary.textContent = "First card selected. Now choose the last card in this group.";
      return;
    }

    const groupInputs = [...input.closest("[data-selection-group]").querySelectorAll(`[data-range-group="${input.dataset.rangeGroup}"]`)];
    const firstIndex = groupInputs.indexOf(quickSelectAnchor);
    const lastIndex = groupInputs.indexOf(input);
    const [start, end] = firstIndex < lastIndex ? [firstIndex, lastIndex] : [lastIndex, firstIndex];
    groupInputs.slice(start, end + 1).forEach((item) => {
      item.checked = true;
      selectedCardSet.add(Number(item.dataset.cardIndex));
    });
    clearQuickSelectAnchor();
  }

  syncVisibleCardInputs();
  updateSetupControls();
});

els.deckPicker.addEventListener("input", (event) => {
  const input = event.target.closest("[data-particle-count]");
  if (!input) return;
  const sameCount = els.deckPicker.querySelector("#sameParticleCount");
  if (sameCount?.checked) {
    const inputs = [...els.deckPicker.querySelectorAll("[data-particle-count]")];
    const sharedMax = Math.min(...inputs.map((item) => Number(item.dataset.individualMax)));
    const sharedValue = Math.max(0, Math.min(Number(input.value) || 0, sharedMax));
    inputs.forEach((item) => { item.value = sharedValue; });
  }
  updateParticleSelection();
  updateSetupControls();
});

els.newGameBtn.addEventListener("click", () => {
  hideModals();
  els.game.classList.add("hidden");
  els.setup.classList.remove("hidden");
  document.body.classList.remove("game-active");
  hideFeedback();
});
els.addFunctionPointBtn.addEventListener("click", addFunctionPointForTest);
els.closeFeedback.addEventListener("click", hideFeedback);
els.statsBtn.addEventListener("click", () => showModal(els.statsModal));
els.helpBtn.addEventListener("click", () => showModal(els.helpModal));
els.game.addEventListener("click", (event) => {
  const rewardChoice = event.target.closest("[data-function-reward-type]");
  if (rewardChoice) {
    event.preventDefault();
    chooseFunctionReward(rewardChoice.dataset.functionRewardType);
    return;
  }
  if (state.functionRewardPending && event.target.closest("#functionRewardModal")) return;
  if (event.target.matches("[data-close-modal]")) {
    hideModals();
    return;
  }
  if (event.target.classList.contains("modal")) hideModals();
});

els.vpHand.addEventListener("click", (event) => {
  const button = event.target.closest("[data-wheel-index]");
  if (!button) return;
  const index = Number(button.dataset.wheelIndex);
  if (index !== activeHandIndex()) {
    setActiveHandIndex(index);
    render();
    return;
  }
  stageActiveHandPlay();
});

els.vpConfirmTray.addEventListener("click", (event) => {
  const unplayButton = event.target.closest("[data-unplay-vp]");
  if (unplayButton) {
    event.preventDefault();
    unplayStagedCard();
    return;
  }

  const confirmButton = event.target.closest("[data-confirm-vp]");
  if (!confirmButton) return;
  event.preventDefault();
  if (state.targeting?.type === "function") confirmPlacedFunction();
  else confirmPlacedVp();
});

els.playStage.addEventListener("click", (event) => {
  const flipButton = event.target.closest("[data-flip-result]");
  if (flipButton) {
    event.preventDefault();
    flipResultCard();
    return;
  }

  if (!event.target.closest("[data-confirm-result]")) return;
  event.preventDefault();
  confirmResult();
});

els.particles.addEventListener("click", (event) => {
  const button = event.target.closest("[data-particle-index]");
  let particleIndex = button ? Number(button.dataset.particleIndex) : null;
  if (!button) {
    particleIndex = state.targeting ? particleIndexFromPoint(event.clientX, event.clientY) : null;
    debugWarn("particle-click-no-button", {
      targetTag: event.target?.tagName,
      targetClass: event.target?.className,
      clientX: Math.round(event.clientX),
      clientY: Math.round(event.clientY),
      inferredParticleIndex: particleIndex,
    });
    if (particleIndex === null) return;
  }
  debugLog("particle-click", {
    particleIndex,
    particleFace: state.particles[particleIndex]?.face,
    targeting: state.targeting,
    animatingPlayId: state.animatingPlayId,
    hasStaged: Boolean(els.particles.querySelector("[data-staged-card-id]")),
    buttonText: button?.textContent.trim() || "(inferred from container click)",
  });
  if (state.targeting) {
    animateStagedCardToParticle(particleIndex);
    return;
  }
  if (!state.targeting) {
    debugWarn("particle-click-without-targeting", { particleIndex });
    return;
  }
  if (particleIndex !== state.activeParticleIndex) {
    state.activeParticleIndex = particleIndex;
    render();
    return;
  }
  playActiveTarget();
});

els.vpConfirmTray.addEventListener("keydown", (event) => {
  if (!event.target.closest("[data-confirm-vp]") && !event.target.closest("[data-unplay-vp]")) return;
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  if (event.target.closest("[data-unplay-vp]")) unplayStagedCard();
  else if (state.targeting?.type === "function") confirmPlacedFunction();
  else confirmPlacedVp();
});

els.vpModeBtn.addEventListener("click", () => setHandMode("vp"));
els.functionModeBtn.addEventListener("click", () => setHandMode("function"));

function bindSwipeWheel(element, handlers) {
  let startX = 0;
  let startY = 0;
  let pointerId = null;
  let dragging = false;
  let suppressClick = false;
  let dragAxis = null;

  element.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    pointerId = event.pointerId;
    startX = event.clientX;
    startY = event.clientY;
    dragging = false;
    dragAxis = null;
    element.setPointerCapture(pointerId);
  });

  element.addEventListener("pointermove", (event) => {
    if (pointerId !== event.pointerId) return;
    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;
    if (!dragging && Math.hypot(deltaX, deltaY) < 6) return;
    dragging = true;
    if (!dragAxis && Math.hypot(deltaX, deltaY) >= 14) {
      dragAxis = Math.abs(deltaY) > Math.abs(deltaX) * 1.15 ? "vertical" : "horizontal";
    }
    element.classList.add("dragging");
    const liftY = dragAxis === "vertical" && deltaY < 0 ? clamp(deltaY, -180, 0) : 0;
    const slideX = dragAxis === "horizontal" ? clamp(deltaX, -120, 120) : 0;
    element.style.setProperty("--drag-x", `${slideX}px`);
    element.style.setProperty("--drag-y", `${liftY}px`);
    event.preventDefault();
  });

  element.addEventListener("pointerup", (event) => {
    if (pointerId !== event.pointerId) return;
    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;
    pointerId = null;
    element.classList.remove("dragging");
    element.style.removeProperty("--drag-x");
    element.style.removeProperty("--drag-y");
    suppressClick = dragging && (Math.abs(deltaX) > 8 || Math.abs(deltaY) > 8);
    window.setTimeout(() => { suppressClick = false; }, 0);

    if (dragAxis === "vertical" && Math.abs(deltaY) > 64 && deltaY < 0) {
      handlers.up();
      dragAxis = null;
      return;
    }

    if (dragAxis === "horizontal" && Math.abs(deltaX) > 48) {
      if (deltaX < 0) handlers.left();
      else handlers.right();
    }
    dragAxis = null;
  });

  element.addEventListener("pointercancel", () => {
    pointerId = null;
    dragging = false;
    dragAxis = null;
    element.classList.remove("dragging");
    element.style.removeProperty("--drag-x");
    element.style.removeProperty("--drag-y");
  });

  element.addEventListener("click", (event) => {
    if (!suppressClick) return;
    event.preventDefault();
    event.stopPropagation();
    suppressClick = false;
  }, true);
}

bindSwipeWheel(els.vpHand, {
  left: () => moveActiveHand(1),
  right: () => moveActiveHand(-1),
  up: stageActiveHandPlay,
});

bindSwipeWheel(els.particles, {
  left: () => moveActiveParticle(1),
  right: () => moveActiveParticle(-1),
  up: playActiveTarget,
});

document.addEventListener("keydown", (event) => {
  if (els.game.classList.contains("hidden")) return;
  if (event.key === "Escape") {
    if (state.functionRewardPending) return;
    hideModals();
    return;
  }
  if (event.key === "ArrowLeft") {
    if (state.targeting?.type === "function") moveActiveParticle(-1);
    else moveActiveHand(-1);
  }
  if (event.key === "ArrowRight") {
    if (state.targeting?.type === "function") moveActiveParticle(1);
    else moveActiveHand(1);
  }
  if (event.key === "ArrowUp" || event.key === "Enter") {
    if (state.targeting?.type === "function") playActiveTarget();
    else stageActiveHandPlay();
  }
});

window.putNTurnDebug = {
  build: DEBUG_BUILD,
  state,
  els,
  render,
  grantFunctionReward,
  chooseFunctionReward,
  addFunctionPointForTest,
};
debugLog("boot", {
  href: window.location.href,
  userAgent: navigator.userAgent,
  build: DEBUG_BUILD,
});

renderCardPicker();
els.bestScore.textContent = bestScore();
