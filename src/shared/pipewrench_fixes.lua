local function __PW__ClassExtends(target, base)

    target.____super = base;

    local staticMetatable = setmetatable({ __index = base }, base);
    setmetatable(target, staticMetatable);

    local baseMetatable = getmetatable(base);
    if baseMetatable then
        if type(baseMetatable.__index) == "function" then
            staticMetatable.__index = baseMetatable.__index;
        end
        if type(baseMetatable.__newindex) == "function" then
            staticMetatable.__newindex = baseMetatable.__newindex;
        end
    end

    ------------------------------------

    -- PZ Class-Structure reroute.
    if base.prototype == nil then
        base.prototype = base;
    end

    -- PZ 'Type' field reroute. 
    target.Type = target.prototype.name;
    target.prototype.Type = target.Type;

    -- PZ Constructor reroute.
    if base.prototype.new then
        base.prototype.____constructor = base.prototype.new;
        target.prototype.____constructor = base.prototype.new;
    end

    ------------------------------------

    setmetatable(target.prototype, base.prototype);

    if type(base.prototype.__index) == "function" then
        target.prototype.__index = base.prototype.__index;
    end

    if type(base.prototype.__newindex) == "function" then
        target.prototype.__newindex = base.prototype.__newindex;
    end

    if type(base.prototype.__tostring) == "function" then
        target.prototype.__tostring = base.prototype.__tostring;
    end
end

return {
    __PW__ClassExtends = __PW__ClassExtends
}
