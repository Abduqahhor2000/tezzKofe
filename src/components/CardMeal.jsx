

function CardMeal() {
  return (
    <div className="p-4 rounded-lg bg-gray-100 flex">
     <img className="aspect-[1/1] w-20 object-cover" src="/zakazal.png" alt=""/>
     <div className="flex-grow pl-3">
        <h4 className="font-semibold text-sm pb-2">G’ijduvon shashlik Ajoyib shashlik</h4>
        <p className="text-gray-400 text-[10px] pb-1">56 000 uzs</p>
        <span className="block text-sm"><span className="text-primary">3 ta:</span> 168 000 uzs</span>
     </div>
    </div>
  )
}

export default CardMeal