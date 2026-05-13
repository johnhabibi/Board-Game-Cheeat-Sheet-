import { useState } from 'react';
import type { ReactNode } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { BookOpen } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('jaipur');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-6 h-6 text-slate-700" />
            <h1 className="text-xl font-bold text-slate-900">Board Game Rules</h1>
          </div>
        </div>
      </header>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
        <div className="sticky top-[76px] z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
          <TabsList className="rules-tabs p-1 gap-1 max-w-4xl mx-auto">
            <TabsTrigger
              value="jaipur"
              className="rules-tab px-2 sm:px-4 py-2.5 text-sm font-medium rounded-md transition-colors data-[state=active]:bg-slate-900 data-[state=active]:text-white data-[state=inactive]:text-slate-600 data-[state=inactive]:hover:bg-slate-100"
            >
              Jaipur
            </TabsTrigger>
            <TabsTrigger
              value="lostcities"
              className="rules-tab px-2 sm:px-4 py-2.5 text-sm font-medium rounded-md transition-colors data-[state=active]:bg-slate-900 data-[state=active]:text-white data-[state=inactive]:text-slate-600 data-[state=inactive]:hover:bg-slate-100"
            >
              Lost Cities
            </TabsTrigger>
            <TabsTrigger
              value="splendor"
              className="rules-tab px-2 sm:px-4 py-2.5 text-sm font-medium rounded-md transition-colors data-[state=active]:bg-slate-900 data-[state=active]:text-white data-[state=inactive]:text-slate-600 data-[state=inactive]:hover:bg-slate-100"
            >
              Splendor
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="px-4 py-6">
          <TabsContent value="jaipur" className="mt-0">
            <JaipurRules />
          </TabsContent>

          <TabsContent value="lostcities" className="mt-0">
            <LostCitiesRules />
          </TabsContent>

          <TabsContent value="splendor" className="mt-0">
            <SplendorRules />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

function JaipurRules() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
        <div className="inline-block bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-sm font-medium mb-4">
          Goal
        </div>
        <p className="text-slate-700 leading-relaxed">Win 2 rounds by having the most rupees.</p>
      </div>

      <Section title="Setup">
        <ul className="space-y-2 text-slate-700">
          <li className="flex gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Market starts with <strong>5 cards</strong>: usually <strong>3 camels + 2 cards from the deck</strong>.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Each player has goods cards in hand and a separate <strong>camel herd</strong>.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span><strong>Hand limit: 7 cards.</strong></span>
          </li>
          <li className="flex gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Camels in your herd <strong>do not</strong> count toward the hand limit.</span>
          </li>
        </ul>
      </Section>

      <Section title="On Your Turn">
        <p className="text-slate-700 mb-4">Do exactly <strong>one</strong> of the following:</p>

        <SubSection title="Take Cards">
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-slate-900 mb-1">Take 1 good</h5>
              <ul className="space-y-1 text-slate-700 ml-4">
                <li className="flex gap-2">
                  <span className="text-amber-600">–</span>
                  <span>Take one goods card from the market.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">–</span>
                  <span>Refill the market to 5 cards.</span>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-slate-900 mb-1">Take all camels</h5>
              <ul className="space-y-1 text-slate-700 ml-4">
                <li className="flex gap-2">
                  <span className="text-amber-600">–</span>
                  <span>Take every camel in the market into your herd.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">–</span>
                  <span>Refill the market to 5 cards.</span>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-slate-900 mb-1">Exchange 2+ cards</h5>
              <ul className="space-y-1 text-slate-700 ml-4">
                <li className="flex gap-2">
                  <span className="text-amber-600">–</span>
                  <span>Take 2 or more cards from the market.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">–</span>
                  <span>Replace them with the same number of cards from your hand and/or camel herd.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">–</span>
                  <span>You may <strong>not</strong> exchange only 1 card.</span>
                </li>
              </ul>
            </div>
          </div>
        </SubSection>

        <SubSection title="Sell Goods">
          <ul className="space-y-2 text-slate-700">
            <li className="flex gap-2">
              <span className="text-amber-600 font-bold">•</span>
              <span>Sell any number of cards of <strong>one goods type</strong>.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-600 font-bold">•</span>
              <span>Diamonds, gold, and silver require selling <strong>at least 2</strong> cards.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-600 font-bold">•</span>
              <span>Take goods tokens equal to the number sold.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-600 font-bold">•</span>
              <span>If you sell <strong>3, 4, or 5+</strong> cards, take the matching bonus token.</span>
            </li>
          </ul>
        </SubSection>
      </Section>

      <Section title="Round End">
        <p className="text-slate-700 mb-2">A round ends when either:</p>
        <ul className="space-y-2 text-slate-700">
          <li className="flex gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span><strong>3 goods token stacks</strong> are empty, or</span>
          </li>
          <li className="flex gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>The deck cannot refill the market to 5 cards.</span>
          </li>
        </ul>
      </Section>

      <Section title="Scoring">
        <ul className="space-y-2 text-slate-700">
          <li className="flex gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Add goods tokens + bonus tokens.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Player with the most camels gets the <strong>camel token</strong>.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>Most rupees wins the round.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-amber-600 font-bold">•</span>
            <span>First player to win <strong>2 rounds</strong> wins the game.</span>
          </li>
        </ul>
      </Section>

      <Callout>
        <strong>Easy-to-Miss Rule:</strong> Taking all camels can be dangerous because it gives your opponent a totally refreshed market.
      </Callout>
    </div>
  );
}

