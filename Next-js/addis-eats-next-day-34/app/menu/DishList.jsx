import MenuCard from "./MenuCard";

export default function DishList({ dishes }) {
    return (
        <div className="menu-grid">
            {dishes.map((dish) => (
                <MenuCard key={dish.id} dish={dish} />
            ))}
        </div>
    );
}