import Head from 'next/head';
import { useState } from 'react';
import styles from './chess.module.css';

/**
 * TO ADD YOUR GAMES:
 * 1. Go to lichess.org, open a game you played
 * 2. Copy the 8-char ID from the URL: lichess.org/aBcDeFgH  →  'aBcDeFgH'
 * 3. Paste it into lichessId below
 *
 * For a multi-game study (recommended):
 * 1. Create a Lichess Study, import PGNs as chapters
 * 2. Use type: 'study' and the study ID
 */
const games = [
  {
    id: 'game-1',
    type: 'study',
    title: 'My best attack',
    event: 'OTB Tournament, 2024',
    players: 'Huang, Youhe vs Piasetski, Leon',
    result: '1-0',
    orientation: 'white',
    desc: '',
    lichessId: 'uqYObD5J/fxunReRI',
  },
  {
    id: 'game-2',
    type: 'game',
    title: 'Endgame precision',
    event: 'Online Classical, 2024',
    players: 'Opponent vs Youhe Huang',
    result: '0-1',
    desc: 'Converting a rook endgame advantage through accurate technique.',
    lichessId: 'REPLACE_ME',
  },
];

function Board({ game }) {
  if (game.lichessId === 'REPLACE_ME') {
    return (
      <div className={styles.placeholder}>
        <span className={styles.placeholderIcon}>♟</span>
        <p>Open <code>src/pages/chess.jsx</code> and replace<br /><code>lichessId: 'REPLACE_ME'</code> with your Lichess game ID</p>
      </div>
    );
  }
  const orientation = game.orientation || 'black';
  const base = game.type === 'study'
    ? `https://lichess.org/study/embed/${game.lichessId}`
    : `https://lichess.org/embed/game/${game.lichessId}`;

    const src = `${base}?theme=brown&bg=dark&color=${orientation}`;

  return (
    <iframe
      key={game.lichessId}
      src={src}
      className={styles.iframe}
      allowTransparency="true"
      frameBorder="0"
      title={game.title}
    />
  );
}

export default function Chess() {
  const [selected, setSelected] = useState(games[0].id);
  const game = games.find(g => g.id === selected);

  return (
    <>
      <Head>
        <title>Chess — Youhe Huang</title>
      </Head>

      <main className="page">
        <div className={`${styles.header} reveal reveal-1`}>
          <span className="section-tag">04 // Chess</span>
          <h1>My games.</h1>
          <p className={styles.intro}>
            National Master. I play classical, rapid, and blitz.
            Use <kbd>←</kbd> <kbd>→</kbd> inside the board to step through moves.
          </p>
        </div>

        <div className={`${styles.layout} reveal reveal-2`}>
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <p className={styles.sidebarLabel}>Select game</p>
            <ul className={styles.gameList}>
              {games.map(g => (
                <li key={g.id}>
                  <button
                    className={`${styles.gameBtn} ${selected === g.id ? styles.gameBtnActive : ''}`}
                    onClick={() => setSelected(g.id)}
                  >
                    <span className={styles.gameResult}>{g.result}</span>
                    <span className={styles.gameTitle}>{g.title}</span>
                    <span className={styles.gameEvent}>{g.event}</span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main board + info */}
          <div className={styles.boardArea}>
            <div className={styles.boardWrap}>
              <Board game={game} />
            </div>

            <div className={styles.info}>
              <div className={styles.infoTop}>
                <div>
                  <h2 className={styles.gameName}>{game.title}</h2>
                  <p className={styles.gamePlayers}>{game.players}</p>
                </div>
                <span className={styles.badge}>{game.result}</span>
              </div>
              <p className={styles.gameDesc}>{game.desc}</p>
              <div className={styles.hint}>
                <span>⌨</span>
                Click inside the board, then use <kbd>←</kbd> <kbd>→</kbd> to navigate moves
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}