# bubu
<mxfile host="app.diagrams.net" modified="2023-06-03T14:50:07.103Z" agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36" etag="p7oeXp3JDU0uqrXg_ys1" version="21.3.7" type="github">
  <diagram id="C5RBs43oDa-KdzZeNtuy" name="Page-1">
    <mxGraphModel dx="1363" dy="880" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="827" pageHeight="1169" math="0" shadow="0">
      <root>
        <mxCell id="WIyWlLk6GJQsqaUBKTNV-0" />
        <mxCell id="WIyWlLk6GJQsqaUBKTNV-1" parent="WIyWlLk6GJQsqaUBKTNV-0" />
        <mxCell id="WIyWlLk6GJQsqaUBKTNV-2" value="" style="rounded=0;html=1;jettySize=auto;orthogonalLoop=1;fontSize=11;endArrow=block;endFill=0;endSize=8;strokeWidth=1;shadow=0;labelBackgroundColor=none;edgeStyle=orthogonalEdgeStyle;" parent="WIyWlLk6GJQsqaUBKTNV-1" source="WIyWlLk6GJQsqaUBKTNV-3" edge="1">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="470" y="280" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="WIyWlLk6GJQsqaUBKTNV-3" value="讀取頁面" style="rounded=1;whiteSpace=wrap;html=1;fontSize=12;glass=0;strokeWidth=1;shadow=0;" parent="WIyWlLk6GJQsqaUBKTNV-1" vertex="1">
          <mxGeometry x="410" y="190" width="120" height="40" as="geometry" />
        </mxCell>
        <mxCell id="WIyWlLk6GJQsqaUBKTNV-5" value="No" style="edgeStyle=orthogonalEdgeStyle;rounded=0;html=1;jettySize=auto;orthogonalLoop=1;fontSize=11;endArrow=block;endFill=0;endSize=8;strokeWidth=1;shadow=0;labelBackgroundColor=none;" parent="WIyWlLk6GJQsqaUBKTNV-1" source="WIyWlLk6GJQsqaUBKTNV-6" target="WIyWlLk6GJQsqaUBKTNV-7" edge="1">
          <mxGeometry y="10" relative="1" as="geometry">
            <mxPoint as="offset" />
            <Array as="points">
              <mxPoint x="545" y="410" />
              <mxPoint x="545" y="500" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-7" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;endFill=1;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1" source="WIyWlLk6GJQsqaUBKTNV-6">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="470" y="520" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="WIyWlLk6GJQsqaUBKTNV-6" value="讀取完成？" style="rhombus;whiteSpace=wrap;html=1;shadow=0;fontFamily=Helvetica;fontSize=12;align=center;strokeWidth=1;spacing=6;spacingTop=-4;" parent="WIyWlLk6GJQsqaUBKTNV-1" vertex="1">
          <mxGeometry x="420" y="370" width="100" height="80" as="geometry" />
        </mxCell>
        <mxCell id="WIyWlLk6GJQsqaUBKTNV-7" value="禁止發送請求" style="rounded=1;whiteSpace=wrap;html=1;fontSize=12;glass=0;strokeWidth=1;shadow=0;" parent="WIyWlLk6GJQsqaUBKTNV-1" vertex="1">
          <mxGeometry x="570" y="480" width="120" height="40" as="geometry" />
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-11" value="發送 POST 請求" style="rounded=1;whiteSpace=wrap;html=1;fontSize=12;glass=0;strokeWidth=1;shadow=0;" vertex="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry x="410" y="520" width="120" height="40" as="geometry" />
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-14" value="驗證密碼" style="rhombus;whiteSpace=wrap;html=1;shadow=0;fontFamily=Helvetica;fontSize=12;align=center;strokeWidth=1;spacing=6;spacingTop=-4;" vertex="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry x="420" y="620" width="100" height="80" as="geometry" />
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-17" value="No" style="edgeStyle=orthogonalEdgeStyle;rounded=0;html=1;jettySize=auto;orthogonalLoop=1;fontSize=11;endArrow=block;endFill=0;endSize=8;strokeWidth=1;shadow=0;labelBackgroundColor=none;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry y="10" relative="1" as="geometry">
            <mxPoint as="offset" />
            <mxPoint x="520" y="659.77" as="sourcePoint" />
            <mxPoint x="570" y="659.77" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-18" value="返回 No Permission" style="rounded=1;whiteSpace=wrap;html=1;fontSize=12;glass=0;strokeWidth=1;shadow=0;" vertex="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry x="570" y="640" width="120" height="40" as="geometry" />
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-19" value="" style="endArrow=classic;html=1;rounded=0;exitX=0.5;exitY=1;exitDx=0;exitDy=0;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1" source="BZOJxxNmsMMyX8Lu05Uh-11">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="419.23" y="610" as="sourcePoint" />
            <mxPoint x="470" y="620" as="targetPoint" />
            <Array as="points" />
          </mxGeometry>
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-53" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1" source="BZOJxxNmsMMyX8Lu05Uh-20" target="BZOJxxNmsMMyX8Lu05Uh-27">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-20" value="後端執行" style="rounded=1;whiteSpace=wrap;html=1;fontSize=12;glass=0;strokeWidth=1;shadow=0;" vertex="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry x="240" y="640" width="120" height="40" as="geometry" />
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-23" value="" style="endArrow=classic;html=1;rounded=0;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="299.72999999999996" y="590" as="sourcePoint" />
            <mxPoint x="300.15" y="560" as="targetPoint" />
            <Array as="points">
              <mxPoint x="300.15" y="590" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-25" value="" style="endArrow=classic;html=1;rounded=0;exitX=0.5;exitY=1;exitDx=0;exitDy=0;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1" source="BZOJxxNmsMMyX8Lu05Uh-20">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="299.69" y="690" as="sourcePoint" />
            <mxPoint x="300.11" y="720" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-26" value="發送 Line Notify" style="rounded=1;whiteSpace=wrap;html=1;fontSize=12;glass=0;strokeWidth=1;shadow=0;" vertex="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry x="240" y="720" width="120" height="40" as="geometry" />
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-27" value="Google Sheet 紀錄" style="rounded=1;whiteSpace=wrap;html=1;fontSize=12;glass=0;strokeWidth=1;shadow=0;" vertex="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry x="240" y="560" width="120" height="40" as="geometry" />
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-29" value="每小時檢測時距" style="rounded=1;whiteSpace=wrap;html=1;fontSize=12;glass=0;strokeWidth=1;shadow=0;" vertex="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry x="240" y="420" width="120" height="40" as="geometry" />
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-31" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;endFill=1;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="299.73" y="489.97" as="sourcePoint" />
            <mxPoint x="300.13" y="459.97" as="targetPoint" />
            <Array as="points">
              <mxPoint x="300.13" y="499.97" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-34" value="超時餵食？" style="rhombus;whiteSpace=wrap;html=1;shadow=0;fontFamily=Helvetica;fontSize=12;align=center;strokeWidth=1;spacing=6;spacingTop=-4;" vertex="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry x="250" y="310" width="100" height="80" as="geometry" />
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-35" value="No" style="edgeStyle=orthogonalEdgeStyle;rounded=0;html=1;jettySize=auto;orthogonalLoop=1;fontSize=11;endArrow=block;endFill=0;endSize=8;strokeWidth=1;shadow=0;labelBackgroundColor=none;entryX=1;entryY=0.5;entryDx=0;entryDy=0;exitX=1;exitY=0.5;exitDx=0;exitDy=0;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1" source="BZOJxxNmsMMyX8Lu05Uh-34" target="BZOJxxNmsMMyX8Lu05Uh-29">
          <mxGeometry x="-0.2" y="10" relative="1" as="geometry">
            <mxPoint as="offset" />
            <mxPoint x="240" y="320" as="sourcePoint" />
            <mxPoint x="300" y="280" as="targetPoint" />
            <Array as="points">
              <mxPoint x="380" y="350" />
              <mxPoint x="380" y="440" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-37" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;endFill=1;exitX=0;exitY=0.5;exitDx=0;exitDy=0;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1" source="BZOJxxNmsMMyX8Lu05Uh-34">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="210" y="350" as="sourcePoint" />
            <mxPoint x="210" y="350" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-38" value="Line Notify 通知" style="rounded=1;whiteSpace=wrap;html=1;fontSize=12;glass=0;strokeWidth=1;shadow=0;" vertex="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry x="90" y="330" width="120" height="40" as="geometry" />
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-43" value="LINE發送特定指令" style="rounded=1;whiteSpace=wrap;html=1;fontSize=12;glass=0;strokeWidth=1;shadow=0;" vertex="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry x="50" y="790" width="120" height="40" as="geometry" />
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-45" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;endFill=1;entryX=0;entryY=0.5;entryDx=0;entryDy=0;exitX=1;exitY=0.5;exitDx=0;exitDy=0;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1" source="BZOJxxNmsMMyX8Lu05Uh-43" target="BZOJxxNmsMMyX8Lu05Uh-62">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="129.64" y="830" as="sourcePoint" />
            <mxPoint x="129.64" y="870" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-46" value="發送 GET 請求" style="rounded=1;whiteSpace=wrap;html=1;fontSize=12;glass=0;strokeWidth=1;shadow=0;" vertex="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry x="410" y="280" width="120" height="40" as="geometry" />
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-47" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;endFill=1;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="469.78999999999996" y="350" as="sourcePoint" />
            <mxPoint x="470" y="370" as="targetPoint" />
            <Array as="points">
              <mxPoint x="470" y="320" />
              <mxPoint x="470" y="320" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-48" value="擷取呈現資料" style="rounded=1;whiteSpace=wrap;html=1;fontSize=12;glass=0;strokeWidth=1;shadow=0;" vertex="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry x="570" y="280" width="120" height="40" as="geometry" />
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-51" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;endFill=1;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="530" y="299.83" as="sourcePoint" />
            <mxPoint x="568" y="300" as="targetPoint" />
            <Array as="points">
              <mxPoint x="530" y="299" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-52" value="更新上次時間紀錄點" style="rounded=1;whiteSpace=wrap;html=1;fontSize=12;glass=0;strokeWidth=1;shadow=0;" vertex="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry x="240" y="490" width="120" height="40" as="geometry" />
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-54" value="" style="endArrow=classic;html=1;rounded=0;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="299.78" y="560" as="sourcePoint" />
            <mxPoint x="300.2" y="530" as="targetPoint" />
            <Array as="points">
              <mxPoint x="300.2" y="560" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-55" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;endFill=1;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="299.77" y="420" as="sourcePoint" />
            <mxPoint x="300.05" y="390" as="targetPoint" />
            <Array as="points">
              <mxPoint x="300.05" y="400" />
              <mxPoint x="300.05" y="400" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-57" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;endFill=1;entryX=0;entryY=0.5;entryDx=0;entryDy=0;exitX=0.5;exitY=1;exitDx=0;exitDy=0;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1" source="BZOJxxNmsMMyX8Lu05Uh-38" target="BZOJxxNmsMMyX8Lu05Uh-29">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="309.77" y="430" as="sourcePoint" />
            <mxPoint x="310.05" y="400" as="targetPoint" />
            <Array as="points">
              <mxPoint x="150" y="440" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-58" value="Line Messaging API" style="rounded=1;whiteSpace=wrap;html=1;fontSize=12;glass=0;strokeWidth=1;shadow=0;" vertex="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry x="430" y="790" width="120" height="40" as="geometry" />
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-60" value="回傳對應資料" style="rounded=1;whiteSpace=wrap;html=1;fontSize=12;glass=0;strokeWidth=1;shadow=0;" vertex="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry x="610" y="790" width="120" height="40" as="geometry" />
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-61" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;endFill=1;entryX=0;entryY=0.5;entryDx=0;entryDy=0;exitX=1;exitY=0.5;exitDx=0;exitDy=0;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1" source="BZOJxxNmsMMyX8Lu05Uh-62" target="BZOJxxNmsMMyX8Lu05Uh-58">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="129.76" y="910" as="sourcePoint" />
            <mxPoint x="129.76" y="950" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-62" value="發送 POST 請求" style="rounded=1;whiteSpace=wrap;html=1;fontSize=12;glass=0;strokeWidth=1;shadow=0;" vertex="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry x="240" y="790" width="120" height="40" as="geometry" />
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-64" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;endFill=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1" source="BZOJxxNmsMMyX8Lu05Uh-58" target="BZOJxxNmsMMyX8Lu05Uh-60">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="629.05" y="770" as="sourcePoint" />
            <mxPoint x="629.05" y="810" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-66" value="自動更新資料" style="rounded=1;whiteSpace=wrap;html=1;fontSize=12;glass=0;strokeWidth=1;shadow=0;" vertex="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry x="410" y="110" width="120" height="40" as="geometry" />
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-67" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;endFill=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;exitX=0.5;exitY=1;exitDx=0;exitDy=0;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1" source="BZOJxxNmsMMyX8Lu05Uh-66" target="WIyWlLk6GJQsqaUBKTNV-3">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="540" y="309.83" as="sourcePoint" />
            <mxPoint x="578" y="310" as="targetPoint" />
            <Array as="points" />
          </mxGeometry>
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-70" value="返回執行完成" style="rounded=1;whiteSpace=wrap;html=1;fontSize=12;glass=0;strokeWidth=1;shadow=0;" vertex="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry x="80" y="490" width="120" height="40" as="geometry" />
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-71" value="" style="endArrow=classic;html=1;rounded=0;exitX=0;exitY=0.5;exitDx=0;exitDy=0;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="240" y="510" as="sourcePoint" />
            <mxPoint x="200" y="510" as="targetPoint" />
            <Array as="points">
              <mxPoint x="240" y="510" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-72" value="" style="endArrow=classic;html=1;rounded=0;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="139.74" y="530" as="sourcePoint" />
            <mxPoint x="139.74" y="560" as="targetPoint" />
            <Array as="points">
              <mxPoint x="139.74" y="530" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-73" value="禁止發送請求" style="rounded=1;whiteSpace=wrap;html=1;fontSize=12;glass=0;strokeWidth=1;shadow=0;" vertex="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry x="80" y="560" width="120" height="40" as="geometry" />
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-77" value="" style="endArrow=classic;html=1;rounded=0;exitX=0;exitY=0.5;exitDx=0;exitDy=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1" source="BZOJxxNmsMMyX8Lu05Uh-14" target="BZOJxxNmsMMyX8Lu05Uh-20">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="400" y="660" as="sourcePoint" />
            <mxPoint x="400" y="690" as="targetPoint" />
            <Array as="points" />
          </mxGeometry>
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-78" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;endFill=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="629.74" y="320" as="sourcePoint" />
            <mxPoint x="630" y="360" as="targetPoint" />
            <Array as="points" />
          </mxGeometry>
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-79" value="完成/無需餵食" style="rhombus;whiteSpace=wrap;html=1;shadow=0;fontFamily=Helvetica;fontSize=12;align=center;strokeWidth=1;spacing=6;spacingTop=-4;" vertex="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry x="580" y="360" width="100" height="80" as="geometry" />
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-80" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;endFill=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="629.62" y="440" as="sourcePoint" />
            <mxPoint x="629.88" y="480" as="targetPoint" />
            <Array as="points" />
          </mxGeometry>
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-81" value="" style="endArrow=classic;html=1;rounded=0;exitX=0;exitY=0.5;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1" target="BZOJxxNmsMMyX8Lu05Uh-66">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="80" y="579.74" as="sourcePoint" />
            <mxPoint x="20" y="470" as="targetPoint" />
            <Array as="points">
              <mxPoint x="80" y="579.74" />
              <mxPoint x="40" y="580" />
              <mxPoint x="40" y="350" />
              <mxPoint x="40" y="90" />
              <mxPoint x="230" y="90" />
              <mxPoint x="470" y="90" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-83" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;endFill=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1" source="WIyWlLk6GJQsqaUBKTNV-7" target="BZOJxxNmsMMyX8Lu05Uh-66">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="639.62" y="450" as="sourcePoint" />
            <mxPoint x="560" y="180" as="targetPoint" />
            <Array as="points" />
          </mxGeometry>
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-85" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;endFill=1;exitX=0;exitY=0.5;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1" source="BZOJxxNmsMMyX8Lu05Uh-66" target="BZOJxxNmsMMyX8Lu05Uh-87">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="359.99999999999994" y="150" as="sourcePoint" />
            <mxPoint x="300" y="130" as="targetPoint" />
            <Array as="points">
              <mxPoint x="300" y="130" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-87" value="餵食時間" style="rhombus;whiteSpace=wrap;html=1;shadow=0;fontFamily=Helvetica;fontSize=12;align=center;strokeWidth=1;spacing=6;spacingTop=-4;" vertex="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry x="250" y="170" width="100" height="80" as="geometry" />
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-89" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;endFill=1;exitX=0;exitY=0.5;exitDx=0;exitDy=0;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="250" y="209.66000000000003" as="sourcePoint" />
            <mxPoint x="210" y="209.89" as="targetPoint" />
            <Array as="points">
              <mxPoint x="210" y="209.66000000000003" />
              <mxPoint x="210" y="209.66000000000003" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-90" value="發送 Email 提醒餵食" style="rounded=1;whiteSpace=wrap;html=1;fontSize=12;glass=0;strokeWidth=1;shadow=0;" vertex="1" parent="WIyWlLk6GJQsqaUBKTNV-1">
          <mxGeometry x="90" y="190" width="120" height="40" as="geometry" />
        </mxCell>
        <mxCell id="BZOJxxNmsMMyX8Lu05Uh-92" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;endFill=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" edge="1" parent="WIyWlLk6GJQsqaUBKTNV-1" source="BZOJxxNmsMMyX8Lu05Uh-87" target="BZOJxxNmsMMyX8Lu05Uh-34">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="260" y="219.66000000000003" as="sourcePoint" />
            <mxPoint x="220" y="219.89" as="targetPoint" />
            <Array as="points" />
          </mxGeometry>
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
