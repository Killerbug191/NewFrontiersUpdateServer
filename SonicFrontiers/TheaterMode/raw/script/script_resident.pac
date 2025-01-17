PACx403Lô_ë0f  @   èe  èe                                 PACx402Lô_ëèe        `   8   b      	            H       X                      p      ÿÿÿÿ    ÿÿÿÿ                 x             ÿÿÿÿ                             ÿÿÿÿ          8                                                    ÿÿÿÿ          È                         
      P      `                            ÿÿÿÿ    ÿÿÿÿ   !                           ÿÿÿÿ           °                                à      h                             ÿÿÿÿ    ÿÿÿÿ   1              ¨             ÿÿÿÿ           à                          	                                                                           ®s"ÿP           P              ;             á·5!b                         A              ResL evel uaData resident_script stagedata level lua            BINA210LP      DATA@                                         VLEH            ---------------------------------------------------------------
-- Xe[WÌ\¬f[^ðÝèµÜ·B
---------------------------------------------------------------
-- p[^Ìà¾
--  name            : Xe[WR[h.j[NÈ¯Êq.
--  stage           : gp·éXe[W\[XÌR[h. LqªÈ¢êÍ name ðg¤.
--  stage_no        : Xe[WÔ.d¡µÈ¢AÔ.0IW.
--  attrs           : Xe[W®«.
--  timelimit       : §ÀÔªKvÈêA»ÌlðLü
--  noisetime       : JnmCY\»Ì·³ðLüi¢LüÍftHgÌ2.0j
--  clear           : NAÚWB(goal:S[/time:§ÀÔÈàÉS[)
--  mission         : ~bVB5ÂÜÅo^Â\
--                    goaliPNAÅ~bVB¬j
--                    rankiSNNAj
--                    nodamageim[~XNAj
--                    ringiwèµ½ÈãÌOðÁÄNAj
--                    redringibhO5ÂSÄðñûj
--                    numberringiio[Oðñûj
--                    silvermoonringiVo[[Oðñûj
--                    hidegoaliBµS[ð©Â¯ÄNAj
--                    shadowtailsieeCXæè­NAj
--                    mineinÉ½ç¸NAj
--                    animaliAj}ð~oµÄNAj
--  ring_mission    : O~bVKvÈO
--  rank            : æª©çS,A,B,CpÌèlðbPÊÅÝè
--  cyber_name      : åÉd]ÅÌgpðzèBUgÉÄ\¦³êéXe[W¼
--  scene_param_name       : gp·éV[p[^Ì¼Oðwè
--  scene_param_stage      : gp·éV[p[^ÌõXe[Wðwè(J­Àè)
--  default_scene_param_no : ftHgÌV[p[^XbgÔðwè
--  deadheight      : Sx. FxParam Ìlðã«·é.
--  cyber_mode      : d][h. low-gravity, time-extend, speed-scale, nitro, maxspeed-challenge

--------------------------------------------------------------
-- !! CAUTION !!
-- ±Ìt@CÍ»iÉÍÜÜêÜ·.
-- J­êpÌXe[WÍLqµÈ¢æ¤ÉµÄ­¾³¢.

stages = {
    {
        name     = "w1r02",
        attrs    = { "navmesh", "heightfield", "autosave","pointcloud" },
    },
    {
        name     = "w1r01",
        stage    = "w1r02",
        attrs    = { "navmesh", "heightfield", "autosave","pointcloud" },
    },
    {
        name     = "w1r03",
        stage_no = 0,
        attrs    = { "navmesh", "heightfield", "autosave","pointcloud", "sonic", "tails", "knuckles", "amy" },
    },
    {
        name     = "w1r04",
        stage_no = 4,
        attrs    = { "navmesh", "heightfield", "autosave","pointcloud", "sonic", "tails", "knuckles", "amy" },
    },
    {
        name     = "w1r05",
        stage    = "w1r03",
        stage_no = 3,
        attrs    = { "navmesh", "heightfield", "autosave","pointcloud", "sonic", "tails", "knuckles", "amy" },
    },
    {
        name     = "w1r06",
        stage    = "w1r04",
        stage_no = 5,
        attrs    = { "navmesh", "heightfield", "autosave","pointcloud", "extra", "sonic", "tails", "knuckles", "amy" },
    },
    {
        name     = "w2r01",
        stage_no = 1,
        attrs    = { "navmesh","heightfield","autosave","pointcloud", "sonic", "tails", "knuckles", "amy" },
    },

    {
        name     = "w3r01",
        stage_no = 2,
        attrs    = { "navmesh","heightfield","autosave","pointcloud","lava", "sonic", "tails", "knuckles", "amy" }
    },

    --{
    --    name     = "w4r01",
    --    stage_no = 3,
    --},

    {
        name     = "w5r01",
        attrs    = { "hacking", "pointcloud", "lastboss" }
    },

    {
        name     = "w5t01",
        attrs    = { "pointcloud", "tutorial" }
    },
    {
        name     = "w5t02",
        attrs    = { "pointcloud", "mastertrial" }
    },


    {
    -- Green Hill 01
        name  = "w6d01",
        attrs = { "cyber", "pointcloud" },
        cyber_stage_no = 0,
        cyber_name = "1-1",
        mission = {"goal", "rank", "ring", "redring"},
        ring_mission = 150,
        rank = {43, 48, 60, 90},
	rank_veryhard = {40, 43, 46, 49},
        rank_challenge = {43, 48, 53, 63},
        rank_challenge_all = {43, 48, 53, 63},
    },
    {
    -- Green Hill 02
        name  = "w6d02",
        attrs = { "cyber", "pointcloud" },
        cyber_stage_no = 1,
        noisetime = 0.9,
        cyber_name = "1-4",
        mission = {"goal", "rank", "ring", "redring"},
        ring_mission = 20,
        rank = {75, 80, 90, 100},
	rank_veryhard = {60, 63, 66, 69},
        rank_challenge = {233, 253, 273, 313},
        rank_challenge_all = {233, 253, 273, 313},
    },
    {
    -- Green Hill 03
        name  = "w6d03",
        attrs = { "cyber", "pointcloud" },
        cyber_stage_no = 2,
        cyber_name = "2-6",
        mission = {"goal", "rank", "ring", "redring"},
        ring_mission = 100,
        rank = {145, 150, 160, 170},
	rank_veryhard = {92, 95, 98, 101},
        rank_challenge = {420, 450, 480, 540},
        rank_challenge_all = {888, 953, 1018, 1148},
    },
    {
    -- Green Hill 04
        name  = "w6d04",
        attrs = { "cyber", "pointcloud" },
        cyber_stage_no = 3,
        cyber_name = "3-1",
        mission = {"goal", "rank", "ring", "redring"},
        ring_mission = 20,
        rank = {120, 125, 135, 145},
	rank_veryhard = {87, 90, 93, 96},
        rank_challenge = {120, 125, 130, 140},
        rank_challenge_all = {1098, 1173, 1248, 1398},
    },
    {
    -- Green Hill 05
        name  = "w6d05",
        attrs = { "cyber", "sideview", "pointcloud" },
        cyber_stage_no = 4,
        cyber_name = "2-1",
        mission = {"goal", "rank", "ring", "redring"},
        ring_mission = 30,
        rank = {100, 105, 115, 125},
	rank_veryhard = {62, 65, 68, 71},
        rank_challenge = {70, 75, 80, 90},
        rank_challenge_all = {538, 578, 618, 698},
    },
    {
    -- Green Hill 06
        name  = "w6d06",
        attrs = { "cyber", "sideview", "pointcloud" },
        cyber_stage_no = 5,
        cyber_name = "1-6",
        mission = {"goal", "rank", "ring", "redring"},
        ring_mission = 50,
        rank = {75, 80, 90, 100},
	rank_veryhard = {70, 73, 76, 79},
        rank_challenge = {383, 413, 443, 503},
        rank_challenge_all = {383, 413, 443, 503},
    },
    {
    -- Green Hill 07
        name  = "w6d07",
        attrs = { "cyber", "pointcloud" },
        cyber_stage_no = 6,
        cyber_name = "3-5",
        mission = {"goal", "rank", "ring", "redring"},
        ring_mission = 90,
        rank = {65, 70, 80, 90},
	rank_veryhard = {56, 59, 62, 65},
        rank_challenge = {425, 450, 475, 525},
        rank_challenge_all = {1403, 1498, 1593, 1783},
    },
    {
    -- Green Hill 08
        name  = "w6d08",
        attrs = { "cyber", "sideview", "pointcloud" },
        cyber_stage_no = 7,
        cyber_name = "3-2",
        mission = {"goal", "rank", "ring", "redring"},
        ring_mission = 30,
        rank = {80, 85, 95, 105},
	rank_veryhard = {65, 68, 71, 74},
        rank_challenge = {200, 210, 220, 240},
        rank_challenge_all = {1178, 1258, 1338, 1498},
    },
    {
    -- Green Hill 09
        name  = "w6d09",
        attrs = { "cyber", "sideview", "pointcloud" },
        cyber_stage_no = 8,
        cyber_name = "3-4",
        mission = {"goal", "rank", "ring", "redring"},
        ring_mission = 30,
        rank = {80, 85, 95, 105},
	rank_veryhard = {66, 69, 72, 75},
        rank_challenge = {370, 390, 410, 450},
        rank_challenge_all = {1348, 1438, 1528, 1708},
    },
    {
    -- Green Hill 10
        name  = "w6d10",
        attrs = { "cyber", "pointcloud" },
        cyber_stage_no = 9,
        cyber_name = "4-5",
        mission = {"goal", "rank", "ring", "redring"},
        ring_mission = 180,
        rank = {90, 95, 105, 115},
	rank_veryhard = {62, 65, 68, 71},
        rank_challenge = {495, 520, 545, 595},
        rank_challenge_all = {2183, 2313, 2443, 2703},
    },
    {
    -- Chemical Plant 01
        name  = "w7d01",
        attrs = { "cyber", "pointcloud" },
        cyber_stage_no = 10,
        cyber_name = "4-3",
        mission = {"goal", "rank", "ring", "redring"},
        ring_mission = 70,
        rank = {100, 105, 115, 125},
	rank_veryhard = {73, 76, 79, 82},
        rank_challenge = {265, 280, 295, 325},
        rank_challenge_all = {1953, 2073, 2193, 2433},
    },
    {
    -- Chemical Plant 02
        name  = "w7d02",
        attrs = { "cyber", "sideview", "pointcloud" },
        cyber_stage_no = 11,
        cyber_name = "2-3",
        mission = {"goal", "rank", "ring", "redring"},
        ring_mission = 90,
        rank = {55, 60, 70, 80},
	rank_veryhard = {43, 46, 49, 52},
        rank_challenge = {170, 185, 200, 230},
        rank_challenge_all = {638, 688, 738, 838},
    },
    {
    -- Chemical Plant 03
        name  = "w7d03",
        attrs = { "cyber", "sideview", "pointcloud" },
        cyber_stage_no = 12,
        cyber_name = "3-7",
        mission = {"goal", "rank", "ring", "redring"},
        ring_mission = 80,
        rank = {100, 105, 115, 125},
	rank_veryhard = {70, 73, 76, 79},
        rank_challenge = {710,745, 780, 850},
        rank_challenge_all = {1688, 1793, 1898, 2108},
    },
    {
    -- Chemical Plant 04
        name  = "w7d04",
        attrs = { "cyber", "pointcloud" },
        cyber_stage_no = 13,
        cyber_name = "1-5",
        mission = {"goal", "rank", "ring", "redring"},
        ring_mission = 40,
        rank = {75, 80, 90, 100},
	rank_veryhard = {50, 53, 56, 59},
        rank_challenge = {308, 333, 358, 408},
        rank_challenge_all = {308, 333, 358, 408},
    },
    {
    -- Chemical Plant 05
        name  = "w7d05",
        attrs = { "cyber", "pointcloud" },
        cyber_stage_no = 14,
        cyber_name = "4-8",
        mission = {"goal", "rank", "ring", "redring"},
        ring_mission = 15,
        rank = {30, 35, 45, 55},
	rank_veryhard = {23, 26, 29, 32},
        rank_challenge = {685, 725, 765, 845},
        rank_challenge_all = {2373, 2518, 2663, 2953},
    },
    {
    -- Chemical Plant 06
        name  = "w7d06",
        attrs = { "cyber", "pointcloud" },
        cyber_stage_no = 15,
        cyber_name = "2-4",
        mission = {"goal", "rank", "ring", "redring"},
        ring_mission = 75,
        rank = {70, 75, 85, 95},
	rank_veryhard = {42, 45, 48, 51},
        rank_challenge = {230, 250, 270, 310},
        rank_challenge_all = {698, 753, 808, 918},
    },
    {
    -- Chemical Plant 07
        name  = "w7d07",
        default_scene_param_no = 7;
        attrs = { "cyber", "sideview", "pointcloud" },
        cyber_stage_no = 16,
        cyber_name = "4-6",
        mission = {"goal", "rank", "ring", "redring"},
        ring_mission = 40,
        rank = {90, 95, 105, 115},
	rank_veryhard = {78, 81, 84, 87},
        rank_challenge = {585, 615, 645, 705},
        rank_challenge_all = {2273, 2408, 2543, 2813},
    },
    {
    -- Chemical Plant 08
        name  = "w7d08",
        attrs = { "cyber", "boarding", "pointcloud" },
        cyber_stage_no = 17,
        cyber_name = "4-1",
        mission = {"goal", "rank", "ring", "redring"},
        ring_mission = 130,
        rank = {105, 110, 120, 130},
	rank_veryhard = {89, 92, 95, 98},
        rank_challenge = {100, 105, 110, 120},
        rank_challenge_all = {1788, 1898, 2008, 2228},
    },
       {
    -- Sky Sanctuary 01
        name  = "w8d01",
        attrs = { "cyber", "pointcloud" },
        cyber_stage_no = 18,
        cyber_name = "1-2",
        mission = {"goal", "rank", "ring", "redring"},
        ring_mission = 80,
        rank = {55, 60, 70, 80},
	rank_veryhard = {55, 58, 61, 64},
        rank_challenge = {98, 108, 118,138},
        rank_challenge_all = {98, 108, 118,138},
    },
    {
    -- Sky Sanctuary 02
        name  = "w8d02",
        attrs = { "cyber", "pointcloud" },
        cyber_stage_no = 19,
        noisetime = 4.5,
        cyber_name = "3-3",
        mission = {"goal", "rank", "ring", "redring"},
        ring_mission = 25,
        rank = {115, 120, 130, 140},
	rank_veryhard = {94, 97, 100, 103},
        rank_challenge = {300, 315, 330, 360},
        rank_challenge_all = {1278, 1363, 1448, 1618},
    },
    {
    -- Sky Sanctuary 03
        name  = "w8d03",
        attrs = { "cyber", "pointcloud" },
        cyber_stage_no = 20,
        cyber_name = "2-2",
        mission = {"goal", "rank", "ring", "redring"},
        ring_mission = 30,
        rank = {55, 60, 70, 80},
	rank_veryhard = {34, 37, 40, 43},
        rank_challenge = {115, 125, 135, 155},
        rank_challenge_all = {583, 628, 673, 763},
    },
    {
    -- Sky Sanctuary 04
        name  = "w8d04",
        attrs = { "cyber", "sideview", "pointcloud" },
        cyber_stage_no = 21,
        cyber_name = "2-5",
        mission = {"goal", "rank", "ring", "redring"},
        ring_mission = 30,
        rank = {70, 75, 85, 95},
	rank_veryhard = {55, 58, 61, 64},
        rank_challenge = {300, 325, 350, 400},
        rank_challenge_all = {768, 828, 888, 1008},
    },
    {
    -- Sky Sanctuary 05
        name  = "w8d05",
        attrs = { "cyber", "sideview", "pointcloud" },
        cyber_stage_no = 22,
        cyber_name = "2-7",
        mission = {"goal", "rank", "ring", "redring"},
        ring_mission = 30,
        rank = {90, 95, 105, 115},
	rank_veryhard = {58, 61, 64, 67},
        rank_challenge = {510, 545, 580, 650},
        rank_challenge_all = {978, 1048, 1118, 1258},
    },
    {
    -- Sky Sanctuary 06
        name  = "w8d06",
        attrs = { "cyber", "sideview", "pointcloud" },
        cyber_stage_no = 23,
        noisetime = 0.5,
        cyber_name = "3-6",
        mission = {"goal", "rank", "ring", "redring"},
        ring_mission = 30,
        rank = {175, 180, 190, 200},
	rank_veryhard = {128, 131, 134, 137},
        rank_challenge = {600, 630, 660, 720},
        rank_challenge_all = {1578, 1678, 1778, 1978},
    },
    {
    -- Highway 02
        name  = "w9d02",
        scene_param_name = "w9d02";
        default_scene_param_no = 7;
        attrs = { "cyber", "pointcloud" },
        cyber_stage_no = 24,
        cyber_name = "4-2",
        mission = {"goal", "rank", "ring", "redring"},
        ring_mission = 120,
        rank = {75, 80, 90, 100},
	rank_veryhard = {65, 68, 71, 74},
        rank_challenge = {175, 185, 195, 215},
        rank_challenge_all = {1863, 1978, 2093, 2323},
    },
    {
    -- Highway 03
        name  = "w9d03",
        attrs = { "cyber", "pointcloud" },
        cyber_stage_no = 25,
        cyber_name = "4-4",
        mission = {"goal", "rank", "ring", "redring"},
        ring_mission = 150,
        rank = {160, 165, 175, 185},
	rank_veryhard = {123, 126, 129, 132},
        rank_challenge = {405, 425, 445, 485},
        rank_challenge_all = {2093, 2218, 2343, 2593},
    },
    {
    -- Highway 04
        name  = "w9d04",
        attrs = { "cyber", "sideview", "pointcloud" },
        cyber_stage_no = 26,
        cyber_name = "1-3",
        mission = {"goal", "rank", "ring", "redring"},
        ring_mission = 80,
        rank = {60, 65, 75, 85},
	rank_veryhard = {37, 40, 43, 46},
        rank_challenge = {158, 173, 188, 218},
        rank_challenge_all = {158, 173, 188, 218},
    },
    {
    -- Highway 05
        name  = "w9d05",
        attrs = { "cyber", "pointcloud" },
        cyber_stage_no = 27,
        cyber_name = "4-7",
        mission = {"goal", "rank", "ring", "redring"},
        ring_mission = 80,
        rank = {90, 95, 105, 115},
	rank_veryhard = {62, 65, 68, 71},
        rank_challenge = {655, 690, 725, 795},
        rank_challenge_all = {2343, 2483, 2623, 2903},
    },
    {
    -- Highway 06
        name  = "w9d06",
        attrs = { "cyber", "pointcloud" },
        cyber_stage_no = 28,
        cyber_name = "1-7",
        mission = {"goal", "rank", "ring", "redring"},
        ring_mission = 50,
        rank = {85, 90, 100, 110},
	rank_veryhard = {55, 58, 61, 64},
        rank_challenge = {468, 503, 538, 608},
        rank_challenge_all = {468, 503, 538, 608},
    },
    {
    -- Highway 07
        name  = "w9d07",
        attrs = { "cyber", "boarding", "pointcloud" },
        cyber_stage_no = 29,
        cyber_name = "4-9",
        mission = {"goal", "rank", "ring", "redring"},
        ring_mission = 120,
        rank = {75, 80, 90, 105},
	rank_veryhard = {59, 62, 65, 68},
        rank_challenge = {760, 805, 850, 940},
        rank_challenge_all = {2448, 2598, 2748, 3048},
    },

-- ±±©çæReAbvf[gpd]Xe[W

     {
    -- Green Hill 02
        name  = "w6d21",
	stage = "w6d02",
        attrs = { "cyber", "pointcloud", "extra" ,"deleteFalldeadCol", "deleteAirwallCol", "deleteGrindrail", "changeNewCol"},
        cyber_stage_no = 31,
        noisetime = 0.9,
        cyber_name = "4-A",
	cyber_mode= "nitro",
        mission = {"numberring", "silvermoonring", "hidegoal","animal"},
        ring_mission = 20,
        rank = {128, 133, 143, 153},
	rank_veryhard = {123, 128, 133, 143},
        rank_challenge = {233, 253, 273, 313},
        rank_challenge_all = {233, 253, 273, 313},
    },
    {
    -- Green Hill 04
        name  = "w6d22",
	stage = "w6d04",
        attrs = { "cyber", "pointcloud", "extra" ,"deleteFalldeadCol", "deleteAirwallCol", "deleteGrindrail","changeNewCol"},
        cyber_stage_no = 32,
        cyber_name = "4-B",
        mission = {"numberring", "silvermoonring", "shadowtails", "animal"},
        ring_mission = 20,
        rank = {96, 101, 111, 121},
	rank_veryhard = {105, 110, 115, 125},
        rank_challenge = {120, 125, 130, 140},
        rank_challenge_all = {1098, 1173, 1248, 1398},
    },
    {
    -- Green Hill 10
        name  = "w6d23",
	stage = "w6d10",
        attrs = { "cyber", "pointcloud", "extra" ,"deleteFalldeadCol", "deleteAirwallCol", "deleteGrindrail","changeNewCol"},
        cyber_stage_no = 33,
        cyber_name = "4-C",
        mission = {"numberring", "silvermoonring", "hidegoal", "shadowtails"},
        ring_mission = 180,
	cyber_mode= "nitro",
        rank = {90, 95, 105, 115},
	rank_veryhard = {60, 70, 80, 90},
        rank_challenge = {495, 520, 545, 595},
        rank_challenge_all = {2183, 2313, 2443, 2703},
    },
    {
    -- Chemical Plant 01
        name  = "w7d21",
	stage = "w7d01",
        attrs = { "cyber", "pointcloud", "extra" ,"deleteFalldeadCol", "deleteAirwallCol", "deleteGrindrail","changeNewCol"},
        cyber_stage_no = 34,
        cyber_name = "4-D",
        mission = {"numberring", "hidegoal", "mine",  "animal"},
        ring_mission = 70,
        rank = {50, 55, 65, 75},
	rank_veryhard = {47, 50, 55, 65},
        rank_challenge = {265, 280, 295, 325},
        rank_challenge_all = {1953, 2073, 2193, 2433},
    },
    {
    -- Chemical Plant 04
        name  = "w7d22",
	stage = "w7d04",
        attrs = { "cyber", "pointcloud", "extra" ,"deleteFalldeadCol", "deleteAirwallCol", "deleteGrindrail"},
        cyber_stage_no = 35,
        cyber_name = "4-E",
        mission = {"numberring", "silvermoonring", "hidegoal", "animal"},
        ring_mission = 40,
	cyber_mode = "time-extend",
	timelimit = 65,
        rank = {76, 81, 91, 101},
	rank_veryhard = {72, 76, 81, 91},
        rank_challenge = {308, 333, 358, 408},
        rank_challenge_all = {308, 333, 358, 408},
    },
    {
    -- Chemical Plant 06
        name  = "w7d23",
	stage = "w7d06",
        attrs = { "cyber", "pointcloud", "extra","deleteFalldeadCol", "deleteAirwallCol", "deleteGrindrail", "changeNewCol" },
        cyber_stage_no = 36,
        cyber_name = "4-F",
        mission = {"numberring", "silvermoonring", "shadowtails", "animal"},
        ring_mission = 75,
        rank = {65, 70, 75, 85},
	rank_veryhard = {58, 65, 70, 75},
        rank_challenge = {230, 250, 270, 310},
        rank_challenge_all = {698, 753, 808, 918},
    },
    {
    -- 3rd Update Highway 02
        name  = "w9d21",
	stage = "w9d02",
        default_scene_param_no = 7;
        attrs = { "cyber", "pointcloud", "extra" ,"deleteFalldeadCol", "deleteAirwallCol", "deleteGrindrail"},
        cyber_stage_no = 37,
        cyber_name = "4-G",
	cyber_mode= "maxspeed-challenge",
        mission = {"numberring", "silvermoonring", "hidegoal", "animal"},
        rank = {100, 105, 110, 120},
	rank_veryhard = {95, 100, 110, 120},
        rank_challenge = {175, 185, 195, 215},
        rank_challenge_all = {1863, 1978, 2093, 2323},
    },
    {
    --3rd Update Highway 03
        name  = "w9d22",
	stage = "w9d03",
        attrs = { "cyber", "pointcloud", "extra", "restrictdebris", "deleteFalldeadCol", "deleteAirwallCol", "deleteGrindrail", "changeNewCol"},
        cyber_stage_no = 38,
        cyber_name = "4-H",
        mission = {"numberring", "silvermoonring", "mine", "animal"},
        ring_mission = 150,
        rank = {153, 158, 163, 168},
	rank_veryhard = {147, 153, 158, 163},
        rank_challenge = {405, 425, 445, 485},
        rank_challenge_all = {2093, 2218, 2343, 2593},
    },
    {
    --3rd Update Highway 06
        name  = "w9d23",
	stage = "w9d06",
        attrs = { "cyber","boarding", "pointcloud", "extra" ,"deleteFalldeadCol", "deleteAirwallCol", "deleteGrindrail","changeNewCol"},
        cyber_stage_no = 39,
        cyber_name = "4-I",
	cyber_mode= "low-gravity",
        mission = {"numberring", "silvermoonring", "hidegoal", "animal"},
        ring_mission = 50,
        rank = {130, 135, 145, 170},
	rank_veryhard = {125, 130, 140, 150},
        rank_challenge = {468, 503, 538, 608},
        rank_challenge_all = {468, 503, 538, 608},
    },

-- ±±ÜÅæReAbvf[gpd]Xe[W



    {
    -- ~jQ[
        name     = "w1f01",
        world_no = 1,
        attrs    = { "minigame" , "navmesh" , "heightfield" , "pointcloud" },
    },
    {
    -- nbLO 01
        name     = "w1h01",
        attrs    = { "hacking" , "pointcloud" },
    },
    {
    -- nbLO 02
        name     = "w1h02",
        stage    = "w1h01",
        attrs    = { "hacking" , "pointcloud" },
    },
    {
    -- nbLO 03
        name     = "w1h03",
        stage    = "w1h01",
        attrs    = { "hacking" , "pointcloud" },
    },
    {
    -- nbLO test
        name     = "w1h99",
        stage    = "w1h01",
        attrs    = { "hacking" , "pointcloud" },
    },
    {
    -- THE ENDí@FóÔ
        name     = "w5r01",
        stage    = "w1h01",
        attrs    = { "hacking" , "pointcloud" },
    },

    -- ogbV ´O¼
    {
        name     = "w1b01",
        stage    = "w1r03",
        attrs    = { "navmesh", "heightfield", "autosave", "pointcloud", "battlerush" },
    },
    -- ogbV »
    {
        name     = "w2b01",
        stage    = "w2r01",
        attrs    = { "navmesh", "heightfield", "autosave", "pointcloud", "battlerush" },
    },
    -- ogbV ÎR
    {
        name     = "w3b01",
        stage    = "w3r01",
        attrs    = { "navmesh", "heightfield", "autosave", "pointcloud", "lava", "battlerush" },
    },
    -- ogbV ´O¼
    {
        name     = "w1b02",
        stage    = "w1r04",
        attrs    = { "navmesh", "heightfield", "autosave", "pointcloud", "battlerush" },
    },

    -- BlRRû1
    {
        name     = "w5t02",
        stage    = "w5t02",
        attrs    = { "pointcloud", "mastertrial" },
    },
    -- BlRRû2
    {
        name     = "w5t03",
        stage    = "w5t02",
        attrs    = { "pointcloud", "mastertrial" },
    },
    -- BlRRû3
    {
        name     = "w5t04",
        stage    = "w5t02",
        attrs    = { "pointcloud", "mastertrial" },
    },
    -- BlRRû4
    {
        name     = "w5t05",
        stage    = "w5t02",
        attrs    = { "pointcloud", "mastertrial", "specialparryeffect" },
    },
    -- Bl¤RRû ´O¼
    {
        name     = "w1t01",
        stage    = "w1r03",
        attrs    = { "navmesh", "heightfield", "autosave", "pointcloud", "bossrush" },
    },
    -- Bl¤RRû »
    {
        name     = "w2t01",
        stage    = "w2r01",
        attrs    = { "navmesh", "heightfield", "autosave", "pointcloud", "bossrush" },
    },
    -- Bl¤RRû ÎR
    {
        name     = "w3t01",
        stage    = "w3r01",
        attrs    = { "navmesh", "heightfield", "autosave", "pointcloud", "lava", "bossrush" },
    },
}
       NBFFDFDHHDHJBFFDHJBFFDHbDHD             