function LostCitiesRules() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
        <div className="inline-block bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-sm font-medium mb-4">
          Goal
        </div>
        <p className="text-slate-700 leading-relaxed">Start expeditions that score positive points, but avoid overcommitting to bad ones.</p>
      </div>

      <Section title="Setup">
        <ul className="space-y-2 text-slate-700">
          <li className="flex gap-2">
            <span className="text-emerald-600 font-bold">•</span>
            <span>Each player gets <strong>8 cards</strong>.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-emerald-600 font-bold">•</span>
            <span>There are <strong>5 colors</strong>, each representing an expedition.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-emerald-600 font-bold">•</span>
            <span>Cards are numbered <strong>2–10</strong>, plus <strong>wager/investment cards</strong>.</span>
          </li>
        </ul>
      </Section>

      <Section title="On Your Turn">
        <p className="text-slate-700 mb-4">You must do both steps:</p>
        <ol className="space-y-2 text-slate-700">
          <li className="flex gap-2">
            <span className="font-bold text-emerald-600">1.</span>
            <span><strong>Play or discard 1 card</strong></span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-emerald-600">2.</span>
            <span><strong>Draw 1 card</strong></span>
          </li>
        </ol>
      </Section>

      <Section title="Playing Cards">
        <ul className="space-y-2 text-slate-700">
          <li className="flex gap-2">
            <span className="text-emerald-600 font-bold">•</span>
            <span>Each color has its own expedition row.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-emerald-600 font-bold">•</span>
            <span>Cards must be played in <strong>ascending order</strong>.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-emerald-600 font-bold">•</span>
            <span>Wager cards must be played <strong>before any number card</strong> in that color.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-emerald-600 font-bold">•</span>
            <span>Once you play a numbered card, you cannot add wager cards to that expedition.</span>
          </li>
        </ul>
      </Section>

      <Section title="Discarding Cards">
        <ul className="space-y-2 text-slate-700">
          <li className="flex gap-2">
            <span className="text-emerald-600 font-bold">•</span>
            <span>Discard to the matching color discard pile.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-emerald-600 font-bold">•</span>
            <span>Then draw from either: the deck, or the top of any discard pile.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-emerald-600 font-bold">•</span>
            <span>You cannot discard a card and immediately draw that exact same card back.</span>
          </li>
        </ul>
      </Section>

      <Section title="Round End">
        <p className="text-slate-700">The round ends when the draw deck runs out.</p>
      </Section>

      <Section title="Scoring Each Expedition">
        <p className="text-slate-700 mb-4">Only expeditions you started score.</p>
        <p className="text-slate-700 mb-4">For each color:</p>

        <div className="bg-slate-50 rounded-lg p-4 mb-4 border border-slate-200">
          <p className="font-mono text-slate-900 text-center mb-3">
            <strong>Total card values − 20 = base score</strong>
          </p>
          <p className="text-slate-600 text-sm text-center">Then apply wager multiplier:</p>
        </div>

        <ul className="space-y-2 text-slate-700 mb-4">
          <li className="flex gap-2">
            <span className="text-emerald-600 font-bold">•</span>
            <span>No wager: <strong>×1</strong></span>
          </li>
          <li className="flex gap-2">
            <span className="text-emerald-600 font-bold">•</span>
            <span>1 wager: <strong>×2</strong></span>
          </li>
          <li className="flex gap-2">
            <span className="text-emerald-600 font-bold">•</span>
            <span>2 wagers: <strong>×3</strong></span>
          </li>
          <li className="flex gap-2">
            <span className="text-emerald-600 font-bold">•</span>
            <span>3 wagers: <strong>×4</strong></span>
          </li>
        </ul>

        <p className="text-slate-700 mb-2">If you played <strong>8 or more cards</strong> in that expedition, add <strong>+20 bonus</strong> after the multiplier.</p>
        <p className="text-slate-700">Unstarted expeditions score <strong>0</strong>.</p>
      </Section>

      <Callout>
        <strong>Easy-to-Miss Rule:</strong> A wager makes both good and bad expeditions more extreme. A bad expedition with wagers gets very bad.
      </Callout>
    </div>
  );
}

