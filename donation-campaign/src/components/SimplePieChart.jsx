import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';



const SimplePieChart = () => {

    const dynamicValue = JSON.parse(localStorage.getItem('Donated'));
    
       let length =0;
      if(dynamicValue === null )
      {
         length = 0;
      }
      else
      {
        length = dynamicValue.length;
      }

    const data = [
        { name: 'Total donation category', value: 12 },
        { name: 'Your donated category', value: length },
      ];

      const COLORS = ['#FF444A', '#00C49F'];
    
   
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
        const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
    
        return (
          <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" className="text-3xl">
            {`${(percent * 100).toFixed(1)}%`}
          </text>
        );
      };

    return (
        <div className="flex flex-col gap-10 justify-center items-center my-12">
       
          <PieChart width={300} height={300} >
            <Pie
           
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={150}
              fill="#8884d8"
              label={renderCustomizedLabel}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>

          <div className="flex flex-col lg:flex-row gap-10 justify-center items-center ">
            <div className="flex flex-row gap-2 justify-center items-center">
             <p className="text-lg lg:text-xl  font-bold">Total donation category</p>
             <div className="w-28 h-3 lg:w-32 lg:h-4 bg-[#FF444A]"></div>
            </div>
            <div className="flex flex-row gap-2 justify-center items-center">
             <p className="text-lg lg:text-xl font-bold">Your donated category</p>
             <div className="w-28 h-3 lg:w-32 lg:h-4 bg-[#00C49F]"></div>
            </div>
           
          </div>
        </div>
      );
};

export default SimplePieChart;
