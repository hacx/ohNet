#include <OpenHome/Net/C/CpDeviceDv.h>
#include "../Device/DviDeviceC.h"
#include <OpenHome/Net/Core/DvDevice.h>
#include <OpenHome/Net/Private/CpiDeviceDv.h>

using namespace OpenHome;
using namespace OpenHome::Net;

CpDeviceC STDCALL CpDeviceDvCreate(DvDeviceC aDevice)
{
    DvDevice* dv = DviDeviceC::DeviceFromHandle(aDevice);
    CpiDeviceDv* cp = new CpiDeviceDv(dv->Device());
    return (CpDeviceC)(&cp->Device());
}
