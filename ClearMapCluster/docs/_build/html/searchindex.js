Search.setIndex({envversion:46,filenames:["api/ClearMap","api/ClearMap.Alignment","api/ClearMap.Analysis","api/ClearMap.Analysis.Tools","api/ClearMap.IO","api/ClearMap.ImageProcessing","api/ClearMap.ImageProcessing.Filter","api/ClearMap.Parameter","api/ClearMap.Settings","api/ClearMap.Utils","api/ClearMap.Visualization","imageanalysis","index","installation","introduction","issues","roadmap","tutorial"],objects:{"":{ClearMap:[0,0,0,"-"]},"ClearMap.Alignment":{Elastix:[1,0,0,"-"],Resampling:[1,0,0,"-"]},"ClearMap.Alignment.Elastix":{ElastixBinary:[1,3,1,""],ElastixLib:[1,3,1,""],Initialized:[1,3,1,""],TransformixBinary:[1,3,1,""],alignData:[1,1,1,""],checkElastixInitialized:[1,1,1,""],deformationDistance:[1,1,1,""],deformationField:[1,1,1,""],getResultDataFile:[1,1,1,""],getTransformFileSizeAndSpacing:[1,1,1,""],getTransformParameterFile:[1,1,1,""],initializeElastix:[1,1,1,""],parseElastixOutputPoints:[1,1,1,""],printSettings:[1,1,1,""],rescaleSizeAndSpacing:[1,1,1,""],setElastixLibraryPath:[1,1,1,""],setPathTransformParameterFiles:[1,1,1,""],setTransformFileSizeAndSpacing:[1,1,1,""],test:[1,1,1,""],transformData:[1,1,1,""],transformPoints:[1,1,1,""],writePoints:[1,1,1,""]},"ClearMap.Alignment.Resampling":{fixInterpolation:[1,1,1,""],fixOrientation:[1,1,1,""],inverseOrientation:[1,1,1,""],orientDataSize:[1,1,1,""],orientDataSizeInverse:[1,1,1,""],orientResolution:[1,1,1,""],orientResolutionInverse:[1,1,1,""],orientationToPermuation:[1,1,1,""],resampleData:[1,1,1,""],resampleDataInverse:[1,1,1,""],resampleDataSize:[1,1,1,""],resamplePoints:[1,1,1,""],resamplePointsInverse:[1,1,1,""],resampleXY:[1,1,1,""],sagittalToCoronalData:[1,1,1,""]},"ClearMap.Analysis":{Label:[2,0,0,"-"],Statistics:[2,0,0,"-"],Tools:[3,0,0,"-"],Voxelization:[2,0,0,"-"]},"ClearMap.Analysis.Label":{DefaultAnnotationFile:[2,3,1,""],DefaultLabeledImageFile:[2,3,1,""],Label:[2,3,1,""],LabelInfo:[2,5,1,""],LabelRecord:[2,5,1,""],countPointsInRegions:[2,1,1,""],initialize:[2,1,1,""],labelAtCollapse:[2,1,1,""],labelAtLevel:[2,1,1,""],labelPoints:[2,1,1,""],labelToAcronym:[2,1,1,""],labelToColor:[2,1,1,""],labelToName:[2,1,1,""],makeColorAnnotations:[2,1,1,""],makeColorPalette:[2,1,1,""],test:[2,1,1,""],writeLUT:[2,1,1,""],writePAL:[2,1,1,""]},"ClearMap.Analysis.Label.LabelInfo":{acronym:[2,2,1,""],acronyms:[2,4,1,""],collapse:[2,4,1,""],collapseMap:[2,4,1,""],color:[2,2,1,""],colors:[2,4,1,""],ids:[2,4,1,""],initialize:[2,2,1,""],level:[2,2,1,""],levels:[2,4,1,""],name:[2,2,1,""],names:[2,4,1,""],parent:[2,2,1,""],parents:[2,4,1,""],toLabelAtCollapse:[2,2,1,""],toLabelAtCollapseMap:[2,2,1,""],toLabelAtLevel:[2,2,1,""]},"ClearMap.Analysis.Label.LabelRecord":{"__getnewargs__":[2,2,1,""],"__getstate__":[2,2,1,""],"__repr__":[2,2,1,""],acronym:[2,4,1,""],collapse:[2,4,1,""],color:[2,4,1,""],id:[2,4,1,""],name:[2,4,1,""],parent:[2,4,1,""]},"ClearMap.Analysis.Statistics":{"var":[2,1,1,""],colorPValues:[2,1,1,""],countPointsGroupInRegions:[2,1,1,""],cutoffPValues:[2,1,1,""],mean:[2,1,1,""],readDataGroup:[2,1,1,""],readPointsGroup:[2,1,1,""],std:[2,1,1,""],tTestPointsInRegions:[2,1,1,""],tTestVoxelization:[2,1,1,""],test:[2,1,1,""],testCompletedCumulatives:[2,1,1,""],testCompletedCumulativesInSpheres:[2,1,1,""],testCompletedInvertedCumulatives:[2,1,1,""],thresholdPoints:[2,1,1,""],weightsFromPrecentiles:[2,1,1,""]},"ClearMap.Analysis.Tools":{Extrapolate:[3,0,0,"-"],MultipleComparisonCorrection:[3,0,0,"-"],StatisticalTests:[3,0,0,"-"]},"ClearMap.Analysis.Tools.Extrapolate":{extrap1d:[3,1,1,""],extrap1dFromInterp1d:[3,1,1,""]},"ClearMap.Analysis.Tools.MultipleComparisonCorrection":{correctPValues:[3,1,1,""],estimateQValues:[3,1,1,""]},"ClearMap.Analysis.Tools.StatisticalTests":{testCramerVonMises2Sample:[3,1,1,""]},"ClearMap.Analysis.Voxelization":{test:[2,1,1,""],voxelize:[2,1,1,""],voxelizePixel:[2,1,1,""]},"ClearMap.IO":{CSV:[4,0,0,"-"],FileList:[4,0,0,"-"],IO:[4,0,0,"-"],Imaris:[4,0,0,"-"],NPY:[4,0,0,"-"],NRRD:[4,0,0,"-"],RAW:[4,0,0,"-"],TIF:[4,0,0,"-"],VTK:[4,0,0,"-"]},"ClearMap.IO.CSV":{readPoints:[4,1,1,""],test:[4,1,1,""],writePoints:[4,1,1,""]},"ClearMap.IO.FileList":{copyData:[4,1,1,""],dataSize:[4,1,1,""],dataZSize:[4,1,1,""],fileExpressionToFileName:[4,1,1,""],readData:[4,1,1,""],readDataFiles:[4,1,1,""],readFileList:[4,1,1,""],splitFileExpression:[4,1,1,""],test:[4,1,1,""],writeData:[4,1,1,""]},"ClearMap.IO.IO":{convertData:[4,1,1,""],copyData:[4,1,1,""],copyFile:[4,1,1,""],createDirectory:[4,1,1,""],dataFileExtensionToType:[4,3,1,""],dataFileExtensions:[4,3,1,""],dataFileNameToModule:[4,1,1,""],dataFileNameToType:[4,1,1,""],dataFileTypes:[4,3,1,""],dataSize:[4,1,1,""],dataSizeFromDataRange:[4,1,1,""],dataToRange:[4,1,1,""],dataZSize:[4,1,1,""],fileExtension:[4,1,1,""],isDataFile:[4,1,1,""],isFile:[4,1,1,""],isFileExpression:[4,1,1,""],isPointFile:[4,1,1,""],pointFileExtensionToType:[4,3,1,""],pointFileExtensions:[4,3,1,""],pointFileNameToModule:[4,1,1,""],pointFileNameToType:[4,1,1,""],pointFileTypes:[4,3,1,""],pointShiftFromRange:[4,1,1,""],pointsToCoordinates:[4,1,1,""],pointsToCoordinatesAndProperties:[4,1,1,""],pointsToCoordinatesAndPropertiesFileNames:[4,1,1,""],pointsToProperties:[4,1,1,""],pointsToRange:[4,1,1,""],readData:[4,1,1,""],readPoints:[4,1,1,""],toDataRange:[4,1,1,""],toDataSize:[4,1,1,""],toMultiChannelData:[4,1,1,""],writeData:[4,1,1,""],writePoints:[4,1,1,""],writeTable:[4,1,1,""]},"ClearMap.IO.Imaris":{closeFile:[4,1,1,""],copyData:[4,1,1,""],dataSize:[4,1,1,""],dataZSize:[4,1,1,""],getDataExtent:[4,1,1,""],getDataSize:[4,1,1,""],getScaleAndOffset:[4,1,1,""],openFile:[4,1,1,""],readData:[4,1,1,""],readDataSet:[4,1,1,""],readPoints:[4,1,1,""],test:[4,1,1,""],transformPointsToImaris:[4,1,1,""],writeData:[4,1,1,""],writePoints:[4,1,1,""]},"ClearMap.IO.NPY":{readPoints:[4,1,1,""],test:[4,1,1,""],writePoints:[4,1,1,""]},"ClearMap.IO.NRRD":{NrrdError:[4,6,1,""],copyData:[4,1,1,""],dataSize:[4,1,1,""],dataZSize:[4,1,1,""],parse_nrrdvector:[4,1,1,""],parse_optional_nrrdvector:[4,1,1,""],readData:[4,1,1,""],readHeader:[4,1,1,""],test:[4,1,1,""],writeData:[4,1,1,""]},"ClearMap.IO.RAW":{copyData:[4,1,1,""],dataSize:[4,1,1,""],dataZSize:[4,1,1,""],readData:[4,1,1,""],test:[4,1,1,""],writeData:[4,1,1,""],writeHeader:[4,1,1,""],writeRawData:[4,1,1,""]},"ClearMap.IO.TIF":{copyData:[4,1,1,""],dataSize:[4,1,1,""],dataZSize:[4,1,1,""],readData:[4,1,1,""],test:[4,1,1,""],writeData:[4,1,1,""]},"ClearMap.IO.VTK":{readPoints:[4,1,1,""],writePoints:[4,1,1,""]},"ClearMap.ImageProcessing":{BackgroundRemoval:[5,0,0,"-"],CellDetection:[5,0,0,"-"],CellSizeDetection:[5,0,0,"-"],Filter:[6,0,0,"-"],GreyReconstruction:[5,0,0,"-"],IlastikClassification:[5,0,0,"-"],IlluminationCorrection:[5,0,0,"-"],ImageStatistics:[5,0,0,"-"],MaximaDetection:[5,0,0,"-"],SpotDetection:[5,0,0,"-"],StackProcessing:[5,0,0,"-"]},"ClearMap.ImageProcessing.BackgroundRemoval":{removeBackground:[5,1,1,""]},"ClearMap.ImageProcessing.CellDetection":{detectCells:[5,1,1,""]},"ClearMap.ImageProcessing.CellSizeDetection":{detectCellShape:[5,1,1,""],findCellIntensity:[5,1,1,""],findCellSize:[5,1,1,""]},"ClearMap.ImageProcessing.Filter":{Convolution:[6,0,0,"-"],DoGFilter:[6,0,0,"-"],FilterKernel:[6,0,0,"-"],LinearFilter:[6,0,0,"-"],StructureElement:[6,0,0,"-"]},"ClearMap.ImageProcessing.Filter.Convolution":{convolve:[6,1,1,""]},"ClearMap.ImageProcessing.Filter.DoGFilter":{filterDoG:[6,1,1,""]},"ClearMap.ImageProcessing.Filter.FilterKernel":{filterKernel2D:[6,1,1,""],filterKernel3D:[6,1,1,""],filterKernel:[6,1,1,""],test:[6,1,1,""]},"ClearMap.ImageProcessing.Filter.LinearFilter":{filterLinear:[6,1,1,""]},"ClearMap.ImageProcessing.Filter.StructureElement":{structureElement2D:[6,1,1,""],structureElement3D:[6,1,1,""],structureElement:[6,1,1,""],structureElementOffsets:[6,1,1,""]},"ClearMap.ImageProcessing.GreyReconstruction":{greyReconstruction:[5,1,1,""],reconstruct:[5,1,1,""]},"ClearMap.ImageProcessing.IlastikClassification":{checkInitialized:[5,1,1,""],classifyCells:[5,1,1,""],classifyPixel:[5,1,1,""],isInitialized:[5,1,1,""]},"ClearMap.ImageProcessing.IlluminationCorrection":{DefaultFlatFieldLineFile:[5,3,1,""],correctIllumination:[5,1,1,""],flatfieldFromLine:[5,1,1,""],flatfieldLineFromRegression:[5,1,1,""]},"ClearMap.ImageProcessing.ImageStatistics":{calculateStatistics:[5,1,1,""],calculateStatisticsOnStack:[5,1,1,""],joinStatistics:[5,1,1,""]},"ClearMap.ImageProcessing.MaximaDetection":{extendedMax:[5,1,1,""],findCenterOfMaxima:[5,1,1,""],findExtendedMaxima:[5,1,1,""],findIntensity:[5,1,1,""],findPixelCoordinates:[5,1,1,""],hMaxTransform:[5,1,1,""],localMax:[5,1,1,""]},"ClearMap.ImageProcessing.SpotDetection":{detectSpots:[5,1,1,""],test:[5,1,1,""]},"ClearMap.ImageProcessing.StackProcessing":{calculateChunkSize:[5,1,1,""],calculateSubStacks:[5,1,1,""],joinPoints:[5,1,1,""],noProcessing:[5,1,1,""],parallelProcessStack:[5,1,1,""],printSubStackInfo:[5,1,1,""],sequentiallyProcessStack:[5,1,1,""],writeSubStack:[5,1,1,""]},"ClearMap.Parameter":{AlignmentParameter:[7,3,1,""],IlastikParameter:[7,3,1,""],ResamplingParameter:[7,3,1,""],VoxelizationParameter:[7,3,1,""],detectCellParameter:[7,3,1,""],processStackParameter:[7,3,1,""]},"ClearMap.Settings":{ClearMapPath:[8,3,1,""],ElastixPath:[8,3,1,""],IlastikPath:[8,3,1,""],clearMapPath:[8,1,1,""],setup:[8,1,1,""]},"ClearMap.Utils":{ParameterTools:[9,0,0,"-"],ProcessWriter:[9,0,0,"-"],Timer:[9,0,0,"-"]},"ClearMap.Utils.ParameterTools":{getParameter:[9,1,1,""],joinParameter:[9,1,1,""],writeParameter:[9,1,1,""]},"ClearMap.Utils.ProcessWriter":{ProcessWriter:[9,5,1,""]},"ClearMap.Utils.ProcessWriter.ProcessWriter":{process:[9,4,1,""],write:[9,2,1,""],writeString:[9,2,1,""]},"ClearMap.Utils.Timer":{Timer:[9,5,1,""]},"ClearMap.Utils.Timer.Timer":{elapsedTime:[9,2,1,""],formatElapsedTime:[9,2,1,""],printElapsedTime:[9,2,1,""],reset:[9,2,1,""],start:[9,2,1,""],time:[9,4,1,""]},"ClearMap.Visualization":{Plot:[10,0,0,"-"]},"ClearMap.Visualization.Plot":{overlayLabel:[10,1,1,""],overlayPoints:[10,1,1,""],plotOverlayLabel:[10,1,1,""],plotOverlayPoints:[10,1,1,""],plotTiling:[10,1,1,""],test:[10,1,1,""]},ClearMap:{Alignment:[1,0,0,"-"],Analysis:[2,0,0,"-"],IO:[4,0,0,"-"],ImageProcessing:[5,0,0,"-"],Parameter:[7,0,0,"-"],Settings:[8,0,0,"-"],Utils:[9,0,0,"-"],Visualization:[10,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","method","Python method"],"3":["py","data","Python data"],"4":["py","attribute","Python attribute"],"5":["py","class","Python class"],"6":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:function","2":"py:method","3":"py:data","4":"py:attribute","5":"py:class","6":"py:exception"},terms:{"04lt":13,"0_8x":17,"0_8xs3":17,"0x7fee9c25dd70":11,"128gb":[13,17],"150524_0_8x":7,"20hf_ultraii_c00_xyz":1,"20hfautofluor_18":7,"25um":2,"27_0_8x":1,"2nd":5,"32bit":17,"375\u00b5m":17,"3disco":14,"4tb":13,"5na":17,"64gb":13,"__getnewargs__":2,"__getstate__":2,"__repr__":2,"_intens":4,"boolean":17,"case":[1,14,17],"class":[2,4,5,9],"const":1,"default":[1,2,3,5,7,9,17],"export":[4,14],"final":[2,5,11,17],"float":[1,3,4,5,6,9,10,11,17],"function":[],"import":[],"int":[1,3,4,5,6,9,11],"long":17,"new":[1,4,5,6,12,17],"null":3,"public":12,"return":[1,2,3,4,5,6,8,9,10,17],"static":5,"true":[1,2,3,4,5,7,9,11,17],"try":17,"var":2,"while":[1,5,17],a256:17,aba:14,abalabeledimag:17,abolsut:1,aboslut:1,about:[5,11,14],abov:[11,13,17],absolu:8,absolut:[4,5,8],accept:4,acces:[],access:4,accord:[1,17],accordingli:5,account:[1,17],accuar:[],accur:11,achiev:[],acquir:17,acquisit:17,acronym:2,across:17,activ:[6,14,17],actual:[4,11,17],adapt:[5,17],add:[1,4,16],addit:[],additionn:[],adjac:17,adjust:[2,17],adult:[14,17],advanc:14,advantag:12,advis:5,affect:17,affin:[1,7],affineparameterfil:[1,7,17],after:[4,5,11,14,17],again:[11,17],against:[11,17],alan:[],algorithm:[5,7],alia:2,align:[],aligndata:[1,17],alignmentdirectori:7,alignmentparamet:7,all:[1,2,3,4,5,7,10,11,13,14,17],allan:[],allen:[2,12,14],allid:2,allow:[2,5,14,17],allpoint:17,along:5,alpha:10,alreadi:4,also:[4,5,11,12,13,14,17],although:[13,17],alwai:17,among:3,amount:17,analys:[2,14,17],analysi:[],analysis:[],analyz:[12,14,17],anatom:17,andersondarl:2,andor:17,andresondarl:2,ani:[4,5,6,13,14,17],annoat:[],annot:[2,4,12,14,17],annotatd:[],annotated_count:17,annotated_counts_intens:[],annotation_25_right:[2,17],annotationfil:[2,17],anot:[],anoth:17,antibodi:[],antigen:[],anyth:17,api:[],appear:17,appl:13,appli:[1,6,17],applic:[],apt:13,ara2_annotation_info:2,ara2_annotation_info_collaps:2,arang:[],architectur:14,area:2,arg:[1,2,4,5,9],argument:[4,5,9],around:[5,17],arrai:[1,2,3,4,5,6,10,14,17],arrang:[1,4,14],arrrai:4,aspect:14,assai:[],assembla:[],assign:2,assing:[],asstr:9,assum:[1,2,3,4,5,14,17],assumd:4,astyp:[4,5,11,17],asum:4,asyp:11,atla:[2,7,14,17],atlas:[1,12,17],atlasfil:17,atlasresolut:17,attribut:17,author:[],autmat:6,auto:17,autofluo:17,autofluofil:17,autofluoresc:[14,17],automat:[2,4,5,7,10,14],avail:17,averag:[6,17],avoid:[],axi:[1,5,7,17],back:17,backgroun:[],background:[],backgroundremov:[],backgrounds:[5,7],bain:[],ball:2,barrel:17,base:[2,4,5,6,9,14,17],basedirectori:17,basic:[5,11],batch:17,becaus:[5,6,17],been:12,befor:7,belong:[5,17],below:[5,11],benjamini:3,best:[5,11,14],better:11,between:[2,7,11,14,17],bgr:11,bin:1,binari:[1,4,5,14],bioformat:17,biolog:12,bit:[11,17],bitplan:[4,14],black:17,bleed:17,blend:17,blue:14,bodi:17,bonferoni:3,bool:[1,3,4,5,6,9,10],border:17,both:[4,14,17],bother:[],bottom:17,boundari:[5,17],box:[5,17],brain:[2,5,11,12,14,17],brainactivitymap:[],broad:5,broaden:12,broadli:12,brows:17,bsplineparameterfil:[1,7,17],built:[4,5,7,10,11],button:[],bypass:17,calcul:[1,4,5,6,7,9,17],calculatechunks:5,calculatestatist:[5,11],calculatestatisticsonstack:[5,11],calculatestatisticsparamet:5,calculatesubstack:5,call:4,camera:17,can:[1,2,3,4,5,6,11,12,13,14,15,17],capabl:12,care:6,cchunkoverlap:7,cell:[],cell_check:17,celldetect:[],cellintens:11,cellintensitymethod:5,cellprofil:5,cells_check:17,cells_heatmap:17,cells_heatmap_weight:[],cells_transformed_to_atla:17,cellshap:5,cellshape_d:5,cellshapedetect:11,cellshapethreshold:5,cellsiz:11,cellsizedetect:[],cellular:14,center:[2,4,5,6,11,14,17],certain:[2,11,17],cfo:[11,17],cfosfil:17,cfosfilerang:17,chang:[1,2,5,16,17],channel:[4,14,17],chapter:[5,17],check:[1,4,5,17],checkelastixiniti:1,checkiniti:5,chirstoph:[5,6],choos:[1,5,17],choosen:5,chosen:[5,11],christoph:[4,12,13],christophkirst:13,chunck:5,chunk:[5,7,11,17],chunkoptim:[5,7,17],chunkoptimizations:[5,7,17],chunkoverlap:[5,7,17],chunksiz:[5,11],chunksizemax:[5,7,17],chunksizemin:[5,7,17],cii:[],citi:[4,5,6],ckirst:13,classic:14,classif:[5,7,14,17],classifi:[5,7,17],classifycel:5,classifycellsparamet:5,classifypixel:5,classifypixelparamet:5,classindex:5,cleamap:[],cleanup:[1,2],clear:[],clearanc:[],clearmappath:[1,4,5,8,11],clone:13,close:[4,11,17],closefil:4,cmo:17,code:[0,6,11,12,13,14,16,17],col:2,cold:12,collaps:[2,17],collapsemap:2,collect:[5,14],collumn:[],coloc:16,colon:4,color:[2,4,10,11,14,17],colorpvalu:[2,17],column:[2,4,17],com:[3,13],combin:[2,5,6,14],come:17,comma:[4,14],command:17,comment:17,compact:14,companion:[14,17],compar:17,comparison:[2,3],compat:[],compil:17,complet:[2,13],complex64:6,complex:[13,17],compos:[1,14],composit:4,comput:[1,3],concaten:4,concern:17,conclud:17,config:[],configur:[],consid:[5,17],consist:[1,2,4,5,17],consistentci:[],consit:9,constant:[2,3],constantli:3,consumpt:[5,6],contain:[1,11,13,14,17],continu:3,contrari:17,contrarili:[],contrast:[11,14,17],contribut:5,control:17,conveni:17,convent:17,convert:[1,2,4,5,6],convertdata:4,convolut:[],convolv:6,coordiant:[1,4],coordin:[],cooridn:2,coorind:1,copi:[2,4],copydata:4,copyfil:4,copyright:[4,5],cordin:[],core:[13,17],corect:5,corner:17,coron:[1,17],correct:[],correctillumin:5,correctilluminationparamet:[5,7,17],correctionalignmentparamet:17,correctionresamplingparameterautofluo:17,correctionresamplingparametercfo:17,correctionresamplingpointsinverseparamet:17,correctionresamplingpointsparamet:17,correctli:17,correctoin:7,correctpvalu:3,correspond:[1,4,5,14,17],cortex:17,cortic:14,could:[5,14,17],count:[2,17],countpointsgroupinregion:[2,17],countpointsinregion:[2,17],counts1:17,counts2:17,coupl:11,cours:17,cover:17,cpu:13,cramer:3,creat:[1,2,4,5,6,13,17],createdirectori:4,cretain:[],crop:17,cross:2,csv:[],csvfile:4,cube:17,cubic:3,cumul:2,current:[1,11],cutoff:[15,17],cutoffpvalu:2,cv2:[1,5],cython:13,data:[],databgr:11,datadog:11,datafileextens:4,datafileextensiontotyp:4,datafilenametomodul:4,datafilenametotyp:4,datafiletyp:4,datamax:11,datas:[1,2,4],dataset:[2,12,14,17],datashap:11,datasizefromdatarang:4,datasizesink:1,datasizesourc:1,datasouc:10,datasourc:10,datatorang:4,datazs:4,date:4,david:4,deal:17,dealt:4,deault:9,decim:17,decreas:5,decrib:[],dedic:14,deep:17,defaultannotationfil:2,defaultflatfieldlinefil:5,defaultlabeledimagefil:2,defin:[5,6,7,9,17],deform:[1,17],deformationdist:1,deformationfield:1,degre:17,delet:17,delta:4,demand:17,denot:4,densiti:7,depend:[12,13,17],depth:[11,14],describ:[3,4,5,17],descript:[2,4,5,14,17],descrit:[4,5,6],descritpt:[2,5,6],design:[],desing:[],destin:[1,4,5,10],detail:[4,12,17],detect:[],detectcel:[5,14,17],detectcellparamet:7,detectcellshap:[5,11],detectcellshapeparamet:[5,7,17],detectspot:5,detectspotparamet:5,detectspotsparamet:5,determin:[1,2,4,5,6,11,17],detremin:1,dev:[],develop:[14,16],deviat:[14,17],diamet:[11,17],dict:[2,4,5,6,7,9],dictionari:[4,5,9,17],dictonari:9,differ:[],differnet:5,diffus:14,digit:[4,17],dilat:5,dim:5,dimens:[1,4,5,17],dimension:14,direct:[1,5,17],directli:[4,6,17],directori:[1,4,7,17],directorti:1,directri:1,disabl:17,discoveri:[14,17],discrimin:4,discuss:5,disk:[5,6,7,13,17],displai:1,distanc:1,distribut:[2,3,4,5,17],document:[],doe:4,doesn:14,dog:[5,6,14,17],dogfilt:[],dogsiz:5,don:[11,17],done:[1,5,14,16,17],dont:[5,6],dopaminerg:14,dorsal:17,down:17,downhil:5,download:[8,13],dramat:[11,17],draw:17,drawn:3,drive:13,drug:17,dtype:17,due:17,dure:[3,17],each:[1,2,4,5,9,11,14,17],earli:[12,14],easi:17,easier:[11,17],easili:17,easir:4,edit:[5,8],effect:[5,17],effici:[4,5],either:[3,4,5,17],elaps:[5,9,11],elapsedtim:9,elast:1,elastix:[],elastixbinari:1,elastixlib:1,elastixparameteraffin:7,elastixparameterbsplin:7,elastixpath:[1,8,13],electron:5,element:[],elif:13,ellipsoid:[11,17],elment:6,embryon:14,enabl:[4,12,14,17],end:17,endogen:[],enough:[13,17],entir:[4,5,11],environ:13,equal_var:[2,17],erod:5,eros:5,error:[4,5,14],erturk2012:14,erturk:14,espect:[],essenc:1,essenti:5,estim:[1,3,5,11,14,17],estimateqvalu:[3,17],etc:7,even:6,eventhough:[],eventu:17,everi:17,evert:4,everyth:17,evidenc:[],evolut:14,evtk:[],examin:17,exampl:[],except:[4,17],exchang:[1,17],exchng:7,exclud:[2,17],execfil:17,execut:[1,3,5,17],exist:[4,14,17],exmapl:[1,5],exp:4,expand:[12,17],expect:[3,17],experi:[11,13,17],experiment:4,explain:[14,17],explor:13,express:[4,5],exten:5,extend:[],extendedmax:5,extens:[4,5],extent:4,extern:[],exterpol:3,extra:[2,3,4,17],extract:[1,5,13],extrap1d:3,extrap1dfrominterp1d:3,extrapol:[],extrem:3,face:17,facil:[],facilit:14,factor:[1,5,17],fake:4,fals:[2,3,4,5,6,7,9,10,14,17],far:14,fashion:17,fast:[5,14],faster:14,fastest:17,fdr:3,featur:[3,11,17],feel:17,felxibl:[],few:17,field:[1,2,4,5,14,17],figur:[10,11],file:[],fileexperssiontofilenam:[],fileexpressiontofilenam:4,fileext:4,fileextens:4,filehead:4,filelist:[],filenam:[1,2,4,5,11,17],fill:17,filter:[],filterdog:[5,6,11],filterdogparamet:[5,6,7,17],filteredcellsfil:17,filterkernel2d:6,filterkernel3d:6,filterkernel:[],filterlinear:6,filterlinearparamet:6,finalorient:17,find:[1,5],findcellintens:[5,11],findcellintensityparamet:5,findcells:[5,11],findcelsizeparamet:5,findcenterofmaxima:[5,11],findcenterofmaximaparamet:5,findextendedmaxima:[5,11],findextendedmaximaparamet:[5,7,17],findintens:5,findintensityparamet:[5,7,17],findpixelcoordin:5,fine:17,first:[1,4,5,6,9,11,13,17],fit:[5,11],fitler:6,fix:1,fixedimag:[1,7],fixedimagemask:7,fixinterpol:1,fixorient:1,flag:4,flat:5,flatfield:[5,7,17],flatfieldfromlin:5,flatfieldlinefromregress:5,flexibl:[4,5,14,16],float32:[6,17],fluoresc:[14,17],focu:14,folder:[1,4,5,8,11,13,14,17],follow:[4,5,13,14,16,17],forget:17,form:[4,5],format:[1,2,4,5,9,14,17],formatelapsedtim:9,found:[1,2,5,14,17],four:[0,4,14],frame:1,framework:[4,13,17],free:[12,17],freeli:5,fresh:13,fro:[],from:[0,1,2,3,4,5,6,9,11,12,13,14,17],ftype:6,fuction:5,full:[4,5,11,17],fulli:5,func:5,functon:5,fundament:5,further:[4,16],fuse:17,futur:[5,14],fwer:3,g1m:17,gather:[5,11],gaussian:[],gene:[12,14],gener:[],genuin:17,get:[4,9,11,13,15,17],getdataext:4,getdatas:4,getparamet:9,getresultdatafil:1,getscaleandoffset:4,gettransformfilesizeandspac:1,gettransformparameterfil:1,gfp:[],git:13,github:[3,13],give:[1,5],given:[1,2,3,4,5,6,17],globular:17,gnu:12,goal:17,grai:[7,10],granular:17,graphic:[16,17],grayscal:5,greater:17,greatli:[11,13,17],green:14,grei:5,greyreconstruct:[],greyreconstructionparamet:5,greyscal:5,group1:[2,17],group2:[2,17],group:[2,17],guassian:6,h5file:4,h5py:[4,13],half_template_25_right:17,haloperidol:17,hammond:4,handl:[4,5,9,10,14,17],harbor:12,hard:13,hat:17,have:[1,2,12,13,17],haven:13,hdf5:4,head:9,header:[4,9,14,17],heat:[],heatmap:17,help:[11,17],hemispher:[7,17],here:[1,4,11,13,14,17],hidden:14,hierarchi:17,high:[14,17],higher:[5,17],highest:17,highlight:14,hippocamp:14,hire:11,histolog:[],hmax:[5,7,11,17],hmaxtransform:5,hochberg:3,hold:2,holder:4,home:[2,5,8,13,17],hood:16,hope:12,horizont:11,host:[8,13],hostnam:13,hour:[9,17],how:[2,11,17],howev:[12,13,14,17],html:[3,4],http:[3,4,13,14],hypothesi:[3,17],iamg:5,ideal:17,ident:17,identifi:[1,5],idisco:[],ieee:5,ignor:17,iid:2,ilasstik:[],ilast:7,ilastik:[5,7,8,11,13,14,17],ilastikclassif:[],ilastikparamet:7,ilastikpath:[8,13],illastik:5,illumin:[],illuminationcorrect:[],illuminationsc:5,illustr:[],imag:[],image:[],imageanalysi:11,imagej:[1,4,11,14,17],imageprocess:[],imageprocessingmethod:17,imageprocessingparamet:17,imagestatist:[],imari:[],img:[1,4,5,6],imglabel:5,imgmax:5,immedi:[12,14],immunolabel:[12,14],immunostain:11,implement:[4,6],implment:4,improv:[14,17],includ:[5,6,8,11,14,17],increas:[3,7,11,13,17],independ:[3,17],index:[4,5],indic:[],indicat:[],individu:[2,4,5,13,14,17],infer:4,info:[1,2,3,4,5,6,9,14,17],infomr:[],inform:[],infront:1,inherit:2,initi:[1,2,5,11],initializeelastix:1,initializeilastik:[],inject:17,inner:6,inp:4,input:[9,13,17],insert:4,insid:17,inspect:[5,11],instal:[],instanc:[4,13,17],instead:[15,17],instens:5,institut:[5,12],instruct:13,int16:5,int32:[4,17],int64:17,intact:[],intefac:5,integ:[4,5,17],integr:[4,5,6,14,17],intens:[],intensities1:2,intensities2:2,intensitit:[],intensitygroup:[2,17],intensityrow:2,intensti:5,inter:3,interact:14,interfac:[1,4,5,14,16,17],intermedi:[11,17],intern:[4,8,14],interp1d:3,interpol:[1,3],interpret:[],intrins:1,introduc:11,introduct:[],invari:5,invers:[1,10,11],inverseorient:1,inversli:1,invert:[1,7,10],ipdirect:3,isbn:5,isdatafil:4,isfil:4,isfileexpress:4,isi:[13,14],isiniti:5,isol:[],isotrop:2,ispointfil:4,item:16,iter:4,itself:17,jet:10,join:[1,4,5,9,11,17],joinparamet:9,joinpoint:5,joinstatist:5,just:17,kagalaska:13,kamentski:5,kannan:12,keep:[5,17],kei:[2,5,6,9,14],kept:17,kernel:[5,6,14],keyvaluepair:4,kind:3,kirst:[4,5,6,12],know:[15,17],label:[],labelatcollaps:2,labelatlevel:[2,17],labelcolormap:10,labeledimag:[2,17],labelid:17,labelimag:4,labelinfo:2,labelpoint:2,labelrecord:2,labelsourc:10,labeltoacronym:2,labeltocolor:2,labeltonam:[2,17],labl:5,lablel:5,laboratori:12,laplacian:6,laptop:13,larg:[1,4,5,11,12,13,14,15,16],larger:[5,11,17],last:17,later:[13,17],latest:13,lavis:17,layer:[11,17],lbl:17,ld_library_path:1,lead:[],learn:[13,14,17],least:[4,13],lee:5,left:17,len:17,length:[1,4],let:17,letter:5,level:[1,2,4,5,17],lib:1,libboost:[],libhdf5:[],librari:[1,4,13,17],licens:[],lie:11,light:[],lightsheet:5,lightsheet_flatfield_correct:5,like:[4,17],limit:17,line:[5,9,14],linear:[1,3,6,7],linearfilt:[],linearli:3,link:17,linux:[1,8],list:[2,3,4,5,9,14,15,17],load:[4,11,17],local:[1,5,8,11,13,14,17],localmax:5,localmaxima:5,localmaxs:5,locat:[1,2,11,17],log:6,logical_or:17,look:17,lookup:17,loos:17,lot:[14,17],low:[3,14,17],lower:[11,17],lowmemori:3,lut:17,m_0:3,maarten:4,machin:[13,17],maco:[],magnif:14,mahota:13,mai:[1,11,13,17],main:[0,1,4,5,11,14,17],mainli:17,major:14,make:[2,4,5,17],makecolorannot:2,makecolorpalett:2,manag:17,mandatori:17,mani:[4,12,14,17],manipul:14,map:[],mark:2,marker:12,mask:5,mass:17,massachusett:5,match:[1,4,17],math:1,matlab:[],matplotlib:[1,11,13],matter:14,max:[2,4,5,7,11,14,17],maxim:[2,5,7],maxima:[],maximadetect:[],maximalnumb:10,maximum:5,maxlabel:[5,11],maxtil:10,mayavi:[],mean:[2,5,6,7,11,14,17],measur:[4,5,11,17],memmap:16,memori:[3,5,6,11,17],meta:4,meta_dict:4,metadata:17,method:[],mexican:17,mhd:[1,4,14,17],mice:17,microscop:[4,5,12,17],microscopi:[0,5,12,14],might:[2,5,11,17],miht:[],min:[4,5],mind:[],minial:5,minim:[1,5,7],minimum:[5,17],minu:1,minut:[9,17],mirror:17,mise:3,miss:17,mod:6,mode:[1,4,5,6,11,17],model:[],modern:12,modifi:[3,4,5,6],modul:[],modular:[5,14],moment:4,monitor:17,more:[3,5,11,12,13,14,17],moreov:12,morpholog:[5,6,11,14,17],most:[5,11,13,14,17],mount:14,mous:[2,5,11,12,14,17],move:[1,4,17],movement:17,movingimag:[1,7],mpl:11,mtllab:[2,5,8,13,17],much:[13,17],multi:4,multicomp:3,multipag:15,multipl:[1,3,4,9,13,17],multiplecomparisoncorrect:[],multipletest:3,must:[4,5],mvplapo:17,name:[1,2,4,5,6,17],nat:14,natsort:13,ndarrai:3,nearest:1,nearli:[4,14],necessari:[1,13,17],necessit:17,need:[1,2,4,5,13,17],neg:[1,2,17],negativetrend:2,net:[3,4],neuron:[14,17],nevertheless:17,next:[4,14,17],nfusi:3,nice:2,nico:13,nicola:12,nicolasreni:[],nld:13,nois:[11,14],non:[1,5,7,17],none:[1,2,3,4,5,6,7,9,10,11,13,17],nonrigid:14,noprocess:5,nor:17,notat:17,note:[1,2,3,4,5,8,11,13,17],notic:17,now:[11,17],npy:[],nrdh:4,nrrd0005:4,nrrd:[],nrrderror:4,nrrdfile:4,nstack:5,nuclear:[11,12,14,17],nuclei:[5,17],nucleu:17,numbeer:1,number:[1,2,3,4,5,7,9,11,14,17],numer:4,numpi:[2,3,4,13,14,17],object:[1,2,3,4,5,6,9,10,11,12,13,14,17],observ:3,obtain:[0,4,5,12,14,17],obviou:17,occur:9,odd:6,off:17,offer:17,offset:[2,4,5,6],often:[11,17],olympu:17,onc:[1,11,17],onli:[1,4,5,11,13,14,17],onlin:[],onot:5,onto:[0,1,14,17],open:[1,4,5,6,7,11,12,13,14,17],opencv:13,openfil:4,oper:[],opject:4,oposit:[],opposit:17,optic:14,optim:[4,5,6,7,13,14,17],optimizait:7,option:[2,3,4,5,11,13,14,17],order:[1,3,4,5,17],ordereddict:2,org:[12,13,14],organ:[9,12,14],organis:14,orientationtopermu:1,orientdatas:1,orientdatasizeinvers:1,orientresolut:1,orientresolutioninvers:1,origin:[1,4,5,6,11,17],originalresolut:17,ostenrefara_v2_lowerhalf:7,other:[4,5,7,12,14,17],otherwis:[1,17],our:[11,12,17],out:[1,2,5,6,9,17],outer:6,output:[1,2,4,7,9,13,17],outsid:[3,17],outward:17,over:17,overlai:[10,11,17],overlap:[5,7,17],overlaylabel:10,overlaypoint:[10,17],overrid:4,overview:[],overwritten:4,own:[5,12],page:[],paint:17,pair:[4,9],pal:2,par0000affin:17,par0000bsplin:17,paral:5,parallel:[],parallelprocessstack:5,paralllel:5,paramet:[],parameter_file_templ:17,parametertool:[],paramt:7,parent:[2,17],pars:[1,4,11],parse_nrrdvector:4,parse_optional_nrrdvector:4,parseelastixoutputpoint:1,part:[2,5,14,17],particular:[1,2,3,11,14],pass:[4,17],path:[1,4,5,8,11,13,17],pathreg:17,pattern:[4,5,14],patttern:4,pcutoff:[2,17],pdf:11,peak:[],per:[1,17],percentil:2,perform:[1,2,5,6,11,12,13,17],permuat:1,permut:1,pharmaco:17,physic:1,pi0:3,pickl:2,pip:13,pipelin:[5,16],piplin:5,pixel:[1,2,4,5,7,11,17],place:[4,5],placehold:4,plain:2,plan:[],plane:[11,14,17],platform:4,pleas:17,plot:[],plotoverlaylabel:[10,11],plotoverlaypoint:[10,11],plottil:[10,11],plt:[11,17],plugin:17,pmax:2,png:11,point:[],pointcolor:[10,17],pointcounts1:2,pointcounts2:2,pointfileextens:4,pointfileextensiontotyp:4,pointfilenametomodul:4,pointfilenametotyp:4,pointfiletyp:4,pointgroup:2,points1:2,points2:[2,4],points_voxel:17,pointshiftfromrang:4,pointsink:1,pointsourc:[1,10,17],pointstocoordin:4,pointstocoordinatesandproperti:4,pointstocoordinatesandpropertiesfilenam:4,pointstoproperti:4,pointstorang:4,polat:3,polynomi:5,porcess:5,posit:[1,2,3,5,17],positivetrend:2,possibl:[4,11,14,17],postfix:4,potenti:[1,5,17],power:[11,17],pre:[4,17],predefin:5,prefix:9,premut:1,prep:14,prepar:17,present:[6,17],press:[],prevent:17,previous:17,primari:[1,12],principl:5,print:[1,3,4,5,6,9,11],printelapsedtim:9,printset:1,printsubstackinfo:5,probabl:5,proce:17,proces:5,process:[],process_templ:17,processig:5,processingdirectori:1,processmethod:[5,17],processor:17,processstackparamet:7,processwrit:[],profil:[5,17],program:[],progress:[1,5,6,11],project:[5,13,17],propabl:5,properli:5,properti:[4,14],propertiespostfix:4,proport:3,protein:[12,14],protocol:[4,14],provid:[1,2,4,5,6,9,10,11,14,17],psign:[2,17],psycho:17,pull:3,pval:[2,17],pvalscolor:17,pvalu:[3,17],pyopengl:[],pyplot:11,pyqt4:13,python:[0,3,4,12,13,17],qimage2ndarrai:[],quantif:14,quantifi:[0,14],question:2,qval:17,qvalu:3,radial:5,radiu:[2,4,6],ram:[13,17],rand:4,random:4,rang:[2,4,5,10,11,12,14,17],rapid:14,raster:[4,14],rate:[14,17],ratio:3,ration:11,raw:[],read:[0,4,11,14,17],readdata:[4,5,11,17],readdatafil:4,readdatagroup:[2,17],readdataset:4,reader:4,readfilelist:4,readhead:4,readpoint:[4,17],readpointsgroup:2,real:4,realli:17,recognit:5,recommend:[11,13,14,17],reconstruct:[5,14],rectangular:[2,7],red:[14,17],redesign:5,reduc:[4,11,17],reduct:4,redund:5,refer:[],referenec:[],refin:5,reg:4,region:[],regist:[1,14],registr:[0,1,12,14,17],registrationalignmentparamet:17,registrationresamplingparamet:17,registrationresamplingpointparamet:17,regoin:[],regular:4,rejoin:5,rel:[1,4,14],relat:17,relev:[14,17],reli:[13,17],reliabl:17,remind:17,remov:[],removebackground:[5,11],removebackgroundparamet:[5,7,17],removenan:2,render:11,renier2014:14,renier2015:14,renier:[12,14],reorgan:16,reorient:[0,1,14,17],replac:[1,17],report:14,repres:[4,14],represen:1,requir:[],resampl:[],resampledata:[1,17],resampledatainvers:1,resampledatas:1,resamplepoint:[1,17],resamplepointsinvers:[1,17],resamplexi:1,resamplingparamet:[7,17],rescal:[1,7],rescalefactorilastik:[],rescalesizeandspac:1,rescaletoilastik:[],reset:9,reslut:[],resmapl:1,resolut:[1,2,4,7,14,17],resolutionaffinecfosautofluo:[],resolutionsink:[1,7],resolutionsourc:[1,7],respect:[2,14],restrict:[4,17],result:[1,2,4,5,6,7,9,10,11,15,17],resultdir:1,resultdirectori:[1,17],retain:17,returncount:[2,17],returnid:[2,17],revers:[1,2,5],rewrit:4,rgb:[10,17],right:17,rigid:14,robinson:5,robust:14,rockefel:[4,5,6,12],root:[1,8],rostral:17,rotat:17,routin:[1,4,5,6,8,10,11],row:[2,14,17],run:[],saggit:1,sagitt:17,sagittaltocoronaldata:[1,17],salin:17,saline_cortex:17,saline_mean:17,saline_std:17,same:[2,3,6,14,17],sampl:[1,3,4,5,12,14,17],sample1:17,sample2:17,sample3:17,sample4:17,sample5:17,sample6:17,sample7:17,sample8:17,sandbox:3,save:[1,4,5,6,7,17],scale:[1,4,5,7,10,17],scan:[14,17],scienc:[],scientif:2,scikit:[3,5,13],scipi:[3,5,6,13],scratch:[],script:[],search:[5,17],second:[4,6,9,17],secondari:1,section:[10,14,17],see:[3,4,5,6,11,12,14,17],seed:5,seen:17,segment:[11,12,14,17],selem:5,self:2,sensibl:[],sensit:17,sensor:17,separ:[4,14],separatehead:4,sequenc:[1,3,10],sequenti:[5,15,17],sequentiallyprocessstack:5,sequnec:[],seri:17,sesiz:6,set:[],setelastixlibrarypath:1,setpathtransformparameterfil:1,sett:8,settransformfilesizeandspac:1,setup:[1,8],setyp:6,sever:[4,5,14,17],shape:[],sheet:[],shift:[4,5],shiftpoint:5,should:[1,5,12,13,17],show:[15,17],shown:[11,17],side:[3,17],sigma2:[6,7,17],sigma:[6,7,17],sign:[1,2,17],signal:[6,11,14,17],signific:[2,17],significantli:17,simpl:[4,9,14,17],simpli:[4,14],sinc:9,singl:[4,5,17],sink:[1,2,4,5,7,10,17],skimag:13,slf:2,slice:[1,4,5,17],small:[11,17],smaller:[2,5,17],smear:2,sneo:17,softwar:[8,11,13,14],soill:5,solut:17,solvent:14,some:[2,3,5,11,14,16],sometim:11,sort:[2,17],sought:1,sourc:[1,2,3,4,5,6,7,8,9,10,11,17],sourceforg:[3,4],space:[1,4,13,17],spatial:[1,4],speci:12,special:[4,6,8,11],specif:[],specifi:[1,4,5,11,17],spectrum:14,sped:6,speed:[5,6,14,17],speicif:[],sphere:[6,17],spheric:[2,7,17],spline:3,split:[4,5],splitfileexpress:4,spot:[4,5,7,17],spotdetect:[],spotdetectionparamet:7,spreadsheet:14,spring:12,spyder:13,ssd:13,stack:[],stackid:5,stackprocess:[],stackprocessingparamet:[7,17],stain:[5,14,17],stand:[],standard:[1,3,4,5,14,17],start:[5,9,13,17],startindex:4,stat:[3,11,17],statist:[],statisticaltest:[],statisticsfrom:5,statsmodel:3,std:[2,6,17],stdout:[1,5,6,9],step:[1,5,6,11,13,17],stich:15,still:4,stop:[9,17],storag:13,store:[1,4,14],storei:3,str:[1,2,3,4,5,6,8,9,10],string:[1,2,4,9],strong:17,structur:[],structureel:[],structureelement2d:6,structureelement3d:6,structureelementoffset:6,stuck:15,studi:12,sub:[],subdivis:17,subregion:11,subsequ:1,subset:[4,11,17],substack:[5,6,11],subtract:[],success:4,sucessfulli:[],sudo:13,suit:17,suitabl:4,sum:5,summari:[],support:[1,2,4,5,10,14,16],sure:[4,17],survei:17,swap:17,synthet:5,system:[13,14,17],systemat:5,tabl:[],tail:3,take:[1,5,6,12,17],taken:[5,17],target:[1,14],techniqu:[12,14],technolog:5,teem:4,tell:17,temporari:1,tempt:17,termin:13,test:[1,2,3,4,5,6,7,10,11,17],test_idisco_:5,testcompletedcumul:2,testcompletedcumulativesinspher:2,testcompletedinvertedcumul:2,testcramervonmises2sampl:3,text:[4,9,14],textur:17,than:[3,5,11,17],thei:[4,14,17],them:[4,11,13,17],theme:17,therfor:[],thi:[1,2,3,4,5,6,7,8,9,10,11,13,14,15,17],thing:17,third:[4,17],those:[5,11,16,17],three:14,threshold:[],thresholdpoint:[2,17],through:17,throughout:9,thu:5,tibshirani:3,tif:[],tiff:[4,15,17],tifffil:[4,13],tile:[],time:[4,5,9,11,13,17],timepoint:4,timer:[],tissu:[0,12,14],tmpfile:1,todatarang:4,todatas:4,todo:[2,4],togeth:[16,17],tolabelatcollaps:2,tolabelatcollapsemap:2,tolabelatlevel:2,tomultichanneldata:4,too:[11,17],tool:[],toolbox:[0,2,4,5,12,14],toolkit:14,top:[1,17],total:[3,5,11,17],toward:14,trace:16,train:5,trale:4,trane:[],transact:5,transform:[],transformdata:1,transformdirectori:[1,17],transformedcellsfil:17,transformfil:1,transformix:[1,17],transformixbinari:1,transformparameterfil:1,transformpoint:[1,17],transformpointstoimari:4,transfrom:5,transgen:[],translat:[],transpar:[10,14],transpos:17,treatment:17,trivial:5,ttestpointsinregion:[2,17],ttestvoxel:[2,17],tune:17,tupl:[1,2,4,5,6,10,17],tuplr:1,turn:[2,17],tutori:[],twice:17,two:[3,4,5,7,14,17],txt:[4,7,17],type:[],typic:[1,5,11,13,14],ubuntu:13,uin8:[],uint8:5,ultramicroscop:[14,17],umadevi:12,ummber:6,under:16,unequ:17,uniform:[2,6,14,17],uniqu:17,univers:[4,5,6,12],unnecessari:17,updat:13,upgrad:13,upper:17,usag:[],useabl:[5,16],useful:[],user:[5,12,13,14,16,17],usr:[1,8,13],usual:[1,11,14,17],util:[],valid:4,valu:[2,3,4,5,9,14,17],vari:17,variabl:[1,4,17],varianc:17,variat:[5,11,17],variou:[2,3,4,6,7,17],vebos:1,vector:[1,4,5],venkataraju:12,ventral:17,verbos:[1,3,5,6,7,9,11,17],veri:[4,11,14,15,16,17],version:[3,12,13],via:[1,3,5,10,11,14,17],video:14,view:[1,4,11,14,17],viewer:[4,14,17],vignet:[5,14,17],vigra:[],vincent:5,virtual:11,visibl:[11,17],visual:[],visula:2,volum:[],volumetr:[],von:3,vox:17,voxel:[],voxelizationfil:17,voxelizationparamet:7,voxelizations:7,voxelizeparamet:[2,17],voxelizepixel:2,vtk:[],wai:[1,5,9,11,14,17],want:17,warn:17,warp:17,warpabl:7,watersh:[5,11,14,15,17],webpag:[8,14],websit:13,weigh:17,weight:[2,5,17],weightsfromprecentil:2,well:17,were:[2,5,17],what:17,when:[1,4,5,11,14,17],where:[1,4,5,11,14,17],whether:17,which:[1,2,3,4,5,7,13,14,17],whole:[14,17],wide:[2,14],window:[4,13],wish:[13,17],within:17,without:[1,2,4],work:[1,4,5,13,17],workstat:[12,13,17],would:[4,17],write:[0,1,2,4,5,6,9,14,17],writedata:[4,17],writehead:4,writelut:2,writep:2,writeparamet:9,writepoint:[1,4,17],writer:4,writerawdata:4,writestr:9,writesubstack:5,writet:[4,17],written:[4,11,12,13,17],wrote:17,wrt:7,www:14,xlabel:11,xsize:5,xxxx:14,yet:[4,17],ylabel:11,york:[4,5,6],you:[4,13,17],your:[13,17],yourpath:13,z0000:17,zcenter:5,zcenterindic:5,zero:[2,5,17],zoom:[11,17],zsubstackcenterindic:5,zxxxx:14},titles:["ClearMap package","ClearMap.Alignment package","ClearMap.Analysis package","ClearMap.Analysis.Tools package","ClearMap.IO package","ClearMap.ImageProcessing package","ClearMap.ImageProcessing.Filter package","ClearMap.Parameter module","ClearMap.Settings module","ClearMap.Utils package","ClearMap.Visualization package","ClearMap Image Analysis Tools","ClearMap","Installation","Overview of ClearMap","Issues","Roadmap","Tutorial"],titleterms:{"function":12,"import":17,addit:12,additionn:13,align:[1,14,17],analysi:[2,3,11,14,17],applic:12,author:12,autom:17,background:[11,17],backgroundremov:5,cell:[11,17],celldetect:5,cellsizedetect:5,clear:14,clearmap:[0,1,2,3,4,5,6,7,8,9,10,11,12,14],config:17,configur:13,consult:12,content:[],convolut:6,coordin:17,correct:17,csv:4,data:[4,17],design:12,detect:[11,17],developo:16,differ:17,document:12,dogfilt:6,elastix:1,element:6,exampl:[],extend:17,extern:5,extrapol:3,file:17,filelist:4,filter:[6,11,17],filterkernel:6,futur:16,gaussian:17,gener:17,greyreconstruct:5,heat:17,idisco:14,ilastikclassif:5,illumin:17,illuminationcorrect:5,imag:[1,4,5,11,14],imageprocess:[5,6],imagestatist:5,imari:4,indic:[],inform:13,instal:13,intens:17,introduct:[],isol:17,issu:15,label:2,lead:12,licens:12,light:[],linearfilt:6,map:17,maxima:[11,17],maximadetect:5,method:14,modul:[1,2,3,4,5,6,7,8,9,10,17],multiplecomparisoncorrect:3,npy:4,nrrd:4,oper:17,orient:1,overview:14,packag:[0,1,2,3,4,5,6,9,10],parallel:5,paramet:[7,17],parametertool:9,peak:17,plan:16,plot:[10,11],point:[4,17],process:[5,14],processwrit:9,program:12,quickstart:[],raw:4,refer:14,region:17,remov:11,represent:1,requir:13,resampl:[1,17],roadmap:16,run:17,script:12,set:8,shape:11,sheet:[],size:1,specif:12,spotdetect:5,stack:5,stackprocess:5,statist:[2,11,17],statisticaltest:3,structur:6,structureel:6,sub:5,subpackag:[0,2,5],subtract:17,summari:[1,4],tabl:17,threshold:17,tif:4,tile:11,timer:9,tool:[3,11,17],transform:17,tutori:17,type:6,util:9,visual:[10,11],volum:17,volumetr:5,voxel:[2,17],vtk:4}})