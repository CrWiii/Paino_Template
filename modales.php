<!-- Ventana emergente confirmación de reserva  -->

<!-- Ventana emergente anular reserva -->
<div id="modalAnula" class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="exampleModalLabel">Anular Cita</h4>
            </div>
            <div class="modal-body" style="text-align:center">
                <input type="text" id="COD_CODE" class="form-control" placeholder="Ingrese el Código" />
            </div>
            <div class="modal-footer" style="text-align:center">
                <button type="button" class="btn btn-success" onClick="anularCitaProceso();">Anular</button>
            </div>      
        </div>
    </div>
</div>

<div class="modal fade" id="identidad_coorporativa" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Identidad Corporativa</h4>
            </div>
            <div class="modal-body">
                <ul>
                    <li>Identidad Digital</li>
                    <li>Identidad Corporativa</li>
                    <li>Creación de logotipo</li>
                    <li>Papelería</li>
                    <li>Packaging</li>
                </ul>
            </div>
            <div class="modal-footer">                
                <button type="button" class="btn btn-black" data-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="gestion_diseño" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">GESTIÓN & DISEÑO</h4>
            </div>
            <div class="modal-body">
                <ul>
                    <li>Administración de Contenido</li>
                    <li>Monitoreo y análisis</li>
                    <li>Desarrollo de Campañas</li>
                    <li>Segmentación de Publicidad</li>                    
                </ul>
            </div>
            <div class="modal-footer">                
                <button type="button" class="btn btn-black" data-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>


<div class="modal fade" id="estrategia_marketing" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">MARKETING</h4>
            </div>
            <div class="modal-body">
                <ul>
                    <li>Estrategias de Marketing según los objetivos de tu empresa</li>
                    <li>Análisis y Reporte empresarial</li>
                    <li>Desarrollo de Campañas On-Line / Off-Line</li>
                    <li>Desarrollo de Campañas ATL / BTL</li>                    
                </ul>
            </div>
            <div class="modal-footer">                
                <button type="button" class="btn btn-black" data-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>