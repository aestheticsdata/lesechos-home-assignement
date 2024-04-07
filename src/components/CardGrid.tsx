import Card from "@/components/Card";
import { REGISTER, SUBSCRIBE } from "@/components/config/constants";
import type { CardType } from "@/components/interfaces/card";
import type { Subscription } from "@/components/interfaces/subscription";

interface CardGridProps {
  cards: CardType[];
  user: any;
}

interface TransformedCards {
  [k: string]: CardType[];
}

const getButtonType = (cardSubscriptions: Subscription[], userRights: Subscription[] | undefined) => {
  if (cardSubscriptions.length === 0) {
    return SUBSCRIBE;
  }

  const hasAccess = cardSubscriptions.some(subscription => userRights?.includes(subscription));

  return hasAccess ? SUBSCRIBE : REGISTER;
};


const CardGrid = ({ cards, user }: CardGridProps) => {
  const cardsBySite = cards.reduce((acc: TransformedCards, card: CardType) => {
    if (!acc[card.site]) {
      acc[card.site] = [];
    }
    acc[card.site].push(card);
    return acc;
  }, {});

  return (
    <div className="space-y-16">
      {Object.keys(cardsBySite).map((site) => (
        <div key={site} className="space-y-8">
          <div className="uppercase font-bold border-b-red-500 border-b-2 max-w-fit">
            {site}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardsBySite[site].map((card) => (
              <Card
                key={card.id}
                card={card}
                buttonType={getButtonType(card.subscriptions, user.subscriptions)}
              />
            ))
            }
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
