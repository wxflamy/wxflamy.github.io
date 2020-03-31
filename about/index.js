
const cone = vtk.Filters.Sources.vtkConeSource.newInstance();
const mapper = vtk.Rendering.Core.vtkMapper.newInstance();
const actor = vtk.Rendering.Core.vtkActor.newInstance();
mapper.setInputConnection(cone.getOutputPort());
actor.setMapper(mapper);

const fullRender = vtk.Rendering.Misc.vtkFullScreenRenderWindow.newInstance();
const render = fullRender.getRenderer();
render.addActor(actor);
render.resetCamera();

const renderWindow = fullRender.getRenderWindow();
renderWindow.render();