
function Meal() {
  return (
    <div className="pb-3">
        <img className="aspect-[1/1] w-full object-cover rounded-xl mb-3" src="/shashlik.png" alt="" />
        <div className="text-lg font-semibold mb-1">G’ijduvon shashlik</div>
        <div className="flex justify-between items-end">
            <div className="text-red-500 text-sm font-semibold">356 000 uzs</div>
            <div className="line-through text-gray-400 text-[10px]">546 000 uzs</div>
        </div>
    </div>
  )
}

export default Meal