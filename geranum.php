<?php

  $contador=0;

  $nums=array();

  do      {

            $num = rand(1,100);
          if(in_array($num,$nums)==false){
               $contador++;

               $nums[$contador]=$num;

         }

  }

         while($contador < 25);

          sort ($nums, SORT_NUMERIC);
          
            echo json_encode($nums);
?>
