ISBaseObject = {};

ISBaseObject.Type = "ISBaseObject";

function ISBaseObject:initialise() end

--- @param type string
--- 
--- @return table result The class object.
function ISBaseObject:derive(type)
    local target = { prototype = {} };
    setmetatable(target.prototype, self.prototype);
    target.prototype.__index = target.prototype;
    target.prototype.Type = type;
    target.Type = type;
    return target;
end

--- @return table result The base class object.
function ISBaseObject:new()
    local o = { prototype = {} };
    setmetatable(o.prototype, self.prototype);
    o.prototype.__index = o.prototype;
    o.prototype.Type = "ISBaseObject";
    o.Type = "ISBaseObject";
    return o;
end
