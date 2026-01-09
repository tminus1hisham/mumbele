import { ref ,computed} from "vue";
import { defineStore } from "pinia";

export const useMenuStore = defineStore('menu',{
    state: () => ({
        menu:[
            { id:1, image:"/1.png", category:"Accessories", name:"Thread Seal Tape (Small)", price:30 },
  { id:2, image:"/1.png", category:"Accessories", name:"Thread Seal Tape (Large)", price:95 },
  { id:3, image:"/2.png", category:"Accessories", name:"Tangit 100ml", price: 320 },
  { id:4, image:"/3.png", category:"Accessories", name:"Tangit 250ml", price: 550 },
  { id:5, image:"/4.png", category:"Accessories", name:"Silicone Sealant 280ml", price:280 },
  { id:6, image:"/place.png", category:"Accessories", name:"Rubber Washer Kit (Mixed)", price:260 },
  { id:7, image:"/place.png", category:"Accessories", name:"Boss White", price:310 },
  { id:8, image:"/place.png", category:"Accessories", name:"Hemp Thread Pack", price:180 },
  { id:9, image:"/place.png", category:"Accessories", name:"PPR Pipe Clips 20mm", price:65 },
  { id:10, image:"/place.png", category:"Accessories", name:"PPR Pipe Clips 25mm", price:75 },

  // PLUMBING TOOLS
  { id:11, image:"/7.png", category:"Plumbing Tools", name:"Tape Measure 5m", price:150 },
  { id:12, image:"/place.png", category:"Plumbing Tools", name:"Pipe Wrench 14\"", price:1_150 },
  { id:13, image:"/place.png", category:"Plumbing Tools", name:"Adjustable Spanner 12\"", price:600 },
  { id:14, image:"/place.png", category:"Plumbing Tools", name:"PVC Pipe Cutter (Ratchet)", price:850 },
  { id:15, image:"/place.png", category:"Plumbing Tools", name:"Hacksaw + Extra Blades", price:390 },
  { id:16, image:"/place.png", category:"Plumbing Tools", name:"PPR Welding Machine", price:6_500 },
  { id:17, image:"/place.png", category:"Plumbing Tools", name:"PPR Welding Nozzles 20–32mm", price:1_250 },
  { id:18, image:"/place.png", category:"Plumbing Tools", name:"Teflon Tape Dispenser", price:260 },
  { id:19, image:"/place.png", category:"Plumbing Tools", name:"Hand Reamer / Deburr Tool", price:190 },
  { id:20, image:"/place.png", category:"Plumbing Tools", name:"Bolt / Nut Set Assortment", price:630 },

  // PPR PIPES (4m lengths)
  { id:21, image:"/8.png", category:"PPR", name:"PPR Pipe 20mm (4m)", price:240 },
  { id:22, image:"/8.png", category:"PPR", name:"PPR Pipe 25mm (4m)", price:380 },
  { id:23, image:"/8.png", category:"PPR", name:"PPR Pipe 32mm (4m)", price:480 },
  { id:24, image:"/8.png", category:"PPR", name:"PPR Pipe 40mm (4m)", price:680 },
  { id:25, image:"/8.png", category:"PPR", name:"PPR Pipe 50mm (4m)", price:1_400 },

  // PPR FITTINGS 20MM
  { id:26, image:"/place.png", category:"PPR", name:"PPR Elbow 20mm", price:35 },
  { id:27, image:"/place.png", category:"PPR", name:"PPR Tee 20mm", price:55 },
  { id:28, image:"/place.png", category:"PPR", name:"PPR Socket 20mm", price:30 },
  { id:29, image:"/place.png", category:"PPR", name:"PPR End Cap 20mm", price:25 },
  { id:30, image:"/place.png", category:"PPR", name:"PPR Union 20mm", price:140 },
  { id:31, image:"/place.png", category:"PPR", name:"PPR Male Adapter 20mm x 1/2\"", price:120 },
  { id:32, image:"/place.png", category:"PPR", name:"PPR Female Adapter 20mm x 1/2\"", price:140 },
  { id:33, image:"/place.png", category:"PPR", name:"PPR Female Elbow 20mm x 1/2\"", price:200 },
  { id:34, image:"/place.png", category:"PPR", name:"PPR Reducer 25x20mm", price:75 },
  { id:35, image:"/place.png", category:"PPR", name:"PPR Cross 20mm", price:280 },

  // PPR FITTINGS 25MM / 32MM
  { id:36, image:"/place.png", category:"PPR", name:"PPR Elbow 25mm", price:40 },
  { id:37, image:"/place.png", category:"PPR", name:"PPR Tee 25mm", price:80 },
  { id:38, image:"/place.png", category:"PPR", name:"PPR Socket 25mm", price:45 },
  { id:39, image:"/place.png", category:"PPR", name:"PPR Union 25mm", price:180 },
  { id:40, image:"/place.png", category:"PPR", name:"PPR Male Adapter 25mm x 3/4\"", price:180 },
  { id:41, image:"/place.png", category:"PPR", name:"PPR Female Adapter 25mm x 3/4\"", price:200 },
  { id:42, image:"/place.png", category:"PPR", name:"PPR Elbow 32mm", price:50 },
  { id:43, image:"/place.png", category:"PPR", name:"PPR Tee 32mm", price:130 },
  { id:44, image:"/place.png", category:"PPR", name:"PPR Socket 32mm", price:65 },
  { id:45, image:"/place.png", category:"PPR", name:"PPR Union 32mm", price:240 },

  // PPR VALVES
  { id:46, image:"/place.png", category:"PPR", name:"PPR Ball Valve 20mm", price:430 },
  { id:47, image:"/place.png", category:"PPR", name:"PPR Ball Valve 25mm", price:620 },
  { id:48, image:"/place.png", category:"PPR", name:"PPR Stop Cock 20mm", price:360 },
  { id:49, image:"/place.png", category:"PPR", name:"PPR Check Valve 25mm", price:820 },
  { id:50, image:"/place.png", category:"PPR", name:"PPR Clip 32mm (pack)", price:350 },

  // HDPE PIPES 100m Coils (Water / Irrigation)
  { id:51, image:"/place.png", category:"HDPE", name:"HDPE Pipe 20mm Coil (100m)", price:2_900 },
  { id:52, image:"/place.png", category:"HDPE", name:"HDPE Pipe 25mm Coil (100m)", price:3_400 },
  { id:53, image:"/place.png", category:"HDPE", name:"HDPE Pipe 32mm Coil (100m)", price:4_200 },
  { id:54, image:"/place.png", category:"HDPE", name:"HDPE Pipe 40mm Coil (100m)", price:5_800 },
  { id:55, image:"/place.png", category:"HDPE", name:"HDPE Pipe 50mm Coil (100m)", price:8_000 },

  // HDPE FITTINGS (Compression / Threaded)
  { id:56, image:"/place.png", category:"HDPE", name:"HDPE Elbow 25mm", price:140 },
  { id:57, image:"/place.png", category:"HDPE", name:"HDPE Elbow 32mm", price:240 },
  { id:58, image:"/place.png", category:"HDPE", name:"HDPE Tee 25mm", price:380 },
  { id:59, image:"/place.png", category:"HDPE", name:"HDPE Tee 32mm", price:620 },
  { id:60, image:"/place.png", category:"HDPE", name:"HDPE Female Adapter 25mm", price:220 },
  { id:61, image:"/place.png", category:"HDPE", name:"HDPE Male Adapter 25mm", price:220 },
  { id:62, image:"/place.png", category:"HDPE", name:"HDPE End Cap 25mm", price:150 },
  { id:63, image:"/place.png", category:"HDPE", name:"HDPE Union Valve 25mm", price:420 },
  { id:64, image:"/place.png", category:"HDPE", name:"HDPE Reducing Coupling 32x25mm", price:250 },
  { id:65, image:"/place.png", category:"HDPE", name:"HDPE Saddle Clamp 25mm", price:180 },

  // PVC PRESSURE PIPES & FITTINGS
  { id:66, image:"/place.png", category:"PVC Pressure", name:"PVC Pressure 1/2\" (6m)", price:540 },
  { id:67, image:"/place.png", category:"PVC Pressure", name:"PVC Pressure 3/4\" (6m)", price:740 },
  { id:68, image:"/place.png", category:"PVC Pressure", name:"PVC Elbow 1/2\"", price:40 },
  { id:69, image:"/place.png", category:"PVC Pressure", name:"PVC Tee 1/2\"", price:60 },
  { id:70, image:"/place.png", category:"PVC Pressure", name:"PVC Coupling 1/2\"", price:35 },
  { id:71, image:"/place.png", category:"PVC Pressure", name:"PVC Reducer 3/4\" x 1/2\"", price:70 },
  { id:72, image:"/place.png", category:"PVC Pressure", name:"PVC Ball Valve 1/2\"", price:350 },
  { id:73, image:"/place.png", category:"PVC Pressure", name:"PVC Ball Valve 3/4\"", price:450 },
  { id:74, image:"/place.png", category:"PVC Pressure", name:"PVC Non-Return Valve 1\"", price:840 },

  // uPVC WASTE / DRAINAGE
  { id:75, image:"/place.png", category:"uPVC Waste", name:"uPVC Waste 2\" (6m)", price:920 },
  { id:76, image:"/place.png", category:"uPVC Waste", name:"uPVC Waste 3\" (6m)", price:1_380 },
  { id:77, image:"/place.png", category:"uPVC Waste", name:"uPVC Waste 4\" (6m)", price:1_770 },
  { id:78, image:"/place.png", category:"uPVC Waste", name:"uPVC Elbow 2\"", price:115 },
  { id:79, image:"/place.png", category:"uPVC Waste", name:"uPVC Tee 2\"", price:160 },
  { id:80, image:"/place.png", category:"uPVC Waste", name:"uPVC Reducer 3\" x 2\"", price:180 },
  { id:81, image:"/place.png", category:"uPVC Waste", name:"P-Trap 1 1/2\"", price:340 },
  { id:82, image:"/place.png", category:"uPVC Waste", name:"Bottle Trap 1 1/4\"", price:440 },

  // GI & THREADED FITTINGS
  { id:83, image:"/place.png", category:"GI", name:"GI Pipe 1/2\" (6m)", price:1_900 },
  { id:84, image:"/place.png", category:"GI", name:"GI Pipe 3/4\" (6m)", price:2_600 },
  { id:85, image:"/place.png", category:"GI", name:"GI Elbow 1/2\"", price:180 },
  { id:86, image:"/place.png", category:"GI", name:"GI Tee 1/2\"", price:240 },
  { id:87, image:"/place.png", category:"GI", name:"GI Union 1/2\"", price:450 },
  { id:88, image:"/place.png", category:"GI", name:"Brass Ball Valve 1/2\"", price:650 },
  { id:89, image:"/place.png", category:"GI", name:"Brass Gate Valve 3/4\"", price:950 },
  { id:90, image:"/place.png", category:"GI", name:"GI Nipple 1/2\" x 2\"", price:85 },

  // SANITARY / FINISHES
  { id:91, image:"/place.png", category:"Sanitary", name:"Flexible Connector 1/2\" (18\")", price:350 },
  { id:92, image:"/place.png", category:"Sanitary", name:"Flexible Connector 1/2\" (24\")", price:420 },
  { id:93, image:"/place.png", category:"Sanitary", name:"Angle Valve 1/2\"", price:440 },
  { id:94, image:"/place.png", category:"Sanitary", name:"Shower Head Set (Basic)", price:930 },
  { id:95, image:"/place.png", category:"Sanitary", name:"Sink Mixer Tap (Basic)", price:2_180 },
  { id:96, image:"/place.png", category:"Sanitary", name:"Wash Basin Trap 1 1/4\"", price:500 },
  { id:97, image:"/place.png", category:"Sanitary", name:"Toilet Roll Holder – Chrome", price:350 },
  { id:98, image:"/place.png", category:"Sanitary", name:"Soap Dish – Wall Mount", price:260 },
  { id:99, image:"/place.png", category:"Sanitary", name:"Copper Tube Washer Set", price:180 },
  { id:100, image:"/place.png", category:"Sanitary", name:"Tap Aerator Set (2 pcs)", price:150 },

        ]
    })
})