function SplendorRules() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
        <div className="inline-block bg-purple-100 text-purple-900 px-3 py-1 rounded-full text-sm font-medium mb-4">
          Goal
        </div>
        <p className="text-slate-700 leading-relaxed">Reach <strong>15 prestige points</strong>.</p>
      </div>

      <Section title="Setup">
        <ul className="space-y-2 text-slate-700">
          <li className="flex gap-2">
            <span className="text-purple-600 font-bold">•</span>
            <span>Reveal <strong>4 cards</strong> from each level: Level I, Level II, Level III</span>
          </li>
          <li className="flex gap-2">
            <span className="text-purple-600 font-bold">•</span>
            <span>Reveal noble tiles: <strong>number of players + 1</strong>.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-purple-600 font-bold">•</span>
            <span>Gem tokens:
              <ul className="ml-4 mt-1 space-y-1">
                <li>2 players: <strong>4 of each color</strong></li>
                <li>3 players: <strong>5 of each color</strong></li>
                <li>4 players: <strong>7 of each color</strong></li>
              </ul>
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-purple-600 font-bold">•</span>
            <span>Gold tokens: <strong>5</strong></span>
          </li>
        </ul>
      </Section>

      <Section title="On Your Turn">
        <p className="text-slate-700 mb-4">Do exactly <strong>one</strong> of the following:</p>

        <SubSection title="Take 3 Different Gems">
          <p className="text-slate-700">Take 1 token each from 3 different colors.</p>
        </SubSection>

        <SubSection title="Take 2 Same Gems">
          <ul className="space-y-2 text-slate-700">
            <li className="flex gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span>Take 2 tokens of the same color.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span>There must be <strong>at least 4</strong> of that color available before you take them.</span>
            </li>
          </ul>
        </SubSection>

        <SubSection title="Reserve 1 Card">
          <ul className="space-y-2 text-slate-700">
            <li className="flex gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span>Reserve a face-up card or the top card of a deck.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span>Take 1 gold token if available.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span>You may have at most <strong>3 reserved cards</strong>.</span>
            </li>
          </ul>
        </SubSection>

        <SubSection title="Buy 1 Card">
          <ul className="space-y-2 text-slate-700">
            <li className="flex gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span>Pay the card's cost using gems and/or gold.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span>Gold is wild.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span>Purchased cards give: permanent discounts (shown by their gem color) and sometimes prestige points</span>
            </li>
          </ul>
        </SubSection>
      </Section>

      <Section title="Token Limit">
        <ul className="space-y-2 text-slate-700">
          <li className="flex gap-2">
            <span className="text-purple-600 font-bold">•</span>
            <span>At the end of your turn, you may have at most <strong>10 tokens</strong> total, including gold.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-purple-600 font-bold">•</span>
            <span>Discard down if needed.</span>
          </li>
        </ul>
      </Section>

      <Section title="Nobles">
        <ul className="space-y-2 text-slate-700">
          <li className="flex gap-2">
            <span className="text-purple-600 font-bold">•</span>
            <span>At the end of your turn, if your purchased cards meet a noble's requirement, you take that noble automatically.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-purple-600 font-bold">•</span>
            <span>If you qualify for multiple nobles, choose one.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-purple-600 font-bold">•</span>
            <span>You can only take <strong>one noble per turn</strong>.</span>
          </li>
        </ul>
      </Section>

      <Section title="Game End">
        <ul className="space-y-2 text-slate-700">
          <li className="flex gap-2">
            <span className="text-purple-600 font-bold">•</span>
            <span>When someone reaches <strong>15 points</strong>, finish the current round so everyone has had the same number of turns.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-purple-600 font-bold">•</span>
            <span>Highest score wins.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-purple-600 font-bold">•</span>
            <span>Tiebreaker: fewer purchased development cards wins.</span>
          </li>
        </ul>
      </Section>

      <Callout>
        <strong>Easy-to-Miss Rule:</strong> Discounts are not spent. Once you buy a card, its gem color permanently reduces future costs.
      </Callout>
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
      <h3 className="text-lg font-bold text-slate-900 mb-4">{title}</h3>
      {children}
    </div>
  );
}

function SubSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mt-4 first:mt-0">
      <h4 className="font-semibold text-slate-900 mb-2">{title}</h4>
      {children}
    </div>
  );
}

function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
      <p className="text-blue-900 text-sm leading-relaxed">{children}</p>
    </div>
  );
}
