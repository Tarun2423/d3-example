import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import axios from 'axios';

const GraphComponent = () => {
  const graphRef = useRef(null);
  const [data, setData] = useState([]);
   const [graphInstance, setGraphInstance] = useState(false);
  const [p, setP] = useState(8);
  const [del, setDel] = useState(false);

  useEffect(() => {
    fetchData();
  }, [p]);
//   useEffect(() => {
//     if (graphInstance) {
//       destroyGraph();
//       createGraph();
//     }
//   }, [data]);
  const fetchData = async () => {
    try {
      const response = await axios.post('http://localhost:5002/data/getdata?p='+p);
      const newData = response.data;
      setData(newData);
      if(graphInstance) {
        setDel(true);
        createGraph(newData);
    }
      else{
      createGraph(newData);
        
      }
    //   isgraph(true)
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

const handle=()=>{
    setP(p+1)
    setDel(true)
}

  const createGraph = (data) => {
    setGraphInstance(true);
    if(graphInstance==true && del==true){
        d3.select(graphRef.current).selectAll('*').remove();
    }
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 700 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const svg = d3.select(graphRef.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleBand()
      .range([0, width])
      .padding(0.1)
      .domain(data.map((d, i) => `Data ${i + 1}`));

    const yScale = d3.scaleLinear()
      .range([height, 0])
      .domain([0, d3.max(data, d => d.intensity)]);

     
    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale));

    svg.append('g')
      .call(d3.axisLeft(yScale));

    svg.selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d, i) => xScale(`Data ${i + 1}`))
      .attr('y', d => yScale(d.intensity))
      .attr('width', xScale.bandwidth())
      .attr('height', d => height - yScale(d.intensity))
      .attr('fill', 'steelblue');
  };

  return <div>
    <div style={{width: '700px', height: '500px'}} 
    ref={graphRef}></div>
    <button style={{borderRadius:"10px",width:"50px",height:"30px",backgroundColor:"#7451f8",color:"white",cursor:"pointer"}} onClick={()=>handle()}>Next</button>
  </div>;
};

export default GraphComponent;
