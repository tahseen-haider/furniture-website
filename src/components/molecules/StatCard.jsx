const StatCard = ({ title, value, icon: Icon, className = '' }) => {
  return (
    <div
      className={`flex items-center gap-4 p-4 bg-white rounded-lg shadow min-w-[180px] ${className}`}
    >
      {Icon && <Icon className="h-8 w-8 text-blue-600" />}
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
